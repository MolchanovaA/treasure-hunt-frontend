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

/***/ "(app-pages-browser)/./src/components/LoginCard.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginCard.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction LoginCard(defaultPageInfo) {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setUsername(\"\");\n        setPassword(\"\");\n        console.log(\"submitted\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"text\",\n                        placeholder: \"Username...\",\n                        value: username,\n                        required: true,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"password\",\n                        placeholder: \"Password...\",\n                        value: password,\n                        required: true,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Not with us yet? Sign up below:\"\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            children: \"Signup\"\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCard, \"Lrw7JeD9zj6OUWhT/IH4OIvPKEk=\");\n_c = LoginCard;\nvar _c;\n$RefreshReg$(_c, \"LoginCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLFVBQVVDLGVBQWU7O0lBQy9DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkwsWUFBWTtRQUNaRSxZQUFZO1FBRVpJLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsVUFBVVA7O2tDQUVWLDhEQUFDUTt3QkFDQ0YsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT2Y7d0JBQ1BnQixRQUFRO3dCQUNSQyxVQUFVLENBQUNaLElBQU1KLFlBQVlJLEVBQUVhLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUc3Qyw4REFBQ0g7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9iO3dCQUNQYyxRQUFRO3dCQUNSQyxVQUFVLENBQUNaLElBQU1GLFlBQVlFLEVBQUVhLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU3Qyw4REFBQ0k7d0JBQUlULFdBQVU7a0NBQ2IsNEVBQUNVOzRCQUNDVixXQUFVOzRCQUNWRyxNQUFLO3NDQUNOOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ0o7Z0JBQUtDLFdBQVU7O2tDQUNkLDhEQUFDVztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDRjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ1U7NEJBQ0NWLFdBQVU7NEJBQ1ZHLE1BQUs7c0NBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTFEd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvZ2luQ2FyZC5qc3g/ZDg3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2FyZChkZWZhdWx0UGFnZUluZm8pIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybVxuICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHAtOCBtLTgnXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTQgcHktMiBtdC0yIHRleHQtZ3JheS03MDAgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6YmctZ3JheS03MDAnXG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUuLi4nXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNCBweS0yIG10LTIgdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTIwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOnRleHQtZ3JheS0zMDAgZGFyazpiZy1ncmF5LTcwMCdcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQuLi4nXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IG10LTQnPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTQgcHktMiB0cmFja2luZy13aWRlIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBiZy1ncmF5LTgwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktNjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ncmF5LTYwMCdcbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSd3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBwLTgnPlxuICAgICAgICA8cD5Ob3Qgd2l0aCB1cyB5ZXQ/IFNpZ24gdXAgYmVsb3c6PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBtdC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbnVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW5DYXJkIiwiZGVmYXVsdFBhZ2VJbmZvIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJkaXYiLCJidXR0b24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginCard.jsx\n"));

/***/ })

});