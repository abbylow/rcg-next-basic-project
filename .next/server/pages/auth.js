module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/abbylow/ReactProject/ReactCompleteGuide/next-basic-tutorial/components/User.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst user = props => __jsx(\"div\", {\n  className: \"jsx-1248584905\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  className: \"jsx-1248584905\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }\n}, props.name), __jsx(\"p\", {\n  className: \"jsx-1248584905\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }\n}, \"Age: \", props.age), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n  id: \"1248584905\",\n  __self: undefined\n}, \"div.jsx-1248584905{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYmJ5bG93L1JlYWN0UHJvamVjdC9SZWFjdENvbXBsZXRlR3VpZGUvbmV4dC1iYXNpYy10dXRvcmlhbC9jb21wb25lbnRzL1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWEsQUFHMkMsc0JBQ0ksMEJBQ2IsYUFFbEIsa0JBQUMiLCJmaWxlIjoiL1VzZXJzL2FiYnlsb3cvUmVhY3RQcm9qZWN0L1JlYWN0Q29tcGxldGVHdWlkZS9uZXh0LWJhc2ljLXR1dG9yaWFsL2NvbXBvbmVudHMvVXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+e3Byb3BzLm5hbWV9PC9oMT5cbiAgICAgICAgPHA+QWdlOiB7cHJvcHMuYWdlfTwvcD5cbiAgICAgICAgey8qIHN0eWxlZC1qc3g6IHNjb3BlZCBjc3Mgc3VwcG9ydCBmb3IganN4ICovfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggI2NjYztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXI7Il19 */\\n/*@ sourceURL=/Users/abbylow/ReactProject/ReactCompleteGuide/next-basic-tutorial/components/User.js */\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanM/NTY1OCJdLCJuYW1lcyI6WyJ1c2VyIiwicHJvcHMiLCJuYW1lIiwiYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUNUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFLQSxLQUFLLENBQUNDLElBQVgsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFTRCxLQUFLLENBQUNFLEdBQWYsQ0FGSjtBQUFBO0FBQUE7QUFBQSwrekNBREo7O0FBa0JlSCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZXIgPSAocHJvcHMpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+e3Byb3BzLm5hbWV9PC9oMT5cbiAgICAgICAgPHA+QWdlOiB7cHJvcHMuYWdlfTwvcD5cbiAgICAgICAgey8qIHN0eWxlZC1qc3g6IHNjb3BlZCBjc3Mgc3VwcG9ydCBmb3IganN4ICovfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggI2NjYztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/User.js\n");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ \"./components/User.js\");\nvar _jsxFileName = \"/Users/abbylow/ReactProject/ReactCompleteGuide/next-basic-tutorial/pages/auth/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst authIndexPage = props => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }\n}, \"The Auth Index Page - \", props.appName), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  name: \"Abby\",\n  age: 25,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }\n}));\n\nauthIndexPage.getInitialProps = context => {\n  const promise = new Promise((resolve, reject) => {\n    // use setTimeout to simulate the API call / any async function\n    setTimeout(() => {\n      resolve({\n        appName: \"Next.Js App (Auth)\"\n      });\n    }, 1000);\n  });\n  return promise;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authIndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2luZGV4LmpzPzZjNTUiXSwibmFtZXMiOlsiYXV0aEluZGV4UGFnZSIsInByb3BzIiwiYXBwTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUNsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBMkJBLEtBQUssQ0FBQ0MsT0FBakMsQ0FESixFQUVJLE1BQUMsd0RBQUQ7QUFBTSxNQUFJLEVBQUMsTUFBWDtBQUFrQixLQUFHLEVBQUUsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLENBREo7O0FBT0FGLGFBQWEsQ0FBQ0csZUFBZCxHQUFpQ0MsT0FBRCxJQUFhO0FBQ3pDLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQzdDO0FBQ0FDLGNBQVUsQ0FBQyxNQUFNO0FBQ2JGLGFBQU8sQ0FBQztBQUFFTCxlQUFPLEVBQUU7QUFBWCxPQUFELENBQVA7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FMZSxDQUFoQjtBQU1BLFNBQU9HLE9BQVA7QUFDSCxDQVJEOztBQVVlTCw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXInO1xuXG5jb25zdCBhdXRoSW5kZXhQYWdlID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPlRoZSBBdXRoIEluZGV4IFBhZ2UgLSB7cHJvcHMuYXBwTmFtZX08L2gxPlxuICAgICAgICA8VXNlciBuYW1lPVwiQWJieVwiIGFnZT17MjV9Lz5cbiAgICA8L2Rpdj5cbik7XG5cbmF1dGhJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyB1c2Ugc2V0VGltZW91dCB0byBzaW11bGF0ZSB0aGUgQVBJIGNhbGwgLyBhbnkgYXN5bmMgZnVuY3Rpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgYXBwTmFtZTogXCJOZXh0LkpzIEFwcCAoQXV0aClcIiB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoSW5kZXhQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });