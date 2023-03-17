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

/***/ "./sections/World.jsx":
/*!****************************!*\
  !*** ./sections/World.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst World = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: true,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidthS, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                    title: \"| Different worlds, different people\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/World.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TitleText, {\n                    title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: \"Track friends around you and invite them to play together in the same world\"\n                    }, void 0, false),\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/World.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/World.jsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/World.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n_c = World;\n/* harmony default export */ __webpack_exports__[\"default\"] = (World);\nvar _c;\n$RefreshReg$(_c, \"World\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9Xb3JsZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFK0I7QUFDUTtBQUNlO0FBQ0s7QUFFM0QsTUFBTU0sUUFBUSxrQkFDWiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQlIsd0RBQWUsRUFBQztrQkFDckMsNEVBQUNDLHFEQUFVO1lBQ1RVLFVBQVVQLDJEQUFnQkE7WUFDMUJRLFNBQVE7WUFDUkMsYUFBWTtZQUNaQyxVQUFVO2dCQUFFQyxNQUFNLElBQUk7Z0JBQUVDLFFBQVE7WUFBSztZQUNyQ1IsV0FBVyxHQUFzQixPQUFuQlIsMkRBQWtCLEVBQUM7OzhCQUVqQyw4REFBQ0csbURBQVVBO29CQUNUZSxPQUFNO29CQUNOQyxZQUFXOzs7Ozs7OEJBRWIsOERBQUNqQixrREFBU0E7b0JBQ1JnQixxQkFDRTtrQ0FBRTs7b0JBS0pDLFlBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBcEJiYjtBQTBCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9Xb3JsZC5qc3g/OGZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgVGl0bGVUZXh0LCBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdGFnZ2VyQ29udGFpbmVyLCBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBXb3JsZCA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGhTfSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuICAgID5cbiAgICAgIDxUeXBpbmdUZXh0XG4gICAgICAgIHRpdGxlPVwifCBEaWZmZXJlbnQgd29ybGRzLCBkaWZmZXJlbnQgcGVvcGxlXCJcbiAgICAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCJcbiAgICAgIC8+XG4gICAgICA8VGl0bGVUZXh0XG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgVHJhY2sgZnJpZW5kcyBhcm91bmQgeW91IGFuZCBpbnZpdGUgdGhlbSB0byBwbGF5IHRvZ2V0aGVyIGluIHRoZVxuICAgICAgICAgICAgc2FtZSB3b3JsZFxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV29ybGQ7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwibW90aW9uIiwiVGl0bGVUZXh0IiwiVHlwaW5nVGV4dCIsInN0YWdnZXJDb250YWluZXIiLCJmYWRlSW4iLCJXb3JsZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aFMiLCJ0aXRsZSIsInRleHRTdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/World.jsx\n"));

/***/ })

});