"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/translate";
exports.ids = ["pages/api/translate"];
exports.modules = {

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/translate.ts":
/*!********************************!*\
  !*** ./pages/api/translate.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shell */ \"(api)/./utils/shell.ts\");\n\n\n\nfunction POST(request, response) {\n    const srt = request.body;\n    if (typeof srt !== \"string\") {\n        response.status(400).json({\n            error: \"Invalid request\"\n        });\n        return;\n    }\n    const cmd = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.spawn)(\"python3\", [\n        path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"scripts/translate.py\")\n    ], {\n        cwd: process.cwd()\n    });\n    cmd.stdin.write(srt);\n    cmd.stdin.end();\n    (0,_utils_shell__WEBPACK_IMPORTED_MODULE_2__.transferChildProcessOutput)(cmd, response);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNsYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNxQztBQUNkO0FBQ3VDO0FBRS9DLFNBQVNHLEtBQ3RCQyxPQUF1QixFQUN2QkMsUUFBeUIsRUFDekI7SUFDQSxNQUFNQyxNQUFNRixRQUFRRyxJQUFJO0lBQ3hCLElBQUksT0FBT0QsUUFBUSxVQUFVO1FBQzNCRCxTQUFTRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBa0I7UUFDckQ7SUFDRixDQUFDO0lBRUQsTUFBTUMsTUFBTVgsb0RBQUtBLENBQ2YsV0FDQTtRQUFDQyxnREFBUyxDQUFDWSxRQUFRQyxHQUFHLElBQUk7S0FBd0IsRUFDbEQ7UUFDRUEsS0FBS0QsUUFBUUMsR0FBRztJQUNsQjtJQUdGSCxJQUFJSSxLQUFLLENBQUNDLEtBQUssQ0FBQ1Y7SUFDaEJLLElBQUlJLEtBQUssQ0FBQ0UsR0FBRztJQUViZix3RUFBMEJBLENBQUNTLEtBQUtOO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdHJhbnNsYXRlLnRzP2IwMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHNwYXduIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB0cmFuc2ZlckNoaWxkUHJvY2Vzc091dHB1dCB9IGZyb20gJy4uLy4uL3V0aWxzL3NoZWxsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQT1NUKFxuICByZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHNydCA9IHJlcXVlc3QuYm9keVxuICBpZiAodHlwZW9mIHNydCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXNwb25zZS5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHJlcXVlc3QnIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBjbWQgPSBzcGF3bihcbiAgICAncHl0aG9uMycsXG4gICAgW3BhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc2NyaXB0cy90cmFuc2xhdGUucHknKV0sXG4gICAge1xuICAgICAgY3dkOiBwcm9jZXNzLmN3ZCgpXG4gICAgfVxuICApXG5cbiAgY21kLnN0ZGluLndyaXRlKHNydClcbiAgY21kLnN0ZGluLmVuZCgpXG5cbiAgdHJhbnNmZXJDaGlsZFByb2Nlc3NPdXRwdXQoY21kLCByZXNwb25zZSlcbn1cbiJdLCJuYW1lcyI6WyJzcGF3biIsInBhdGgiLCJ0cmFuc2ZlckNoaWxkUHJvY2Vzc091dHB1dCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzcnQiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY21kIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJzdGRpbiIsIndyaXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/translate.ts\n");

/***/ }),

/***/ "(api)/./utils/shell.ts":
/*!************************!*\
  !*** ./utils/shell.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transferChildProcessOutput\": () => (/* binding */ transferChildProcessOutput)\n/* harmony export */ });\nfunction transferChildProcessOutput(cmd, response) {\n    cmd.on(\"close\", (code)=>{\n        console.log(\"Finished command. Exit code:\", code);\n    });\n    cmd.stderr.on(\"data\", (chunk)=>{\n        const chunkStr = chunk.toString(\"utf-8\");\n        console.error(\"[Error]\", chunkStr);\n        response.write(chunkStr.split(\"\\n\").map((line)=>\"[Error] \" + line).join(\"\\n\"));\n    });\n    response.writeHead(200, {\n        \"Content-Type\": \"text/plain\",\n        \"Cache-Control\": \"no-cache\",\n        \"Content-Encoding\": \"none\"\n    });\n    cmd.stdout.pipe(response);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9zaGVsbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR08sU0FBU0EsMkJBQ2RDLEdBQW1DLEVBQ25DQyxRQUF5QixFQUN6QjtJQUNBRCxJQUFJRSxFQUFFLENBQUMsU0FBU0MsQ0FBQUEsT0FBUTtRQUN0QkMsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ0Y7SUFDOUM7SUFFQUgsSUFBSU0sTUFBTSxDQUFDSixFQUFFLENBQUMsUUFBUUssQ0FBQUEsUUFBUztRQUM3QixNQUFNQyxXQUFXRCxNQUFNRSxRQUFRLENBQUM7UUFDaENMLFFBQVFNLEtBQUssQ0FBQyxXQUFXRjtRQUN6QlAsU0FBU1UsS0FBSyxDQUNaSCxTQUNHSSxLQUFLLENBQUMsTUFDTkMsR0FBRyxDQUFDLENBQUNDLE9BQWlCLGFBQWFBLE1BQ25DQyxJQUFJLENBQUM7SUFFWjtJQUVBZCxTQUFTZSxTQUFTLENBQUMsS0FBSztRQUN0QixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN0QjtJQUVBaEIsSUFBSWlCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDakI7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL3NoZWxsLnRzPzQxZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hpbGRQcm9jZXNzV2l0aG91dE51bGxTdHJlYW1zIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2ZlckNoaWxkUHJvY2Vzc091dHB1dChcbiAgY21kOiBDaGlsZFByb2Nlc3NXaXRob3V0TnVsbFN0cmVhbXMsXG4gIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjbWQub24oJ2Nsb3NlJywgY29kZSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkIGNvbW1hbmQuIEV4aXQgY29kZTonLCBjb2RlKVxuICB9KVxuXG4gIGNtZC5zdGRlcnIub24oJ2RhdGEnLCBjaHVuayA9PiB7XG4gICAgY29uc3QgY2h1bmtTdHIgPSBjaHVuay50b1N0cmluZygndXRmLTgnKVxuICAgIGNvbnNvbGUuZXJyb3IoJ1tFcnJvcl0nLCBjaHVua1N0cilcbiAgICByZXNwb25zZS53cml0ZShcbiAgICAgIGNodW5rU3RyXG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcCgobGluZTogc3RyaW5nKSA9PiAnW0Vycm9yXSAnICsgbGluZSlcbiAgICAgICAgLmpvaW4oJ1xcbicpXG4gICAgKVxuICB9KVxuXG4gIHJlc3BvbnNlLndyaXRlSGVhZCgyMDAsIHtcbiAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvcGxhaW4nLFxuICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAnQ29udGVudC1FbmNvZGluZyc6ICdub25lJ1xuICB9KVxuXG4gIGNtZC5zdGRvdXQucGlwZShyZXNwb25zZSlcbn1cbiJdLCJuYW1lcyI6WyJ0cmFuc2ZlckNoaWxkUHJvY2Vzc091dHB1dCIsImNtZCIsInJlc3BvbnNlIiwib24iLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInN0ZGVyciIsImNodW5rIiwiY2h1bmtTdHIiLCJ0b1N0cmluZyIsImVycm9yIiwid3JpdGUiLCJzcGxpdCIsIm1hcCIsImxpbmUiLCJqb2luIiwid3JpdGVIZWFkIiwic3Rkb3V0IiwicGlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/shell.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/translate.ts"));
module.exports = __webpack_exports__;

})();