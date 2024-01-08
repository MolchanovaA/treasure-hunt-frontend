"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/_lib/Form.jsx":
/*!*******************************!*\
  !*** ./src/app/_lib/Form.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Form(param) {\n    let { form: { keyToBeUpdated }, setShowForm, setUserNotification } = param;\n    _s();\n    const [inputEnter, setInputEnter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [buttonClasses, setButtonClasses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform rounded focus:outline-none focus:bg-red-600\");\n    const user_id = typeof localStorage !== \"undefined\" && localStorage.getItem(\"user_id\");\n    const handleInputChange = (e)=>{\n        setInputEnter(e.target.value);\n        e.target.value ? setIsDisabled(false) : setIsDisabled(true);\n    };\n    const handleChange = (e)=>{\n        const formData = new FormData();\n        formData.append(\"avatar\", e.target.files[0]);\n        // const image = URL.createObjectURL(e.target.files[0]);\n        setInputEnter(formData);\n    };\n    const submitFormHandler = (e)=>{\n        e.preventDefault();\n        if (!inputEnter) {\n            setShowForm(false);\n            return;\n        }\n        setUserNotification(true);\n        const updatedProfileInfo = {\n            [keyToBeUpdated]: inputEnter\n        };\n        let tableToBeUpdated;\n        if (keyToBeUpdated === \"username\" || keyToBeUpdated === \"password\") {\n            tableToBeUpdated = \"users\";\n        } else if (keyToBeUpdated === \"avatar\") {\n            tableToBeUpdated = \"profiles\";\n        }\n        _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editProfile(updatedProfileInfo, tableToBeUpdated, user_id).then(()=>{\n            if (keyToBeUpdated === \"username\") {\n                localStorage.setItem(\"user\", inputEnter);\n            }\n        });\n        setInputEnter(\"\");\n        setShowForm(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: \"POST\",\n        onSubmit: submitFormHandler,\n        className: \"flex mt-1\",\n        children: [\n            keyToBeUpdated === \"avatar\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                onChange: handleChange,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"file\",\n                    placeholder: \"please enter new \".concat(keyToBeUpdated)\n                }, void 0, false, {\n                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/Form.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/Form.jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"pl -1 rounded mr-1 text-red-500 pl-1 font-bold\",\n                type: \"text\",\n                placeholder: \"please enter new \".concat(keyToBeUpdated),\n                onChange: handleInputChange,\n                value: inputEnter\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/Form.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: isDisabled,\n                className: \"\".concat(buttonClasses, \" \").concat(isDisabled ? \"\" : \" bg-gray-800 hover:bg-green-600 cursor-pointer \"),\n                children: \"Update\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/Form.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/_lib/Form.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"fMGxh9SVrppU5G83PD0avFJdqNs=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2xpYi9Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ0g7QUFFZixTQUFTRSxLQUFLLEtBSTVCO1FBSjRCLEVBQzNCQyxNQUFNLEVBQUVDLGNBQWMsRUFBRSxFQUN4QkMsV0FBVyxFQUNYQyxtQkFBbUIsRUFDcEIsR0FKNEI7O0lBSzNCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQ2hEO0lBR0YsTUFBTWEsVUFDSixPQUFPQyxpQkFBaUIsZUFBZUEsYUFBYUMsT0FBTyxDQUFDO0lBRTlELE1BQU1DLG9CQUFvQixDQUFDQztRQUN6QlQsY0FBY1MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQzVCRixFQUFFQyxNQUFNLENBQUNDLEtBQUssR0FBR1QsY0FBYyxTQUFTQSxjQUFjO0lBQ3hEO0lBQ0EsTUFBTVUsZUFBZSxDQUFDSDtRQUNwQixNQUFNSSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsVUFBVU4sRUFBRUMsTUFBTSxDQUFDTSxLQUFLLENBQUMsRUFBRTtRQUMzQyx3REFBd0Q7UUFDeERoQixjQUFjYTtJQUNoQjtJQUVBLE1BQU1JLG9CQUFvQixDQUFDUjtRQUN6QkEsRUFBRVMsY0FBYztRQUNoQixJQUFJLENBQUNuQixZQUFZO1lBQ2ZGLFlBQVk7WUFDWjtRQUNGO1FBQ0FDLG9CQUFvQjtRQUNwQixNQUFNcUIscUJBQXFCO1lBQ3pCLENBQUN2QixlQUFlLEVBQUVHO1FBQ3BCO1FBQ0EsSUFBSXFCO1FBRUosSUFBSXhCLG1CQUFtQixjQUFjQSxtQkFBbUIsWUFBWTtZQUNsRXdCLG1CQUFtQjtRQUNyQixPQUFPLElBQUl4QixtQkFBbUIsVUFBVTtZQUN0Q3dCLG1CQUFtQjtRQUNyQjtRQUVBM0Isa0RBQUdBLENBQUM0QixXQUFXLENBQUNGLG9CQUFvQkMsa0JBQWtCZixTQUFTaUIsSUFBSSxDQUFDO1lBQ2xFLElBQUkxQixtQkFBbUIsWUFBWTtnQkFDakNVLGFBQWFpQixPQUFPLENBQUMsUUFBUXhCO1lBQy9CO1FBQ0Y7UUFFQUMsY0FBYztRQUNkSCxZQUFZO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0Y7UUFBSzZCLFFBQU87UUFBT0MsVUFBVVI7UUFBbUJTLFdBQVU7O1lBQ3hEOUIsbUJBQW1CLHlCQUNsQiw4REFBQytCO2dCQUFNQyxVQUFVaEI7MEJBQ2YsNEVBQUNpQjtvQkFDQ0MsTUFBSztvQkFDTEMsYUFBYSxvQkFBbUMsT0FBZm5DOzs7Ozs7Ozs7O3FDQUtyQyw4REFBQ2lDO2dCQUNDSCxXQUFVO2dCQUNWSSxNQUFLO2dCQUNMQyxhQUFhLG9CQUFtQyxPQUFmbkM7Z0JBQ2pDZ0MsVUFBVXBCO2dCQUNWRyxPQUFPWjs7Ozs7OzBCQUdYLDhEQUFDaUM7Z0JBQ0NDLFVBQVVoQztnQkFDVnlCLFdBQVcsR0FDVHpCLE9BRFlFLGVBQWMsS0FFM0IsT0FEQ0YsYUFBYSxLQUFLOzBCQUVyQjs7Ozs7Ozs7Ozs7O0FBS1A7R0FsRndCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19saWIvRm9ybS5qc3g/MDcwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiQC91dGlscy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7XG4gIGZvcm06IHsga2V5VG9CZVVwZGF0ZWQgfSxcbiAgc2V0U2hvd0Zvcm0sXG4gIHNldFVzZXJOb3RpZmljYXRpb24sXG59KSB7XG4gIGNvbnN0IFtpbnB1dEVudGVyLCBzZXRJbnB1dEVudGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2J1dHRvbkNsYXNzZXMsIHNldEJ1dHRvbkNsYXNzZXNdID0gdXNlU3RhdGUoXG4gICAgXCJ3LTEvNCB0ZXh0LWNlbnRlciBteC1hdXRvIG10LTEgcHgtMiBweS0xIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXJlZC02MDBcIlxuICApO1xuXG4gIGNvbnN0IHVzZXJfaWQgPVxuICAgIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2lkXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dEVudGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBlLnRhcmdldC52YWx1ZSA/IHNldElzRGlzYWJsZWQoZmFsc2UpIDogc2V0SXNEaXNhYmxlZCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImF2YXRhclwiLCBlLnRhcmdldC5maWxlc1swXSk7XG4gICAgLy8gY29uc3QgaW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICBzZXRJbnB1dEVudGVyKGZvcm1EYXRhKTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRGb3JtSGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghaW5wdXRFbnRlcikge1xuICAgICAgc2V0U2hvd0Zvcm0oZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRVc2VyTm90aWZpY2F0aW9uKHRydWUpO1xuICAgIGNvbnN0IHVwZGF0ZWRQcm9maWxlSW5mbyA9IHtcbiAgICAgIFtrZXlUb0JlVXBkYXRlZF06IGlucHV0RW50ZXIsXG4gICAgfTtcbiAgICBsZXQgdGFibGVUb0JlVXBkYXRlZDtcblxuICAgIGlmIChrZXlUb0JlVXBkYXRlZCA9PT0gXCJ1c2VybmFtZVwiIHx8IGtleVRvQmVVcGRhdGVkID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgIHRhYmxlVG9CZVVwZGF0ZWQgPSBcInVzZXJzXCI7XG4gICAgfSBlbHNlIGlmIChrZXlUb0JlVXBkYXRlZCA9PT0gXCJhdmF0YXJcIikge1xuICAgICAgdGFibGVUb0JlVXBkYXRlZCA9IFwicHJvZmlsZXNcIjtcbiAgICB9XG5cbiAgICBhcGkuZWRpdFByb2ZpbGUodXBkYXRlZFByb2ZpbGVJbmZvLCB0YWJsZVRvQmVVcGRhdGVkLCB1c2VyX2lkKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChrZXlUb0JlVXBkYXRlZCA9PT0gXCJ1c2VybmFtZVwiKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBpbnB1dEVudGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldElucHV0RW50ZXIoXCJcIik7XG4gICAgc2V0U2hvd0Zvcm0oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gYWN0aW9uPVwiUE9TVFwiIG9uU3VibWl0PXtzdWJtaXRGb3JtSGFuZGxlcn0gY2xhc3NOYW1lPVwiZmxleCBtdC0xXCI+XG4gICAgICB7a2V5VG9CZVVwZGF0ZWQgPT09IFwiYXZhdGFyXCIgPyAoXG4gICAgICAgIDxsYWJlbCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgcGxlYXNlIGVudGVyIG5ldyAke2tleVRvQmVVcGRhdGVkfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICkgOiAoXG4gICAgICAgIFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJwbCAtMSByb3VuZGVkIG1yLTEgdGV4dC1yZWQtNTAwIHBsLTEgZm9udC1ib2xkXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2BwbGVhc2UgZW50ZXIgbmV3ICR7a2V5VG9CZVVwZGF0ZWR9YH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2lucHV0RW50ZXJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25DbGFzc2VzfSAke1xuICAgICAgICAgIGlzRGlzYWJsZWQgPyBcIlwiIDogXCIgYmctZ3JheS04MDAgaG92ZXI6YmctZ3JlZW4tNjAwIGN1cnNvci1wb2ludGVyIFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICBVcGRhdGVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcGkiLCJGb3JtIiwiZm9ybSIsImtleVRvQmVVcGRhdGVkIiwic2V0U2hvd0Zvcm0iLCJzZXRVc2VyTm90aWZpY2F0aW9uIiwiaW5wdXRFbnRlciIsInNldElucHV0RW50ZXIiLCJpc0Rpc2FibGVkIiwic2V0SXNEaXNhYmxlZCIsImJ1dHRvbkNsYXNzZXMiLCJzZXRCdXR0b25DbGFzc2VzIiwidXNlcl9pZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsInN1Ym1pdEZvcm1IYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkUHJvZmlsZUluZm8iLCJ0YWJsZVRvQmVVcGRhdGVkIiwiZWRpdFByb2ZpbGUiLCJ0aGVuIiwic2V0SXRlbSIsImFjdGlvbiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJvbkNoYW5nZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_lib/Form.jsx\n"));

/***/ })

});