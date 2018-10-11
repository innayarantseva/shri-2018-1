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
        } else {
            cardData.remove()
        }

        if ( (data.events[i].source === 'Сенсор движения') && ('ontouchstart' in document.documentElement) ) {
            cardData.appendChild( document.importNode( controlTemplate.content, true ) );
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

