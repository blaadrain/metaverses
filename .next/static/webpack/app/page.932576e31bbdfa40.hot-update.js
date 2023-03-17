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

/***/ "./sections/Insights.jsx":
/*!*******************************!*\
  !*** ./sections/Insights.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n\n\n\n\n\n\nconst Insights = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: true,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidthS, \" mx-auto flex flex-col\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                    title: \"| Insight\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TitleText, {\n                    title: \"Insight about metaverse\",\n                    textStyles: \"text-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-[50px] flex flex-col gap-[50px]\",\n                    children: _constants__WEBPACK_IMPORTED_MODULE_4__.insights.map((insight, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.InsightCard, {\n                            ...insight,\n                            index: index + 1\n                        }, index, false, {\n                            fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Nikita/Projects/Next/metaversus/sections/Insights.jsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n_c = Insights;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insights);\nvar _c;\n$RefreshReg$(_c, \"Insights\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9JbnNpZ2h0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRStCO0FBQ1E7QUFDNEI7QUFDaEI7QUFDWDtBQUV4QyxNQUFNTyxXQUFXLGtCQUNmLDhEQUFDQztRQUFRQyxXQUFXLEdBQW1CLE9BQWhCVCx3REFBZSxFQUFDO2tCQUNyQyw0RUFBQ0MscURBQVU7WUFDVFcsVUFBVVAsMkRBQWdCQTtZQUMxQlEsU0FBUTtZQUNSQyxhQUFZO1lBQ1pDLFVBQVU7Z0JBQUVDLE1BQU0sSUFBSTtnQkFBRUMsUUFBUTtZQUFLO1lBQ3JDUixXQUFXLEdBQXNCLE9BQW5CVCwyREFBa0IsRUFBQzs7OEJBRWpDLDhEQUFDSSxtREFBVUE7b0JBQ1RlLE9BQU07b0JBQ05DLFlBQVc7Ozs7Ozs4QkFFYiw4REFBQ2pCLGtEQUFTQTtvQkFDUmdCLE9BQU07b0JBQ05DLFlBQVc7Ozs7Ozs4QkFFYiw4REFBQ1Q7b0JBQUlGLFdBQVU7OEJBQ1pILG9EQUFZLENBQUMsQ0FBQ2dCLFNBQVNDLHNCQUN0Qiw4REFBQ3JCLG9EQUFXQTs0QkFFVCxHQUFHb0IsT0FBTzs0QkFDWEMsT0FBT0EsUUFBUTsyQkFGVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXBCWGhCO0FBOEJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0luc2lnaHRzLmpzeD8wYTE3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBJbnNpZ2h0Q2FyZCwgVGl0bGVUZXh0LCBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzdGFnZ2VyQ29udGFpbmVyIH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcbmltcG9ydCB7IGluc2lnaHRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgSW5zaWdodHMgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSByZWxhdGl2ZSB6LTEwYH0+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRoU30gbXgtYXV0byBmbGV4IGZsZXgtY29sYH1cbiAgICA+XG4gICAgICA8VHlwaW5nVGV4dFxuICAgICAgICB0aXRsZT1cInwgSW5zaWdodFwiXG4gICAgICAgIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAvPlxuICAgICAgPFRpdGxlVGV4dFxuICAgICAgICB0aXRsZT1cIkluc2lnaHQgYWJvdXQgbWV0YXZlcnNlXCJcbiAgICAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1MHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bNTBweF1cIj5cbiAgICAgICAge2luc2lnaHRzLm1hcCgoaW5zaWdodCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8SW5zaWdodENhcmRcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB7Li4uaW5zaWdodH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleCArIDF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzO1xuIl0sIm5hbWVzIjpbInN0eWxlcyIsIm1vdGlvbiIsIkluc2lnaHRDYXJkIiwiVGl0bGVUZXh0IiwiVHlwaW5nVGV4dCIsInN0YWdnZXJDb250YWluZXIiLCJpbnNpZ2h0cyIsIkluc2lnaHRzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoUyIsInRpdGxlIiwidGV4dFN0eWxlcyIsIm1hcCIsImluc2lnaHQiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Insights.jsx\n"));

/***/ })

});