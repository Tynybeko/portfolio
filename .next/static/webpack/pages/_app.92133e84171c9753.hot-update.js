"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./public/language/i18n.ts":
/*!*********************************!*\
  !*** ./public/language/i18n.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ \"./public/language/en.json\");\n/* harmony import */ var _ru_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ru.json */ \"./public/language/ru.json\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n\n\n\n\nconst resources = {\n    en: {\n        translation: _en_json__WEBPACK_IMPORTED_MODULE_0__\n    },\n    ru: {\n        translation: _ru_json__WEBPACK_IMPORTED_MODULE_1__\n    }\n};\ni18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_2__.initReactI18next).init({\n    resources,\n    lng:  true ? JSON.parse(localStorage.getItem(\"language\")) : 0,\n    fallbackLng: \"ru\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvbGFuZ3VhZ2UvaTE4bi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUNBO0FBRXNCO0FBQ3RCO0FBRzFCLE1BQU1JLFlBQVk7SUFDZEosSUFBSTtRQUNBSyxhQUFhTCxxQ0FBRUE7SUFDbkI7SUFDQUMsSUFBSTtRQUNBSSxhQUFhSixxQ0FBRUE7SUFDbkI7QUFDSjtBQUdBRSxtREFDUSxDQUFDRCwyREFBZ0JBLEVBQ3BCSyxJQUFJLENBQUM7SUFDRkg7SUFDQUksS0FBSyxLQUFrQixHQUFjQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxlQUFlO0lBQ3BGQyxhQUFhO0FBQ2pCO0FBRUosK0RBQWVWLCtDQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9sYW5ndWFnZS9pMThuLnRzPzI3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVuIGZyb20gJy4vZW4uanNvbidcclxuaW1wb3J0IHJ1IGZyb20gJy4vcnUuanNvbidcclxuXHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5pbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xyXG5cclxuXHJcbmNvbnN0IHJlc291cmNlcyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb246IGVuLFxyXG4gICAgfSxcclxuICAgIHJ1OiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb246IHJ1LFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaTE4blxyXG4gICAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxyXG4gICAgLmluaXQoe1xyXG4gICAgICAgIHJlc291cmNlcyxcclxuICAgICAgICBsbmc6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSkgOiAncnUnLFxyXG4gICAgICAgIGZhbGxiYWNrTG5nOiAncnUnXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaTE4bjsiXSwibmFtZXMiOlsiZW4iLCJydSIsImluaXRSZWFjdEkxOG5leHQiLCJpMThuIiwicmVzb3VyY2VzIiwidHJhbnNsYXRpb24iLCJ1c2UiLCJpbml0IiwibG5nIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZhbGxiYWNrTG5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/language/i18n.ts\n"));

/***/ })

});