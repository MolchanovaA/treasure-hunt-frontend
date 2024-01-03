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

/***/ "(app-pages-browser)/./src/pages/Login-SignUp.js":
/*!***********************************!*\
  !*** ./src/pages/Login-SignUp.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/LoginCard */ \"(app-pages-browser)/./src/components/LoginCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const pageInfo = {\n        login: {\n            title: \"Login\",\n            firstFormButtonName: \"Login\",\n            secondFormButtonName: \"Sign Up\",\n            secondFormDescription: \"Not with us yet? Sign up below:\"\n        },\n        signup: {\n            title: \"Sign Up\",\n            firstFormButtonName: \"Sign Up\",\n            secondFormButtonName: \"Login\",\n            secondFormDescription: \"Have an account? Login below:\"\n        }\n    };\n    const [defaultPageInfo, setDefaultPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pageInfo.login);\n    const [pageName, setPageName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console;\n        if (pageName === \"Sign Up\") {\n            setDefaultPageInfo(pageInfo.signup);\n        } else if (pageName === \"Login\") {\n            setDefaultPageInfo(pageInfo.login);\n        }\n    }, [\n        pageName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-full h-screen bg-cover bg-center flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 py-4 mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold text-center\",\n                            children: defaultPageInfo.title\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600 dark:text-gray-200 text-sm text-center\",\n                            children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at cumque eos repudiandae itaque a. Laudantium, molestias! Neque sapiente veritatis iusto quis doloremque? Fuga amet at eveniet cumque maiores perspiciatis.\"\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    defaultPageInfo: defaultPageInfo,\n                    pageName: pageName,\n                    setPageName: setPageName\n                }, void 0, false, {\n                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"GbuH4rUJraMrAxVmWt3o9M8zpBE=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9Mb2dpbi1TaWduVXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNIO0FBRTdCLFNBQVNHOztJQUN0QixNQUFNQyxXQUFXO1FBQ2ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO1FBQ0FDLFFBQVE7WUFDTkosT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNLENBQUNFLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDRyxTQUFTQyxLQUFLO0lBQ3JFLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUmE7UUFDQSxJQUFJRixhQUFhLFdBQVc7WUFDMUJELG1CQUFtQlIsU0FBU00sTUFBTTtRQUNwQyxPQUFPLElBQUlHLGFBQWEsU0FBUztZQUMvQkQsbUJBQW1CUixTQUFTQyxLQUFLO1FBQ25DO0lBQ0YsR0FBRztRQUFDUTtLQUFTO0lBRWIscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1hQLGdCQUFnQkwsS0FBSzs7Ozs7O3NDQUV4Qiw4REFBQ2U7NEJBQUVILFdBQVU7c0NBQXVEOzs7Ozs7Ozs7Ozs7OEJBT3RFLDhEQUFDbEIsNkRBQVNBO29CQUFDVyxpQkFBaUJBO29CQUFpQkUsVUFBVUE7b0JBQVVDLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RjtHQTlDd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Mb2dpbi1TaWduVXAuanM/MTVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW5DYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvTG9naW5DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBwYWdlSW5mbyA9IHtcbiAgICBsb2dpbjoge1xuICAgICAgdGl0bGU6IFwiTG9naW5cIixcbiAgICAgIGZpcnN0Rm9ybUJ1dHRvbk5hbWU6IFwiTG9naW5cIixcbiAgICAgIHNlY29uZEZvcm1CdXR0b25OYW1lOiBcIlNpZ24gVXBcIixcbiAgICAgIHNlY29uZEZvcm1EZXNjcmlwdGlvbjogXCJOb3Qgd2l0aCB1cyB5ZXQ/IFNpZ24gdXAgYmVsb3c6XCIsXG4gICAgfSxcbiAgICBzaWdudXA6IHtcbiAgICAgIHRpdGxlOiBcIlNpZ24gVXBcIixcbiAgICAgIGZpcnN0Rm9ybUJ1dHRvbk5hbWU6IFwiU2lnbiBVcFwiLFxuICAgICAgc2Vjb25kRm9ybUJ1dHRvbk5hbWU6IFwiTG9naW5cIixcbiAgICAgIHNlY29uZEZvcm1EZXNjcmlwdGlvbjogXCJIYXZlIGFuIGFjY291bnQ/IExvZ2luIGJlbG93OlwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgW2RlZmF1bHRQYWdlSW5mbywgc2V0RGVmYXVsdFBhZ2VJbmZvXSA9IHVzZVN0YXRlKHBhZ2VJbmZvLmxvZ2luKTtcbiAgY29uc3QgW3BhZ2VOYW1lLCBzZXRQYWdlTmFtZV0gPSB1c2VTdGF0ZShcImxvZ2luXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZVxuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJTaWduIFVwXCIpIHtcbiAgICAgIHNldERlZmF1bHRQYWdlSW5mbyhwYWdlSW5mby5zaWdudXApO1xuICAgIH0gZWxzZSBpZiAocGFnZU5hbWUgPT09IFwiTG9naW5cIikge1xuICAgICAgc2V0RGVmYXVsdFBhZ2VJbmZvKHBhZ2VJbmZvLmxvZ2luKTtcbiAgICB9XG4gIH0sIFtwYWdlTmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctZnVsbCBoLXNjcmVlbiBiZy1jb3ZlciBiZy1jZW50ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNiBweS00IG1iLTInPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICB7ZGVmYXVsdFBhZ2VJbmZvLnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCB0ZXh0LXNtIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1b3MgYXRcbiAgICAgICAgICAgIGN1bXF1ZSBlb3MgcmVwdWRpYW5kYWUgaXRhcXVlIGEuIExhdWRhbnRpdW0sIG1vbGVzdGlhcyEgTmVxdWVcbiAgICAgICAgICAgIHNhcGllbnRlIHZlcml0YXRpcyBpdXN0byBxdWlzIGRvbG9yZW1xdWU/IEZ1Z2EgYW1ldCBhdCBldmVuaWV0XG4gICAgICAgICAgICBjdW1xdWUgbWFpb3JlcyBwZXJzcGljaWF0aXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExvZ2luQ2FyZCBkZWZhdWx0UGFnZUluZm89e2RlZmF1bHRQYWdlSW5mb30gcGFnZU5hbWU9e3BhZ2VOYW1lfSBzZXRQYWdlTmFtZT17c2V0UGFnZU5hbWV9IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW4iLCJwYWdlSW5mbyIsImxvZ2luIiwidGl0bGUiLCJmaXJzdEZvcm1CdXR0b25OYW1lIiwic2Vjb25kRm9ybUJ1dHRvbk5hbWUiLCJzZWNvbmRGb3JtRGVzY3JpcHRpb24iLCJzaWdudXAiLCJkZWZhdWx0UGFnZUluZm8iLCJzZXREZWZhdWx0UGFnZUluZm8iLCJwYWdlTmFtZSIsInNldFBhZ2VOYW1lIiwiY29uc29sZSIsIm1haW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/Login-SignUp.js\n"));

/***/ })

});