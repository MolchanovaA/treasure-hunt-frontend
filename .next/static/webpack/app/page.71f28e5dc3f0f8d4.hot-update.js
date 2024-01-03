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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_LoginCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/LoginCard */ \"(app-pages-browser)/./src/components/LoginCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Login() {\n    _s();\n    const pageInfo = {\n        login: {\n            title: \"Login\",\n            firstFormButtonName: \"Login\",\n            secondFormButtonName: \"Sign Up\",\n            secondFormDescription: \"Not with us yet? Sign up below:\"\n        },\n        signup: {\n            title: \"Sign Up\",\n            firstFormButtonName: \"Sign Up\",\n            secondFormButtonName: \"Login\",\n            secondFormDescription: \"Have an account? Login below:\"\n        }\n    };\n    const [defaultPageInfo, setDefaultPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pageInfo.login);\n    const [pageName, setPageName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"login\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (pageName === \"Sign Up\") {\n            setDefaultPageInfo(pageInfo.signup);\n        } else if (pageName === \"Login\") {\n            setDefaultPageInfo(pageInfo.login);\n        }\n    }, [\n        pageName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"w-full h-screen bg-cover bg-center flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-6 py-4 mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold text-center\",\n                            children: defaultPageInfo.title\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600 dark:text-gray-200 text-sm text-center\",\n                            children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at cumque eos repudiandae itaque a. Laudantium, molestias! Neque sapiente veritatis iusto quis doloremque? Fuga amet at eveniet cumque maiores perspiciatis.\"\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    pageName: pageName,\n                    setPageName: setPageName\n                }, void 0, false, {\n                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/pages/Login-SignUp.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"GbuH4rUJraMrAxVmWt3o9M8zpBE=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9Mb2dpbi1TaWduVXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNIO0FBRTdCLFNBQVNHOztJQUN0QixNQUFNQyxXQUFXO1FBQ2ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO1FBQ0FDLFFBQVE7WUFDTkosT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNLENBQUNFLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDRyxTQUFTQyxLQUFLO0lBQ3JFLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxhQUFhLFdBQVc7WUFDMUJELG1CQUFtQlIsU0FBU00sTUFBTTtRQUNwQyxPQUFPLElBQUlHLGFBQWEsU0FBUztZQUMvQkQsbUJBQW1CUixTQUFTQyxLQUFLO1FBQ25DO0lBQ0YsR0FBRztRQUFDUTtLQUFTO0lBRWIscUJBQ0UsOERBQUNFO2tCQUNDLDRFQUFDQztZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1hOLGdCQUFnQkwsS0FBSzs7Ozs7O3NDQUV4Qiw4REFBQ2M7NEJBQUVILFdBQVU7c0NBQXVEOzs7Ozs7Ozs7Ozs7OEJBT3RFLDhEQUFDakIsNkRBQVNBO29CQUFDYSxVQUFVQTtvQkFBVUMsYUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBEO0dBN0N3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0xvZ2luLVNpZ25VcC5qcz8xNWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dpbkNhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHBhZ2VJbmZvID0ge1xuICAgIGxvZ2luOiB7XG4gICAgICB0aXRsZTogXCJMb2dpblwiLFxuICAgICAgZmlyc3RGb3JtQnV0dG9uTmFtZTogXCJMb2dpblwiLFxuICAgICAgc2Vjb25kRm9ybUJ1dHRvbk5hbWU6IFwiU2lnbiBVcFwiLFxuICAgICAgc2Vjb25kRm9ybURlc2NyaXB0aW9uOiBcIk5vdCB3aXRoIHVzIHlldD8gU2lnbiB1cCBiZWxvdzpcIixcbiAgICB9LFxuICAgIHNpZ251cDoge1xuICAgICAgdGl0bGU6IFwiU2lnbiBVcFwiLFxuICAgICAgZmlyc3RGb3JtQnV0dG9uTmFtZTogXCJTaWduIFVwXCIsXG4gICAgICBzZWNvbmRGb3JtQnV0dG9uTmFtZTogXCJMb2dpblwiLFxuICAgICAgc2Vjb25kRm9ybURlc2NyaXB0aW9uOiBcIkhhdmUgYW4gYWNjb3VudD8gTG9naW4gYmVsb3c6XCIsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBbZGVmYXVsdFBhZ2VJbmZvLCBzZXREZWZhdWx0UGFnZUluZm9dID0gdXNlU3RhdGUocGFnZUluZm8ubG9naW4pO1xuICBjb25zdCBbcGFnZU5hbWUsIHNldFBhZ2VOYW1lXSA9IHVzZVN0YXRlKFwibG9naW5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFnZU5hbWUgPT09IFwiU2lnbiBVcFwiKSB7XG4gICAgICBzZXREZWZhdWx0UGFnZUluZm8ocGFnZUluZm8uc2lnbnVwKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIkxvZ2luXCIpIHtcbiAgICAgIHNldERlZmF1bHRQYWdlSW5mbyhwYWdlSW5mby5sb2dpbik7XG4gICAgfVxuICB9LCBbcGFnZU5hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd3LWZ1bGwgaC1zY3JlZW4gYmctY292ZXIgYmctY2VudGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTYgcHktNCBtYi0yJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAge2RlZmF1bHRQYWdlSW5mby50aXRsZX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0yMDAgdGV4dC1zbSB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdW9zIGF0XG4gICAgICAgICAgICBjdW1xdWUgZW9zIHJlcHVkaWFuZGFlIGl0YXF1ZSBhLiBMYXVkYW50aXVtLCBtb2xlc3RpYXMhIE5lcXVlXG4gICAgICAgICAgICBzYXBpZW50ZSB2ZXJpdGF0aXMgaXVzdG8gcXVpcyBkb2xvcmVtcXVlPyBGdWdhIGFtZXQgYXQgZXZlbmlldFxuICAgICAgICAgICAgY3VtcXVlIG1haW9yZXMgcGVyc3BpY2lhdGlzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMb2dpbkNhcmQgcGFnZU5hbWU9e3BhZ2VOYW1lfSBzZXRQYWdlTmFtZT17c2V0UGFnZU5hbWV9IC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW4iLCJwYWdlSW5mbyIsImxvZ2luIiwidGl0bGUiLCJmaXJzdEZvcm1CdXR0b25OYW1lIiwic2Vjb25kRm9ybUJ1dHRvbk5hbWUiLCJzZWNvbmRGb3JtRGVzY3JpcHRpb24iLCJzaWdudXAiLCJkZWZhdWx0UGFnZUluZm8iLCJzZXREZWZhdWx0UGFnZUluZm8iLCJwYWdlTmFtZSIsInNldFBhZ2VOYW1lIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/Login-SignUp.js\n"));

/***/ })

});