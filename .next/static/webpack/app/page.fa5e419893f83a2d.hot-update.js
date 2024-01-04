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

/***/ "(app-pages-browser)/./src/app/_lib/LoginCard.jsx":
/*!************************************!*\
  !*** ./src/app/_lib/LoginCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_RxAvatar_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=RxAvatar!=!react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginCard(param) {\n    let { defaultPageInfo: { firstFormButtonName, secondFormButtonName, secondFormDescription }, pageName, setPageName, setUser } = param;\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { name, avatar } = useContext(UserContext);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (firstFormButtonName === \"Login\") {\n            console.log(\"send get request\");\n        } else if (firstFormButtonName === \"Sign Up\") {\n            console.log(\"send a get and a post request?\");\n        }\n        setUser({\n            username: \"loggedInUser\",\n            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RxAvatar_react_icons_rx__WEBPACK_IMPORTED_MODULE_4__.RxAvatar, {}, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                lineNumber: 30,\n                columnNumber: 48\n            }, this)\n        });\n        router.push(\"/home\");\n        setUsername(\"\");\n        setPassword(\"\");\n        setIsSubmitted(true);\n    };\n    const handleClick = (e)=>{\n        e.preventDefault();\n        if (pageName === \"Sign Up\") {\n            setPageName(\"Login\");\n        } else if (pageName === \"Login\") {\n            setPageName(\"Sign Up\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isSubmitted) {\n            (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        }\n    }, [\n        isSubmitted\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8 m-8\",\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"text\",\n                        placeholder: \"Username...\",\n                        value: username,\n                        required: true,\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none dark:text-gray-300 dark:bg-gray-700\",\n                        type: \"password\",\n                        placeholder: \"Password...\",\n                        value: password,\n                        required: true,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            children: firstFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: secondFormDescription\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600\",\n                            type: \"submit\",\n                            onClick: handleClick,\n                            children: secondFormButtonName\n                        }, void 0, false, {\n                            fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/LoginCard.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoginCard, \"ocARsgYPlRDEun43fBO4UagvMl0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = LoginCard;\nvar _c;\n$RefreshReg$(_c, \"LoginCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2xpYi9Mb2dpbkNhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDUTtBQUNBO0FBQ0Y7QUFHM0IsU0FBU0ssVUFBVSxLQVNqQztRQVRpQyxFQUNoQ0MsaUJBQWlCLEVBQ2ZDLG1CQUFtQixFQUNuQkMsb0JBQW9CLEVBQ3BCQyxxQkFBcUIsRUFDdEIsRUFDREMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLE9BQU8sRUFDUixHQVRpQzs7SUFVaEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLEVBQUNrQixJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyxXQUFXQztJQUNuQyxNQUFNQyxTQUFTcEIsMERBQVNBO0lBRXhCLE1BQU1xQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUluQix3QkFBd0IsU0FBUztZQUNuQ29CLFFBQVFDLEdBQUcsQ0FBQztRQUNkLE9BQU8sSUFBSXJCLHdCQUF3QixXQUFXO1lBQzVDb0IsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7UUFDQWhCLFFBQVE7WUFBQ0MsVUFBVTtZQUFnQk8sc0JBQVEsOERBQUNoQixvRkFBUUE7Ozs7O1FBQUc7UUFDdkRtQixPQUFPTSxJQUFJLENBQUM7UUFDWmYsWUFBWTtRQUNaRSxZQUFZO1FBQ1pFLGVBQWU7SUFDakI7SUFFQSxNQUFNWSxjQUFjLENBQUNMO1FBQ25CQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUloQixhQUFhLFdBQVc7WUFDMUJDLFlBQVk7UUFDZCxPQUFPLElBQUlELGFBQWEsU0FBUztZQUMvQkMsWUFBWTtRQUNkO0lBQ0Y7SUFFQVQsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxhQUFhO1lBQ2ZqQixzREFBU0E7UUFDWDtJQUNGLEdBQUc7UUFBQ2lCO0tBQVk7SUFFaEIscUJBQ0U7OzBCQUNFLDhEQUFDYztnQkFDQ0MsV0FBVTtnQkFDVkMsVUFBVVQ7O2tDQUVWLDhEQUFDVTt3QkFDQ0YsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3hCO3dCQUNQeUIsUUFBUTt3QkFDUkMsVUFBVSxDQUFDZCxJQUFNWCxZQUFZVyxFQUFFZSxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FHN0MsOERBQUNIO3dCQUNDRixXQUFVO3dCQUNWRyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdEI7d0JBQ1B1QixRQUFRO3dCQUNSQyxVQUFVLENBQUNkLElBQU1ULFlBQVlTLEVBQUVlLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU3Qyw4REFBQ0k7d0JBQUlULFdBQVU7a0NBQ2IsNEVBQUNVOzRCQUNDVixXQUFVOzRCQUNWRyxNQUFLO3NDQUVKNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtQLDhEQUFDd0I7Z0JBQUtDLFdBQVU7O2tDQUNkLDhEQUFDVztrQ0FBR2xDOzs7Ozs7a0NBQ0osOERBQUNnQzt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ1U7NEJBQ0NWLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xTLFNBQVNkO3NDQUVSdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTVGd0JIOztRQWNQRixzREFBU0E7OztLQWRGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19saWIvTG9naW5DYXJkLmpzeD82YmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaERhdGEgZnJvbSBcIkAvdXRpbHMvYXBpXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBSeEF2YXRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2FyZCh7XG4gIGRlZmF1bHRQYWdlSW5mbzoge1xuICAgIGZpcnN0Rm9ybUJ1dHRvbk5hbWUsXG4gICAgc2Vjb25kRm9ybUJ1dHRvbk5hbWUsXG4gICAgc2Vjb25kRm9ybURlc2NyaXB0aW9uLFxuICB9LFxuICBwYWdlTmFtZSxcbiAgc2V0UGFnZU5hbWUsXG4gIHNldFVzZXJcbn0pIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHtuYW1lLCBhdmF0YXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmaXJzdEZvcm1CdXR0b25OYW1lID09PSAnTG9naW4nKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBnZXQgcmVxdWVzdCcpXG4gICAgfSBlbHNlIGlmIChmaXJzdEZvcm1CdXR0b25OYW1lID09PSAnU2lnbiBVcCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZW5kIGEgZ2V0IGFuZCBhIHBvc3QgcmVxdWVzdD8nKVxuICAgIH1cbiAgICBzZXRVc2VyKHt1c2VybmFtZTogJ2xvZ2dlZEluVXNlcicsIGF2YXRhcjogPFJ4QXZhdGFyIC8+fSlcbiAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxuICAgIHNldFVzZXJuYW1lKFwiXCIpO1xuICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHBhZ2VOYW1lID09PSBcIlNpZ24gVXBcIikge1xuICAgICAgc2V0UGFnZU5hbWUoXCJMb2dpblwiKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIkxvZ2luXCIpIHtcbiAgICAgIHNldFBhZ2VOYW1lKFwiU2lnbiBVcFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNTdWJtaXR0ZWQpIHtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH1cbiAgfSwgW2lzU3VibWl0dGVkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBwLTggbS04J1xuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgbXQtMiB0ZXh0LWdyYXktNzAwIGJnLWdyYXktMjAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOmJnLWdyYXktNzAwJ1xuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lLi4uJ1xuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTQgcHktMiBtdC0yIHRleHQtZ3JheS03MDAgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazp0ZXh0LWdyYXktMzAwIGRhcms6YmctZ3JheS03MDAnXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkLi4uJ1xuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBtdC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpcnN0Rm9ybUJ1dHRvbk5hbWV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3ctZnVsbCBtYXgtdy1tZCBteC1hdXRvIGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHAtOCc+XG4gICAgICAgIDxwPntzZWNvbmRGb3JtRGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBtdC00Jz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBweC00IHB5LTIgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYmctZ3JheS04MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS02MDAnXG4gICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2Vjb25kRm9ybUJ1dHRvbk5hbWV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiUnhBdmF0YXIiLCJMb2dpbkNhcmQiLCJkZWZhdWx0UGFnZUluZm8iLCJmaXJzdEZvcm1CdXR0b25OYW1lIiwic2Vjb25kRm9ybUJ1dHRvbk5hbWUiLCJzZWNvbmRGb3JtRGVzY3JpcHRpb24iLCJwYWdlTmFtZSIsInNldFBhZ2VOYW1lIiwic2V0VXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsIm5hbWUiLCJhdmF0YXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJkaXYiLCJidXR0b24iLCJwIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_lib/LoginCard.jsx\n"));

/***/ })

});