/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getProductsList/handler.ts":
/*!**************************************************!*\
  !*** ./src/functions/getProductsList/handler.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"getProductListFunc\": () => (/* binding */ getProductListFunc)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n\n\n\nconst { Client } = __webpack_require__(/*! pg */ \"pg\");\nconst { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;\nconst dbOptions = {\n    user: PG_USERNAME,\n    host: PG_HOST,\n    database: PG_DATABASE,\n    password: PG_PASSWORD,\n    port: PG_PORT,\n    ssl: {\n        rejectUnauthorized: false,\n    },\n    connectionTimeoutMillis: 5000,\n};\nconst getProductsList = async () => {\n    const client = new Client(dbOptions);\n    await client.connect();\n    console.log('database', PG_DATABASE);\n    try {\n        const { rows } = await client.query(\"SELECT p.id, p.title, p.description, p.price, p.imageId, stocks.count FROM products as p LEFT OUTER JOIN stocks ON p.id = stocks.product_id\");\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(200, { products: rows });\n    }\n    catch (error) {\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(500, { error: error.stack });\n    }\n    finally {\n        client.end();\n    }\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getProductsList);\nconst getProductListFunc = getProductsList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RzTGlzdC9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS10cy8uL3NyYy9mdW5jdGlvbnMvZ2V0UHJvZHVjdHNMaXN0L2hhbmRsZXIudHM/OTIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIkBsaWJzL2xhbWJkYVwiO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5UmVzdWx0IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcblxuY29uc3QgeyBDbGllbnQgfSA9IHJlcXVpcmUoXCJwZ1wiKTtcblxuY29uc3QgeyBQR19IT1NULCBQR19QT1JULCBQR19EQVRBQkFTRSwgUEdfVVNFUk5BTUUsIFBHX1BBU1NXT1JEIH0gPSBwcm9jZXNzLmVudjtcblxuY29uc3QgZGJPcHRpb25zID0ge1xuICB1c2VyOiBQR19VU0VSTkFNRSxcbiAgaG9zdDogUEdfSE9TVCxcbiAgZGF0YWJhc2U6IFBHX0RBVEFCQVNFLFxuICBwYXNzd29yZDogUEdfUEFTU1dPUkQsXG4gIHBvcnQ6IFBHX1BPUlQsXG4gIHNzbDoge1xuICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gIH0sXG4gIGNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzOiA1MDAwLFxufTtcblxuY29uc3QgZ2V0UHJvZHVjdHNMaXN0ID0gYXN5bmMgKCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoZGJPcHRpb25zKTtcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcblxuICBjb25zb2xlLmxvZygnZGF0YWJhc2UnLFBHX0RBVEFCQVNFICk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IGNsaWVudC5xdWVyeShcIlNFTEVDVCBwLmlkLCBwLnRpdGxlLCBwLmRlc2NyaXB0aW9uLCBwLnByaWNlLCBwLmltYWdlSWQsIHN0b2Nrcy5jb3VudCBGUk9NIHByb2R1Y3RzIGFzIHAgTEVGVCBPVVRFUiBKT0lOIHN0b2NrcyBPTiBwLmlkID0gc3RvY2tzLnByb2R1Y3RfaWRcIik7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSgyMDAsIHsgcHJvZHVjdHM6IHJvd3MgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSg1MDAsIHsgZXJyb3I6IGVycm9yLnN0YWNrIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGNsaWVudC5lbmQoKTtcbiAgfVxuXG5cblxuXG4gIC8qIGNsaWVudC5xdWVyeShcIlNFTEVDVCAqIEZST00gcHJvZHVjdHNcIiwgKGVyciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSg1MDAsIHsgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnJvd3M7XG4gICAgY2xpZW50LmVuZCgpO1xuICB9KTsgKi9cbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShnZXRQcm9kdWN0c0xpc3QpO1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RMaXN0RnVuYyA9IGdldFByb2R1Y3RzTGlzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/getProductsList/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (statusCode, response) => {\n    return {\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Allow-Credentials\": true,\n        },\n        statusCode,\n        body: JSON.stringify(response),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS10cy8uL3NyYy9saWJzL2FwaUdhdGV3YXkudHM/NjI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIEFQSUdhdGV3YXlQcm94eUV2ZW50LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHQsXG4gIEhhbmRsZXIsXG59IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsIFwiYm9keVwiPiAmIHtcbiAgYm9keTogRnJvbVNjaGVtYTxTPjtcbn07XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChcbiAgc3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiB0cnVlLFxuICAgIH0sXG4gICAgc3RhdHVzQ29kZSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLXRzLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getProductsList/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;