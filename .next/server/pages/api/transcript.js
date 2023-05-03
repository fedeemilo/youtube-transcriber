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
exports.id = "pages/api/transcript";
exports.ids = ["pages/api/transcript"];
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

/***/ "(api)/./pages/api/transcript.ts":
/*!*********************************!*\
  !*** ./pages/api/transcript.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/shell */ \"(api)/./utils/shell.ts\");\n\n\n\nfunction GET(request, response) {\n    const video_id = request.query.video_id;\n    if (typeof video_id !== \"string\") {\n        response.status(400).json({\n            error: \"Invalid request\"\n        });\n        return;\n    }\n    console.log(\"Video ID:\", video_id);\n    const cmd = (0,child_process__WEBPACK_IMPORTED_MODULE_0__.spawn)(\"python3\", [\n        path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"scripts/transcribe.py\"),\n        video_id || \"\"\n    ]);\n    (0,_utils_shell__WEBPACK_IMPORTED_MODULE_2__.transferChildProcessOutput)(cmd, response);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNjcmlwdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUM7QUFDZDtBQUN1QztBQUUvQyxTQUFTRyxJQUN0QkMsT0FBdUIsRUFDdkJDLFFBQXlCLEVBQ3pCO0lBQ0EsTUFBTUMsV0FBV0YsUUFBUUcsS0FBSyxDQUFDRCxRQUFRO0lBQ3ZDLElBQUksT0FBT0EsYUFBYSxVQUFVO1FBQ2hDRCxTQUFTRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBa0I7UUFDckQ7SUFDRixDQUFDO0lBRURDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhTjtJQUV6QixNQUFNTyxNQUFNYixvREFBS0EsQ0FBQyxXQUFXO1FBQzNCQyxnREFBUyxDQUFDYyxRQUFRQyxHQUFHLElBQUk7UUFDekJWLFlBQVk7S0FDYjtJQUVESix3RUFBMEJBLENBQUNXLEtBQUtSO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdHJhbnNjcmlwdC50cz8wMmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgdHJhbnNmZXJDaGlsZFByb2Nlc3NPdXRwdXQgfSBmcm9tICcuLi8uLi91dGlscy9zaGVsbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR0VUKFxuICByZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHZpZGVvX2lkID0gcmVxdWVzdC5xdWVyeS52aWRlb19pZCBhcyBzdHJpbmdcbiAgaWYgKHR5cGVvZiB2aWRlb19pZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXNwb25zZS5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHJlcXVlc3QnIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zb2xlLmxvZygnVmlkZW8gSUQ6JywgdmlkZW9faWQpXG5cbiAgY29uc3QgY21kID0gc3Bhd24oJ3B5dGhvbjMnLCBbXG4gICAgcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzY3JpcHRzL3RyYW5zY3JpYmUucHknKSxcbiAgICB2aWRlb19pZCB8fCAnJ1xuICBdKVxuXG4gIHRyYW5zZmVyQ2hpbGRQcm9jZXNzT3V0cHV0KGNtZCwgcmVzcG9uc2UpXG59XG4iXSwibmFtZXMiOlsic3Bhd24iLCJwYXRoIiwidHJhbnNmZXJDaGlsZFByb2Nlc3NPdXRwdXQiLCJHRVQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ2aWRlb19pZCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNtZCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/transcript.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transcript.ts"));
module.exports = __webpack_exports__;

})();