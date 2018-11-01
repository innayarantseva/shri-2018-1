import { Touch } from './touch'


interface Data     { events:  any  };
interface Template { content: Node };

// type DivProps = JSX.IntrinsicElements["div"];
interface Template extends HTMLElement {
  content: Node
}


const data: Data = require('../data/events.json');


if ('content' in document.createElement('template')) {

    let template:        Template = document.querySelector( '.card-template' ),
        controlTemplate: Template = document.querySelector( '.touch-controls' ),
        musicTemplate:   Template = document.querySelector( '.music' ),
        climateTemplate: Template = document.querySelector( '.climate' ),
        list:            HTMLElement = document.querySelector( '.list' );

    for ( let i: number = 0; i < data.events.length; i++ ) {
        let clone = <HTMLElement>document.importNode( template.content, true );

        let card:        HTMLElement = clone.querySelector( '.card'              ),
            icon:        HTMLElement = clone.querySelector( '.card__icon'        ),
            title:       HTMLElement = clone.querySelector( '.card__title'       ),
            source:      HTMLElement = clone.querySelector( '.card__source'      ),
            time:        HTMLElement = clone.querySelector( '.card__time'        ),
            description: HTMLElement = clone.querySelector( '.card__description' ),
            cardData:    HTMLElement = clone.querySelector( '.card__data' );

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
                cardData.innerHTML = `<div class="card__data-image" touch-action=“none”><div class="card__data-image-bg" style="background-image: url('${ data.events[i].data.image }')"></div><div/>`;
            }
            if ( data.events[i].data.buttons ) {
                const buttonsHTML: Array<string> = data.events[i].data.buttons.map(
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
                let musicClone = <HTMLElement>document.importNode( musicTemplate.content, true );

                let albumcover: HTMLElement = musicClone.querySelector( '.music__cover'        ),
                    track:      HTMLElement = musicClone.querySelector( '.music__track-name'   ),
                    trackTime:  HTMLElement = musicClone.querySelector( '.music__track-time'   ),
                    volume:     HTMLElement = musicClone.querySelector( '.music__track-volume' );

                albumcover.setAttribute( 'src', data.events[i].data.albumcover );

                track    .textContent = `${data.events[i].data.artist} — ${data.events[i].data.track.name}`;
                trackTime.textContent = data.events[i].data.track.length;
                volume   .textContent = data.events[i].data.volume;

                cardData.appendChild( musicClone );
            }
            if ( data.events[i].data.temperature && data.events[i].data.humidity ) {
                let climateClone = <HTMLElement>document.importNode( climateTemplate.content, true );

                let temperature: HTMLElement = climateClone.querySelector( '.climate__temperature-value' ),
                    humidity:    HTMLElement = climateClone.querySelector( '.climate__humidity-value' );

                temperature.textContent = `${data.events[i].data.temperature} C`;
                humidity   .textContent = `${data.events[i].data.humidity}%`;

                cardData.appendChild( climateClone );
            }
        } else {
            cardData.remove();
        }

        if ( (data.events[i].source === 'Сенсор движения') && ('ontouchstart' in document.documentElement) ) {
            cardData.appendChild( document.importNode( controlTemplate.content, true ) );

            // pointer events

            Touch( cardData );


            console.log('touch');
        } else {
            // Touch();
            console.log('не touch');
        }

        card.classList.add( `card__size_${data.events[i].size}`, `card__type_${data.events[i].type}` );

        // оптимизировать: складывать в fragment, аппендить фрагмент
        list.appendChild(clone);
    }

} else {
    // Find another way to add the rows to the table because
    // the HTML template element is not supported.
}
