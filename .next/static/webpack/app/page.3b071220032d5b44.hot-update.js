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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_LoginCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/LoginCard */ \"(app-pages-browser)/./src/app/_lib/LoginCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/UserContext */ \"(app-pages-browser)/./src/app/_lib/UserContext.jsx\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../next.config */ \"(app-pages-browser)/./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const pageInfo = {\n        login: {\n            title: \"Login\",\n            firstFormButtonName: \"Login\",\n            secondFormButtonName: \"Sign Up\",\n            secondFormDescription: \"Not with us yet? Sign up below:\"\n        },\n        signup: {\n            title: \"Sign Up\",\n            firstFormButtonName: \"Sign Up\",\n            secondFormButtonName: \"Login\",\n            secondFormDescription: \"Have an account? Login below:\"\n        }\n    };\n    const [defaultPageInfo, setDefaultPageInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(pageInfo.login);\n    const [pageName, setPageName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Login\");\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    console.log(loggedInUser, \"loggedINUser\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (pageName === \"Sign Up\") {\n            setDefaultPageInfo(pageInfo.login);\n        } else if (pageName === \"Login\") {\n            setDefaultPageInfo(pageInfo.signup);\n        }\n    }, [\n        pageName\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user.username !== \"default_user\") {\n            (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(user);\n        }\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setPageName(\"Login\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: user,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full h-screen bg-cover bg-center flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-6 py-4 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold text-center\",\n                                children: defaultPageInfo.title\n                            }, void 0, false, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 dark:text-gray-200 text-sm text-center\",\n                                children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at cumque eos repudiandae itaque a. Laudantium, molestias! Neque sapiente veritatis iusto quis doloremque? Fuga amet at eveniet cumque maiores perspiciatis.\"\n                            }, void 0, false, {\n                                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_LoginCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        defaultPageInfo: defaultPageInfo,\n                        pageName: pageName,\n                        setPageName: setPageName,\n                        setUser: setUser\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n            lineNumber: 52,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n} // export default function Home() {\n //   return (\n //     <>\n //       {/* <LoginSignUp /> */}\n //       {/* <HomePage /> */}\n //     </>\n //   );\n // }\n_s(Home, \"dPGLLr5mXbY+bc2fVTEzF4jpTA0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ2U7QUFDWDtBQUNIO0FBQ0U7QUFFN0IsU0FBU087O0lBQ3RCLE1BQU1DLFdBQVc7UUFDZkMsT0FBTztZQUNMQyxPQUFPO1lBQ1BDLHFCQUFxQjtZQUNyQkMsc0JBQXNCO1lBQ3RCQyx1QkFBdUI7UUFDekI7UUFDQUMsUUFBUTtZQUNOSixPQUFPO1lBQ1BDLHFCQUFxQjtZQUNyQkMsc0JBQXNCO1lBQ3RCQyx1QkFBdUI7UUFDekI7SUFDRjtJQUVBLE1BQU0sQ0FBQ0UsaUJBQWlCQyxtQkFBbUIsR0FBR2YsK0NBQVFBLENBQUNPLFNBQVNDLEtBQUs7SUFDckUsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNrQixNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUE7SUFFaENvQixRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFFMUJyQixnREFBU0EsQ0FBQztRQUNSLElBQUllLGFBQWEsV0FBVztZQUMxQkQsbUJBQW1CUixTQUFTQyxLQUFLO1FBQ25DLE9BQU8sSUFBSVEsYUFBYSxTQUFTO1lBQy9CRCxtQkFBbUJSLFNBQVNNLE1BQU07UUFDcEM7SUFDRixHQUFHO1FBQUNHO0tBQVM7SUFFYmYsZ0RBQVNBLENBQUM7UUFDUixJQUFJaUIsS0FBS0ssUUFBUSxLQUFLLGdCQUFnQjtZQUNwQ3JCLGlEQUFVQSxDQUFDZ0I7UUFDYjtJQUNGLEdBQUc7UUFBQ0E7S0FBSztJQUVUakIsZ0RBQVNBLENBQUM7UUFDUmdCLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2Qsd0RBQVdBLENBQUNxQixRQUFRO1FBQUNDLE9BQU9QO2tCQUM3Qiw0RUFBQ1E7c0JBQ0MsNEVBQUNDO2dCQUFRQyxXQUFVOztrQ0FDakIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQ1hkLGdCQUFnQkwsS0FBSzs7Ozs7OzBDQUV4Qiw4REFBQ3NCO2dDQUFFSCxXQUFVOzBDQUF1RDs7Ozs7Ozs7Ozs7O2tDQU90RSw4REFBQzdCLHNEQUFTQTt3QkFDUmUsaUJBQWlCQTt3QkFDakJFLFVBQVVBO3dCQUNWQyxhQUFhQTt3QkFDYkUsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkIsRUFFQSxtQ0FBbUM7Q0FDbkMsYUFBYTtDQUNiLFNBQVM7Q0FDVCxnQ0FBZ0M7Q0FFaEMsNkJBQTZCO0NBQzdCLFVBQVU7Q0FDVixPQUFPO0NBQ1AsSUFBSTtHQTVFb0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTG9naW5DYXJkIGZyb20gXCIuL19saWIvTG9naW5DYXJkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXNlckNvbnRleHQgZnJvbSBcIi4vX2xpYi9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgUnhBdmF0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcbmltcG9ydCB7IGxvZ2dpbmcgfSBmcm9tIFwiLi4vLi4vbmV4dC5jb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcGFnZUluZm8gPSB7XG4gICAgbG9naW46IHtcbiAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXG4gICAgICBmaXJzdEZvcm1CdXR0b25OYW1lOiBcIkxvZ2luXCIsXG4gICAgICBzZWNvbmRGb3JtQnV0dG9uTmFtZTogXCJTaWduIFVwXCIsXG4gICAgICBzZWNvbmRGb3JtRGVzY3JpcHRpb246IFwiTm90IHdpdGggdXMgeWV0PyBTaWduIHVwIGJlbG93OlwiLFxuICAgIH0sXG4gICAgc2lnbnVwOiB7XG4gICAgICB0aXRsZTogXCJTaWduIFVwXCIsXG4gICAgICBmaXJzdEZvcm1CdXR0b25OYW1lOiBcIlNpZ24gVXBcIixcbiAgICAgIHNlY29uZEZvcm1CdXR0b25OYW1lOiBcIkxvZ2luXCIsXG4gICAgICBzZWNvbmRGb3JtRGVzY3JpcHRpb246IFwiSGF2ZSBhbiBhY2NvdW50PyBMb2dpbiBiZWxvdzpcIixcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IFtkZWZhdWx0UGFnZUluZm8sIHNldERlZmF1bHRQYWdlSW5mb10gPSB1c2VTdGF0ZShwYWdlSW5mby5sb2dpbik7XG4gIGNvbnN0IFtwYWdlTmFtZSwgc2V0UGFnZU5hbWVdID0gdXNlU3RhdGUoXCJMb2dpblwiKTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpXG5cbiAgY29uc29sZS5sb2cobG9nZ2VkSW5Vc2VyLCAnbG9nZ2VkSU5Vc2VyJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJTaWduIFVwXCIpIHtcbiAgICAgIHNldERlZmF1bHRQYWdlSW5mbyhwYWdlSW5mby5sb2dpbik7XG4gICAgfSBlbHNlIGlmIChwYWdlTmFtZSA9PT0gXCJMb2dpblwiKSB7XG4gICAgICBzZXREZWZhdWx0UGFnZUluZm8ocGFnZUluZm8uc2lnbnVwKTtcbiAgICB9XG4gIH0sIFtwYWdlTmFtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIudXNlcm5hbWUgIT09ICdkZWZhdWx0X3VzZXInKSB7XG4gICAgICB1c2VDb250ZXh0KHVzZXIpXG4gICAgfVxuICB9LCBbdXNlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlTmFtZShcIkxvZ2luXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9ID5cbiAgICA8bWFpbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1mdWxsIGgtc2NyZWVuIGJnLWNvdmVyIGJnLWNlbnRlciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC02IHB5LTQgbWItMic+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIHtkZWZhdWx0UGFnZUluZm8udGl0bGV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMjAwIHRleHQtc20gdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVvcyBhdFxuICAgICAgICAgICAgY3VtcXVlIGVvcyByZXB1ZGlhbmRhZSBpdGFxdWUgYS4gTGF1ZGFudGl1bSwgbW9sZXN0aWFzISBOZXF1ZVxuICAgICAgICAgICAgc2FwaWVudGUgdmVyaXRhdGlzIGl1c3RvIHF1aXMgZG9sb3JlbXF1ZT8gRnVnYSBhbWV0IGF0IGV2ZW5pZXRcbiAgICAgICAgICAgIGN1bXF1ZSBtYWlvcmVzIHBlcnNwaWNpYXRpcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TG9naW5DYXJkXG4gICAgICAgICAgZGVmYXVsdFBhZ2VJbmZvPXtkZWZhdWx0UGFnZUluZm99XG4gICAgICAgICAgcGFnZU5hbWU9e3BhZ2VOYW1lfVxuICAgICAgICAgIHNldFBhZ2VOYW1lPXtzZXRQYWdlTmFtZX1cbiAgICAgICAgICBzZXRVc2VyPXtzZXRVc2VyfVxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIHsvKiA8TG9naW5TaWduVXAgLz4gKi99XG5cbi8vICAgICAgIHsvKiA8SG9tZVBhZ2UgLz4gKi99XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG4iXSwibmFtZXMiOlsiTG9naW5DYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJSeEF2YXRhciIsImxvZ2dpbmciLCJIb21lIiwicGFnZUluZm8iLCJsb2dpbiIsInRpdGxlIiwiZmlyc3RGb3JtQnV0dG9uTmFtZSIsInNlY29uZEZvcm1CdXR0b25OYW1lIiwic2Vjb25kRm9ybURlc2NyaXB0aW9uIiwic2lnbnVwIiwiZGVmYXVsdFBhZ2VJbmZvIiwic2V0RGVmYXVsdFBhZ2VJbmZvIiwicGFnZU5hbWUiLCJzZXRQYWdlTmFtZSIsInVzZXIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsImxvZ2dlZEluVXNlciIsInVzZXJuYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1haW4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});