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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/shri-arch/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shri-arch/src/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createStore = ( reducer, initialState ) => {\n\n    // defines Store\n    let Store = {\n            state: initialState,\n            reducer,\n            listener: () => {}\n        };\n\n    // defines Store methods\n    const getState = () => {\n        return Store.state;\n    };\n\n    const dispatch = action => {\n        Store.state = reducer( Store.state, action );\n        Store.listener();\n        return action;\n    };\n\n    const subscribe = ( newListener ) => {\n        Store.listener = newListener;\n    };\n\n    // assigns methods to Store\n    Store.getState  = getState;\n    Store.dispatch  = dispatch;\n    Store.subscribe = subscribe;\n\n    return Store;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createStore);\n\n//# sourceURL=webpack:///./node_modules/shri-arch/src/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_shri_arch_src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/shri-arch/src/index.js */ \"./node_modules/shri-arch/src/index.js\");\n\n\n\n// store stuff\n\n// let initialState;\nconst reducer = ( state = {}, action ) => {\n    console.log(action);\n    if (action.type === 'location') {\n        state.location = action.location;\n    }\n    return state;\n};\n\nlet store = Object(_node_modules_shri_arch_src_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( reducer );\nstore.subscribe( () => console.log( store.getState() ) );\n\nfetch(\n    '/api/state/get',\n    {\n        headers: new Headers({'Content-Type': 'application/json;charset=utf-8'}),\n        method: 'get',\n        credentials: 'include'\n    }\n)\n.then( res => res.json() )\n.then(\n    ({location}) => {\n        // initialState = data;\n        store.dispatch( { type: 'location', location } );\n    }\n);\n\n\nconst getLocationState = ( ) => {\n    let hrefChunks = window.location.href.split('/');\n    return hrefChunks[hrefChunks.length - 1].split('.')[0];\n};\n\nwindow.addEventListener('load',\n    () => fetch(\n        '/api/state/update',\n        {\n            headers: new Headers({'Content-Type': 'application/json;charset=utf-8'}),\n            method: 'post',\n            credentials: 'include',\n            body: JSON.stringify({ location: getLocationState() })\n        }\n    )\n);\n\nconsole.log(store, getLocationState());\n\n\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** multi ./src/store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/store.js */\"./src/store.js\");\n\n\n//# sourceURL=webpack:///multi_./src/store.js?");

/***/ })

/******/ });