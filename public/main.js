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
/******/ ({

/***/ "./data/events.json":
/*!**************************!*\
  !*** ./data/events.json ***!
  \**************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = {\"events\":[{\"type\":\"info\",\"title\":\"Еженедельный отчет по расходам ресурсов\",\"source\":\"Сенсоры потребления\",\"time\":\"19:00, Сегодня\",\"description\":\"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.\",\"icon\":\"stats\",\"data\":{\"type\":\"graph\",\"values\":[{\"electricity\":[[\"1536883200\",115],[\"1536969600\",117],[\"1537056000\",117.2],[\"1537142400\",118],[\"1537228800\",120],[\"1537315200\",123],[\"1537401600\",129]]},{\"water\":[[\"1536883200\",40],[\"1536969600\",40.2],[\"1537056000\",40.5],[\"1537142400\",41],[\"1537228800\",41.4],[\"1537315200\",41.9],[\"1537401600\",42.6]]},{\"gas\":[[\"1536883200\",13],[\"1536969600\",13.2],[\"1537056000\",13.5],[\"1537142400\",13.7],[\"1537228800\",14],[\"1537315200\",14.2],[\"1537401600\",14.5]]}]},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Дверь открыта\",\"source\":\"Сенсор входной двери\",\"time\":\"18:50, Сегодня\",\"description\":null,\"icon\":\"key\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Уборка закончена\",\"source\":\"Пылесос\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"robot-cleaner\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Новый пользователь\",\"source\":\"Роутер\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"router\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Изменен климатический режим\",\"source\":\"Сенсор микроклимата\",\"time\":\"18:30, Сегодня\",\"description\":\"Установлен климатический режим «Фиджи»\",\"icon\":\"thermal\",\"size\":\"m\",\"data\":{\"temperature\":24,\"humidity\":80}},{\"type\":\"critical\",\"title\":\"Невозможно включить кондиционер\",\"source\":\"Кондиционер\",\"time\":\"18:21, Сегодня\",\"description\":\"В комнате открыто окно, закройте его и повторите попытку\",\"icon\":\"ac\",\"size\":\"m\"},{\"type\":\"info\",\"title\":\"Музыка включена\",\"source\":\"Яндекс.Станция\",\"time\":\"18:16, Сегодня\",\"description\":\"Сейчас проигрывается:\",\"icon\":\"music\",\"size\":\"m\",\"data\":{\"albumcover\":\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\",\"artist\":\"Florence & The Machine\",\"track\":{\"name\":\"Big God\",\"length\":\"4:31\"},\"volume\":80}},{\"type\":\"info\",\"title\":\"Заканчивается молоко\",\"source\":\"Холодильник\",\"time\":\"17:23, Сегодня\",\"description\":\"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?\",\"icon\":\"fridge\",\"size\":\"m\",\"data\":{\"buttons\":[\"Да\",\"Нет\"]}},{\"type\":\"info\",\"title\":\"Зарядка завершена\",\"source\":\"Оконный сенсор\",\"time\":\"16:22, Сегодня\",\"description\":\"Ура! Устройство «Оконный сенсор» снова в строю!\",\"icon\":\"battery\",\"size\":\"s\"},{\"type\":\"critical\",\"title\":\"Пылесос застрял\",\"source\":\"Сенсор движения\",\"time\":\"16:17, Сегодня\",\"description\":\"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.\",\"icon\":\"cam\",\"data\":{\"image\":\"./assets/bitmap.png\"},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Вода вскипела\",\"source\":\"Чайник\",\"time\":\"16:20, Сегодня\",\"description\":null,\"icon\":\"kettle\",\"size\":\"s\"}]};\n\n//# sourceURL=webpack:///./data/events.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _touch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touch.js */ \"./src/touch.js\");\n\n\nconst data = __webpack_require__(/*! ../data/events.json */ \"./data/events.json\");\n// console.log(data);\n\n// Test to see if the browser supports the HTML template element by checking\n// for the presence of the template element's content attribute.\nif ('content' in document.createElement('template')) {\n\n    // Instantiate the table with the existing HTML tbody\n    // and the row with the template\n    let template        = document.querySelector( '.card-template' ),\n        controlTemplate = document.querySelector( '.touch-controls' ),\n        musicTemplate   = document.querySelector( '.music' ),\n        climateTemplate = document.querySelector( '.climate' ),\n        list            = document.querySelector( '.list' );\n\n    for ( let i = 0; i < data.events.length; i++ ) {\n        let clone = document.importNode( template.content, true );\n\n        let card        = clone.querySelector( '.card'              ),\n            icon        = clone.querySelector( '.card__icon'        ),\n            title       = clone.querySelector( '.card__title'       ),\n            source      = clone.querySelector( '.card__source'      ),\n            time        = clone.querySelector( '.card__time'        ),\n            description = clone.querySelector( '.card__description' ),\n            cardData    = clone.querySelector( '.card__data' );\n\n        icon.querySelector( 'img' ).setAttribute( 'src', `./assets/${data.events[i].icon}.svg` );\n        title      .textContent = data.events[i].title;\n        source     .textContent = data.events[i].source;\n        time       .textContent = data.events[i].time;\n        description.textContent = data.events[i].description;\n\n        data.events[i].description\n            ? description.textContent = data.events[i].description\n            : description.remove();\n\n        if ( data.events[i].data ) {\n            if ( data.events[i].data.type === 'graph' ) {\n                cardData.innerHTML = '<img src=\"./assets/Richdata.svg\" />';\n            }\n            if ( data.events[i].data.image ) {\n                cardData.innerHTML = `<div class=\"card__data-image\" touch-action=“none”><div class=\"card__data-image-bg\" style=\"background-image: url('${ data.events[i].data.image }')\"></div><div/>`;\n            }\n            if ( data.events[i].data.buttons ) {\n                const buttonsHTML = data.events[i].data.buttons.map(\n                    button => button === 'Да'\n                                ? `<div class=\"card__button card__button-bright\">${button}</div>`\n                                : `<div class=\"card__button card__button-grey\">${button}</div>`\n                );\n                cardData.innerHTML = `<div class=\"card__buttons\">${buttonsHTML.join('')}</div>`;\n            }\n            if (\n                data.events[i].data.albumcover &&\n                data.events[i].data.artist     &&\n                data.events[i].data.track      &&\n                data.events[i].data.volume\n            ) {\n                let musicClone = document.importNode( musicTemplate.content, true );\n\n                let albumcover = musicClone.querySelector( '.music__cover'        ),\n                    track      = musicClone.querySelector( '.music__track-name'   ),\n                    trackTime  = musicClone.querySelector( '.music__track-time'   ),\n                    volume     = musicClone.querySelector( '.music__track-volume' );\n\n                albumcover.setAttribute( 'src', data.events[i].data.albumcover );\n\n                track    .textContent = `${data.events[i].data.artist} — ${data.events[i].data.track.name}`;\n                trackTime.textContent = data.events[i].data.track.length;\n                volume   .textContent = data.events[i].data.volume;\n\n                cardData.appendChild( musicClone );\n            }\n            if ( data.events[i].data.temperature && data.events[i].data.humidity ) {\n                let climateClone = document.importNode( climateTemplate.content, true );\n\n                let temperature = climateClone.querySelector( '.climate__temperature-value' ),\n                    humidity    = climateClone.querySelector( '.climate__humidity-value' );\n\n                temperature.textContent = `${data.events[i].data.temperature} C`;\n                humidity   .textContent = `${data.events[i].data.humidity}%`;\n\n                cardData.appendChild( climateClone );\n            }\n        } else {\n            cardData.remove();\n        }\n\n        if ( (data.events[i].source === 'Сенсор движения') && ('ontouchstart' in document.documentElement) ) {\n            cardData.appendChild( document.importNode( controlTemplate.content, true ) );\n\n            // pointer events\n\n            Object(_touch_js__WEBPACK_IMPORTED_MODULE_0__[\"Touch\"])( cardData );\n\n\n            console.log('touch');\n        } else {\n            // Touch();\n            console.log('не touch');\n        }\n\n        card.classList.add( `card__size_${data.events[i].size}`, `card__type_${data.events[i].type}` );\n\n        // оптимизировать: складывать в fragment, аппендить фрагмент\n        list.appendChild(clone);\n    }\n\n} else {\n    // Find another way to add the rows to the table because\n    // the HTML template element is not supported.\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/touch.js":
/*!**********************!*\
  !*** ./src/touch.js ***!
  \**********************/
/*! exports provided: Touch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Touch\", function() { return Touch; });\nfunction Touch( container ) {\n\n    const imageNode = container.querySelector('.card__data-image');\n\n    const log = (json) => {\n        const str = JSON.stringify(json);\n        console.log(Date.now(), str);\n    };\n\n    const currentPointerEvents = {},\n          imageState = {\n                left:           0,\n                zoomMin:        300,\n                zoom:           300,\n                zoomMax:        848,\n                brightnessMin: .2,\n                brightness:     1,\n                brightnessMax:  4,\n            };\n\n    let gesture = null;\n\n    imageNode.addEventListener('dragstart', (event) => { event.preventDefault(); });\n\n\n    imageNode.addEventListener('pointerdown', (event) => {\n\n        console.log('pointerdown');\n\n        currentPointerEvents[event.pointerId] = event;\n\n        if ( !gesture ) {\n            gesture = { type: 'move' };\n        }\n    });\n\n    const getDistance = ( e1, e2 ) => {\n        const { clientX: x1, clientY: y1 } = e1;\n        const { clientX: x2, clientY: y2 } = e2;\n        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));\n    };\n    const getAngle = ( e1, e2 ) => {\n        const { clientX: x1, clientY: y1 } = e1;\n        const { clientX: x2, clientY: y2 } = e2;\n        const r = Math.atan2(x2 - x1, y2 - y1);\n        return 360 - (180 + Math.round(r * 180 / Math.PI));\n    };\n\n    const feedbackNodes = {\n        zoom: container.querySelector('.card__zoom-value'),\n        brightness: container.querySelector('.card__brightness-value')\n    };\n\n    const setFeedback = (name, value) => {\n        if ( feedbackNodes[name] ) {\n            feedbackNodes[name].innerText = Math.round(value * 100) / 100;\n        }\n    };\n\n    const setLeft = (dx) => {\n        imageState.left += dx;\n        imageNode.querySelector('.card__data-image-bg').style.backgroundPosition = `${imageState.left}px 50%`;\n    };\n\n    imageNode.addEventListener('pointermove', (event) => {\n\n        const pointersCount = Object.keys(currentPointerEvents).length;\n\n        if ( pointersCount === 0 || !gesture ) { return; }\n\n        if ( pointersCount === 1 && gesture.type === 'move' ) {\n            const previousEvent = currentPointerEvents[event.pointerId];\n            const dx = event.clientX - previousEvent.clientX;\n\n            setLeft(dx);\n\n            currentPointerEvents[event.pointerId] = event;\n\n        } else if ( pointersCount === 2 ) {\n\n            currentPointerEvents[event.pointerId] = event;\n\n            const events   = Object.values( currentPointerEvents ),\n                  distance = getDistance( events[0], events[1] ),\n                  angle    = getAngle(    events[0], events[1] );\n\n            if ( !gesture.startDistance ) {\n                gesture.startZoom       = imageState.zoom;\n                gesture.startDistance   = distance;\n                gesture.startBrightness = imageState.brightness;\n                gesture.startAngle      = angle;\n                gesture.angleDiff       = 0;\n                gesture.type            = null;\n            }\n\n            const diff      = distance - gesture.startDistance;\n            const angleDiff = angle    - gesture.startAngle;\n\n            if( !gesture.type ) {\n\n                console.log( distance, gesture.startDistance );\n\n                if (Math.abs(diff) < 32 && Math.abs(angleDiff) < 8) {\n                    log({'!': 'ignore', diff, angleDiff});\n                    return;\n                } else if (Math.abs(diff) > 32) {\n                    log({'!': 'detected zoom', diff, angleDiff});\n                    gesture.type = 'zoom';\n                } else {\n                    log({'!': 'detected rotate', diff, angleDiff});\n                    gesture.type = 'rotate';\n                }\n            }\n\n            if ( gesture.type === 'zoom' ) {\n                const {zoomMin, zoomMax} = imageState;\n                let zoom =  gesture.startZoom + diff;\n\n                if (diff < 0) {\n                    zoom = Math.max(zoom, zoomMin);\n                } else {\n                    zoom = Math.min(zoom, zoomMax);\n                }\n\n                imageState.zoom = zoom;\n                imageNode.querySelector('.card__data-image-bg').style.height = `${zoom}px`;\n                setFeedback('zoom', zoom);\n            }\n\n            if ( gesture.type === 'rotate' ) {\n\n                const {brightnessMin, brightnessMax} = imageState;\n\n                if (Math.abs(angleDiff - gesture.angleDiff) > 300) {\n                    gesture.startBrightness = imageState.brightness;\n                    gesture.startAngle = angle;\n                    gesture.angleDiff = 0;\n                    return;\n                }\n\n                gesture.angleDiff = angleDiff;\n                let brightness = gesture.startBrightness + angleDiff / 50;\n\n                if (angleDiff < 0) {\n                    brightness = Math.max(brightness, brightnessMin);\n                } else {\n                    brightness = Math.min(brightness, brightnessMax);\n                }\n\n                imageState.brightness = brightness;\n                imageNode.querySelector('.card__data-image-bg').style.filter = `brightness(${brightness})`;\n                setFeedback('brightness', brightness);\n            }\n        }\n    });\n\n    const onPointerUp = (event) => {\n        gesture = null;\n        delete currentPointerEvents[event.pointerId];\n    };\n\n    imageNode.addEventListener('pointerup', onPointerUp);\n    imageNode.addEventListener('pointercancel', onPointerUp);\n    imageNode.addEventListener('pointerleave', onPointerUp);\n\n}\n\n//# sourceURL=webpack:///./src/touch.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });