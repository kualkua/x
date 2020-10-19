webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/motions.ts":
/*!**************************!*\
  !*** ./utils/motions.ts ***!
  \**************************/
/*! exports provided: desktopIconDragSettings, desktopIconMotionSettings, taskbarEntriesMotionSettings, windowMotionSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconDragSettings\", function() { return desktopIconDragSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desktopIconMotionSettings\", function() { return desktopIconMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbarEntriesMotionSettings\", function() { return taskbarEntriesMotionSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowMotionSettings\", function() { return windowMotionSettings; });\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\nvar desktopIconDragSettings = {\n  dragElastic: 0.25,\n  dragTransition: {\n    bounceStiffness: 500,\n    bounceDamping: 15\n  },\n  dragMomentum: false\n};\nvar desktopIconMotionSettings = {\n  initial: {\n    opacity: 0,\n    y: -100\n  },\n  animate: {\n    opacity: 1,\n    y: 0\n  },\n  transition: {\n    y: {\n      type: 'spring'\n    }\n  }\n};\nvar taskbarEntriesMotionSettings = {\n  initial: {\n    opacity: 0,\n    x: -100\n  },\n  animate: {\n    opacity: 1,\n    x: 0\n  },\n  transition: {\n    x: {\n      type: 'spring'\n    }\n  },\n  exit: {\n    opacity: 0,\n    width: 0,\n    transition: {\n      duration: 0.3\n    },\n    x: -100\n  }\n};\nvar windowMotionSettings = function windowMotionSettings(_ref) {\n  var _ref$initialX = _ref.initialX,\n      initialX = _ref$initialX === void 0 ? 0 : _ref$initialX,\n      _ref$initialY = _ref.initialY,\n      initialY = _ref$initialY === void 0 ? 0 : _ref$initialY,\n      _ref$animation = _ref.animation,\n      animation = _ref$animation === void 0 ? 'start' : _ref$animation,\n      height = _ref.height,\n      width = _ref.width,\n      x = _ref.x,\n      y = _ref.y,\n      taskbarElement = _ref.taskbarElement,\n      launchElement = _ref.launchElement;\n  var widthOffset = -Math.floor(width / 2);\n  var heightOffset = -Math.floor(height / 2);\n\n  var _getTargetCenterPosit = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(taskbarElement),\n      _getTargetCenterPosit2 = _getTargetCenterPosit.x,\n      taskbarElementX = _getTargetCenterPosit2 === void 0 ? 0 : _getTargetCenterPosit2,\n      _getTargetCenterPosit3 = _getTargetCenterPosit.y,\n      taskbarElementY = _getTargetCenterPosit3 === void 0 ? 0 : _getTargetCenterPosit3;\n\n  var _getTargetCenterPosit4 = Object(_utils_elements__WEBPACK_IMPORTED_MODULE_0__[\"getTargetCenterPosition\"])(launchElement),\n      _getTargetCenterPosit5 = _getTargetCenterPosit4.x,\n      launchElementX = _getTargetCenterPosit5 === void 0 ? 0 : _getTargetCenterPosit5,\n      _getTargetCenterPosit6 = _getTargetCenterPosit4.y,\n      launchElementY = _getTargetCenterPosit6 === void 0 ? 0 : _getTargetCenterPosit6;\n\n  var initialExitTransform = {\n    scale: 0,\n    x: widthOffset + launchElementX,\n    y: heightOffset + launchElementY\n  };\n  var maximizedExitTransform = {\n    scale: 0,\n    x: -(window.innerWidth / 2) + widthOffset + launchElementX,\n    y: -(window.innerHeight / 2) + heightOffset + launchElementY\n  };\n  var animationVariants = {\n    start: {\n      scale: 1,\n      x: initialX,\n      y: initialY,\n      height: height,\n      width: width\n    },\n    maximized: {\n      scale: 1,\n      x: initialX === x ? 0 : -x,\n      y: initialY === y ? 0 : -y,\n      height: window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"],\n      width: '100vw'\n    },\n    minimized: {\n      scale: 0,\n      x: widthOffset + taskbarElementX,\n      y: heightOffset + taskbarElementY\n    },\n    maxmin: {\n      scale: 0,\n      x: -(window.innerWidth / 2) + taskbarElementX,\n      y: -(window.innerHeight / 2) + taskbarElementY\n    }\n  };\n  return {\n    initial: initialExitTransform,\n    exit: animation === 'maximized' ? maximizedExitTransform : initialExitTransform,\n    animate: animationVariants[animation],\n    transition: {\n      duration: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"]\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbW90aW9ucy50cz84MTUwIl0sIm5hbWVzIjpbImRlc2t0b3BJY29uRHJhZ1NldHRpbmdzIiwiZHJhZ0VsYXN0aWMiLCJkcmFnVHJhbnNpdGlvbiIsImJvdW5jZVN0aWZmbmVzcyIsImJvdW5jZURhbXBpbmciLCJkcmFnTW9tZW50dW0iLCJkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsIngiLCJleGl0Iiwid2lkdGgiLCJkdXJhdGlvbiIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiIsImhlaWdodCIsInRhc2tiYXJFbGVtZW50IiwibGF1bmNoRWxlbWVudCIsIndpZHRoT2Zmc2V0IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0T2Zmc2V0IiwiZ2V0VGFyZ2V0Q2VudGVyUG9zaXRpb24iLCJ0YXNrYmFyRWxlbWVudFgiLCJ0YXNrYmFyRWxlbWVudFkiLCJsYXVuY2hFbGVtZW50WCIsImxhdW5jaEVsZW1lbnRZIiwiaW5pdGlhbEV4aXRUcmFuc2Zvcm0iLCJzY2FsZSIsIm1heGltaXplZEV4aXRUcmFuc2Zvcm0iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb25WYXJpYW50cyIsInN0YXJ0IiwibWF4aW1pemVkIiwiVEFTS0JBUl9IRUlHSFQiLCJtaW5pbWl6ZWQiLCJtYXhtaW4iLCJNQVhJTUlaRV9BTklNQVRJT05fU1BFRURfSU5fU0VDT05EUyJdLCJtYXBwaW5ncyI6IkFBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS08sSUFBTUEsdUJBQXVCLEdBQUc7QUFDckNDLGFBQVcsRUFBRSxJQUR3QjtBQUVyQ0MsZ0JBQWMsRUFBRTtBQUFFQyxtQkFBZSxFQUFFLEdBQW5CO0FBQXdCQyxpQkFBYSxFQUFFO0FBQXZDLEdBRnFCO0FBR3JDQyxjQUFZLEVBQUU7QUFIdUIsQ0FBaEM7QUFNQSxJQUFNQyx5QkFBc0MsR0FBRztBQUNwREMsU0FBTyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFYO0FBQWNDLEtBQUMsRUFBRSxDQUFDO0FBQWxCLEdBRDJDO0FBRXBEQyxTQUFPLEVBQUU7QUFBRUYsV0FBTyxFQUFFLENBQVg7QUFBY0MsS0FBQyxFQUFFO0FBQWpCLEdBRjJDO0FBR3BERSxZQUFVLEVBQUU7QUFBRUYsS0FBQyxFQUFFO0FBQUVHLFVBQUksRUFBRTtBQUFSO0FBQUw7QUFId0MsQ0FBL0M7QUFNQSxJQUFNQyw0QkFBeUMsR0FBRztBQUN2RE4sU0FBTyxFQUFFO0FBQUVDLFdBQU8sRUFBRSxDQUFYO0FBQWNNLEtBQUMsRUFBRSxDQUFDO0FBQWxCLEdBRDhDO0FBRXZESixTQUFPLEVBQUU7QUFBRUYsV0FBTyxFQUFFLENBQVg7QUFBY00sS0FBQyxFQUFFO0FBQWpCLEdBRjhDO0FBR3ZESCxZQUFVLEVBQUU7QUFBRUcsS0FBQyxFQUFFO0FBQUVGLFVBQUksRUFBRTtBQUFSO0FBQUwsR0FIMkM7QUFJdkRHLE1BQUksRUFBRTtBQUNKUCxXQUFPLEVBQUUsQ0FETDtBQUVKUSxTQUFLLEVBQUUsQ0FGSDtBQUdKTCxjQUFVLEVBQUU7QUFBRU0sY0FBUSxFQUFFO0FBQVosS0FIUjtBQUlKSCxLQUFDLEVBQUUsQ0FBQztBQUpBO0FBSmlELENBQWxEO0FBWUEsSUFBTUksb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixPQVVLO0FBQUEsMkJBVHZDQyxRQVN1QztBQUFBLE1BVHZDQSxRQVN1Qyw4QkFUNUIsQ0FTNEI7QUFBQSwyQkFSdkNDLFFBUXVDO0FBQUEsTUFSdkNBLFFBUXVDLDhCQVI1QixDQVE0QjtBQUFBLDRCQVB2Q0MsU0FPdUM7QUFBQSxNQVB2Q0EsU0FPdUMsK0JBUDNCLE9BTzJCO0FBQUEsTUFOdkNDLE1BTXVDLFFBTnZDQSxNQU11QztBQUFBLE1BTHZDTixLQUt1QyxRQUx2Q0EsS0FLdUM7QUFBQSxNQUp2Q0YsQ0FJdUMsUUFKdkNBLENBSXVDO0FBQUEsTUFIdkNMLENBR3VDLFFBSHZDQSxDQUd1QztBQUFBLE1BRnZDYyxjQUV1QyxRQUZ2Q0EsY0FFdUM7QUFBQSxNQUR2Q0MsYUFDdUMsUUFEdkNBLGFBQ3VDO0FBQ3ZDLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsS0FBSyxHQUFHLENBQW5CLENBQXJCO0FBQ0EsTUFBTVksWUFBWSxHQUFHLENBQUNGLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFNLEdBQUcsQ0FBcEIsQ0FBdEI7O0FBRnVDLDhCQU1uQ08sK0VBQXVCLENBQUNOLGNBQUQsQ0FOWTtBQUFBLHFEQUlyQ1QsQ0FKcUM7QUFBQSxNQUlsQ2dCLGVBSmtDLHVDQUloQixDQUpnQjtBQUFBLHFEQUtyQ3JCLENBTHFDO0FBQUEsTUFLbENzQixlQUxrQyx1Q0FLaEIsQ0FMZ0I7O0FBQUEsK0JBVW5DRiwrRUFBdUIsQ0FBQ0wsYUFBRCxDQVZZO0FBQUEsc0RBUXJDVixDQVJxQztBQUFBLE1BUWxDa0IsY0FSa0MsdUNBUWpCLENBUmlCO0FBQUEsc0RBU3JDdkIsQ0FUcUM7QUFBQSxNQVNsQ3dCLGNBVGtDLHVDQVNqQixDQVRpQjs7QUFXdkMsTUFBTUMsb0JBQXlDLEdBQUc7QUFDaERDLFNBQUssRUFBRSxDQUR5QztBQUVoRHJCLEtBQUMsRUFBRVcsV0FBVyxHQUFHTyxjQUYrQjtBQUdoRHZCLEtBQUMsRUFBRW1CLFlBQVksR0FBR0s7QUFIOEIsR0FBbEQ7QUFLQSxNQUFNRyxzQkFBMkMsR0FBRztBQUNsREQsU0FBSyxFQUFFLENBRDJDO0FBRWxEckIsS0FBQyxFQUFFLEVBQUV1QixNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBdEIsSUFBMkJiLFdBQTNCLEdBQXlDTyxjQUZNO0FBR2xEdkIsS0FBQyxFQUFFLEVBQUU0QixNQUFNLENBQUNFLFdBQVAsR0FBcUIsQ0FBdkIsSUFBNEJYLFlBQTVCLEdBQTJDSztBQUhJLEdBQXBEO0FBS0EsTUFBTU8saUJBRUwsR0FBRztBQUNGQyxTQUFLLEVBQUU7QUFDTE4sV0FBSyxFQUFFLENBREY7QUFFTHJCLE9BQUMsRUFBRUssUUFGRTtBQUdMVixPQUFDLEVBQUVXLFFBSEU7QUFJTEUsWUFBTSxFQUFOQSxNQUpLO0FBS0xOLFdBQUssRUFBTEE7QUFMSyxLQURMO0FBUUYwQixhQUFTLEVBQUU7QUFDVFAsV0FBSyxFQUFFLENBREU7QUFFVHJCLE9BQUMsRUFBRUssUUFBUSxLQUFLTCxDQUFiLEdBQWlCLENBQWpCLEdBQXFCLENBQUNBLENBRmhCO0FBR1RMLE9BQUMsRUFBRVcsUUFBUSxLQUFLWCxDQUFiLEdBQWlCLENBQWpCLEdBQXFCLENBQUNBLENBSGhCO0FBSVRhLFlBQU0sRUFBRWUsTUFBTSxDQUFDRSxXQUFQLEdBQXFCSSwrREFKcEI7QUFLVDNCLFdBQUssRUFBRTtBQUxFLEtBUlQ7QUFlRjRCLGFBQVMsRUFBRTtBQUNUVCxXQUFLLEVBQUUsQ0FERTtBQUVUckIsT0FBQyxFQUFFVyxXQUFXLEdBQUdLLGVBRlI7QUFHVHJCLE9BQUMsRUFBRW1CLFlBQVksR0FBR0c7QUFIVCxLQWZUO0FBb0JGYyxVQUFNLEVBQUU7QUFDTlYsV0FBSyxFQUFFLENBREQ7QUFFTnJCLE9BQUMsRUFBRSxFQUFFdUIsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLENBQXRCLElBQTJCUixlQUZ4QjtBQUdOckIsT0FBQyxFQUFFLEVBQUU0QixNQUFNLENBQUNFLFdBQVAsR0FBcUIsQ0FBdkIsSUFBNEJSO0FBSHpCO0FBcEJOLEdBRko7QUE2QkEsU0FBTztBQUNMeEIsV0FBTyxFQUFFMkIsb0JBREo7QUFFTG5CLFFBQUksRUFBRU0sU0FBUyxLQUFLLFdBQWQsR0FBNEJlLHNCQUE1QixHQUFxREYsb0JBRnREO0FBR0x4QixXQUFPLEVBQUU4QixpQkFBaUIsQ0FBQ25CLFNBQUQsQ0FIckI7QUFJTFYsY0FBVSxFQUFFO0FBQ1ZNLGNBQVEsRUFBRTZCLG9GQUFtQ0E7QUFEbkM7QUFKUCxHQUFQO0FBUUQsQ0FwRU0iLCJmaWxlIjoiLi91dGlscy9tb3Rpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBbmltYXRpb25Qcm9wcyxcbiAgVHJhbnNmb3JtUHJvcGVydGllc1xufSBmcm9tICdmcmFtZXItbW90aW9uL3R5cGVzL21vdGlvbi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IE1vdGlvblByb3BzLCBUYXJnZXRBbmRUcmFuc2l0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgdHlwZSB7IFdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy91dGlscy9tb3Rpb24nO1xuXG5pbXBvcnQgeyBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHtcbiAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMsXG4gIFRBU0tCQVJfSEVJR0hUXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGRlc2t0b3BJY29uRHJhZ1NldHRpbmdzID0ge1xuICBkcmFnRWxhc3RpYzogMC4yNSxcbiAgZHJhZ1RyYW5zaXRpb246IHsgYm91bmNlU3RpZmZuZXNzOiA1MDAsIGJvdW5jZURhbXBpbmc6IDE1IH0sXG4gIGRyYWdNb21lbnR1bTogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBkZXNrdG9wSWNvbk1vdGlvblNldHRpbmdzOiBNb3Rpb25Qcm9wcyA9IHtcbiAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAtMTAwIH0sXG4gIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICB0cmFuc2l0aW9uOiB7IHk6IHsgdHlwZTogJ3NwcmluZycgfSB9XG59O1xuXG5leHBvcnQgY29uc3QgdGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5nczogTW90aW9uUHJvcHMgPSB7XG4gIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogLTEwMCB9LFxuICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAgfSxcbiAgdHJhbnNpdGlvbjogeyB4OiB7IHR5cGU6ICdzcHJpbmcnIH0gfSxcbiAgZXhpdDoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4zIH0sXG4gICAgeDogLTEwMFxuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgd2luZG93TW90aW9uU2V0dGluZ3MgPSAoe1xuICBpbml0aWFsWCA9IDAsXG4gIGluaXRpYWxZID0gMCxcbiAgYW5pbWF0aW9uID0gJ3N0YXJ0JyxcbiAgaGVpZ2h0LFxuICB3aWR0aCxcbiAgeCxcbiAgeSxcbiAgdGFza2JhckVsZW1lbnQsXG4gIGxhdW5jaEVsZW1lbnRcbn06IFdpbmRvd01vdGlvblNldHRpbmdzKTogTW90aW9uUHJvcHMgPT4ge1xuICBjb25zdCB3aWR0aE9mZnNldCA9IC1NYXRoLmZsb29yKHdpZHRoIC8gMik7XG4gIGNvbnN0IGhlaWdodE9mZnNldCA9IC1NYXRoLmZsb29yKGhlaWdodCAvIDIpO1xuICBjb25zdCB7XG4gICAgeDogdGFza2JhckVsZW1lbnRYID0gMCxcbiAgICB5OiB0YXNrYmFyRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbih0YXNrYmFyRWxlbWVudCk7XG4gIGNvbnN0IHtcbiAgICB4OiBsYXVuY2hFbGVtZW50WCA9IDAsXG4gICAgeTogbGF1bmNoRWxlbWVudFkgPSAwXG4gIH0gPSBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbihsYXVuY2hFbGVtZW50KTtcbiAgY29uc3QgaW5pdGlhbEV4aXRUcmFuc2Zvcm06IFRyYW5zZm9ybVByb3BlcnRpZXMgPSB7XG4gICAgc2NhbGU6IDAsXG4gICAgeDogd2lkdGhPZmZzZXQgKyBsYXVuY2hFbGVtZW50WCxcbiAgICB5OiBoZWlnaHRPZmZzZXQgKyBsYXVuY2hFbGVtZW50WVxuICB9O1xuICBjb25zdCBtYXhpbWl6ZWRFeGl0VHJhbnNmb3JtOiBUcmFuc2Zvcm1Qcm9wZXJ0aWVzID0ge1xuICAgIHNjYWxlOiAwLFxuICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIHdpZHRoT2Zmc2V0ICsgbGF1bmNoRWxlbWVudFgsXG4gICAgeTogLSh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSArIGhlaWdodE9mZnNldCArIGxhdW5jaEVsZW1lbnRZXG4gIH07XG4gIGNvbnN0IGFuaW1hdGlvblZhcmlhbnRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogQW5pbWF0aW9uUHJvcHMgJiBUYXJnZXRBbmRUcmFuc2l0aW9uO1xuICB9ID0ge1xuICAgIHN0YXJ0OiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIHg6IGluaXRpYWxYLFxuICAgICAgeTogaW5pdGlhbFksXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH0sXG4gICAgbWF4aW1pemVkOiB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIHg6IGluaXRpYWxYID09PSB4ID8gMCA6IC14LFxuICAgICAgeTogaW5pdGlhbFkgPT09IHkgPyAwIDogLXksXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIFRBU0tCQVJfSEVJR0hULFxuICAgICAgd2lkdGg6ICcxMDB2dydcbiAgICB9LFxuICAgIG1pbmltaXplZDoge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICB4OiB3aWR0aE9mZnNldCArIHRhc2tiYXJFbGVtZW50WCxcbiAgICAgIHk6IGhlaWdodE9mZnNldCArIHRhc2tiYXJFbGVtZW50WVxuICAgIH0sXG4gICAgbWF4bWluOiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIHg6IC0od2luZG93LmlubmVyV2lkdGggLyAyKSArIHRhc2tiYXJFbGVtZW50WCxcbiAgICAgIHk6IC0od2luZG93LmlubmVySGVpZ2h0IC8gMikgKyB0YXNrYmFyRWxlbWVudFlcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0aWFsOiBpbml0aWFsRXhpdFRyYW5zZm9ybSxcbiAgICBleGl0OiBhbmltYXRpb24gPT09ICdtYXhpbWl6ZWQnID8gbWF4aW1pemVkRXhpdFRyYW5zZm9ybSA6IGluaXRpYWxFeGl0VHJhbnNmb3JtLFxuICAgIGFuaW1hdGU6IGFuaW1hdGlvblZhcmlhbnRzW2FuaW1hdGlvbl0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTXG4gICAgfVxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/motions.ts\n");

/***/ })

})