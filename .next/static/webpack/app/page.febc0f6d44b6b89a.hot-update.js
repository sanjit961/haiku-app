"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/RegisterForm.jsx":
/*!*****************************************!*\
  !*** ./app/components/RegisterForm.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RegisterForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _actions_userController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userController */ \"(app-pages-browser)/./app/actions/userController.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RegisterForm() {\n    _s();\n    const [formState, formAction] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)(_actions_userController__WEBPACK_IMPORTED_MODULE_2__.register, {});\n    console.log(\"formstate\", formState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: formAction,\n        className: \"max-w-xs mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoComplete: \"off\",\n                    type: \"text\",\n                    name: \"username\",\n                    placeholder: \"Username\",\n                    className: \"input input-bordered w-full max-w-xs\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoComplete: \"off\",\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    className: \"input input-bordered w-full max-w-xs\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary\",\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\our -haiku-app\\\\app\\\\components\\\\RegisterForm.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(RegisterForm, \"MusccIk7cVZA4B8IG0TKFA0HsiE=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState\n    ];\n});\n_c = RegisterForm;\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dEO0FBQ0g7QUFFdEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHTCx1REFBWUEsQ0FBQ0UsNkRBQVFBLEVBQUUsQ0FBQztJQUV4REksUUFBUUMsR0FBRyxDQUFDLGFBQWFIO0lBRXpCLHFCQUNFLDhEQUFDSTtRQUFLQyxRQUFRSjtRQUFZSyxXQUFVOzswQkFDbEMsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRTtvQkFDQ0MsY0FBYTtvQkFDYkMsTUFBSztvQkFDTEMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWk4sV0FBVTs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDRTtvQkFDQ0MsY0FBYTtvQkFDYkMsTUFBSztvQkFDTEMsTUFBSztvQkFDTEMsYUFBWTtvQkFDWk4sV0FBVTs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNPO2dCQUFPUCxXQUFVOzBCQUFrQjs7Ozs7Ozs7Ozs7O0FBRzFDO0dBNUJ3QlA7O1FBQ1VILG1EQUFZQTs7O0tBRHRCRyIsInNvdXJjZXMiOlsiRDpcXG91ciAtaGFpa3UtYXBwXFxhcHBcXGNvbXBvbmVudHNcXFJlZ2lzdGVyRm9ybS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSwgdXNlRm9ybVN0YXR1cyB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJGb3JtKCkge1xyXG4gIGNvbnN0IFtmb3JtU3RhdGUsIGZvcm1BY3Rpb25dID0gdXNlRm9ybVN0YXRlKHJlZ2lzdGVyLCB7fSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZm9ybXN0YXRlXCIsIGZvcm1TdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGFjdGlvbj17Zm9ybUFjdGlvbn0gY2xhc3NOYW1lPVwibWF4LXcteHMgbXgtYXV0b1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUZvcm1TdGF0ZSIsInVzZUZvcm1TdGF0dXMiLCJyZWdpc3RlciIsIlJlZ2lzdGVyRm9ybSIsImZvcm1TdGF0ZSIsImZvcm1BY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImFjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImlucHV0IiwiYXV0b0NvbXBsZXRlIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/RegisterForm.jsx\n"));

/***/ })

});