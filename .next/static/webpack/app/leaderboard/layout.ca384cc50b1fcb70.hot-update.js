"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/leaderboard/layout",{

/***/ "(app-pages-browser)/./src/app/_lib/UserContext.jsx":
/*!**************************************!*\
  !*** ./src/app/_lib/UserContext.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; },\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ UserContext,UserProvider auto */ \nvar _s = $RefreshSig$();\n\nconst { RxAvatar } = __webpack_require__(/*! react-icons/rx */ \"(app-pages-browser)/./node_modules/react-icons/rx/index.esm.js\");\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    username: \"test_user\",\n    avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RxAvatar, {}, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/UserContext.jsx\",\n        lineNumber: 9,\n        columnNumber: 11\n    }, undefined)\n});\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    //   const [isLoading, setIsLoading] = useState(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/UserContext.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserProvider, \"cCRtNmj6gRKVA5wOmLEmdl385z4=\");\n_c = UserProvider;\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2xpYi9Vc2VyQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRDtBQUVoRCxNQUFNLEVBQUVFLFFBQVEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxzRkFBZ0I7QUFFdEMsTUFBTUMsNEJBQWNILG9EQUFhQSxDQUFDO0lBQ3ZDSSxVQUFVO0lBQ1ZDLHNCQUFRLDhEQUFDSjs7Ozs7QUFDWCxHQUFHO0FBRUksTUFBTUssZUFBZTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDLENBQUM7SUFDcEMsc0RBQXNEO0lBRXBELHFCQUNFLDhEQUFDSSxZQUFZTyxRQUFRO1FBQUNDLE9BQU87WUFBRUg7WUFBTUM7UUFBUTtrQkFDMUNGOzs7Ozs7QUFHUCxFQUFFO0dBVFdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2xpYi9Vc2VyQ29udGV4dC5qc3g/NWRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgeyBSeEF2YXRhciB9ID0gcmVxdWlyZShcInJlYWN0LWljb25zL3J4XCIpO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgdXNlcm5hbWU6IFwidGVzdF91c2VyXCIsXG4gIGF2YXRhcjogPFJ4QXZhdGFyIC8+LFxufSk7XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KTtcbi8vICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiUnhBdmF0YXIiLCJyZXF1aXJlIiwiVXNlckNvbnRleHQiLCJ1c2VybmFtZSIsImF2YXRhciIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_lib/UserContext.jsx\n"));

/***/ })

});