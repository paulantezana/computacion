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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

var toggleMenu = function toggleMenu() {
    var menu = document.getElementById('main-menu');
    var toggle = document.getElementById('main-menu-toggle');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('main-menu--show');
    });
};
toggleMenu();

// Massory layout
var MassoryLayout = function MassoryLayout(container, items, columns) {
    container.classList.add('masonry-layout');
    var cols = [];
    for (var i = 0; i < columns; i++) {}
};

var getDistanceTop = function getDistanceTop(element) {
    return element.getBoundingClientRect().top + window.pageYOffset;
};

var header = document.getElementById('header-sticky');
var headerDistanceTop = void 0;
if (header) headerDistanceTop = getDistanceTop(header);

window.addEventListener('scroll', function () {
    var windowScroll = window.pageYOffset;
    if (windowScroll > headerDistanceTop) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

var aside = document.getElementById('aside-sticky');
var asideDistanceTop = void 0,
    asideWidth = void 0;
if (aside) {
    asideDistanceTop = getDistanceTop(aside);
    asideWidth = aside.getBoundingClientRect().width;
}

window.addEventListener('scroll', function () {
    var windowScroll = window.pageYOffset;
    if (aside) {
        if (windowScroll > asideDistanceTop) {
            aside.classList.add('sticky');
            aside.style.width = asideWidth + 'px';
            aside.style.top = header.getBoundingClientRect().height + 16 + 'px';
        } else {
            aside.classList.remove('sticky');
        }
    }
});

var getRemainTime = function getRemainTime(deadline) {
    var now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        second = ('0' + Math.floor(remainTime % 60)).slice(-2),
        minute = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        days = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime: remainTime,
        second: second,
        minute: minute,
        hours: hours,
        days: days
    };
};

var countDown = function countDown(deadline, elem, finalMessage) {
    var el = document.getElementById(elem);
    if (el) {
        var et = document.createElement("span");
        et.setAttribute("class", "news-timer");
        el.appendChild(et);

        var timerUpdate = setInterval(function () {
            var t = getRemainTime(deadline);
            et.innerHTML = ' ' + t.days + 'd:' + t.hours + 'h:' + t.minute + 'm:' + t.second + 's';
            if (t.remainTime <= 1) {
                clearInterval(timerUpdate);
                et.innerHTML = finalMessage;
            }
        }, 1000);
    }
};

countDown("Jun 28 2018 19:00:00 GMT-0500", "news-message", "Llego la hora de la verdad");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var masonryLayout = function masonryLayout(container, itmes, columns) {
    var columnsElements = [];

    for (var i = 1; i <= columns; i++) {
        var column = document.createElement('div');
        container.appendChild(column);
        columnsElements.push(column);
    }

    for (var m = 0; m < Math.ceil(itmes.length / columns); m++) {
        for (var n = 0; n < columns; n++) {
            var item = itmes[m * columns + n];
            columnsElements[n].appendChild(item);
        }
    }
};

var masonryContainers = [].concat(_toConsumableArray(document.querySelectorAll('.masonry-grid')));
if (masonryContainers) {
    masonryContainers.map(function (container) {
        var masonryItems = container.querySelectorAll('.masonry-grid__item');
        var cols = getComputedStyle(container).getPropertyValue('--columns');
        if (masonryItems && cols) {
            masonryLayout(container, masonryItems, cols);
        }
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);