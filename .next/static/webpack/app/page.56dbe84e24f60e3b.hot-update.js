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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction LoginCard(param) {\n    let { pageName, setPageName } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setUsername(\"\");\n        setPassword(\"\");\n        console.log(\"submitted\");\n    };\n    const handleClick = (e)=>{\n        e.preventDefault();\n        if (pageName === \"Sign Up\") {\n            setPageName();\n        }\n        setPageName();\n        console.log(\"clicked\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"text\",\n                        placeholder: \"Username...\",\n                        value: username,\n                        required: true,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"password\",\n                        placeholder: \"Password...\",\n                        value: password,\n                        required: true,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            children: firstFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: secondFormDescription\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            onClick: handleClick,\n                            children: secondFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/components/LoginCard.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCard, \"Lrw7JeD9zj6OUWhT/IH4OIvPKEk=\");\n_c = LoginCard;\nvar _c;\n$RefreshReg$(_c, \"LoginCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvZ2luQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLFVBQVUsS0FBdUI7UUFBdkIsRUFBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUMsR0FBdkI7O0lBQ2hDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTVMsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkwsWUFBWTtRQUNaRSxZQUFZO1FBQ1pJLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsTUFBTUMsY0FBYyxDQUFDSjtRQUNuQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJUixhQUFhLFdBQVc7WUFDeEJDO1FBQ0o7UUFDQUE7UUFDQVEsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNFO2dCQUNDQyxXQUFVO2dCQUNWQyxVQUFVUjs7a0NBRVYsOERBQUNTO3dCQUNDRixXQUFVO3dCQUNWRyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPaEI7d0JBQ1BpQixRQUFRO3dCQUNSQyxVQUFVLENBQUNiLElBQU1KLFlBQVlJLEVBQUVjLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUc3Qyw4REFBQ0g7d0JBQ0NGLFdBQVU7d0JBQ1ZHLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9kO3dCQUNQZSxRQUFRO3dCQUNSQyxVQUFVLENBQUNiLElBQU1GLFlBQVlFLEVBQUVjLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU3Qyw4REFBQ0k7d0JBQUlULFdBQVU7a0NBQ2IsNEVBQUNVOzRCQUNDVixXQUFVOzRCQUNWRyxNQUFLO3NDQUVKUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS1AsOERBQUNaO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ1k7a0NBQUdDOzs7Ozs7a0NBQ0osOERBQUNKO3dCQUFJVCxXQUFVO2tDQUNiLDRFQUFDVTs0QkFDQ1YsV0FBVTs0QkFDVkcsTUFBSzs0QkFDTFcsU0FBV2hCO3NDQUVWaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQW5Fd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkNhcmQuanN4P2Q4N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoe3BhZ2VOYW1lLCBzZXRQYWdlTmFtZX0pIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHBhZ2VOYW1lID09PSAnU2lnbiBVcCcpIHtcbiAgICAgICAgc2V0UGFnZU5hbWUoKVxuICAgIH1cbiAgICBzZXRQYWdlTmFtZSgpXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBwLTggbS04J1xuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgbXQtMiB0ZXh0LWdyYXktNzAwIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOmJnLWdyYXktNzAwJ1xuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lLi4uJ1xuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTQgcHktMiBtdC0yIHRleHQtZ3JheS03MDAgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6YmctZ3JheS03MDAnXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkLi4uJ1xuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBtdC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpcnN0Rm9ybUJ1dHRvbk5hbWV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHAtOCc+XG4gICAgICAgIDxwPntzZWNvbmRGb3JtRGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBtdC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICBvbkNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWNvbmRGb3JtQnV0dG9uTmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2dpbkNhcmQiLCJwYWdlTmFtZSIsInNldFBhZ2VOYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsImRpdiIsImJ1dHRvbiIsImZpcnN0Rm9ybUJ1dHRvbk5hbWUiLCJwIiwic2Vjb25kRm9ybURlc2NyaXB0aW9uIiwib25DbGljayIsInNlY29uZEZvcm1CdXR0b25OYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LoginCard.jsx\n"));

/***/ })

});