/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/component.js":
/*!************************************!*\
  !*** ./src/assets/js/component.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _image_DIGIVERSE00_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/DIGIVERSE00.svg */ "./src/assets/image/DIGIVERSE00.svg");
/* harmony import */ var _image_pattern_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/pattern.png */ "./src/assets/image/pattern.png");



function component() {// let m = document.createElement('main');
  // let p = document.createElement('p');
  // let img = document.createElement('img')
  // m.append(p);
  // p.append(img);
  // img.src=pattImg;
  // // logo.alt="LOGO";
  // // document.getElementById("bannerImg").src =  headerbanner;
  // return m
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component); // Three js Cube

var camera, cube, scene, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({
    antialise: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log(renderer); // const el = document.getElementById('myCanvas').innerHTML;
  // // const main = document.createElement('main');
  // // el.append(renderer.domElement)
  // console.log(el);
  // document.getElementById("mainContent").appendChild(renderer.domElement);

  document.body.appendChild(renderer.domElement);
  console.log("test");
  var geometry = new THREE.BoxGeometry(2, 2, 2); // const material = new THREE.MeshBasicMaterial({color: 0x008790});
  // console.log(path);

  var texture = new THREE.TextureLoader().load('assets/image/logo.jpg');
  var material = new THREE.MeshBasicMaterial({
    map: texture
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
init();
animate(); // Three JS Circle

/***/ }),

/***/ "./src/assets/css/main.scss":
/*!**********************************!*\
  !*** ./src/assets/css/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/css/normalize.scss":
/*!***************************************!*\
  !*** ./src/assets/css/normalize.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/image/DIGIVERSE00.svg":
/*!******************************************!*\
  !*** ./src/assets/image/DIGIVERSE00.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80485b8f09008bb3aecd.svg";

/***/ }),

/***/ "./src/assets/image/pattern.png":
/*!**************************************!*\
  !*** ./src/assets/image/pattern.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d61caa7f0bcbcb2ece8c.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./src/assets/css/main.scss");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/assets/js/component.js");
/* harmony import */ var _css_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/normalize.scss */ "./src/assets/css/normalize.scss");
 // import style1 from '../css/main.css';

 // import componentCircle from './circle.js'


var heading = "Welcome to Digiserve"; // document.querySelector('h2').innerText = heading 

console.log("check"); // cube

document.body.append((0,_component_js__WEBPACK_IMPORTED_MODULE_1__["default"])()); // circle
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztDQ2RBOztDQUVBOztBQUNBO0FBQ0EsSUFBTVksT0FBTyxHQUFHLHNCQUFoQixFQUNBOztBQUVBOUIsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixHQUNBOztBQUNBQyxRQUFRLENBQUNDLElBQVQsQ0FBYzRCLE1BQWQsQ0FBcUI5Qyx5REFBUyxFQUE5QixHQUVBLFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLTEvLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLTEvLi9zcmMvYXNzZXRzL2Nzcy9tYWluLnNjc3M/OWIwNSIsIndlYnBhY2s6Ly93ZWJwYWNrLTEvLi9zcmMvYXNzZXRzL2Nzcy9ub3JtYWxpemUuc2Nzcz8zZDY5Iiwid2VicGFjazovL3dlYnBhY2stMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stMS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stMS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLTEvLi9zcmMvYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nbyBmcm9tICcuLi9pbWFnZS9ESUdJVkVSU0UwMC5zdmcnO1xyXG5pbXBvcnQgcGF0dEltZyBmcm9tIFwiLi4vaW1hZ2UvcGF0dGVybi5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpe1xyXG4gICAgLy8gbGV0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAvLyBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgLy8gbS5hcHBlbmQocCk7XHJcbiAgICAvLyBwLmFwcGVuZChpbWcpO1xyXG4gICAgLy8gaW1nLnNyYz1wYXR0SW1nO1xyXG4gICAgLy8gLy8gbG9nby5hbHQ9XCJMT0dPXCI7XHJcbiAgICAvLyAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lckltZ1wiKS5zcmMgPSAgaGVhZGVyYmFubmVyO1xyXG5cclxuICAgIC8vIHJldHVybiBtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudFxyXG5cclxuLy8gVGhyZWUganMgQ3ViZVxyXG5sZXQgY2FtZXJhLCBjdWJlLCBzY2VuZSwgcmVuZGVyZXJcclxuXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICA3NSwgd2luZG93LmlubmVyV2lkdGggIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgMC4xLFxyXG4gICAgMTAwMFxyXG4pXHJcblxyXG5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpc2U6dHJ1ZX0pO1xyXG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5jb25zb2xlLmxvZyhyZW5kZXJlcik7XHJcbi8vIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJykuaW5uZXJIVE1MO1xyXG4vLyAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4vLyAvLyBlbC5hcHBlbmQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuLy8gY29uc29sZS5sb2coZWwpO1xyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG5cclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMiwgMiwgMik7XHJcblxyXG4vLyBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4MDA4NzkwfSk7XHJcbi8vIGNvbnNvbGUubG9nKHBhdGgpO1xyXG5jb25zdCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCdhc3NldHMvaW1hZ2UvbG9nby5qcGcnKTtcclxuY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe21hcDp0ZXh0dXJlfSk7XHJcbmN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5zY2VuZS5hZGQoY3ViZSlcclxuXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSgpe1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcclxuXHJcbn1cclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKXtcclxuICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG5pbml0KCk7XHJcbmFuaW1hdGUoKTtcclxuXHJcbi8vIFRocmVlIEpTIENpcmNsZSAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL21haW4uc2Nzcyc7XHJcbi8vIGltcG9ydCBzdHlsZTEgZnJvbSAnLi4vY3NzL21haW4uY3NzJztcclxuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC5qcyc7XHJcbi8vIGltcG9ydCBjb21wb25lbnRDaXJjbGUgZnJvbSAnLi9jaXJjbGUuanMnXHJcbmltcG9ydCBubWxjc3MgZnJvbSBcIi4uL2Nzcy9ub3JtYWxpemUuc2Nzc1wiO1xyXG5jb25zdCBoZWFkaW5nID0gXCJXZWxjb21lIHRvIERpZ2lzZXJ2ZVwiO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dCA9IGhlYWRpbmcgXHJcblxyXG5jb25zb2xlLmxvZyhcImNoZWNrXCIpO1xyXG4vLyBjdWJlXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbXBvbmVudCgpKVxyXG5cclxuLy8gY2lyY2xlXHJcbiJdLCJuYW1lcyI6WyJsb2dvIiwicGF0dEltZyIsImNvbXBvbmVudCIsImNhbWVyYSIsImN1YmUiLCJzY2VuZSIsInJlbmRlcmVyIiwiaW5pdCIsIlRIUkVFIiwiU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpc2UiLCJzZXRTaXplIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJ0ZXh0dXJlIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwibWFwIiwiTWVzaCIsImFkZCIsInBvc2l0aW9uIiwieiIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJyb3RhdGlvbiIsIngiLCJ5Iiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwibm1sY3NzIiwiaGVhZGluZyIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=