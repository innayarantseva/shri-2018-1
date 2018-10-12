import styles from './index.css';

const data = require('./events.json');

console.log(data);


// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    let template        = document.querySelector( '.card-template' ),
        controlTemplate = document.querySelector( '.touch-controls' ),
        musicTemplate   = document.querySelector( '.music' ),
        climateTemplate = document.querySelector( '.climate' ),
        list            = document.querySelector( '.list' );

    for ( let i = 0; i < data.events.length; i++ ) {
        let clone = document.importNode( template.content, true );

        let card        = clone.querySelector( '.card'              ),
            icon        = clone.querySelector( '.card__icon'        ),
            title       = clone.querySelector( '.card__title'       ),
            source      = clone.querySelector( '.card__source'      ),
            time        = clone.querySelector( '.card__time'        ),
            description = clone.querySelector( '.card__description' ),
            content     = clone.querySelector( '.card__content'     ),
            cardData    = clone.querySelector( '.card__data' );

        icon.querySelector( 'img' ).setAttribute( 'src', `./assets/${data.events[i].icon}.svg` );
        title      .textContent = data.events[i].title;
        source     .textContent = data.events[i].source;
        time       .textContent = data.events[i].time;
        description.textContent = data.events[i].description;

        data.events[i].description
            ? description.textContent = data.events[i].description
            : description.remove();

        if ( data.events[i].data ) {
            if ( data.events[i].data.type === 'graph' ) {
                cardData.innerHTML = '<img src="./assets/Richdata.svg" />';
            }
            if ( data.events[i].data.image ) {
                cardData.innerHTML = `<img src="${ data.events[i].data.image }" />`;
                cardData.innerHTML = `<div class="card__data-image" style="background-image: url('${ data.events[i].data.image }')"> <div/>`;
            }
            if ( data.events[i].data.buttons ) {
                const buttonsHTML = data.events[i].data.buttons.map(
                    button => button === 'Да'
                                ? `<div class="card__button card__button-bright">${button}</div>`
                                : `<div class="card__button card__button-grey">${button}</div>`
                );
                cardData.innerHTML = `<div class="card__buttons">${buttonsHTML.join('')}</div>`;
            }
            if (
                data.events[i].data.albumcover &&
                data.events[i].data.artist     &&
                data.events[i].data.track      &&
                data.events[i].data.volume
            ) {
                let musicClone = document.importNode( musicTemplate.content, true );

                let albumcover = musicClone.querySelector( '.music__cover'        ),
                    track      = musicClone.querySelector( '.music__track-name'   ),
                    trackTime  = musicClone.querySelector( '.music__track-time'   ),
                    volume     = musicClone.querySelector( '.music__track-volume' );

                albumcover.setAttribute( 'src', data.events[i].data.albumcover );

                track    .textContent = `${data.events[i].data.artist} — ${data.events[i].data.track.name}`;
                trackTime.textContent = data.events[i].data.track.length;
                volume   .textContent = data.events[i].data.volume;

                cardData.appendChild( musicClone );
            }
            if ( data.events[i].data.temperature && data.events[i].data.humidity ) {
                let climateClone = document.importNode( climateTemplate.content, true );

                let temperature = climateClone.querySelector( '.climate__temperature-value' ),
                    humidity    = climateClone.querySelector( '.climate__humidity-value' );

                temperature.textContent = `${data.events[i].data.temperature} C`;
                humidity   .textContent = `${data.events[i].data.humidity}%`;

                cardData.appendChild( climateClone );
            }
        } else {
            cardData.remove();
        }

        if ( (data.events[i].source === 'Сенсор движения') && ('ontouchstart' in document.documentElement) ) {
            cardData.appendChild( document.importNode( controlTemplate.content, true ) );

            /*cardData.addEventListener('pointerdown', (event) => {
                console.log(event.type, event);
            });*/



            let currentGesture = null;
            const nodeState = { startPosition: 0 };

            cardData
                .querySelector('.card__data-image')
                .addEventListener('pointerdown', (event) => {
                    currentGesture = {
                        startX:        event.x,
                        prevX:         event.x,
                        startPosition: nodeState.startPosition,
                    };

                    console.log(event.type);
                });

            cardData
                .querySelector('.card__data-image')
                .addEventListener('pointermove', (event) => {
                    if (!currentGesture) { return; }

                    console.log(event.type);

                    const {startX, prevX, startPosition} = currentGesture;
                    const {x} = event;
                    const dx = x - startX;

                    cardData.querySelector('.card__data-image').style.backgroundPosition = `${startPosition + dx}px 50%`;
                    nodeState.startPosition = startPosition + dx;

                    currentGesture.prevX = x;
                });

            cardData.addEventListener('pointerup',     (e) => console.log(e.type));
            cardData.addEventListener('pointercancel', (e) => console.log(e.type));


            console.log('touch');
        } else {
            console.log('не touch');
        }

        card.classList.add( `card__size_${data.events[i].size}`, `card__type_${data.events[i].type}` );

        // оптимизировать: складывать в fragment, аппендить фрагмент
        list.appendChild(clone);
    }

} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
};
