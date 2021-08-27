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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getProductListFunc = exports.main = void 0;\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\nconst apiGateway_1 = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\nconst lambda_1 = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\nconst goods = __webpack_require__(/*! ../../data/goods.json */ \"./src/data/goods.json\");\nconst getProductsList = async () => {\n    return apiGateway_1.formatJSONResponse(200, goods);\n};\nexports.main = lambda_1.middyfy(getProductsList);\nexports.getProductListFunc = getProductsList;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RzTGlzdC9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS10cy8uL3NyYy9mdW5jdGlvbnMvZ2V0UHJvZHVjdHNMaXN0L2hhbmRsZXIudHM/OTIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIkBsaWJzL2xhbWJkYVwiO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciwgQVBJR2F0ZXdheVByb3h5UmVzdWx0IH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmNvbnN0IGdvb2RzID0gcmVxdWlyZShcIi4uLy4uL2RhdGEvZ29vZHMuanNvblwiKTtcblxuXG5jb25zdCBnZXRQcm9kdWN0c0xpc3Q6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHQ+ID0+IHtcbiAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSgyMDAsIGdvb2RzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShnZXRQcm9kdWN0c0xpc3QpO1xuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RMaXN0RnVuYyA9IGdldFByb2R1Y3RzTGlzdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/getProductsList/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatJSONResponse = void 0;\nconst formatJSONResponse = (statusCode, response) => {\n    return {\n        headers: {\n            \"Access-Control-Allow-Origin\": \"*\",\n            \"Access-Control-Allow-Credentials\": true,\n        },\n        statusCode: statusCode,\n        body: JSON.stringify(response),\n    };\n};\nexports.formatJSONResponse = formatJSONResponse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7OztBQWVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UtdHMvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyLFxufSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5cbnR5cGUgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBPbWl0PEFQSUdhdGV3YXlQcm94eUV2ZW50LCBcImJvZHlcIj4gJiB7XG4gIGJvZHk6IEZyb21TY2hlbWE8Uz47XG59O1xuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8XG4gIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRcbj47XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAoXG4gIHN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIjogdHJ1ZSxcbiAgICB9LFxuICAgIHN0YXR1c0NvZGU6IHN0YXR1c0NvZGUsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.middyfy = void 0;\nconst core_1 = __importDefault(__webpack_require__(/*! @middy/core */ \"@middy/core\"));\nconst http_json_body_parser_1 = __importDefault(__webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\"));\nconst middyfy = (handler) => {\n    return core_1.default(handler).use(http_json_body_parser_1.default());\n};\nexports.middyfy = middyfy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLXRzLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

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

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "./src/data/goods.json":
/*!*****************************!*\
  !*** ./src/data/goods.json ***!
  \*****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"d290f1ee-6c54-4b01-90e6-d701748f0851","count":4,"title":"Life is Strange: True Colors (PS4)","description":"В истории популярной серии Life Is Strange начинается следующий этап — вам предстоит познакомиться с новой главной героиней и раскрыть волнующую тайну! Алекс Чэнь давно скрывает от всех своё «проклятие» — сверхъестественное умение считывать и поглощать сильные чувства других людей, которые представляются ей в виде разноцветных аур, а также управлять ими. ","imageId":"life-is-strange-2","price":65},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0852","count":4,"title":"God of War: Ragnarok (PS5)","description":"God of War: Ragnarok - это вторая часть PS4-экслюзивной игры, продолжающая историю мягкого перезапуска God of War. События новой игры разворачиваются спустя некоторое время после оригинала, а в центре внимания - все тот же бог войны в отставке, Кратос, который путешествует по северным землям.","imageId":"god-of-war-ragnarok ","price":75},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0853","count":3,"title":"RESIDENT EVIL 8: VILLAGE [PS4, РУССКАЯ ВЕРСИЯ]","description":"Попробуйте выжить в кошмаре, равного которому еще не было, в восьмой игре легендарной серии Resident Evil - Resident Evil Village.","imageId":"re-8-the-village","price":75},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0854","count":8,"title":"PERSONA 5 STRIKERS [PS4, АНГЛИЙСКАЯ ВЕРСИЯ]","description":"Вступайте в ряды Призрачных похитителей и искорените скверну, захватившую города по всей Японии. Летние каникулы с лучшими друзьями приняли неожиданный оборот, когда вокруг изменилась реальность. Раскройте истину и освободите сердца тех, кто оказался в эпицентре этой катастрофы!","imageId":"p5-strikers","price":45},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0855","count":7,"title":"MAFIA: DEFINITIVE EDITION [PS4, РУССКИЕ СУБТИТРЫ]","description":"Mafia: Definitive Edition – полностью созданный с нуля всеобъемлющий ремейк оригинальной игры Mafia, снабженный новым движком, обновленным сценарием с множеством новых диалогов, расширением побочных историй, дополнительными заставками и фрагментами игрового процесса. Постройте карьеру мафиози во времена сухого закона.","imageId":"mafia","price":50},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0856","count":7,"title":"ОДНИ ИЗ НАС 2 - ЧАСТЬ II | LAST OF US 2 [PS4, РУССКИЙ ЯЗЫК]","description":"После смертельно опасного путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Вайоминге.Обосновавшись в процветающей общине, они обрели желанную стабильность, несмотря на постоянную угрозу нападения зараженных и теряющих смысл жизни выживших.","imageId":"the-last-of-us","price":70},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0857","count":3,"title":"ПРИЗРАК ЦУСИМЫ [PS4, РУССКАЯ ВЕРСИЯ]","description":"В конце XIII века в ходе кампании по завоеванию Востока Монгольская империя стерла с лица земли целые народы. Остров Цусима – последнее, что лежит на пути мощного монгольского флота во главе с хитрым и безжалостным генералом Хотун-ханом до материковой Японии.","imageId":"ghost-of-tsudhima","price":60},{"id":"d290f1ee-6c54-4b01-90e6-d701748f0858","count":10,"title":"BLOODBORNE: ПОРОЖДЕНИЕ КРОВИ (ХИТЫ PLAYSTATION) [PS4, РУССКИЕ СУБТИТРЫ]","description":"Взгляните в лицо своим страхам и попытайтесь отыскать ответы в древнем Ихарнаме, где свирепствует странная эпидемия, распространяющаяся словно лесной пожар. Тень накрыла охваченный ужасом и смертельно опасный город, в котором свило гнездо безумие. Чтобы выжить на этих улицах, вам придется раскрыть самые мрачные тайны Ихарнама…","imageId":"bloodborne","price":25}]');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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