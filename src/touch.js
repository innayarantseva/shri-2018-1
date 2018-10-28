export function Touch( container ) {

    const imageNode = container.querySelector('.card__data-image');

    const log = (json) => {
        const str = JSON.stringify(json);
        console.log(Date.now(), str);
    };

    const currentPointerEvents = {},
          imageState = {
                left:           0,
                zoomMin:        300,
                zoom:           300,
                zoomMax:        848,
                brightnessMin: .2,
                brightness:     1,
                brightnessMax:  4,
            };

    let gesture = null;

    imageNode.addEventListener('dragstart', (event) => { event.preventDefault(); });


    imageNode.addEventListener('pointerdown', (event) => {

        console.log('pointerdown');

        currentPointerEvents[event.pointerId] = event;

        if ( !gesture ) {
            gesture = { type: 'move' };
        }
    });

    const getDistance = ( e1, e2 ) => {
        const { clientX: x1, clientY: y1 } = e1;
        const { clientX: x2, clientY: y2 } = e2;
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    const getAngle = ( e1, e2 ) => {
        const { clientX: x1, clientY: y1 } = e1;
        const { clientX: x2, clientY: y2 } = e2;
        const r = Math.atan2(x2 - x1, y2 - y1);
        return 360 - (180 + Math.round(r * 180 / Math.PI));
    };

    const feedbackNodes = {
        zoom: container.querySelector('.card__zoom-value'),
        brightness: container.querySelector('.card__brightness-value')
    };

    const setFeedback = (name, value) => {
        if ( feedbackNodes[name] ) {
            feedbackNodes[name].innerText = Math.round(value * 100) / 100;
        }
    };

    const setLeft = (dx) => {
        imageState.left += dx;
        imageNode.querySelector('.card__data-image-bg').style.backgroundPosition = `${imageState.left}px 50%`;
    };

    imageNode.addEventListener('pointermove', (event) => {

        const pointersCount = Object.keys(currentPointerEvents).length;

        if ( pointersCount === 0 || !gesture ) { return; }

        if ( pointersCount === 1 && gesture.type === 'move' ) {
            const previousEvent = currentPointerEvents[event.pointerId];
            const dx = event.clientX - previousEvent.clientX;

            setLeft(dx);

            currentPointerEvents[event.pointerId] = event;

        } else if ( pointersCount === 2 ) {

            currentPointerEvents[event.pointerId] = event;

            const events   = Object.values( currentPointerEvents ),
                  distance = getDistance( events[0], events[1] ),
                  angle    = getAngle(    events[0], events[1] );

            if ( !gesture.startDistance ) {
                gesture.startZoom       = imageState.zoom;
                gesture.startDistance   = distance;
                gesture.startBrightness = imageState.brightness;
                gesture.startAngle      = angle;
                gesture.angleDiff       = 0;
                gesture.type            = null;
            }

            const diff      = distance - gesture.startDistance;
            const angleDiff = angle    - gesture.startAngle;

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
                let zoom =  gesture.startZoom + diff;

                if (diff < 0) {
                    zoom = Math.max(zoom, zoomMin);
                } else {
                    zoom = Math.min(zoom, zoomMax);
                }

                imageState.zoom = zoom;
                imageNode.querySelector('.card__data-image-bg').style.height = `${zoom}px`;
                setFeedback('zoom', zoom);
            }

            if ( gesture.type === 'rotate' ) {

                const {brightnessMin, brightnessMax} = imageState;

                if (Math.abs(angleDiff - gesture.angleDiff) > 300) {
                    gesture.startBrightness = imageState.brightness;
                    gesture.startAngle = angle;
                    gesture.angleDiff = 0;
                    return;
                }

                gesture.angleDiff = angleDiff;
                let brightness = gesture.startBrightness + angleDiff / 50;

                if (angleDiff < 0) {
                    brightness = Math.max(brightness, brightnessMin);
                } else {
                    brightness = Math.min(brightness, brightnessMax);
                }

                imageState.brightness = brightness;
                imageNode.querySelector('.card__data-image-bg').style.filter = `brightness(${brightness})`;
                setFeedback('brightness', brightness);
            }
        }
    });

    const onPointerUp = (event) => {
        gesture = null;
        delete currentPointerEvents[event.pointerId];
    };

    imageNode.addEventListener('pointerup', onPointerUp);
    imageNode.addEventListener('pointercancel', onPointerUp);
    imageNode.addEventListener('pointerleave', onPointerUp);

}