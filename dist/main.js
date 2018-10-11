/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


const data = __webpack_require__(3);

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



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module) {

module.exports = {"events":[{"type":"info","title":"Еженедельный отчет по расходам ресурсов","source":"Сенсоры потребления","time":"19:00, Сегодня","description":"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.","icon":"stats","data":{"type":"graph","values":[{"electricity":[["1536883200",115],["1536969600",117],["1537056000",117.2],["1537142400",118],["1537228800",120],["1537315200",123],["1537401600",129]]},{"water":[["1536883200",40],["1536969600",40.2],["1537056000",40.5],["1537142400",41],["1537228800",41.4],["1537315200",41.9],["1537401600",42.6]]},{"gas":[["1536883200",13],["1536969600",13.2],["1537056000",13.5],["1537142400",13.7],["1537228800",14],["1537315200",14.2],["1537401600",14.5]]}]},"size":"l"},{"type":"info","title":"Дверь открыта","source":"Сенсор входной двери","time":"18:50, Сегодня","description":null,"icon":"key","size":"s"},{"type":"info","title":"Уборка закончена","source":"Пылесос","time":"18:45, Сегодня","description":null,"icon":"robot-cleaner","size":"s"},{"type":"info","title":"Новый пользователь","source":"Роутер","time":"18:45, Сегодня","description":null,"icon":"router","size":"s"},{"type":"info","title":"Изменен климатический режим","source":"Сенсор микроклимата","time":"18:30, Сегодня","description":"Установлен климатический режим «Фиджи»","icon":"thermal","size":"m","data":{"temperature":24,"humidity":80}},{"type":"critical","title":"Невозможно включить кондиционер","source":"Кондиционер","time":"18:21, Сегодня","description":"В комнате открыто окно, закройте его и повторите попытку","icon":"ac","size":"m"},{"type":"info","title":"Музыка включена","source":"Яндекс.Станция","time":"18:16, Сегодня","description":"Сейчас проигрывается:","icon":"music","size":"m","data":{"albumcover":"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000","artist":"Florence & The Machine","track":{"name":"Big God","length":"4:31"},"volume":80}},{"type":"info","title":"Заканчивается молоко","source":"Холодильник","time":"17:23, Сегодня","description":"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?","icon":"fridge","size":"m","data":{"buttons":["Да","Нет"]}},{"type":"info","title":"Зарядка завершена","source":"Оконный сенсор","time":"16:22, Сегодня","description":"Ура! Устройство «Оконный сенсор» снова в строю!","icon":"battery","size":"s"},{"type":"critical","title":"Пылесос застрял","source":"Сенсор движения","time":"16:17, Сегодня","description":"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.","icon":"cam","data":{"image":"./assets/cleaner.jpg"},"size":"l"},{"type":"info","title":"Вода вскипела","source":"Чайник","time":"16:20, Сегодня","description":null,"icon":"kettle","size":"s"}]};

/***/ })
/******/ ]);