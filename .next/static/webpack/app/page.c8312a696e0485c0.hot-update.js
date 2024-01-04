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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_LoginCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/LoginCard */ \"(app-pages-browser)/./src/app/_lib/LoginCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/UserContext */ \"(app-pages-browser)/./src/app/_lib/UserContext.jsx\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../next.config */ \"(app-pages-browser)/./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const pageInfo = {\n        login: {\n            title: \"Login\",\n            firstFormButtonName: \"Login\",\n            secondFormButtonName: \"Sign Up\",\n            secondFormDescription: \"Not with us yet? Sign up below:\"\n        },\n        signup: {\n            title: \"Sign Up\",\n            firstFormButtonName: \"Sign Up\",\n            secondFormButtonName: \"Login\",\n            secondFormDescription: \"Have an account? Login below:\"\n        }\n    };\n    const [defaultPageInfo, setDefaultPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pageInfo.login);\n    const [pageName, setPageName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Login\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (pageName === \"Sign Up\") {\n            setDefaultPageInfo(pageInfo.login);\n        } else if (pageName === \"Login\") {\n            setDefaultPageInfo(pageInfo.signup);\n        }\n    }, [\n        pageName\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setPageName(\"Login\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n        value: user,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-screen bg-cover bg-center flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-6 py-4 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold text-center\",\n                                children: defaultPageInfo.title\n                            }, void 0, false, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 dark:text-gray-200 text-sm text-center\",\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at cumque eos repudiandae itaque a. Laudantium, molestias! Neque sapiente veritatis iusto quis doloremque? Fuga amet at eveniet cumque maiores perspiciatis.\"\n                            }, void 0, false, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_LoginCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        defaultPageInfo: defaultPageInfo,\n                        pageName: pageName,\n                        setPageName: setPageName,\n                        setUser: setUser\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n} // export default function Home() {\n //   return (\n //     <>\n //       {/* <LoginSignUp /> */}\n //       {/* <HomePage /> */}\n //     </>\n //   );\n // }\n_s(Home, \"2z70MaHUCxvzJFROFO4twVSUO9E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ2U7QUFDTztBQUNyQjtBQUNFO0FBRTdCLFNBQVNROztJQUN0QixNQUFNQyxXQUFXO1FBQ2ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO1FBQ0FDLFFBQVE7WUFDTkosT0FBTztZQUNQQyxxQkFBcUI7WUFDckJDLHNCQUFzQjtZQUN0QkMsdUJBQXVCO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNLENBQUNFLGlCQUFpQkMsbUJBQW1CLEdBQUdoQiwrQ0FBUUEsQ0FBQ1EsU0FBU0MsS0FBSztJQUNyRSxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ21CLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQTtJQUVoQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJZ0IsYUFBYSxXQUFXO1lBQzFCRCxtQkFBbUJSLFNBQVNDLEtBQUs7UUFDbkMsT0FBTyxJQUFJUSxhQUFhLFNBQVM7WUFDL0JELG1CQUFtQlIsU0FBU00sTUFBTTtRQUNwQztJQUNGLEdBQUc7UUFBQ0c7S0FBUztJQUViaEIsZ0RBQVNBLENBQUM7UUFDUmlCLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2QsMERBQVlBO1FBQUNpQixPQUFPRjtrQkFDbkIsNEVBQUNHO3NCQUNDLDRFQUFDQztnQkFBUUMsV0FBVTs7a0NBQ2pCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUNYVCxnQkFBZ0JMLEtBQUs7Ozs7OzswQ0FFeEIsOERBQUNpQjtnQ0FBRUgsV0FBVTswQ0FBdUQ7Ozs7Ozs7Ozs7OztrQ0FPdEUsOERBQUN6QixzREFBU0E7d0JBQ1JnQixpQkFBaUJBO3dCQUNqQkUsVUFBVUE7d0JBQ1ZDLGFBQWFBO3dCQUNiRSxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQixFQUVBLG1DQUFtQztDQUNuQyxhQUFhO0NBQ2IsU0FBUztDQUNULGdDQUFnQztDQUVoQyw2QkFBNkI7Q0FDN0IsVUFBVTtDQUNWLE9BQU87Q0FDUCxJQUFJO0dBcEVvQmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMb2dpbkNhcmQgZnJvbSBcIi4vX2xpYi9Mb2dpbkNhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfSBmcm9tIFwiLi9fbGliL1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBSeEF2YXRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IHsgbG9nZ2luZyB9IGZyb20gXCIuLi8uLi9uZXh0LmNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBwYWdlSW5mbyA9IHtcbiAgICBsb2dpbjoge1xuICAgICAgdGl0bGU6IFwiTG9naW5cIixcbiAgICAgIGZpcnN0Rm9ybUJ1dHRvbk5hbWU6IFwiTG9naW5cIixcbiAgICAgIHNlY29uZEZvcm1CdXR0b25OYW1lOiBcIlNpZ24gVXBcIixcbiAgICAgIHNlY29uZEZvcm1EZXNjcmlwdGlvbjogXCJOb3Qgd2l0aCB1cyB5ZXQ/IFNpZ24gdXAgYmVsb3c6XCIsXG4gICAgfSxcbiAgICBzaWdudXA6IHtcbiAgICAgIHRpdGxlOiBcIlNpZ24gVXBcIixcbiAgICAgIGZpcnN0Rm9ybUJ1dHRvbk5hbWU6IFwiU2lnbiBVcFwiLFxuICAgICAgc2Vjb25kRm9ybUJ1dHRvbk5hbWU6IFwiTG9naW5cIixcbiAgICAgIHNlY29uZEZvcm1EZXNjcmlwdGlvbjogXCJIYXZlIGFuIGFjY291bnQ/IExvZ2luIGJlbG93OlwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgW2RlZmF1bHRQYWdlSW5mbywgc2V0RGVmYXVsdFBhZ2VJbmZvXSA9IHVzZVN0YXRlKHBhZ2VJbmZvLmxvZ2luKTtcbiAgY29uc3QgW3BhZ2VOYW1lLCBzZXRQYWdlTmFtZV0gPSB1c2VTdGF0ZShcIkxvZ2luXCIpO1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFnZU5hbWUgPT09IFwiU2lnbiBVcFwiKSB7XG4gICAgICBzZXREZWZhdWx0UGFnZUluZm8ocGFnZUluZm8ubG9naW4pO1xuICAgIH0gZWxzZSBpZiAocGFnZU5hbWUgPT09IFwiTG9naW5cIikge1xuICAgICAgc2V0RGVmYXVsdFBhZ2VJbmZvKHBhZ2VJbmZvLnNpZ251cCk7XG4gICAgfVxuICB9LCBbcGFnZU5hbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VOYW1lKFwiTG9naW5cIik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1mdWxsIGgtc2NyZWVuIGJnLWNvdmVyIGJnLWNlbnRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTYgcHktNCBtYi0yJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIHtkZWZhdWx0UGFnZUluZm8udGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTIwMCB0ZXh0LXNtIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvcyBhdFxuICAgICAgICAgICAgICBjdW1xdWUgZW9zIHJlcHVkaWFuZGFlIGl0YXF1ZSBhLiBMYXVkYW50aXVtLCBtb2xlc3RpYXMhIE5lcXVlXG4gICAgICAgICAgICAgIHNhcGllbnRlIHZlcml0YXRpcyBpdXN0byBxdWlzIGRvbG9yZW1xdWU/IEZ1Z2EgYW1ldCBhdCBldmVuaWV0XG4gICAgICAgICAgICAgIGN1bXF1ZSBtYWlvcmVzIHBlcnNwaWNpYXRpcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TG9naW5DYXJkXG4gICAgICAgICAgICBkZWZhdWx0UGFnZUluZm89e2RlZmF1bHRQYWdlSW5mb31cbiAgICAgICAgICAgIHBhZ2VOYW1lPXtwYWdlTmFtZX1cbiAgICAgICAgICAgIHNldFBhZ2VOYW1lPXtzZXRQYWdlTmFtZX1cbiAgICAgICAgICAgIHNldFVzZXI9e3NldFVzZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvVXNlclByb3ZpZGVyPlxuICApO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICB7LyogPExvZ2luU2lnblVwIC8+ICovfVxuXG4vLyAgICAgICB7LyogPEhvbWVQYWdlIC8+ICovfVxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiUnhBdmF0YXIiLCJsb2dnaW5nIiwiSG9tZSIsInBhZ2VJbmZvIiwibG9naW4iLCJ0aXRsZSIsImZpcnN0Rm9ybUJ1dHRvbk5hbWUiLCJzZWNvbmRGb3JtQnV0dG9uTmFtZSIsInNlY29uZEZvcm1EZXNjcmlwdGlvbiIsInNpZ251cCIsImRlZmF1bHRQYWdlSW5mbyIsInNldERlZmF1bHRQYWdlSW5mbyIsInBhZ2VOYW1lIiwic2V0UGFnZU5hbWUiLCJ1c2VyIiwic2V0VXNlciIsInZhbHVlIiwibWFpbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});