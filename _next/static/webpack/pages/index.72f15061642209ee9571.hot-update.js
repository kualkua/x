webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n}; // TODO: Refactor this to be more efficent and DRY\n\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterPosit4 = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(launchElement),\n      _getTargetCenterPosit5 = _getTargetCenterPosit4.x,\n      launchElementX = _getTargetCenterPosit5 === void 0 ? 0 : _getTargetCenterPosit5,\n      _getTargetCenterPosit6 = _getTargetCenterPosit4.y,\n      launchElementY = _getTargetCenterPosit6 === void 0 ? 0 : _getTargetCenterPosit6;\n\n  var initialExitTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  var maximizedExitTransform = {\n    scale: 0,\n    x: -(window.innerWidth / 2) + launchElementX,\n    y: -(window.innerHeight / 2) + launchElementY\n  };\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width\n    },\n    maximized: {\n      scale: 1,\n      x: initialX === x ? 0 : -x,\n      y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"],\n      width: '100vw'\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY\n    },\n    maxmin: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY\n    }\n  };\n  return {\n    initial: initialExitTransform,\n    exit: animation === 'maximized' ? maximizedExitTransform : initialExitTransform,\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsIndpZHRoT2Zmc2V0IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0T2Zmc2V0IiwiZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24iLCJ0YXNrYmFyRWxlbWVudFgiLCJ0YXNrYmFyRWxlbWVudFkiLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwiaW5pdGlhbEV4aXRUcmFuc2Zvcm0iLCJzY2FsZSIsIm1heGltaXplZEV4aXRUcmFuc2Zvcm0iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb25WYXJpYW50cyIsInN0YXJ0IiwibWF4aW1pemVkIiwiVEFTS0JBUl9IRUlHSFQiLCJtaW5pbWl6ZWQiLCJtYXhtaW4iLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyJdLCJtYXBwaW5ncyI6IkFBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS08sSUFBTUEsdUJBQXVCLEdBQUc7QUFDckNDLGFBQVcsRUFBRSxJQUR3QjtBQUVyQ0MsZ0JBQWMsRUFBRTtBQUFFQyxt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L21vdGlvbnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIEFuaW1hdGlvblByb3BzLFxuICBUcmFuc2Zvcm1Qcm9wZXJ0aWVzXG59IGZyb20gJ2ZyYW1lci1tb3Rpb24vdHlwZXMvbW90aW9uL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgTW90aW9uUHJvcHMsIFRhcmdldEFuZFRyYW5zaXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB0eXBlIHsgV2luZG93TW90aW9uU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL3V0aWxzL21vdGlvbic7XG5cbmltcG9ydCB7IGdldFRhcmdldENlbnRlclBvc2l0aW9uIH0gZnJvbSAnQC91dGlscy9lbGVtZW50cyc7XG5pbXBvcnQge1xuICBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyxcbiAgVEFTS0JBUl9IRUlHSFRcbn0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgZGVza3RvcEljb25EcmFnU2V0dGluZ3MgPSB7XG4gIGRyYWdFbGFzdGljOiAwLjI1LFxuICBkcmFnVHJhbnNpdGlvbjogeyBib3VuY2VTdGlmZm5lc3M6IDUwMCwgYm91bmNlRGFtcGluZzogMTUgfSxcbiAgZHJhZ01vbWVudHVtOiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IGRlc2t0b3BJY29uTW90aW9uU2V0dGluZ3M6IE1vdGlvblByb3BzID0ge1xuICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IC0xMDAgfSxcbiAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIHRyYW5zaXRpb246IHsgeTogeyB0eXBlOiAnc3ByaW5nJyB9IH1cbn07XG5cbmV4cG9ydCBjb25zdCB0YXNrYmFyRW50cmllc01vdGlvblNldHRpbmdzOiBNb3Rpb25Qcm9wcyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCB9LFxuICB0cmFuc2l0aW9uOiB7IHg6IHsgdHlwZTogJ3NwcmluZycgfSB9LFxuICBleGl0OiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB3aWR0aDogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSxcbiAgICB4OiAtMTAwXG4gIH1cbn07XG5cbi8vIFRPRE86IFJlZmFjdG9yIHRoaXMgdG8gYmUgbW9yZSBlZmZpY2VudCBhbmQgRFJZXG5leHBvcnQgY29uc3Qgd2luZG93TW90aW9uU2V0dGluZ3MgPSAoe1xuICBpbml0aWFsWCA9IDAsXG4gIGluaXRpYWxZID0gMCxcbiAgYW5pbWF0aW9uID0gJ3N0YXJ0JyxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgeCxcbiAgeSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIGxhdW5jaEVsZW1lbnRcbn06IFdpbmRvd01vdGlvblNldHRpbmdzKTogTW90aW9uUHJvcHMgPT4ge1xuICBjb25zdCB3aWR0aE9mZnNldCA9IC1NYXRoLmZsb29yKHdpZHRoIC8gMik7XG4gIGNvbnN0IGhlaWdodE9mZnNldCA9IC1NYXRoLmZsb29yKGhlaWdodCAvIDIpO1xuICBjb25zdCB7XG4gICAgeDogdGFza2JhckVsZW1lbnRYID0gMCxcbiAgICB5OiB0YXNrYmFyRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbih0YXNrYmFyRWxlbWVudCk7XG4gIGNvbnN0IHtcbiAgICB4OiBsYXVuY2hFbGVtZW50WCA9IDAsXG4gICAgeTogbGF1bmNoRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbihsYXVuY2hFbGVtZW50KTtcbiAgY29uc3QgaW5pdGlhbEV4aXRUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogd2lkdGhPZmZzZXQgKyBsYXVuY2hFbGVtZW50WCxcbiAgICB5OiBoZWlnaHRPZmZzZXQgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBtYXhpbWl6ZWRFeGl0VHJhbnNmb3JtOiBUcmFuc2Zvcm1Qcm9wZXJ0aWVzID0ge1xuICAgIHNjYWxlOiAwLFxuICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIGxhdW5jaEVsZW1lbnRYLFxuICAgIHk6IC0od2luZG93LmlubmVySGVpZ2h0IC8gMikgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBhbmltYXRpb25WYXJpYW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IEFuaW1hdGlvblByb3BzICYgVGFyZ2V0QW5kVHJhbnNpdGlvbjtcbiAgfSA9IHtcbiAgICBzdGFydDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICB4OiBpbml0aWFsWCxcbiAgICAgIHk6IGluaXRpYWxZLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9LFxuICAgIG1heGltaXplZDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICB4OiBpbml0aWFsWCA9PT0geCA/IDAgOiAteCxcbiAgICAgIHk6IGluaXRpYWxZID09PSB5ID8gMCA6IC15LFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVCxcbiAgICAgIHdpZHRoOiAnMTAwdncnXG4gICAgfSxcbiAgICBtaW5pbWl6ZWQ6IHtcbiAgICAgIHNjYWxlOiAwLFxuICAgICAgeDogd2lkdGhPZmZzZXQgKyB0YXNrYmFyRWxlbWVudFgsXG4gICAgICB5OiBoZWlnaHRPZmZzZXQgKyB0YXNrYmFyRWxlbWVudFlcbiAgICB9LFxuICAgIG1heG1pbjoge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICB4OiAtKHdpbmRvdy5pbm5lcldpZHRoIC8gMikgKyB0YXNrYmFyRWxlbWVudFgsXG4gICAgICB5OiAtKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpICsgdGFza2JhckVsZW1lbnRZXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbDogaW5pdGlhbEV4aXRUcmFuc2Zvcm0sXG4gICAgZXhpdDogYW5pbWF0aW9uID09PSAnbWF4aW1pemVkJyA/IG1heGltaXplZEV4aXRUcmFuc2Zvcm0gOiBpbml0aWFsRXhpdFRyYW5zZm9ybSxcbiAgICBhbmltYXRlOiBhbmltYXRpb25WYXJpYW50c1thbmltYXRpb25dLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiBNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EU1xuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})