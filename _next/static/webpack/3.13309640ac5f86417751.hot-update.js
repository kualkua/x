webpackHotUpdate_N_E(3,{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"];\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n  maximized = true;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(maximized),\n      maximizeWindow = _useState[0],\n      setMaximizeWindow = _useState[1];\n\n  var _getState = getState({\n    id: id\n  }),\n      _getState$x = _getState.x,\n      previousX = _getState$x === void 0 ? 0 : _getState$x,\n      _getState$y = _getState.y,\n      previousY = _getState$y === void 0 ? 0 : _getState$y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var windowOptions = {\n    onMinimize: function onMinimize() {\n      return minimize(id);\n    },\n    onMaximize: function onMaximize() {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    },\n    onClose: function onClose() {\n      saveState({\n        height: height,\n        id: id,\n        width: width,\n        x: x,\n        y: y\n      });\n      close(id);\n    },\n    onFocus: function onFocus() {\n      return foreground(id);\n    },\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    },\n    updatePosition: position(id),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximizeWindow,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (foregroundId === id && minimized) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder.filter(function (stackId) {\n        return stackId !== id;\n      })));\n    } else if (!stackOrder.includes(id)) {\n      foreground(Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getNextVisibleWindow\"])(processes, stackOrder));\n    }\n  }, [foregroundId, id, minimized, processes, stackOrder]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (maximized) {\n      setMaximizeWindow(true);\n    } else if (maximizeWindow) {\n      setTimeout(function () {\n        return setMaximizeWindow(false);\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAXIMIZE_ANIMATION_SPEED_IN_SECONDS\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"MILLISECONDS_IN_SECOND\"]);\n    }\n  }, [maximized]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_9__[\"windowMotionSettings\"])({\n    initialX: previousX,\n    initialY: previousY,\n    animation: maximized && minimized && 'maxmin' || maximized && 'maximized' || minimized && 'minimized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 5\n    }\n  }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    icon: icon,\n    name: name,\n    bgColor: bgColor,\n    lockAspectRatio: lockAspectRatio,\n    updateSize: size(id)\n  }, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 9\n    }\n  }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProcessWindow, \"3D/WRgopsflcyZNNbOhLznca8to=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwidXNlU3RhdGUiLCJtYXhpbWl6ZVdpbmRvdyIsInNldE1heGltaXplV2luZG93IiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsIndpbmRvd09wdGlvbnMiLCJvbk1pbmltaXplIiwib25NYXhpbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwiZXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwidXBkYXRlUG9zaXRpb24iLCJ6SW5kZXgiLCJzbGljZSIsInJldmVyc2UiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiZ2V0TmV4dFZpc2libGVXaW5kb3ciLCJmaWx0ZXIiLCJzdGFja0lkIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0IiwiTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMiLCJNSUxMSVNFQ09ORFNfSU5fU0VDT05EIiwic3R5bGVzIiwiYW5pbWF0ZWRXaW5kb3dzIiwiZm9yZWdyb3VuZFppbmRleCIsIndpbmRvd01vdGlvblNldHRpbmdzIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbURBQU87QUFBQSxTQUFDLDZLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsOEZBQVI7QUFBQTtBQUFBLGNBQVEsMENBQVI7QUFBQTtBQUFBLEVBQXRCO01BQU1ELE07QUFFTixJQUFNRSxZQUFZLEdBQUdDLDJEQUFVLEdBQUdDLG1FQUFrQixHQUFHQyxnRUFBdkQ7O0FBRUEsSUFBTUMsYUFBZ0MsR0FBRyxTQUFuQ0EsYUFBbUMsT0FvQm5DO0FBQUE7O0FBQUEseUJBbkJKQyxNQW1CSTtBQUFBLE1BbEJNQyxHQWtCTixlQWxCRkQsTUFrQkU7QUFBQSxNQWpCRkUsZ0JBaUJFLGVBakJGQSxnQkFpQkU7QUFBQSwwQ0FoQkZDLGFBZ0JFO0FBQUEsTUFoQnNCQyxZQWdCdEIseUJBaEJlQyxLQWdCZjtBQUFBLE1BaEI0Q0MsYUFnQjVDLHlCQWhCb0NDLE1BZ0JwQztBQUFBLE1BZEpDLE9BY0ksUUFkSkEsT0FjSTtBQUFBLE1BYklDLGFBYUosUUFiSkYsTUFhSTtBQUFBLE1BWkpHLElBWUksUUFaSkEsSUFZSTtBQUFBLE1BWEpDLEVBV0ksUUFYSkEsRUFXSTtBQUFBLE1BVkpDLGFBVUksUUFWSkEsYUFVSTtBQUFBLE1BVEpDLGVBU0ksUUFUSkEsZUFTSTtBQUFBLE1BUkpDLFNBUUksUUFSSkEsU0FRSTtBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLE1BTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLE1BTEpDLGNBS0ksUUFMSkEsY0FLSTtBQUFBLE1BSkdDLFlBSUgsUUFKSmIsS0FJSTtBQUFBLE1BSEpjLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLENBRUksUUFGSkEsQ0FFSTtBQUFBLE1BREpDLENBQ0ksUUFESkEsQ0FDSTtBQUNKUCxXQUFTLEdBQUcsSUFBWjs7QUFESSxvQkFPQVEsd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FQVjtBQUFBLE1BR0ZDLFVBSEUsZUFHRkEsVUFIRTtBQUFBLE1BSUZDLFFBSkUsZUFJRkEsUUFKRTtBQUFBLE1BS0ZDLFNBTEUsZUFLRkEsU0FMRTtBQUFBLHdDQU1GQyxPQU5FO0FBQUEsTUFNU0MsWUFOVCx1QkFNU0EsWUFOVDtBQUFBLE1BTXVCQyxVQU52Qix1QkFNdUJBLFVBTnZCOztBQUFBLHFCQWdCQVAsd0RBQVUsQ0FBQ1EsdUVBQUQsQ0FoQlY7QUFBQSxNQVNGQyxTQVRFLGdCQVNGQSxTQVRFO0FBQUEsTUFVRkMsS0FWRSxnQkFVRkEsS0FWRTtBQUFBLE1BV0ZDLFFBWEUsZ0JBV0ZBLFFBWEU7QUFBQSxNQVlGQyxRQVpFLGdCQVlGQSxRQVpFO0FBQUEsTUFhRkMsUUFiRSxnQkFhRkEsUUFiRTtBQUFBLE1BY0ZDLE9BZEUsZ0JBY0ZBLE9BZEU7QUFBQSxNQWVGQyxJQWZFLGdCQWVGQSxJQWZFOztBQUFBLGtCQWlCd0NDLHNEQUFRLENBQUN4QixTQUFELENBakJoRDtBQUFBLE1BaUJHeUIsY0FqQkg7QUFBQSxNQWlCbUJDLGlCQWpCbkI7O0FBQUEsa0JBa0IyQ2YsUUFBUSxDQUFDO0FBQ3REZCxNQUFFLEVBQUZBO0FBRHNELEdBQUQsQ0FsQm5EO0FBQUEsOEJBa0JJUyxDQWxCSjtBQUFBLE1Ba0JPcUIsU0FsQlAsNEJBa0JtQixDQWxCbkI7QUFBQSw4QkFrQnNCcEIsQ0FsQnRCO0FBQUEsTUFrQnlCcUIsU0FsQnpCLDRCQWtCcUMsQ0FsQnJDOztBQUFBLDBCQXFCc0JDLDZFQUFnQixDQUN4Q3pCLFlBRHdDLEVBRXhDVCxhQUZ3QyxFQUd4Q0wsWUFId0MsRUFJeENFLGFBSndDLEVBS3hDTyxlQUx3QyxDQXJCdEM7QUFBQSxNQXFCSU4sTUFyQkoscUJBcUJJQSxNQXJCSjtBQUFBLE1BcUJZRixLQXJCWixxQkFxQllBLEtBckJaOztBQTRCSixNQUFNdUMsYUFBYSxHQUFHO0FBQ3BCQyxjQUFVLEVBQUU7QUFBQSxhQUFNWCxRQUFRLENBQUN2QixFQUFELENBQWQ7QUFBQSxLQURRO0FBRXBCbUMsY0FBVSxFQUFFO0FBQUEsYUFBT2hDLFNBQVMsR0FBR3NCLE9BQU8sQ0FBQ3pCLEVBQUQsRUFBSyxXQUFMLENBQVYsR0FBOEJzQixRQUFRLENBQUN0QixFQUFELENBQXREO0FBQUEsS0FGUTtBQUdwQm9DLFdBQU8sRUFBRSxtQkFBTTtBQUNickIsZUFBUyxDQUFDO0FBQ1JuQixjQUFNLEVBQU5BLE1BRFE7QUFFUkksVUFBRSxFQUFGQSxFQUZRO0FBR1JOLGFBQUssRUFBTEEsS0FIUTtBQUlSZSxTQUFDLEVBQURBLENBSlE7QUFLUkMsU0FBQyxFQUFEQTtBQUxRLE9BQUQsQ0FBVDtBQU9BVyxXQUFLLENBQUNyQixFQUFELENBQUw7QUFDRCxLQVptQjtBQWFwQnFDLFdBQU8sRUFBRTtBQUFBLGFBQU14QixVQUFVLENBQUNiLEVBQUQsQ0FBaEI7QUFBQSxLQWJXO0FBY3BCc0MsVUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQTZCO0FBQ25DLFVBQUlBLEtBQUssQ0FBQ0MsYUFBTixLQUF3QmxDLGNBQTVCLEVBQTRDO0FBQzFDTyxrQkFBVSxDQUFDLEVBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FsQm1CO0FBbUJwQjRCLGtCQUFjLEVBQUVqQixRQUFRLENBQUN4QixFQUFELENBbkJKO0FBb0JwQjBDLFVBQU0sRUFBRTFELFlBQVksR0FBR2tDLFVBQVUsQ0FBQ3lCLEtBQVgsR0FBbUJDLE9BQW5CLEdBQTZCQyxPQUE3QixDQUFxQzdDLEVBQXJDLENBcEJIO0FBcUJwQkcsYUFBUyxFQUFFeUIsY0FyQlM7QUFzQnBCeEIsYUFBUyxFQUFUQSxTQXRCb0I7QUF1QnBCSixNQUFFLEVBQUZBLEVBdkJvQjtBQXdCcEJKLFVBQU0sRUFBTkEsTUF4Qm9CO0FBeUJwQkYsU0FBSyxFQUFMQTtBQXpCb0IsR0FBdEI7QUE0QkFvRCx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJN0IsWUFBWSxLQUFLakIsRUFBakIsSUFBdUJJLFNBQTNCLEVBQXNDO0FBQ3BDUyxnQkFBVSxDQUNSa0MsaUZBQW9CLENBQ2xCM0IsU0FEa0IsRUFFbEJGLFVBQVUsQ0FBQzhCLE1BQVgsQ0FBa0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sS0FBS2pELEVBQXpCO0FBQUEsT0FBbEIsQ0FGa0IsQ0FEWixDQUFWO0FBTUQsS0FQRCxNQU9PLElBQUksQ0FBQ2tCLFVBQVUsQ0FBQ2dDLFFBQVgsQ0FBb0JsRCxFQUFwQixDQUFMLEVBQThCO0FBQ25DYSxnQkFBVSxDQUFDa0MsaUZBQW9CLENBQUMzQixTQUFELEVBQVlGLFVBQVosQ0FBckIsQ0FBVjtBQUNEO0FBQ0YsR0FYUSxFQVdOLENBQUNELFlBQUQsRUFBZWpCLEVBQWYsRUFBbUJJLFNBQW5CLEVBQThCZ0IsU0FBOUIsRUFBeUNGLFVBQXpDLENBWE0sQ0FBVDtBQWFBNEIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTNDLFNBQUosRUFBZTtBQUNiMEIsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJRCxjQUFKLEVBQW9CO0FBQ3pCdUIsZ0JBQVUsQ0FDUjtBQUFBLGVBQU10QixpQkFBaUIsQ0FBQyxLQUFELENBQXZCO0FBQUEsT0FEUSxFQUVSdUIsb0ZBQW1DLEdBQUdDLHVFQUY5QixDQUFWO0FBSUQ7QUFDRixHQVRRLEVBU04sQ0FBQ2xELFNBQUQsQ0FUTSxDQUFUO0FBV0EsU0FDRSxNQUFDLG9EQUFELENBQVEsT0FBUjtBQUNFLE9BQUcsRUFBRUgsRUFEUDtBQUVFLGFBQVMsRUFBRXNELDZGQUFNLENBQUNDLGVBRnBCO0FBR0UsU0FBSyxFQUFFO0FBQ0xiLFlBQU0sRUFBRXpCLFlBQVksS0FBS2pCLEVBQWpCLEdBQXNCd0QsaUVBQXRCLEdBQXlDdkIsYUFBYSxDQUFDUyxNQUQxRDtBQUVMOUMsWUFBTSxFQUFOQSxNQUZLO0FBR0xGLFdBQUssRUFBTEE7QUFISztBQUhULEtBUU0rRCwyRUFBb0IsQ0FBQztBQUN2QkMsWUFBUSxFQUFFNUIsU0FEYTtBQUV2QjZCLFlBQVEsRUFBRTVCLFNBRmE7QUFHdkI2QixhQUFTLEVBQ056RCxTQUFTLElBQUlDLFNBQWIsSUFBMEIsUUFBM0IsSUFDQ0QsU0FBUyxJQUFJLFdBRGQsSUFFQ0MsU0FBUyxJQUFJLFdBRmQsSUFHQSxPQVBxQjtBQVF2QlIsVUFBTSxFQUFOQSxNQVJ1QjtBQVN2QkYsU0FBSyxFQUFMQSxLQVR1QjtBQVV2QmUsS0FBQyxFQUFEQSxDQVZ1QjtBQVd2QkMsS0FBQyxFQUFEQSxDQVh1QjtBQVl2Qkosa0JBQWMsRUFBZEEsY0FadUI7QUFhdkJMLGlCQUFhLEVBQWJBO0FBYnVCLEdBQUQsQ0FSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXdCR08sUUFBUSxHQUNQLE1BQUMsTUFBRDtBQUNFLFFBQUksRUFBRVQsSUFEUjtBQUVFLFFBQUksRUFBRU0sSUFGUjtBQUdFLFdBQU8sRUFBRVIsT0FIWDtBQUlFLG1CQUFlLEVBQUVLLGVBSm5CO0FBS0UsY0FBVSxFQUFFd0IsSUFBSSxDQUFDMUIsRUFBRDtBQUxsQixLQU1NaUMsYUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUUUsTUFBQyxHQUFELHlGQUFTMUMsZ0JBQVQsRUFBK0IwQyxhQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUkYsQ0FETyxHQVlQLE1BQUMsR0FBRCx5RkFBUzFDLGdCQUFULEVBQStCMEMsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXBDSixDQURGO0FBeUNELENBN0lEOztHQUFNN0MsYTs7TUFBQUEsYTtBQStJU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1Byb2Nlc3NXaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7XG4gIGJhc2VaaW5kZXgsXG4gIGZvcmVncm91bmRaaW5kZXgsXG4gIE1BWElNSVpFX0FOSU1BVElPTl9TUEVFRF9JTl9TRUNPTkRTLFxuICBNSUxMSVNFQ09ORFNfSU5fU0VDT05ELFxuICB3aW5kb3dzWmluZGV4TGV2ZWwsXG4gIHppbmRleExldmVsU2l6ZVxufSBmcm9tICdAL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROZXh0VmlzaWJsZVdpbmRvdywgZ2V0TWF4RGltZW5zaW9ucyB9IGZyb20gJ0AvdXRpbHMvd2luZG93bWFuYWdlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPFByb2Nlc3M+ID0gKHtcbiAgbG9hZGVyOiB7XG4gICAgbG9hZGVyOiBBcHAsXG4gICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICBsb2FkZXJPcHRpb25zOiB7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9XG4gIH0sXG4gIGJnQ29sb3IsXG4gIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgaWNvbixcbiAgaWQsXG4gIGxhdW5jaEVsZW1lbnQsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgbWF4aW1pemVkLFxuICBtaW5pbWl6ZWQsXG4gIG5hbWUsXG4gIHRhc2tiYXJFbGVtZW50LFxuICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICB3aW5kb3dlZCxcbiAgeCxcbiAgeVxufSkgPT4ge1xuICBtYXhpbWl6ZWQgPSB0cnVlO1xuICBjb25zdCB7XG4gICAgZm9yZWdyb3VuZCxcbiAgICBnZXRTdGF0ZSxcbiAgICBzYXZlU3RhdGUsXG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBwcm9jZXNzZXMsXG4gICAgY2xvc2UsXG4gICAgbWF4aW1pemUsXG4gICAgbWluaW1pemUsXG4gICAgcG9zaXRpb24sXG4gICAgcmVzdG9yZSxcbiAgICBzaXplXG4gIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgW21heGltaXplV2luZG93LCBzZXRNYXhpbWl6ZVdpbmRvd10gPSB1c2VTdGF0ZShtYXhpbWl6ZWQpO1xuICBjb25zdCB7IHg6IHByZXZpb3VzWCA9IDAsIHk6IHByZXZpb3VzWSA9IDAgfSA9IGdldFN0YXRlKHtcbiAgICBpZFxuICB9KTtcbiAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRNYXhEaW1lbnNpb25zKFxuICAgIGluaXRpYWxXaWR0aCxcbiAgICBpbml0aWFsSGVpZ2h0LFxuICAgIGRlZmF1bHRXaWR0aCxcbiAgICBkZWZhdWx0SGVpZ2h0LFxuICAgIGxvY2tBc3BlY3RSYXRpb1xuICApO1xuICBjb25zdCB3aW5kb3dPcHRpb25zID0ge1xuICAgIG9uTWluaW1pemU6ICgpID0+IG1pbmltaXplKGlkKSxcbiAgICBvbk1heGltaXplOiAoKSA9PiAobWF4aW1pemVkID8gcmVzdG9yZShpZCwgJ21heGltaXplZCcpIDogbWF4aW1pemUoaWQpKSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgfSxcbiAgICBvbkZvY3VzOiAoKSA9PiBmb3JlZ3JvdW5kKGlkKSxcbiAgICBvbkJsdXI6IChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IHRhc2tiYXJFbGVtZW50KSB7XG4gICAgICAgIGZvcmVncm91bmQoJycpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlUG9zaXRpb246IHBvc2l0aW9uKGlkKSxcbiAgICB6SW5kZXg6IHdpbmRvd1ppbmRleCArIHN0YWNrT3JkZXIuc2xpY2UoKS5yZXZlcnNlKCkuaW5kZXhPZihpZCksXG4gICAgbWF4aW1pemVkOiBtYXhpbWl6ZVdpbmRvdyxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZm9yZWdyb3VuZElkID09PSBpZCAmJiBtaW5pbWl6ZWQpIHtcbiAgICAgIGZvcmVncm91bmQoXG4gICAgICAgIGdldE5leHRWaXNpYmxlV2luZG93KFxuICAgICAgICAgIHByb2Nlc3NlcyxcbiAgICAgICAgICBzdGFja09yZGVyLmZpbHRlcigoc3RhY2tJZCkgPT4gc3RhY2tJZCAhPT0gaWQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghc3RhY2tPcmRlci5pbmNsdWRlcyhpZCkpIHtcbiAgICAgIGZvcmVncm91bmQoZ2V0TmV4dFZpc2libGVXaW5kb3cocHJvY2Vzc2VzLCBzdGFja09yZGVyKSk7XG4gICAgfVxuICB9LCBbZm9yZWdyb3VuZElkLCBpZCwgbWluaW1pemVkLCBwcm9jZXNzZXMsIHN0YWNrT3JkZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXhpbWl6ZWQpIHtcbiAgICAgIHNldE1heGltaXplV2luZG93KHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWF4aW1pemVXaW5kb3cpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHNldE1heGltaXplV2luZG93KGZhbHNlKSxcbiAgICAgICAgTUFYSU1JWkVfQU5JTUFUSU9OX1NQRUVEX0lOX1NFQ09ORFMgKiBNSUxMSVNFQ09ORFNfSU5fU0VDT05EXG4gICAgICApO1xuICAgIH1cbiAgfSwgW21heGltaXplZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBrZXk9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0ZWRXaW5kb3dzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgekluZGV4OiBmb3JlZ3JvdW5kSWQgPT09IGlkID8gZm9yZWdyb3VuZFppbmRleCA6IHdpbmRvd09wdGlvbnMuekluZGV4LFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9fVxuICAgICAgey4uLndpbmRvd01vdGlvblNldHRpbmdzKHtcbiAgICAgICAgaW5pdGlhbFg6IHByZXZpb3VzWCxcbiAgICAgICAgaW5pdGlhbFk6IHByZXZpb3VzWSxcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgbWluaW1pemVkICYmICdtYXhtaW4nKSB8fFxuICAgICAgICAgIChtYXhpbWl6ZWQgJiYgJ21heGltaXplZCcpIHx8XG4gICAgICAgICAgKG1pbmltaXplZCAmJiAnbWluaW1pemVkJykgfHxcbiAgICAgICAgICAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17c2l6ZShpZCl9XG4gICAgICAgICAgey4uLndpbmRvd09wdGlvbnN9XG4gICAgICAgID5cbiAgICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICAgPC9XaW5kb3c+XG4gICAgICApIDogKFxuICAgICAgICA8QXBwIHsuLi5sb2FkZWRBcHBPcHRpb25zfSB7Li4ud2luZG93T3B0aW9uc30gLz5cbiAgICAgICl9XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ })

})