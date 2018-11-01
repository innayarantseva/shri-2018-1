export function Touch( container: HTMLElement ) {

    // types declarations

    interface Gesture {
        type:             string;
        startDistance?:   number;
        startZoom?:       number;
        startBrightness?: number;
        startAngle?:      number;
        angleDiff?:       number;
    };

    interface ImageState {
        left:          number;
        zoomMin:       number;
        zoom:          number;
        zoomMax:       number;
        brightnessMin: number;
        brightness:    number;
        brightnessMax: number;
    };

    interface Event {
        clientX?:        number;
        clientY?:        number;
        pointerId?:      number;
        preventDefault?: Function;
    }






    const imageNode: HTMLElement = container.querySelector('.card__data-image');

    const log = ( json: any ) => {
        const str: string = JSON.stringify( json );
        console.log( Date.now(), str );
    };


    const currentPointerEvents: any = {}, // мы не знаем, какие ключи будут у объекта и сколько
          imageState: ImageState = {
                left:           0,
                zoomMin:        300,
                zoom:           300,
                zoomMax:        848,
                brightnessMin: .2,
                brightness:     1,
                brightnessMax:  4,
            };

    let gesture: null | Gesture = null;

    imageNode.addEventListener('dragstart', (event: Event) => { event.preventDefault(); });


    imageNode.addEventListener('pointerdown', (event: Event) => {

        console.log('pointerdown');

        currentPointerEvents[event.pointerId] = event;

        if ( !gesture ) {
            gesture = { type: 'move' };
        }
    });

    const getDistance = ( e1: Event, e2: Event ) => {
        const { clientX: x1, clientY: y1 } = e1;
        const { clientX: x2, clientY: y2 } = e2;
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    const getAngle = ( e1: Event, e2: Event ) => {
        const { clientX: x1, clientY: y1 } = e1;
        const { clientX: x2, clientY: y2 } = e2;
        const r: number = Math.atan2(x2 - x1, y2 - y1);
        return 360 - (180 + Math.round(r * 180 / Math.PI));
    };

    const feedbackNodes: { zoom: HTMLElement, brightness: HTMLElement } = {
        zoom:       container.querySelector('.card__zoom-value'),
        brightness: container.querySelector('.card__brightness-value')
    };

    const setFeedback = ( name: string, value: number ) => {
        if ( feedbackNodes[name] ) {
            feedbackNodes[name].innerText = Math.round(value * 100) / 100;
        }
    };

    const setLeft = ( dx: number ) => {
        imageState.left += dx;
        const imageBg = <HTMLElement>imageNode.querySelector('.card__data-image-bg');
        imageBg.style.backgroundPosition = `${imageState.left}px 50%`;
    };

    imageNode.addEventListener('pointermove', (event: Event) => {

        const pointersCount: number = Object.keys(currentPointerEvents).length;

        if ( pointersCount === 0 || !gesture ) { return; }

        if ( pointersCount === 1 && gesture.type === 'move' ) {
            const previousEvent: Event  = currentPointerEvents[event.pointerId];
            const dx:            number = event.clientX - previousEvent.clientX;

            setLeft(dx);

            currentPointerEvents[event.pointerId] = event;

        } else if ( pointersCount === 2 ) {

            currentPointerEvents[event.pointerId] = event;

            const events:   Array<Event> = Object.values( currentPointerEvents ),
                  distance: number       = getDistance( events[0], events[1] ),
                  angle:    number       = getAngle( events[0], events[1] );

            if ( !gesture.startDistance ) {
                gesture.startZoom       = imageState.zoom;
                gesture.startDistance   = distance;
                gesture.startBrightness = imageState.brightness;
                gesture.startAngle      = angle;
                gesture.angleDiff       = 0;
                gesture.type            = null;
            }

            const diff:      number = distance - gesture.startDistance;
            const angleDiff: number = angle    - gesture.startAngle;

            if( !gesture.type ) {

                console.log( distance, gesture.startDistance );

                if (Math.abs(diff) < 32 && Math.abs(angleDiff) < 8) {
                    log({'!': 'ignore', diff, angleDiff});
                    return;
                } else if (Math.abs(diff) > 32) {
                    log({'!': 'detected zoom', diff, angleDiff});
                    gesture.type = 'zoom';
                } else {
                    log({'!': 'detected rotate', diff, angleDiff});
                    gesture.type = 'rotate';
                }
            }

            if ( gesture.type === 'zoom' ) {
                const {zoomMin, zoomMax} = imageState;
                let zoom: number =  gesture.startZoom + diff;

                if (diff < 0) {
                    zoom = Math.max(zoom, zoomMin);
                } else {
                    zoom = Math.min(zoom, zoomMax);
                }

                imageState.zoom = zoom;
                const imageBg = <HTMLElement>imageNode.querySelector('.card__data-image-bg');
                imageBg.style.height = `${zoom}px`;
                setFeedback('zoom', zoom);
            }

            if ( gesture.type === 'rotate' ) {

                const { brightnessMin, brightnessMax } = imageState;

                if (Math.abs(angleDiff - gesture.angleDiff) > 300) {
                    gesture.startBrightness = imageState.brightness;
                    gesture.startAngle = angle;
                    gesture.angleDiff = 0;
                    return;
                }

                gesture.angleDiff = angleDiff;
                let brightness: number = gesture.startBrightness + angleDiff / 50;

                if (angleDiff < 0) {
                    brightness = Math.max(brightness, brightnessMin);
                } else {
                    brightness = Math.min(brightness, brightnessMax);
                }

                imageState.brightness = brightness;
                const imageBg = <HTMLElement>imageNode.querySelector('.card__data-image-bg');
                imageBg.style.filter = `brightness(${brightness})`;
                setFeedback('brightness', brightness);
            }
        }
    });

    const onPointerUp = ( event: Event ) => {
        gesture = null;
        delete currentPointerEvents[event.pointerId];
    };

    imageNode.addEventListener('pointerup', onPointerUp);
    imageNode.addEventListener('pointercancel', onPointerUp);
    imageNode.addEventListener('pointerleave', onPointerUp);

}