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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/api */ \"(app-pages-browser)/./src/utils/api.js\");\n// \"use client\";\n// import {\n//   GoogleMap,\n//   useJsApiLoader,\n//   MarkerF,\n//   MarkerClusterer,\n// } from \"@react-google-maps/api\";\n// import { useEffect, useState } from \"react\";\n// import CollectTreasure from \"./CollectTreasure\";\n// const containerStyle = {\n//   width: \"100%\",\n//   height: \"90vh\",\n// };\n// const treasures = [\n//   { type: \"treasure\", name: \"Big Ban\", coords: { lat: 51.5007, lng: -0.1246 } },\n//   { type: \"treasure\", name: \"Big Ban2\", coords: { lat: 51.5017, lng: -0.1246 } },\n//   {\n//     type: \"treasure\",\n//     name: \"Stonehenge\",\n//     coords: { lat: 51.1789, lng: -1.8262 },\n//   },\n//   { type: \"treasure\", name: \"closest\", coords: { lat: 52.25, lng: 0.1095 } },\n//   {\n//     type: \"treasure\",\n//     name: \"Edinburgh Castle\",\n//     coords: { lat: 55.9486, lng: -3.1999 },\n//   },\n// ];\n// const icons = {\n//   treasure: {\n//     url: \"/treasure.png\",\n//     scaledSize: { width: 50, height: 50 },\n//   },\n//   user: { url: \"/user.png\", scaledSize: { width: 50, height: 50 } },\n// };\n// function TreasureMap() {\n//   const [currentLocation, setCurrentLocation] = useState({\n//     type: \"user\",\n//     name: \"person\",\n//     coords: { lat: 0, lng: 0 },\n//   });\n//   const [points, setPoints] = useState(treasures);\n//   const [isLoadedMap, setIsLoadedMap] = useState(false);\n//   const options = { mapId: \"b6a1e26ca756909b\", mapTypeControl: false };\n//   const [destination, setDestination] = useState([]);\n//   const [minDistance, setMinDistance] = useState({});\n//   const [collect, setCollect] = useState(false);\n//   useJsApiLoader({\n//     id: \"google-map-script\",\n//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,\n//   });\n//   useEffect(() => {\n//     function coordsDetecting(respond) {\n//       let lng = respond.coords.longitude;\n//       let lat = respond.coords.latitude;\n//       setCurrentLocation((curr) => {\n//         curr.coords.lat = lat;\n//         curr.coords.lng = lng;\n//         return curr;\n//       });\n//       setIsLoadedMap(true);\n//     }\n//     navigator.geolocation.getCurrentPosition(coordsDetecting);\n//   }, []);\n//   useEffect(() => {\n//     const destinationArray = [];\n//     points.map((point) => {\n//       destinationArray.push(`${point.coords.lat}, ${point.coords.lng}`);\n//     });\n//     setDestination(destinationArray);\n//   }, []);\n//   const calculateDistances = () => {\n//     if (currentLocation && points.length > 0) {\n//       const service = new google.maps.DistanceMatrixService();\n//       const origins = [\n//         `${currentLocation.coords.lat}, ${currentLocation.coords.lng}`,\n//       ];\n//       service.getDistanceMatrix(\n//         {\n//           origins: origins,\n//           destinations: destination,\n//           travelMode: \"WALKING\",\n//         },\n//         (response, status) => {\n//           if (status === \"OK\") {\n//             let placeId = 0;\n//             let min = response.rows[0].elements[placeId].distance.value;\n//             response.rows[0].elements.map((element, i) => {\n//               if (min > element.distance.value) {\n//                 min = element.distance.value;\n//                 placeId = i;\n//               }\n//             });\n//             setMinDistance({ distance: min, place: points[placeId] });\n//           } else {\n//             console.error(\"Error calculating distances:\", status);\n//           }\n//         }\n//       );\n//     }\n//   };\n//   useEffect(() => {\n//     if (minDistance.distance < 100) {\n//       setCollect(true);\n//     }\n//   }, [minDistance]);\n//   const checkDistance = () => {\n//     calculateDistances();\n//   };\n//   return isLoadedMap ? (\n//     <>\n//       <section className=\"userInteraction\">\n//         <div onClick={checkDistance} className=\"find button\">\n//           Find your Nearest Treasure\n//         </div>\n//         {collect ? <CollectTreasure treasure={minDistance.place} /> : \"\"}\n//       </section>\n//       <GoogleMap\n//         mapContainerStyle={containerStyle}\n//         center={currentLocation.coords}\n//         zoom={8}\n//         options={options}\n//       >\n//         <MarkerClusterer>\n//           {(clusterer) =>\n//             points.map((treasure, i) => (\n//               <MarkerF\n//                 key={i}\n//                 position={{\n//                   lat: treasure.coords.lat,\n//                   lng: treasure.coords.lng,\n//                 }}\n//                 icon={icons[treasure.type]}\n//                 clusterer={clusterer}\n//               />\n//             ))\n//           }\n//         </MarkerClusterer>\n//         <MarkerF\n//           position={{\n//             lat: currentLocation.coords.lat,\n//             lng: currentLocation.coords.lng,\n//           }}\n//           icon={icons[currentLocation.type]}\n//           label={\"Its U!\"}\n//         />\n//       </GoogleMap>\n//     </>\n//   ) : (\n//     <><h1>Loading, please wait...</h1></>\n//   );\n// }\n// export default TreasureMap;\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst containerStyle = {\n    width: \"100%\",\n    height: \"400px\"\n};\nconst options = {\n    streetViewControl: false\n};\n// const treasureLocations = [\n//   { id: 1, lat: 52.920724, lng: -1.03536 },\n//   { id: 2, lat: 52.920957, lng: -1.031999 },\n//   { id: 3, lat: 52.920776, lng: -1.033433 },\n//   { id: 4, lat: 52.921444, lng: -1.034414 },\n// ];\nconst GoogleMapComponent = ()=>{\n    _s();\n    // the default location will be the Northcoders base in Manchester\n    const [userLocation, setUserLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 53.47375,\n        lng: -2.24026\n    });\n    const [isInRange, setIsInRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [treasureLocations, setTreasureLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [watchingPosition, setWatchingPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // if the user scans and they are within the circle, a collect button appears\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (navigator.geolocation) {\n            navigator.geolocation.watchPosition((position)=>{\n                const userLatLng = {\n                    lat: position.coords.latitude,\n                    lng: position.coords.longitude\n                };\n                setUserLocation(userLatLng);\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllTreasures().then((data)=>{\n            // Handle the data returned from the API call\n            console.log(data);\n            setTreasureLocations(data);\n        }).catch((error)=>{\n            // Handle errors\n            console.error(\"Error fetching treasures:\", error);\n        }).finally(()=>{\n            setIsLoading(false);\n        });\n    }, []);\n    const handleScan = async ()=>{\n        try {\n            const distancesMatrix = await new window.google.maps.DistanceMatrixService().getDistanceMatrix({\n                origins: [\n                    new window.google.maps.LatLng(userLocation.lat, userLocation.lng)\n                ],\n                destinations: treasureLocations.map((treasure1)=>new window.google.maps.LatLng(treasure1.lat, treasure1.lng)),\n                travelMode: \"WALKING\"\n            });\n            // distancesMatrix.rows[0].elements will contain an array of distances to each treasure\n            const distances = distancesMatrix.rows[0].elements.map((element)=>element.distance.value);\n            // Check if any treasure is within 20 meters\n            const isTreasureInRange = distances.some((distance)=>distance <= 20);\n            console.log(distances);\n            setIsInRange(isTreasureInRange);\n        } catch (error) {\n            console.error(\"Error calculating distances:\", error);\n        }\n    };\n    console.log(window.google);\n    const handleCollect = ()=>{\n        setCollected(treasure.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.LoadScript, {\n        googleMapsApiKey: \"AIzaSyA6QXt8Vbg_VUnXcvmyb5J8OueJNUNAH-g\",\n        onLoad: ()=>console.log(\"Google Maps API loaded\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                onClick: handleScan,\n                children: \"Scan for Treasures!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 270,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(isInRange ? \"block\" : \"hidden\", \" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"),\n                onClick: handleCollect,\n                children: \"Collect Treasure!\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 276,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading treasures...\"\n            }, void 0, false, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 284,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.GoogleMap, {\n                mapContainerStyle: containerStyle,\n                center: userLocation,\n                zoom: 17,\n                options: options,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                        position: userLocation\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 291,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.MarkerClusterer, {\n                        gridSize: 60,\n                        children: (clusterer)=>treasureLocations.map((treasure1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_3__.Marker, {\n                                    position: treasure1,\n                                    clusterer: clusterer\n                                }, treasure1.id, false, {\n                                    fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                                    lineNumber: 295,\n                                    columnNumber: 15\n                                }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                        lineNumber: 292,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n                lineNumber: 285,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/elr143/northcoders/treasure-hunt/treasure-hunt-frontend/src/app/map/page.jsx\",\n        lineNumber: 266,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GoogleMapComponent, \"eRJg1TY9RsWKZX5AkoBZFImr1cc=\");\n_c = GoogleMapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapComponent);\nvar _c;\n$RefreshReg$(_c, \"GoogleMapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFwL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUVoQixXQUFXO0FBQ1gsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLG1DQUFtQztBQUNuQywrQ0FBK0M7QUFDL0MsbURBQW1EO0FBRW5ELDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFFTCxzQkFBc0I7QUFDdEIsbUZBQW1GO0FBQ25GLG9GQUFvRjtBQUNwRixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUMxQiw4Q0FBOEM7QUFDOUMsT0FBTztBQUNQLGdGQUFnRjtBQUNoRixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQyw4Q0FBOEM7QUFDOUMsT0FBTztBQUNQLEtBQUs7QUFFTCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLDRCQUE0QjtBQUM1Qiw2Q0FBNkM7QUFDN0MsT0FBTztBQUNQLHVFQUF1RTtBQUN2RSxLQUFLO0FBRUwsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyxRQUFRO0FBRVIscURBQXFEO0FBQ3JELDJEQUEyRDtBQUMzRCwwRUFBMEU7QUFFMUUsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUN4RCxtREFBbUQ7QUFFbkQscUJBQXFCO0FBQ3JCLCtCQUErQjtBQUMvQixxRUFBcUU7QUFDckUsUUFBUTtBQUVSLHNCQUFzQjtBQUN0QiwwQ0FBMEM7QUFDMUMsNENBQTRDO0FBQzVDLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyx1QkFBdUI7QUFDdkIsWUFBWTtBQUVaLDhCQUE4QjtBQUM5QixRQUFRO0FBRVIsaUVBQWlFO0FBQ2pFLFlBQVk7QUFFWixzQkFBc0I7QUFDdEIsbUNBQW1DO0FBQ25DLDhCQUE4QjtBQUM5QiwyRUFBMkU7QUFDM0UsVUFBVTtBQUNWLHdDQUF3QztBQUN4QyxZQUFZO0FBRVosdUNBQXVDO0FBQ3ZDLGtEQUFrRDtBQUNsRCxpRUFBaUU7QUFDakUsMEJBQTBCO0FBQzFCLDBFQUEwRTtBQUMxRSxXQUFXO0FBRVgsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWiw4QkFBOEI7QUFDOUIsdUNBQXVDO0FBQ3ZDLG1DQUFtQztBQUNuQyxhQUFhO0FBQ2Isa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQywrQkFBK0I7QUFDL0IsMkVBQTJFO0FBRTNFLDhEQUE4RDtBQUM5RCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLHlFQUF5RTtBQUN6RSxxQkFBcUI7QUFDckIscUVBQXFFO0FBQ3JFLGNBQWM7QUFDZCxZQUFZO0FBQ1osV0FBVztBQUNYLFFBQVE7QUFDUixPQUFPO0FBRVAsc0JBQXNCO0FBQ3RCLHdDQUF3QztBQUN4QywwQkFBMEI7QUFDMUIsUUFBUTtBQUNSLHVCQUF1QjtBQUV2QixrQ0FBa0M7QUFDbEMsNEJBQTRCO0FBQzVCLE9BQU87QUFFUCwyQkFBMkI7QUFDM0IsU0FBUztBQUNULDhDQUE4QztBQUM5QyxnRUFBZ0U7QUFDaEUsdUNBQXVDO0FBQ3ZDLGlCQUFpQjtBQUNqQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBRW5CLG1CQUFtQjtBQUNuQiw2Q0FBNkM7QUFDN0MsMENBQTBDO0FBQzFDLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsVUFBVTtBQUNWLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsNENBQTRDO0FBQzVDLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMscUJBQXFCO0FBQ3JCLDhDQUE4QztBQUM5Qyx3Q0FBd0M7QUFDeEMsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsNkJBQTZCO0FBRTdCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyxlQUFlO0FBQ2YsK0NBQStDO0FBQy9DLDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVixVQUFVO0FBQ1YsNENBQTRDO0FBQzVDLE9BQU87QUFDUCxJQUFJO0FBRUosOEJBQThCOzs7QUFHaUQ7QUFDUjtBQUNkO0FBQzNCO0FBRTlCLE1BQU1VLGlCQUFpQjtJQUNyQkMsT0FBTztJQUNQQyxRQUFRO0FBQ1Y7QUFFQSxNQUFNQyxVQUFVO0lBQ2RDLG1CQUFtQjtBQUNyQjtBQUVBLDhCQUE4QjtBQUM5Qiw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsS0FBSztBQUVMLE1BQU1DLHFCQUFxQjs7SUFDekIsa0VBQWtFO0lBQ2xFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDO1FBQy9DZ0IsS0FBSztRQUNMQyxLQUFLLENBQUM7SUFDUjtJQUNBLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDb0IsV0FBV0MsYUFBYSxHQUFHckIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDc0IsbUJBQW1CQyxxQkFBcUIsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0QsTUFBTSxDQUFDd0IsV0FBV0MsYUFBYSxHQUFHekIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMEIsa0JBQWtCQyxvQkFBb0IsR0FBRzNCLCtDQUFRQSxDQUFDO0lBRXpELDZFQUE2RTtJQUU3RUUsZ0RBQVNBLENBQUM7UUFDUixJQUFJMEIsVUFBVUMsV0FBVyxFQUFFO1lBQ3pCRCxVQUFVQyxXQUFXLENBQUNDLGFBQWEsQ0FBQyxDQUFDQztnQkFDbkMsTUFBTUMsYUFBYTtvQkFBRWhCLEtBQUtlLFNBQVNFLE1BQU0sQ0FBQ0MsUUFBUTtvQkFBRWpCLEtBQUtjLFNBQVNFLE1BQU0sQ0FBQ0UsU0FBUztnQkFBQztnQkFDbkZwQixnQkFBZ0JpQjtZQUNsQjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUw5QixnREFBU0EsQ0FBQztRQUNSSyxrREFBR0EsQ0FDQTZCLGVBQWUsR0FDZkMsSUFBSSxDQUFDLENBQUNDO1lBQ0wsNkNBQTZDO1lBQzdDQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pmLHFCQUFxQmU7UUFDdkIsR0FDQ0csS0FBSyxDQUFDLENBQUNDO1lBQ04sZ0JBQWdCO1lBQ2hCSCxRQUFRRyxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QyxHQUNDQyxPQUFPLENBQUM7WUFDUGxCLGFBQWE7UUFDZjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1tQixhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNQyxrQkFBa0IsTUFBTSxJQUFJQyxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MscUJBQXFCLEdBQUdDLGlCQUFpQixDQUFDO2dCQUM3RkMsU0FBUztvQkFBQyxJQUFJTCxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0ksTUFBTSxDQUFDdEMsYUFBYUUsR0FBRyxFQUFFRixhQUFhRyxHQUFHO2lCQUFFO2dCQUM1RW9DLGNBQWMvQixrQkFBa0JnQyxHQUFHLENBQUMsQ0FBQ0MsWUFBYSxJQUFJVCxPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQ0ksTUFBTSxDQUFDRyxVQUFTdkMsR0FBRyxFQUFFdUMsVUFBU3RDLEdBQUc7Z0JBQzFHdUMsWUFBWTtZQUNkO1lBRUEsdUZBQXVGO1lBQ3ZGLE1BQU1DLFlBQVlaLGdCQUFnQmEsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDTCxHQUFHLENBQUMsQ0FBQ00sVUFBWUEsUUFBUUMsUUFBUSxDQUFDQyxLQUFLO1lBRTFGLDRDQUE0QztZQUM1QyxNQUFNQyxvQkFBb0JOLFVBQVVPLElBQUksQ0FBQyxDQUFDSCxXQUFhQSxZQUFZO1lBRW5FdEIsUUFBUUMsR0FBRyxDQUFDaUI7WUFDWnRDLGFBQWE0QztRQUNmLEVBQUUsT0FBT3JCLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDaEQ7SUFDRjtJQUNBSCxRQUFRQyxHQUFHLENBQUNNLE9BQU9DLE1BQU07SUFHekIsTUFBTWtCLGdCQUFnQjtRQUNwQjVDLGFBQWFrQyxTQUFTVyxFQUFFO0lBQzFCO0lBRUEscUJBQ0UsOERBQUM5RCw4REFBVUE7UUFDVCtELGtCQUFrQkMseUNBQTJDO1FBQzdERyxRQUFRLElBQU1oQyxRQUFRQyxHQUFHLENBQUM7OzBCQUUxQiw4REFBQ2dDO2dCQUNDQyxXQUFVO2dCQUNWQyxTQUFTOUI7MEJBQ1Y7Ozs7OzswQkFHRCw4REFBQzRCO2dCQUNDQyxXQUFXLEdBRVYsT0FEQ3ZELFlBQVksVUFBVSxVQUN2QjtnQkFDRHdELFNBQVNUOzBCQUNWOzs7Ozs7WUFHQXpDLDJCQUFhLDhEQUFDbUQ7MEJBQUU7Ozs7OzswQkFDakIsOERBQUN4RSw2REFBU0E7Z0JBQ1J5RSxtQkFBbUJwRTtnQkFDbkJxRSxRQUFRL0Q7Z0JBQ1JnRSxNQUFNO2dCQUNObkUsU0FBU0E7O2tDQUVULDhEQUFDTiwwREFBTUE7d0JBQUMwQixVQUFVakI7Ozs7OztrQ0FDbEIsOERBQUNSLG1FQUFlQTt3QkFBQ3lFLFVBQVU7a0NBQ3hCLENBQUNDLFlBQ0ExRCxrQkFBa0JnQyxHQUFHLENBQUMsQ0FBQ0MsMEJBQ3JCLDhEQUFDbEQsMERBQU1BO29DQUVMMEIsVUFBVXdCO29DQUNWeUIsV0FBV0E7bUNBRk56QixVQUFTVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWhDO0dBNUdNckQ7S0FBQUE7QUE4R04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21hcC9wYWdlLmpzeD8xNDBhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuXG4vLyBpbXBvcnQge1xuLy8gICBHb29nbGVNYXAsXG4vLyAgIHVzZUpzQXBpTG9hZGVyLFxuLy8gICBNYXJrZXJGLFxuLy8gICBNYXJrZXJDbHVzdGVyZXIsXG4vLyB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgQ29sbGVjdFRyZWFzdXJlIGZyb20gXCIuL0NvbGxlY3RUcmVhc3VyZVwiO1xuXG4vLyBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbi8vICAgd2lkdGg6IFwiMTAwJVwiLFxuLy8gICBoZWlnaHQ6IFwiOTB2aFwiLFxuLy8gfTtcblxuLy8gY29uc3QgdHJlYXN1cmVzID0gW1xuLy8gICB7IHR5cGU6IFwidHJlYXN1cmVcIiwgbmFtZTogXCJCaWcgQmFuXCIsIGNvb3JkczogeyBsYXQ6IDUxLjUwMDcsIGxuZzogLTAuMTI0NiB9IH0sXG4vLyAgIHsgdHlwZTogXCJ0cmVhc3VyZVwiLCBuYW1lOiBcIkJpZyBCYW4yXCIsIGNvb3JkczogeyBsYXQ6IDUxLjUwMTcsIGxuZzogLTAuMTI0NiB9IH0sXG4vLyAgIHtcbi8vICAgICB0eXBlOiBcInRyZWFzdXJlXCIsXG4vLyAgICAgbmFtZTogXCJTdG9uZWhlbmdlXCIsXG4vLyAgICAgY29vcmRzOiB7IGxhdDogNTEuMTc4OSwgbG5nOiAtMS44MjYyIH0sXG4vLyAgIH0sXG4vLyAgIHsgdHlwZTogXCJ0cmVhc3VyZVwiLCBuYW1lOiBcImNsb3Nlc3RcIiwgY29vcmRzOiB7IGxhdDogNTIuMjUsIGxuZzogMC4xMDk1IH0gfSxcbi8vICAge1xuLy8gICAgIHR5cGU6IFwidHJlYXN1cmVcIixcbi8vICAgICBuYW1lOiBcIkVkaW5idXJnaCBDYXN0bGVcIixcbi8vICAgICBjb29yZHM6IHsgbGF0OiA1NS45NDg2LCBsbmc6IC0zLjE5OTkgfSxcbi8vICAgfSxcbi8vIF07XG5cbi8vIGNvbnN0IGljb25zID0ge1xuLy8gICB0cmVhc3VyZToge1xuLy8gICAgIHVybDogXCIvdHJlYXN1cmUucG5nXCIsXG4vLyAgICAgc2NhbGVkU2l6ZTogeyB3aWR0aDogNTAsIGhlaWdodDogNTAgfSxcbi8vICAgfSxcbi8vICAgdXNlcjogeyB1cmw6IFwiL3VzZXIucG5nXCIsIHNjYWxlZFNpemU6IHsgd2lkdGg6IDUwLCBoZWlnaHQ6IDUwIH0gfSxcbi8vIH07XG5cbi8vIGZ1bmN0aW9uIFRyZWFzdXJlTWFwKCkge1xuLy8gICBjb25zdCBbY3VycmVudExvY2F0aW9uLCBzZXRDdXJyZW50TG9jYXRpb25dID0gdXNlU3RhdGUoe1xuLy8gICAgIHR5cGU6IFwidXNlclwiLFxuLy8gICAgIG5hbWU6IFwicGVyc29uXCIsXG4vLyAgICAgY29vcmRzOiB7IGxhdDogMCwgbG5nOiAwIH0sXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IFtwb2ludHMsIHNldFBvaW50c10gPSB1c2VTdGF0ZSh0cmVhc3VyZXMpO1xuLy8gICBjb25zdCBbaXNMb2FkZWRNYXAsIHNldElzTG9hZGVkTWFwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3Qgb3B0aW9ucyA9IHsgbWFwSWQ6IFwiYjZhMWUyNmNhNzU2OTA5YlwiLCBtYXBUeXBlQ29udHJvbDogZmFsc2UgfTtcblxuLy8gICBjb25zdCBbZGVzdGluYXRpb24sIHNldERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcbi8vICAgY29uc3QgW21pbkRpc3RhbmNlLCBzZXRNaW5EaXN0YW5jZV0gPSB1c2VTdGF0ZSh7fSk7XG4vLyAgIGNvbnN0IFtjb2xsZWN0LCBzZXRDb2xsZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuLy8gICB1c2VKc0FwaUxvYWRlcih7XG4vLyAgICAgaWQ6IFwiZ29vZ2xlLW1hcC1zY3JpcHRcIixcbi8vICAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19BUElfS0VZLFxuLy8gICB9KTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGZ1bmN0aW9uIGNvb3Jkc0RldGVjdGluZyhyZXNwb25kKSB7XG4vLyAgICAgICBsZXQgbG5nID0gcmVzcG9uZC5jb29yZHMubG9uZ2l0dWRlO1xuLy8gICAgICAgbGV0IGxhdCA9IHJlc3BvbmQuY29vcmRzLmxhdGl0dWRlO1xuLy8gICAgICAgc2V0Q3VycmVudExvY2F0aW9uKChjdXJyKSA9PiB7XG4vLyAgICAgICAgIGN1cnIuY29vcmRzLmxhdCA9IGxhdDtcbi8vICAgICAgICAgY3Vyci5jb29yZHMubG5nID0gbG5nO1xuLy8gICAgICAgICByZXR1cm4gY3Vycjtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgICBzZXRJc0xvYWRlZE1hcCh0cnVlKTtcbi8vICAgICB9XG5cbi8vICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGNvb3Jkc0RldGVjdGluZyk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGRlc3RpbmF0aW9uQXJyYXkgPSBbXTtcbi8vICAgICBwb2ludHMubWFwKChwb2ludCkgPT4ge1xuLy8gICAgICAgZGVzdGluYXRpb25BcnJheS5wdXNoKGAke3BvaW50LmNvb3Jkcy5sYXR9LCAke3BvaW50LmNvb3Jkcy5sbmd9YCk7XG4vLyAgICAgfSk7XG4vLyAgICAgc2V0RGVzdGluYXRpb24oZGVzdGluYXRpb25BcnJheSk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICBjb25zdCBjYWxjdWxhdGVEaXN0YW5jZXMgPSAoKSA9PiB7XG4vLyAgICAgaWYgKGN1cnJlbnRMb2NhdGlvbiAmJiBwb2ludHMubGVuZ3RoID4gMCkge1xuLy8gICAgICAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXN0YW5jZU1hdHJpeFNlcnZpY2UoKTtcbi8vICAgICAgIGNvbnN0IG9yaWdpbnMgPSBbXG4vLyAgICAgICAgIGAke2N1cnJlbnRMb2NhdGlvbi5jb29yZHMubGF0fSwgJHtjdXJyZW50TG9jYXRpb24uY29vcmRzLmxuZ31gLFxuLy8gICAgICAgXTtcblxuLy8gICAgICAgc2VydmljZS5nZXREaXN0YW5jZU1hdHJpeChcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIG9yaWdpbnM6IG9yaWdpbnMsXG4vLyAgICAgICAgICAgZGVzdGluYXRpb25zOiBkZXN0aW5hdGlvbixcbi8vICAgICAgICAgICB0cmF2ZWxNb2RlOiBcIldBTEtJTkdcIixcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgKHJlc3BvbnNlLCBzdGF0dXMpID0+IHtcbi8vICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbi8vICAgICAgICAgICAgIGxldCBwbGFjZUlkID0gMDtcbi8vICAgICAgICAgICAgIGxldCBtaW4gPSByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzW3BsYWNlSWRdLmRpc3RhbmNlLnZhbHVlO1xuXG4vLyAgICAgICAgICAgICByZXNwb25zZS5yb3dzWzBdLmVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuLy8gICAgICAgICAgICAgICBpZiAobWluID4gZWxlbWVudC5kaXN0YW5jZS52YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgIG1pbiA9IGVsZW1lbnQuZGlzdGFuY2UudmFsdWU7XG4vLyAgICAgICAgICAgICAgICAgcGxhY2VJZCA9IGk7XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgc2V0TWluRGlzdGFuY2UoeyBkaXN0YW5jZTogbWluLCBwbGFjZTogcG9pbnRzW3BsYWNlSWRdIH0pO1xuLy8gICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2FsY3VsYXRpbmcgZGlzdGFuY2VzOlwiLCBzdGF0dXMpO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgKTtcbi8vICAgICB9XG4vLyAgIH07XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBpZiAobWluRGlzdGFuY2UuZGlzdGFuY2UgPCAxMDApIHtcbi8vICAgICAgIHNldENvbGxlY3QodHJ1ZSk7XG4vLyAgICAgfVxuLy8gICB9LCBbbWluRGlzdGFuY2VdKTtcblxuLy8gICBjb25zdCBjaGVja0Rpc3RhbmNlID0gKCkgPT4ge1xuLy8gICAgIGNhbGN1bGF0ZURpc3RhbmNlcygpO1xuLy8gICB9O1xuXG4vLyAgIHJldHVybiBpc0xvYWRlZE1hcCA/IChcbi8vICAgICA8PlxuLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlckludGVyYWN0aW9uXCI+XG4vLyAgICAgICAgIDxkaXYgb25DbGljaz17Y2hlY2tEaXN0YW5jZX0gY2xhc3NOYW1lPVwiZmluZCBidXR0b25cIj5cbi8vICAgICAgICAgICBGaW5kIHlvdXIgTmVhcmVzdCBUcmVhc3VyZVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAge2NvbGxlY3QgPyA8Q29sbGVjdFRyZWFzdXJlIHRyZWFzdXJlPXttaW5EaXN0YW5jZS5wbGFjZX0gLz4gOiBcIlwifVxuLy8gICAgICAgPC9zZWN0aW9uPlxuXG4vLyAgICAgICA8R29vZ2xlTWFwXG4vLyAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbi8vICAgICAgICAgY2VudGVyPXtjdXJyZW50TG9jYXRpb24uY29vcmRzfVxuLy8gICAgICAgICB6b29tPXs4fVxuLy8gICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuLy8gICAgICAgPlxuLy8gICAgICAgICA8TWFya2VyQ2x1c3RlcmVyPlxuLy8gICAgICAgICAgIHsoY2x1c3RlcmVyKSA9PlxuLy8gICAgICAgICAgICAgcG9pbnRzLm1hcCgodHJlYXN1cmUsIGkpID0+IChcbi8vICAgICAgICAgICAgICAgPE1hcmtlckZcbi8vICAgICAgICAgICAgICAgICBrZXk9e2l9XG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb249e3tcbi8vICAgICAgICAgICAgICAgICAgIGxhdDogdHJlYXN1cmUuY29vcmRzLmxhdCxcbi8vICAgICAgICAgICAgICAgICAgIGxuZzogdHJlYXN1cmUuY29vcmRzLmxuZyxcbi8vICAgICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgICAgIGljb249e2ljb25zW3RyZWFzdXJlLnR5cGVdfVxuLy8gICAgICAgICAgICAgICAgIGNsdXN0ZXJlcj17Y2x1c3RlcmVyfVxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgKSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIDwvTWFya2VyQ2x1c3RlcmVyPlxuXG4vLyAgICAgICAgIDxNYXJrZXJGXG4vLyAgICAgICAgICAgcG9zaXRpb249e3tcbi8vICAgICAgICAgICAgIGxhdDogY3VycmVudExvY2F0aW9uLmNvb3Jkcy5sYXQsXG4vLyAgICAgICAgICAgICBsbmc6IGN1cnJlbnRMb2NhdGlvbi5jb29yZHMubG5nLFxuLy8gICAgICAgICAgIH19XG4vLyAgICAgICAgICAgaWNvbj17aWNvbnNbY3VycmVudExvY2F0aW9uLnR5cGVdfVxuLy8gICAgICAgICAgIGxhYmVsPXtcIkl0cyBVIVwifVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgPC9Hb29nbGVNYXA+XG4vLyAgICAgPC8+XG4vLyAgICkgOiAoXG4vLyAgICAgPD48aDE+TG9hZGluZywgcGxlYXNlIHdhaXQuLi48L2gxPjwvPlxuLy8gICApO1xuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBUcmVhc3VyZU1hcDtcblxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdvb2dsZU1hcCwgTG9hZFNjcmlwdCwgTWFya2VyIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcbmltcG9ydCB7IE1hcmtlckNsdXN0ZXJlciB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5pbXBvcnQgYXBpIGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IFwiNDAwcHhcIixcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbn07XG5cbi8vIGNvbnN0IHRyZWFzdXJlTG9jYXRpb25zID0gW1xuLy8gICB7IGlkOiAxLCBsYXQ6IDUyLjkyMDcyNCwgbG5nOiAtMS4wMzUzNiB9LFxuLy8gICB7IGlkOiAyLCBsYXQ6IDUyLjkyMDk1NywgbG5nOiAtMS4wMzE5OTkgfSxcbi8vICAgeyBpZDogMywgbGF0OiA1Mi45MjA3NzYsIGxuZzogLTEuMDMzNDMzIH0sXG4vLyAgIHsgaWQ6IDQsIGxhdDogNTIuOTIxNDQ0LCBsbmc6IC0xLjAzNDQxNCB9LFxuLy8gXTtcblxuY29uc3QgR29vZ2xlTWFwQ29tcG9uZW50ID0gKCkgPT4ge1xuICAvLyB0aGUgZGVmYXVsdCBsb2NhdGlvbiB3aWxsIGJlIHRoZSBOb3J0aGNvZGVycyBiYXNlIGluIE1hbmNoZXN0ZXJcbiAgY29uc3QgW3VzZXJMb2NhdGlvbiwgc2V0VXNlckxvY2F0aW9uXSA9IHVzZVN0YXRlKHtcbiAgICBsYXQ6IDUzLjQ3Mzc1LFxuICAgIGxuZzogLTIuMjQwMjYsXG4gIH0pO1xuICBjb25zdCBbaXNJblJhbmdlLCBzZXRJc0luUmFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGVkLCBzZXRDb2xsZWN0ZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmVhc3VyZUxvY2F0aW9ucywgc2V0VHJlYXN1cmVMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt3YXRjaGluZ1Bvc2l0aW9uLCBzZXRXYXRjaGluZ1Bvc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIGlmIHRoZSB1c2VyIHNjYW5zIGFuZCB0aGV5IGFyZSB3aXRoaW4gdGhlIGNpcmNsZSwgYSBjb2xsZWN0IGJ1dHRvbiBhcHBlYXJzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgdXNlckxhdExuZyA9IHsgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSB9O1xuICAgICAgICBzZXRVc2VyTG9jYXRpb24odXNlckxhdExuZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFwaVxuICAgICAgLmdldEFsbFRyZWFzdXJlcygpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgQVBJIGNhbGxcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldFRyZWFzdXJlTG9jYXRpb25zKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJlYXN1cmVzOlwiLCBlcnJvcik7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTY2FuID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkaXN0YW5jZXNNYXRyaXggPSBhd2FpdCBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkRpc3RhbmNlTWF0cml4U2VydmljZSgpLmdldERpc3RhbmNlTWF0cml4KHtcbiAgICAgICAgb3JpZ2luczogW25ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKHVzZXJMb2NhdGlvbi5sYXQsIHVzZXJMb2NhdGlvbi5sbmcpXSxcbiAgICAgICAgZGVzdGluYXRpb25zOiB0cmVhc3VyZUxvY2F0aW9ucy5tYXAoKHRyZWFzdXJlKSA9PiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZyh0cmVhc3VyZS5sYXQsIHRyZWFzdXJlLmxuZykpLFxuICAgICAgICB0cmF2ZWxNb2RlOiAnV0FMS0lORycsICAvLyBvciAnRFJJVklORycsICdCSUNZQ0xJTkcnLCBldGMuLCBkZXBlbmRpbmcgb24geW91ciB1c2UgY2FzZVxuICAgICAgfSk7XG4gIFxuICAgICAgLy8gZGlzdGFuY2VzTWF0cml4LnJvd3NbMF0uZWxlbWVudHMgd2lsbCBjb250YWluIGFuIGFycmF5IG9mIGRpc3RhbmNlcyB0byBlYWNoIHRyZWFzdXJlXG4gICAgICBjb25zdCBkaXN0YW5jZXMgPSBkaXN0YW5jZXNNYXRyaXgucm93c1swXS5lbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IGVsZW1lbnQuZGlzdGFuY2UudmFsdWUpO1xuICBcbiAgICAgIC8vIENoZWNrIGlmIGFueSB0cmVhc3VyZSBpcyB3aXRoaW4gMjAgbWV0ZXJzXG4gICAgICBjb25zdCBpc1RyZWFzdXJlSW5SYW5nZSA9IGRpc3RhbmNlcy5zb21lKChkaXN0YW5jZSkgPT4gZGlzdGFuY2UgPD0gMjApO1xuICBcbiAgICAgIGNvbnNvbGUubG9nKGRpc3RhbmNlcylcbiAgICAgIHNldElzSW5SYW5nZShpc1RyZWFzdXJlSW5SYW5nZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIGRpc3RhbmNlczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBjb25zb2xlLmxvZyh3aW5kb3cuZ29vZ2xlKTtcblxuXG4gIGNvbnN0IGhhbmRsZUNvbGxlY3QgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGVjdGVkKHRyZWFzdXJlLmlkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2FkU2NyaXB0XG4gICAgICBnb29nbGVNYXBzQXBpS2V5PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUFQU19BUElfS0VZfVxuICAgICAgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZyhcIkdvb2dsZSBNYXBzIEFQSSBsb2FkZWRcIil9XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwnXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNjYW59XG4gICAgICA+XG4gICAgICAgIFNjYW4gZm9yIFRyZWFzdXJlcyFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzSW5SYW5nZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcbiAgICAgICAgfSBiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsYH1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ29sbGVjdH1cbiAgICAgID5cbiAgICAgICAgQ29sbGVjdCBUcmVhc3VyZSFcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nIHRyZWFzdXJlcy4uLjwvcD59XG4gICAgICA8R29vZ2xlTWFwXG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXtjb250YWluZXJTdHlsZX1cbiAgICAgICAgY2VudGVyPXt1c2VyTG9jYXRpb259XG4gICAgICAgIHpvb209ezE3fVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgPlxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXt1c2VyTG9jYXRpb259IC8+XG4gICAgICAgIDxNYXJrZXJDbHVzdGVyZXIgZ3JpZFNpemU9ezYwfT5cbiAgICAgICAgICB7KGNsdXN0ZXJlcikgPT5cbiAgICAgICAgICAgIHRyZWFzdXJlTG9jYXRpb25zLm1hcCgodHJlYXN1cmUpID0+IChcbiAgICAgICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAgICAgIGtleT17dHJlYXN1cmUuaWR9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RyZWFzdXJlfVxuICAgICAgICAgICAgICAgIGNsdXN0ZXJlcj17Y2x1c3RlcmVyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvTWFya2VyQ2x1c3RlcmVyPlxuICAgICAgPC9Hb29nbGVNYXA+XG4gICAgPC9Mb2FkU2NyaXB0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlTWFwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJHb29nbGVNYXAiLCJMb2FkU2NyaXB0IiwiTWFya2VyIiwiTWFya2VyQ2x1c3RlcmVyIiwiYXBpIiwiY29udGFpbmVyU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJzdHJlZXRWaWV3Q29udHJvbCIsIkdvb2dsZU1hcENvbXBvbmVudCIsInVzZXJMb2NhdGlvbiIsInNldFVzZXJMb2NhdGlvbiIsImxhdCIsImxuZyIsImlzSW5SYW5nZSIsInNldElzSW5SYW5nZSIsImNvbGxlY3RlZCIsInNldENvbGxlY3RlZCIsInRyZWFzdXJlTG9jYXRpb25zIiwic2V0VHJlYXN1cmVMb2NhdGlvbnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ3YXRjaGluZ1Bvc2l0aW9uIiwic2V0V2F0Y2hpbmdQb3NpdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwidXNlckxhdExuZyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0QWxsVHJlYXN1cmVzIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImZpbmFsbHkiLCJoYW5kbGVTY2FuIiwiZGlzdGFuY2VzTWF0cml4Iiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIkRpc3RhbmNlTWF0cml4U2VydmljZSIsImdldERpc3RhbmNlTWF0cml4Iiwib3JpZ2lucyIsIkxhdExuZyIsImRlc3RpbmF0aW9ucyIsIm1hcCIsInRyZWFzdXJlIiwidHJhdmVsTW9kZSIsImRpc3RhbmNlcyIsInJvd3MiLCJlbGVtZW50cyIsImVsZW1lbnQiLCJkaXN0YW5jZSIsInZhbHVlIiwiaXNUcmVhc3VyZUluUmFuZ2UiLCJzb21lIiwiaGFuZGxlQ29sbGVjdCIsImlkIiwiZ29vZ2xlTWFwc0FwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfTUFQU19BUElfS0VZIiwib25Mb2FkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInAiLCJtYXBDb250YWluZXJTdHlsZSIsImNlbnRlciIsInpvb20iLCJncmlkU2l6ZSIsImNsdXN0ZXJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/map/page.jsx\n"));

/***/ })

});