"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/language/use-localstorage.ts":
/*!*********************************************!*\
  !*** ./public/language/use-localstorage.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useLocalStorage = (key, defaultValue)=>{\n    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        try {\n            const value = localStorage.getItem(key);\n            if (value) {\n                return JSON.parse(value);\n            } else {\n                localStorage.setItem(key, JSON.stringify(defaultValue));\n                return defaultValue !== null && defaultValue !== void 0 ? defaultValue : \"ru\";\n            }\n        } catch (error) {\n            return defaultValue;\n        }\n    });\n    const setValue = (newValue)=>{\n        try {\n            localStorage.setItem(key, JSON.stringify(newValue));\n        } catch (error) {\n            console.log(error);\n        }\n        setStoredValue(newValue);\n    };\n    return [\n        storedValue,\n        setValue\n    ];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalStorage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvbGFuZ3VhZ2UvdXNlLWxvY2Fsc3RvcmFnZS50cyIsIm1hcHBpbmdzIjoiOzs7QUFBZ0M7QUFFaEMsTUFBTUMsa0JBQWtCLENBQUNDLEtBQWFDO0lBQ2xDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUMzQyxJQUFJO1lBQ0EsTUFBTU0sUUFBUUMsYUFBYUMsT0FBTyxDQUFDTjtZQUNuQyxJQUFJSSxPQUFPO2dCQUNQLE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0o7WUFDdEIsT0FBTztnQkFDSEMsYUFBYUksT0FBTyxDQUFDVCxLQUFLTyxLQUFLRyxTQUFTLENBQUNUO2dCQUN6QyxPQUFPQSx5QkFBQUEsMEJBQUFBLGVBQWdCO1lBQzNCO1FBQ0osRUFBRSxPQUFPVSxPQUFPO1lBQ1osT0FBT1Y7UUFDWDtJQUNKO0lBR0EsTUFBTVcsV0FBVyxDQUFDQztRQUNkLElBQUk7WUFDQVIsYUFBYUksT0FBTyxDQUFDVCxLQUFLTyxLQUFLRyxTQUFTLENBQUNHO1FBQzdDLEVBQUUsT0FBT0YsT0FBTztZQUNaRyxRQUFRQyxHQUFHLENBQUNKO1FBQ2hCO1FBQ0FSLGVBQWVVO0lBQ25CO0lBRUEsT0FBTztRQUFDWDtRQUFhVTtLQUFTO0FBQ2xDO0FBRUEsK0RBQWViLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2xhbmd1YWdlL3VzZS1sb2NhbHN0b3JhZ2UudHM/ODMxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgW3N0b3JlZFZhbHVlLCBzZXRTdG9yZWRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlID8/ICdydSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IHNldFZhbHVlID0gKG5ld1ZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U3RvcmVkVmFsdWUobmV3VmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RvcmFnZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUxvY2FsU3RvcmFnZSIsImtleSIsImRlZmF1bHRWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzZXRWYWx1ZSIsIm5ld1ZhbHVlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/language/use-localstorage.ts\n"));

/***/ })

});