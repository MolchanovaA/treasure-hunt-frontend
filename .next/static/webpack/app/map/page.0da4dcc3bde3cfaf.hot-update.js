"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/map/page",{

/***/ "(app-pages-browser)/./src/app/map/page.jsx":
/*!******************************!*\
  !*** ./src/app/map/page.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n// \"use client\";\n// import {\n//   GoogleMap,\n//   useJsApiLoader,\n//   MarkerF,\n//   MarkerClusterer,\n// } from \"@react-google-maps/api\";\n// import { useEffect, useState } from \"react\";\n// import CollectTreasure from \"./CollectTreasure\";\n// const containerStyle = {\n//   width: \"100%\",\n//   height: \"90vh\",\n// };\n// const treasures = [\n//   { type: \"treasure\", name: \"Big Ban\", coords: { lat: 51.5007, lng: -0.1246 } },\n//   { type: \"treasure\", name: \"Big Ban2\", coords: { lat: 51.5017, lng: -0.1246 } },\n//   {\n//     type: \"treasure\",\n//     name: \"Stonehenge\",\n//     coords: { lat: 51.1789, lng: -1.8262 },\n//   },\n//   { type: \"treasure\", name: \"closest\", coords: { lat: 52.25, lng: 0.1095 } },\n//   {\n//     type: \"treasure\",\n//     name: \"Edinburgh Castle\",\n//     coords: { lat: 55.9486, lng: -3.1999 },\n//   },\n// ];\n// const icons = {\n//   treasure: {\n//     url: \"/treasure.png\",\n//     scaledSize: { width: 50, height: 50 },\n//   },\n//   user: { url: \"/user.png\", scaledSize: { width: 50, height: 50 } },\n// };\n// function TreasureMap() {\n//   const [currentLocation, setCurrentLocation] = useState({\n//     type: \"user\",\n//     name: \"person\",\n//     coords: { lat: 0, lng: 0 },\n//   });\n//   const [points, setPoints] = useState(treasures);\n//   const [isLoadedMap, setIsLoadedMap] = useState(false);\n//   const options = { mapId: \"b6a1e26ca756909b\", mapTypeControl: false };\n//   const [destination, setDestination] = useState([]);\n//   const [minDistance, setMinDistance] = useState({});\n//   const [collect, setCollect] = useState(false);\n//   useJsApiLoader({\n//     id: \"google-map-script\",\n//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,\n//   });\n//   useEffect(() => {\n//     function coordsDetecting(respond) {\n//       let lng = respond.coords.longitude;\n//       let lat = respond.coords.latitude;\n//       setCurrentLocation((curr) => {\n//         curr.coords.lat = lat;\n//         curr.coords.lng = lng;\n//         return curr;\n//       });\n//       setIsLoadedMap(true);\n//     }\n//     navigator.geolocation.getCurrentPosition(coordsDetecting);\n//   }, []);\n//   useEffect(() => {\n//     const destinationArray = [];\n//     points.map((point) => {\n//       destinationArray.push(`${point.coords.lat}, ${point.coords.lng}`);\n//     });\n//     setDestination(destinationArray);\n//   }, []);\n//   const calculateDistances = () => {\n//     if (currentLocation && points.length > 0) {\n//       const service = new google.maps.DistanceMatrixService();\n//       const origins = [\n//         `${currentLocation.coords.lat}, ${currentLocation.coords.lng}`,\n//       ];\n//       service.getDistanceMatrix(\n//         {\n//           origins: origins,\n//           destinations: destination,\n//           travelMode: \"WALKING\",\n//         },\n//         (response, status) => {\n//           if (status === \"OK\") {\n//             let placeId = 0;\n//             let min = response.rows[0].elements[placeId].distance.value;\n//             response.rows[0].elements.map((element, i) => {\n//               if (min > element.distance.value) {\n//                 min = element.distance.value;\n//                 placeId = i;\n//               }\n//             });\n//             setMinDistance({ distance: min, place: points[placeId] });\n//           } else {\n//             console.error(\"Error calculating distances:\", status);\n//           }\n//         }\n//       );\n//     }\n//   };\n//   useEffect(() => {\n//     if (minDistance.distance < 100) {\n//       setCollect(true);\n//     }\n//   }, [minDistance]);\n//   const checkDistance = () => {\n//     calculateDistances();\n//   };\n//   return isLoadedMap ? (\n//     <>\n//       <section className=\"userInteraction\">\n//         <div onClick={checkDistance} className=\"find button\">\n//           Find your Nearest Treasure\n//         </div>\n//         {collect ? <CollectTreasure treasure={minDistance.place} /> : \"\"}\n//       </section>\n//       <GoogleMap\n//         mapContainerStyle={containerStyle}\n//         center={currentLocation.coords}\n//         zoom={8}\n//         options={options}\n//       >\n//         <MarkerClusterer>\n//           {(clusterer) =>\n//             points.map((treasure, i) => (\n//               <MarkerF\n//                 key={i}\n//                 position={{\n//                   lat: treasure.coords.lat,\n//                   lng: treasure.coords.lng,\n//                 }}\n//                 icon={icons[treasure.type]}\n//                 clusterer={clusterer}\n//               />\n//             ))\n//           }\n//         </MarkerClusterer>\n//         <MarkerF\n//           position={{\n//             lat: currentLocation.coords.lat,\n//             lng: currentLocation.coords.lng,\n//           }}\n//           icon={icons[currentLocation.type]}\n//           label={\"Its U!\"}\n//         />\n//       </GoogleMap>\n//     </>\n//   ) : (\n//     <><h1>Loading, please wait...</h1></>\n//   );\n// }\n// export default TreasureMap;\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst options = {\n    streetViewControl: false\n};\n// const treasureLocations = [\n//   { id: 1, lat: 52.920724, lng: -1.03536 },\n//   { id: 2, lat: 52.920957, lng: -1.031999 },\n//   { id: 3, lat: 52.920776, lng: -1.033433 },\n//   { id: 4, lat: 52.921444, lng: -1.034414 },\n// ];\nconst GoogleMapComponent = ()=>{\n    _s();\n    // the default location will be the Northcoders base in Manchester\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 53.47375,\n        lng: -2.24026\n    });\n    const [isInRange, setIsInRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [treasureLocations, setTreasureLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // if the user scans and they are within the circle, a collect button appears\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition((position)=>{\n                const userLatitude = position.coords.latitude;\n                const userLongitude = position.coords.longitude;\n                const userLatLng = {\n                    lat: userLatitude,\n                    lng: userLongitude\n                };\n                setUserLocation(userLatLng);\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllTreasures().then((data)=>{\n            // Handle the data returned from the API call\n            console.log(data);\n            setTreasureLocations(data);\n        }).catch((error)=>{\n            // Handle errors\n            console.error(\"Error fetching treasures:\", error);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    }, []);\n    const handleScan = ()=>{\n        if (window.google && window.google.maps && window.google.maps.geometry && window.google.maps.geometry.spherical) {\n            const distances = treasureLocations.map((treasure1)=>{\n                return window.google.maps.geometry.spherical.computeDistanceBetween(userLocation, {\n                    lat: treasure1.lat,\n                    lng: treasure1.lng\n                });\n            });\n            console.log(distances);\n            distances.forEach((distance)=>{\n                if (distance <= 20) {\n                    setIsInRange(true);\n                } else {\n                    setIsInRange(false);\n                }\n            });\n            console.log(isInRange);\n        } else {\n            console.error(\"Google Maps API not initialized\");\n        }\n    };\n    console.log(window.google);\n    console.dir(window.google.maps);\n    // console.log(window.google.maps.geometry.spherical)\n    const handleCollect = ()=>{\n        setCollected(treasure.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                onClick: handleScan,\n                children: \"Scan for Treasures!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 268,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(isInRange ? \"block\" : \"hidden\", \" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"),\n                onClick: handleCollect,\n                children: \"Collect Treasure!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 274,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading treasures...\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 282,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                mapContainerStyle: containerStyle,\n                center: userLocation,\n                zoom: 17,\n                options: options,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 289,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.MarkerClusterer, {\n                        gridSize: 60,\n                        children: (clusterer)=>treasureLocations.map((treasure1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                    position: treasure1,\n                                    clusterer: clusterer\n                                }, treasure1.id, false, {\n                                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                    lineNumber: 293,\n                                    columnNumber: 15\n                                }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 290,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 283,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n        lineNumber: 267,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GoogleMapComponent, \"c0TVE//1bzQ3crzMVhok83IQvRE=\");\n_c = GoogleMapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapComponent);\nvar _c;\n$RefreshReg$(_c, \"GoogleMapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtJQUM5QixxREFBcUQ7SUFFckQsTUFBTVUsZ0JBQWdCO1FBQ3BCcEMsYUFBYStCLFNBQVNNLEVBQUU7SUFDMUI7SUFFQSxxQkFDRSw4REFBQ3RELDhEQUFVQTtRQUFDdUQsa0JBQWtCQyx5Q0FBMkM7OzBCQUN2RSw4REFBQ0c7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVNyQjswQkFDVjs7Ozs7OzBCQUdELDhEQUFDbUI7Z0JBQ0NDLFdBQVcsR0FFVixPQURDOUMsWUFBWSxVQUFVLFVBQ3ZCO2dCQUNEK0MsU0FBU1I7MEJBQ1Y7Ozs7OztZQUdBakMsMkJBQWEsOERBQUMwQzswQkFBRTs7Ozs7OzBCQUNqQiw4REFBQy9ELDZEQUFTQTtnQkFDUmdFLG1CQUFtQjNEO2dCQUNuQjRELFFBQVF0RDtnQkFDUnVELE1BQU07Z0JBQ04xRCxTQUFTQTs7a0NBRVQsOERBQUNOLDBEQUFNQTt3QkFBQ3dCLFVBQVVmOzs7Ozs7a0NBQ2xCLDhEQUFDUixtRUFBZUE7d0JBQUNnRSxVQUFVO2tDQUN4QixDQUFDQyxZQUNBakQsa0JBQWtCNkIsR0FBRyxDQUFDLENBQUNDLDBCQUNyQiw4REFBQy9DLDBEQUFNQTtvQ0FFTHdCLFVBQVV1QjtvQ0FDVm1CLFdBQVdBO21DQUZObkIsVUFBU00sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoQztHQTFHTTdDO0tBQUFBO0FBNEdOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYXAvcGFnZS5qc3g/MTQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcblxuLy8gaW1wb3J0IHtcbi8vICAgR29vZ2xlTWFwLFxuLy8gICB1c2VKc0FwaUxvYWRlcixcbi8vICAgTWFya2VyRixcbi8vICAgTWFya2VyQ2x1c3RlcmVyLFxuLy8gfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IENvbGxlY3RUcmVhc3VyZSBmcm9tIFwiLi9Db2xsZWN0VHJlYXN1cmVcIjtcblxuLy8gY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4vLyAgIHdpZHRoOiBcIjEwMCVcIixcbi8vICAgaGVpZ2h0OiBcIjkwdmhcIixcbi8vIH07XG5cbi8vIGNvbnN0IHRyZWFzdXJlcyA9IFtcbi8vICAgeyB0eXBlOiBcInRyZWFzdXJlXCIsIG5hbWU6IFwiQmlnIEJhblwiLCBjb29yZHM6IHsgbGF0OiA1MS41MDA3LCBsbmc6IC0wLjEyNDYgfSB9LFxuLy8gICB7IHR5cGU6IFwidHJlYXN1cmVcIiwgbmFtZTogXCJCaWcgQmFuMlwiLCBjb29yZHM6IHsgbGF0OiA1MS41MDE3LCBsbmc6IC0wLjEyNDYgfSB9LFxuLy8gICB7XG4vLyAgICAgdHlwZTogXCJ0cmVhc3VyZVwiLFxuLy8gICAgIG5hbWU6IFwiU3RvbmVoZW5nZVwiLFxuLy8gICAgIGNvb3JkczogeyBsYXQ6IDUxLjE3ODksIGxuZzogLTEuODI2MiB9LFxuLy8gICB9LFxuLy8gICB7IHR5cGU6IFwidHJlYXN1cmVcIiwgbmFtZTogXCJjbG9zZXN0XCIsIGNvb3JkczogeyBsYXQ6IDUyLjI1LCBsbmc6IDAuMTA5NSB9IH0sXG4vLyAgIHtcbi8vICAgICB0eXBlOiBcInRyZWFzdXJlXCIsXG4vLyAgICAgbmFtZTogXCJFZGluYnVyZ2ggQ2FzdGxlXCIsXG4vLyAgICAgY29vcmRzOiB7IGxhdDogNTUuOTQ4NiwgbG5nOiAtMy4xOTk5IH0sXG4vLyAgIH0sXG4vLyBdO1xuXG4vLyBjb25zdCBpY29ucyA9IHtcbi8vICAgdHJlYXN1cmU6IHtcbi8vICAgICB1cmw6IFwiL3RyZWFzdXJlLnBuZ1wiLFxuLy8gICAgIHNjYWxlZFNpemU6IHsgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwIH0sXG4vLyAgIH0sXG4vLyAgIHVzZXI6IHsgdXJsOiBcIi91c2VyLnBuZ1wiLCBzY2FsZWRTaXplOiB7IHdpZHRoOiA1MCwgaGVpZ2h0OiA1MCB9IH0sXG4vLyB9O1xuXG4vLyBmdW5jdGlvbiBUcmVhc3VyZU1hcCgpIHtcbi8vICAgY29uc3QgW2N1cnJlbnRMb2NhdGlvbiwgc2V0Q3VycmVudExvY2F0aW9uXSA9IHVzZVN0YXRlKHtcbi8vICAgICB0eXBlOiBcInVzZXJcIixcbi8vICAgICBuYW1lOiBcInBlcnNvblwiLFxuLy8gICAgIGNvb3JkczogeyBsYXQ6IDAsIGxuZzogMCB9LFxuLy8gICB9KTtcblxuLy8gICBjb25zdCBbcG9pbnRzLCBzZXRQb2ludHNdID0gdXNlU3RhdGUodHJlYXN1cmVzKTtcbi8vICAgY29uc3QgW2lzTG9hZGVkTWFwLCBzZXRJc0xvYWRlZE1hcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IG9wdGlvbnMgPSB7IG1hcElkOiBcImI2YTFlMjZjYTc1NjkwOWJcIiwgbWFwVHlwZUNvbnRyb2w6IGZhbHNlIH07XG5cbi8vICAgY29uc3QgW2Rlc3RpbmF0aW9uLCBzZXREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFttaW5EaXN0YW5jZSwgc2V0TWluRGlzdGFuY2VdID0gdXNlU3RhdGUoe30pO1xuLy8gICBjb25zdCBbY29sbGVjdCwgc2V0Q29sbGVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8vICAgdXNlSnNBcGlMb2FkZXIoe1xuLy8gICAgIGlkOiBcImdvb2dsZS1tYXAtc2NyaXB0XCIsXG4vLyAgICAgZ29vZ2xlTWFwc0FwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWSxcbi8vICAgfSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBmdW5jdGlvbiBjb29yZHNEZXRlY3RpbmcocmVzcG9uZCkge1xuLy8gICAgICAgbGV0IGxuZyA9IHJlc3BvbmQuY29vcmRzLmxvbmdpdHVkZTtcbi8vICAgICAgIGxldCBsYXQgPSByZXNwb25kLmNvb3Jkcy5sYXRpdHVkZTtcbi8vICAgICAgIHNldEN1cnJlbnRMb2NhdGlvbigoY3VycikgPT4ge1xuLy8gICAgICAgICBjdXJyLmNvb3Jkcy5sYXQgPSBsYXQ7XG4vLyAgICAgICAgIGN1cnIuY29vcmRzLmxuZyA9IGxuZztcbi8vICAgICAgICAgcmV0dXJuIGN1cnI7XG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgc2V0SXNMb2FkZWRNYXAodHJ1ZSk7XG4vLyAgICAgfVxuXG4vLyAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihjb29yZHNEZXRlY3RpbmcpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBkZXN0aW5hdGlvbkFycmF5ID0gW107XG4vLyAgICAgcG9pbnRzLm1hcCgocG9pbnQpID0+IHtcbi8vICAgICAgIGRlc3RpbmF0aW9uQXJyYXkucHVzaChgJHtwb2ludC5jb29yZHMubGF0fSwgJHtwb2ludC5jb29yZHMubG5nfWApO1xuLy8gICAgIH0pO1xuLy8gICAgIHNldERlc3RpbmF0aW9uKGRlc3RpbmF0aW9uQXJyYXkpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgY29uc3QgY2FsY3VsYXRlRGlzdGFuY2VzID0gKCkgPT4ge1xuLy8gICAgIGlmIChjdXJyZW50TG9jYXRpb24gJiYgcG9pbnRzLmxlbmd0aCA+IDApIHtcbi8vICAgICAgIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlKCk7XG4vLyAgICAgICBjb25zdCBvcmlnaW5zID0gW1xuLy8gICAgICAgICBgJHtjdXJyZW50TG9jYXRpb24uY29vcmRzLmxhdH0sICR7Y3VycmVudExvY2F0aW9uLmNvb3Jkcy5sbmd9YCxcbi8vICAgICAgIF07XG5cbi8vICAgICAgIHNlcnZpY2UuZ2V0RGlzdGFuY2VNYXRyaXgoXG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBvcmlnaW5zOiBvcmlnaW5zLFxuLy8gICAgICAgICAgIGRlc3RpbmF0aW9uczogZGVzdGluYXRpb24sXG4vLyAgICAgICAgICAgdHJhdmVsTW9kZTogXCJXQUxLSU5HXCIsXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIChyZXNwb25zZSwgc3RhdHVzKSA9PiB7XG4vLyAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJPS1wiKSB7XG4vLyAgICAgICAgICAgICBsZXQgcGxhY2VJZCA9IDA7XG4vLyAgICAgICAgICAgICBsZXQgbWluID0gcmVzcG9uc2Uucm93c1swXS5lbGVtZW50c1twbGFjZUlkXS5kaXN0YW5jZS52YWx1ZTtcblxuLy8gICAgICAgICAgICAgcmVzcG9uc2Uucm93c1swXS5lbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbi8vICAgICAgICAgICAgICAgaWYgKG1pbiA+IGVsZW1lbnQuZGlzdGFuY2UudmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICBtaW4gPSBlbGVtZW50LmRpc3RhbmNlLnZhbHVlO1xuLy8gICAgICAgICAgICAgICAgIHBsYWNlSWQgPSBpO1xuLy8gICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIHNldE1pbkRpc3RhbmNlKHsgZGlzdGFuY2U6IG1pbiwgcGxhY2U6IHBvaW50c1twbGFjZUlkXSB9KTtcbi8vICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNhbGN1bGF0aW5nIGRpc3RhbmNlczpcIiwgc3RhdHVzKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICk7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgaWYgKG1pbkRpc3RhbmNlLmRpc3RhbmNlIDwgMTAwKSB7XG4vLyAgICAgICBzZXRDb2xsZWN0KHRydWUpO1xuLy8gICAgIH1cbi8vICAgfSwgW21pbkRpc3RhbmNlXSk7XG5cbi8vICAgY29uc3QgY2hlY2tEaXN0YW5jZSA9ICgpID0+IHtcbi8vICAgICBjYWxjdWxhdGVEaXN0YW5jZXMoKTtcbi8vICAgfTtcblxuLy8gICByZXR1cm4gaXNMb2FkZWRNYXAgPyAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInVzZXJJbnRlcmFjdGlvblwiPlxuLy8gICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NoZWNrRGlzdGFuY2V9IGNsYXNzTmFtZT1cImZpbmQgYnV0dG9uXCI+XG4vLyAgICAgICAgICAgRmluZCB5b3VyIE5lYXJlc3QgVHJlYXN1cmVcbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIHtjb2xsZWN0ID8gPENvbGxlY3RUcmVhc3VyZSB0cmVhc3VyZT17bWluRGlzdGFuY2UucGxhY2V9IC8+IDogXCJcIn1cbi8vICAgICAgIDwvc2VjdGlvbj5cblxuLy8gICAgICAgPEdvb2dsZU1hcFxuLy8gICAgICAgICBtYXBDb250YWluZXJTdHlsZT17Y29udGFpbmVyU3R5bGV9XG4vLyAgICAgICAgIGNlbnRlcj17Y3VycmVudExvY2F0aW9uLmNvb3Jkc31cbi8vICAgICAgICAgem9vbT17OH1cbi8vICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbi8vICAgICAgID5cbi8vICAgICAgICAgPE1hcmtlckNsdXN0ZXJlcj5cbi8vICAgICAgICAgICB7KGNsdXN0ZXJlcikgPT5cbi8vICAgICAgICAgICAgIHBvaW50cy5tYXAoKHRyZWFzdXJlLCBpKSA9PiAoXG4vLyAgICAgICAgICAgICAgIDxNYXJrZXJGXG4vLyAgICAgICAgICAgICAgICAga2V5PXtpfVxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uPXt7XG4vLyAgICAgICAgICAgICAgICAgICBsYXQ6IHRyZWFzdXJlLmNvb3Jkcy5sYXQsXG4vLyAgICAgICAgICAgICAgICAgICBsbmc6IHRyZWFzdXJlLmNvb3Jkcy5sbmcsXG4vLyAgICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgICAgICBpY29uPXtpY29uc1t0cmVhc3VyZS50eXBlXX1cbi8vICAgICAgICAgICAgICAgICBjbHVzdGVyZXI9e2NsdXN0ZXJlcn1cbi8vICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICkpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICA8L01hcmtlckNsdXN0ZXJlcj5cblxuLy8gICAgICAgICA8TWFya2VyRlxuLy8gICAgICAgICAgIHBvc2l0aW9uPXt7XG4vLyAgICAgICAgICAgICBsYXQ6IGN1cnJlbnRMb2NhdGlvbi5jb29yZHMubGF0LFxuLy8gICAgICAgICAgICAgbG5nOiBjdXJyZW50TG9jYXRpb24uY29vcmRzLmxuZyxcbi8vICAgICAgICAgICB9fVxuLy8gICAgICAgICAgIGljb249e2ljb25zW2N1cnJlbnRMb2NhdGlvbi50eXBlXX1cbi8vICAgICAgICAgICBsYWJlbD17XCJJdHMgVSFcIn1cbi8vICAgICAgICAgLz5cbi8vICAgICAgIDwvR29vZ2xlTWFwPlxuLy8gICAgIDwvPlxuLy8gICApIDogKFxuLy8gICAgIDw+PGgxPkxvYWRpbmcsIHBsZWFzZSB3YWl0Li4uPC9oMT48Lz5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVHJlYXN1cmVNYXA7XG5cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHb29nbGVNYXAsIExvYWRTY3JpcHQsIE1hcmtlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5pbXBvcnQgeyBNYXJrZXJDbHVzdGVyZXIgfSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuaW1wb3J0IGFwaSBmcm9tICdAL3V0aWxzL2FwaSdcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjQwMHB4XCIsXG59O1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG59O1xuXG4vLyBjb25zdCB0cmVhc3VyZUxvY2F0aW9ucyA9IFtcbi8vICAgeyBpZDogMSwgbGF0OiA1Mi45MjA3MjQsIGxuZzogLTEuMDM1MzYgfSxcbi8vICAgeyBpZDogMiwgbGF0OiA1Mi45MjA5NTcsIGxuZzogLTEuMDMxOTk5IH0sXG4vLyAgIHsgaWQ6IDMsIGxhdDogNTIuOTIwNzc2LCBsbmc6IC0xLjAzMzQzMyB9LFxuLy8gICB7IGlkOiA0LCBsYXQ6IDUyLjkyMTQ0NCwgbG5nOiAtMS4wMzQ0MTQgfSxcbi8vIF07XG5cbmNvbnN0IEdvb2dsZU1hcENvbXBvbmVudCA9ICgpID0+IHtcbiAgLy8gdGhlIGRlZmF1bHQgbG9jYXRpb24gd2lsbCBiZSB0aGUgTm9ydGhjb2RlcnMgYmFzZSBpbiBNYW5jaGVzdGVyXG4gIGNvbnN0IFt1c2VyTG9jYXRpb24sIHNldFVzZXJMb2NhdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgbGF0OiA1My40NzM3NSxcbiAgICBsbmc6IC0yLjI0MDI2LFxuICB9KTtcbiAgY29uc3QgW2lzSW5SYW5nZSwgc2V0SXNJblJhbmdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbGxlY3RlZCwgc2V0Q29sbGVjdGVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJlYXN1cmVMb2NhdGlvbnMsIHNldFRyZWFzdXJlTG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvLyBpZiB0aGUgdXNlciBzY2FucyBhbmQgdGhleSBhcmUgd2l0aGluIHRoZSBjaXJjbGUsIGEgY29sbGVjdCBidXR0b24gYXBwZWFyc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJMYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgY29uc3QgdXNlckxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICAgIGNvbnN0IHVzZXJMYXRMbmcgPSB7IGxhdDogdXNlckxhdGl0dWRlLCBsbmc6IHVzZXJMb25naXR1ZGUgfTtcbiAgICAgICAgc2V0VXNlckxvY2F0aW9uKHVzZXJMYXRMbmcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGkuZ2V0QWxsVHJlYXN1cmVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgLy8gSGFuZGxlIHRoZSBkYXRhIHJldHVybmVkIGZyb20gdGhlIEFQSSBjYWxsXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgc2V0VHJlYXN1cmVMb2NhdGlvbnMoZGF0YSlcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0cmVhc3VyZXM6XCIsIGVycm9yKTtcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9KTtcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU2NhbiA9ICgpID0+IHtcbiAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMgJiYgd2luZG93Lmdvb2dsZS5tYXBzLmdlb21ldHJ5ICYmIHdpbmRvdy5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IHRyZWFzdXJlTG9jYXRpb25zLm1hcCgodHJlYXN1cmUpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbihcbiAgICAgICAgICB1c2VyTG9jYXRpb24sXG4gICAgICAgICAgeyBsYXQ6IHRyZWFzdXJlLmxhdCwgbG5nOiB0cmVhc3VyZS5sbmcgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZXMpO1xuICBcbiAgICAgIGRpc3RhbmNlcy5mb3JFYWNoKChkaXN0YW5jZSkgPT4ge1xuICAgICAgICBpZiAoZGlzdGFuY2UgPD0gMjApIHtcbiAgICAgICAgICBzZXRJc0luUmFuZ2UodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SXNJblJhbmdlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc29sZS5sb2coaXNJblJhbmdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIkdvb2dsZSBNYXBzIEFQSSBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgfVxuICB9O1xuICBjb25zb2xlLmxvZyh3aW5kb3cuZ29vZ2xlKVxuICBjb25zb2xlLmRpcih3aW5kb3cuZ29vZ2xlLm1hcHMpXG4gIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwpXG5cbiAgY29uc3QgaGFuZGxlQ29sbGVjdCA9ICgpID0+IHtcbiAgICBzZXRDb2xsZWN0ZWQodHJlYXN1cmUuaWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvYWRTY3JpcHQgZ29vZ2xlTWFwc0FwaUtleT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCdcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2Nhbn1cbiAgICAgID5cbiAgICAgICAgU2NhbiBmb3IgVHJlYXN1cmVzIVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgaXNJblJhbmdlID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxuICAgICAgICB9IGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxgfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb2xsZWN0fVxuICAgICAgPlxuICAgICAgICBDb2xsZWN0IFRyZWFzdXJlIVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aXNMb2FkaW5nICYmIDxwPkxvYWRpbmcgdHJlYXN1cmVzLi4uPC9wPn1cbiAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e2NvbnRhaW5lclN0eWxlfVxuICAgICAgICBjZW50ZXI9e3VzZXJMb2NhdGlvbn1cbiAgICAgICAgem9vbT17MTd9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICA+XG4gICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3VzZXJMb2NhdGlvbn0gLz5cbiAgICAgICAgPE1hcmtlckNsdXN0ZXJlciBncmlkU2l6ZT17NjB9PlxuICAgICAgICAgIHsoY2x1c3RlcmVyKSA9PlxuICAgICAgICAgICAgdHJlYXN1cmVMb2NhdGlvbnMubWFwKCh0cmVhc3VyZSkgPT4gKFxuICAgICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgICAga2V5PXt0cmVhc3VyZS5pZH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17dHJlYXN1cmV9XG4gICAgICAgICAgICAgICAgY2x1c3RlcmVyPXtjbHVzdGVyZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9NYXJrZXJDbHVzdGVyZXI+XG4gICAgICA8L0dvb2dsZU1hcD5cbiAgICA8L0xvYWRTY3JpcHQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVNYXBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkdvb2dsZU1hcCIsIkxvYWRTY3JpcHQiLCJNYXJrZXIiLCJNYXJrZXJDbHVzdGVyZXIiLCJhcGkiLCJjb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsInN0cmVldFZpZXdDb250cm9sIiwiR29vZ2xlTWFwQ29tcG9uZW50IiwidXNlckxvY2F0aW9uIiwic2V0VXNlckxvY2F0aW9uIiwibGF0IiwibG5nIiwiaXNJblJhbmdlIiwic2V0SXNJblJhbmdlIiwiY29sbGVjdGVkIiwic2V0Q29sbGVjdGVkIiwidHJlYXN1cmVMb2NhdGlvbnMiLCJzZXRUcmVhc3VyZUxvY2F0aW9ucyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwidXNlckxhdGl0dWRlIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJ1c2VyTG9uZ2l0dWRlIiwibG9uZ2l0dWRlIiwidXNlckxhdExuZyIsImdldEFsbFRyZWFzdXJlcyIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5IiwiaGFuZGxlU2NhbiIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJnZW9tZXRyeSIsInNwaGVyaWNhbCIsImRpc3RhbmNlcyIsIm1hcCIsInRyZWFzdXJlIiwiY29tcHV0ZURpc3RhbmNlQmV0d2VlbiIsImZvckVhY2giLCJkaXN0YW5jZSIsImRpciIsImhhbmRsZUNvbGxlY3QiLCJpZCIsImdvb2dsZU1hcHNBcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX01BUFNfQVBJX0tFWSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwIiwibWFwQ29udGFpbmVyU3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwiZ3JpZFNpemUiLCJjbHVzdGVyZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});