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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const videos = [\n            document.querySelector( '#video-1' ),\n            document.querySelector( '#video-2' ),\n            document.querySelector( '#video-3' ),\n            document.querySelector( '#video-4' )\n        ],\n      brightness = [\n            document.querySelector( '#video-1_brightness' ),\n            document.querySelector( '#video-2_brightness' ),\n            document.querySelector( '#video-3_brightness' ),\n            document.querySelector( '#video-4_brightness' )\n        ],\n      contrast = [\n            document.querySelector( '#video-1_contrast' ),\n            document.querySelector( '#video-2_contrast' ),\n            document.querySelector( '#video-3_contrast' ),\n            document.querySelector( '#video-4_contrast' )\n        ]\n;\n\nconst scale = (e) => {\n    const videoContainer = e.target.parentNode,\n          video          = videoContainer.querySelector( '.video' ),\n          volumeMeter    = videoContainer.querySelector( '.video-container__volume' );\n\n    videoContainer.classList.add( 'video-full' );\n\n    video.muted = false;\n\n    // audio\n\n    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();\n\n    const analyser = audioCtx.createAnalyser();\n    analyser.connect(audioCtx.destination);\n\n    const source = audioCtx.createMediaElementSource( video );\n    source.connect(analyser);\n    analyser.fftSize = 32;\n\n    const streamData = new Uint8Array(analyser.frequencyBinCount);\n\n    const getVolume = () => {\n        analyser.getByteFrequencyData(streamData);\n        return streamData.reduce((acc, val) => acc + val, 0) / 255 / streamData.length;\n    };\n\n    const loop = () => {\n        const volume = getVolume();\n        volumeMeter.style.transform = `scaleX(${ volume })`;\n        requestAnimationFrame(loop);\n    };\n\n    loop();\n\n    switch ( e.target.id.split('-')[1] ) {\n        case '1': videoContainer.style.transformOrigin = 'top left';     break;\n        case '2': videoContainer.style.transformOrigin = 'top right';    break;\n        case '3': videoContainer.style.transformOrigin = 'bottom left';  break;\n        case '4': videoContainer.style.transformOrigin = 'bottom right'; break;\n        default: break;\n    }\n};\n\nconst scaleDown = (e) => {\n    const videoContainer = e.target.closest( '.video-container' ),\n          video          = videoContainer.querySelector( '.video' );\n\n    video.muted = true;\n\n    videoContainer.classList.remove( 'video-full' );\n};\n\nconst changeBrightness = (e) => {\n    const videoContainer = e.target.closest( '.video-container' ),\n          video = videoContainer.querySelector( '.video' );\n\n    video.style.filter = `brightness(${e.target.value}%)`;\n};\n\nconst changeContrast = (e) => {\n    const videoContainer = e.target.closest( '.video-container' ),\n          video = videoContainer.querySelector( '.video' );\n\n    video.style.filter = `contrast(${e.target.value}%)`;\n};\n\n\nvideos.forEach(\n    video => {\n        video.addEventListener( 'click', scale );\n        video\n            .parentNode\n            .querySelector( '.video-container__return' )\n            .addEventListener( 'click', scaleDown );\n    }\n);\nbrightness.forEach(\n    control => control.addEventListener( 'input', changeBrightness )\n);\ncontrast.forEach(\n    control => control.addEventListener( 'input', changeContrast )\n);\n\n//# sourceURL=webpack:///./src/camera.js?");

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/camera.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/camera.js */\"./src/camera.js\");\n\n\n//# sourceURL=webpack:///multi_./src/camera.js?");

/***/ })

/******/ });