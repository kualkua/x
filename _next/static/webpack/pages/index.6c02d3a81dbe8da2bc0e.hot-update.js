webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/Taskbar.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/Taskbar.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Taskbar_taskbar__1VXpP {\\n  position: fixed;\\n  z-index: 1300;\\n  bottom: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 30px;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  -webkit-backdrop-filter: blur(5px);\\n          backdrop-filter: blur(5px);\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n  left: 39px;\\n  display: flex;\\n  flex: 0 1 160px;\\n  width: calc(100% - 90px - ($startMenuTotalWidth * 2));\\n  height: 30px;\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 li {\\n  display: grid;\\n  padding-right: 1px;\\n  width: 160px;\\n}\\n.Taskbar_taskbar__1VXpP .Taskbar_entries__tno89 li:last-child {\\n  padding-right: unset;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/Taskbar.module.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAKA;EACE,eAAA;EACA,aAAA;EACA,SAAA;EACA,OAAA;EAEA,WAAA;EACA,YAAA;EAEA,oCAAA;EAOA,kCAAA;UAAA,0BAAA;AAZF;AAcE;ECpBA,eAAA;EACA,SAAA;EACA,OAAA;EDqBE,UAvBkB;EAyBlB,aAAA;EACA,eAAA;EAEA,qDAAA;EACA,YAAA;AAbJ;AAeI;EACE,aAAA;EAEA,kBAAA;EACA,YAAA;AAdN;AAgBM;EACE,oBAAA;AAdR\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n\\n$startMenuTotalWidth: map-get($startmenu, width) + map-get($startmenu, padding);\\n\\n.taskbar {\\n  position: fixed;\\n  z-index: map-get($zIndex, taskbar);\\n  bottom: 0;\\n  left: 0;\\n\\n  width: 100%;\\n  height: map-get($taskbar, height);\\n\\n  background-color: hsla(\\n    0,\\n    0%,\\n    map-get($taskbar, base-lightness),\\n    map-get($taskbar, opacity)\\n  );\\n\\n  backdrop-filter: blur(map-get($taskbar, blur));\\n\\n  .entries {\\n    @include bottomLeft;\\n\\n    left: $startMenuTotalWidth;\\n\\n    display: flex;\\n    flex: 0 1 map-get($taskbar, entry-width);\\n\\n    width: calc(100% - #{map-get($clock, width)} - ($startMenuTotalWidth * 2));\\n    height: map-get($taskbar, height);\\n\\n    li {\\n      display: grid;\\n\\n      padding-right: map-get($taskbar, entry-padding);\\n      width: map-get($taskbar, entry-width);\\n\\n      &:last-child {\\n        padding-right: unset;\\n      }\\n    }\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbar\": \"Taskbar_taskbar__1VXpP\",\n\t\"entries\": \"Taskbar_entries__tno89\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXIubW9kdWxlLnNjc3M/MDlmYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLG9CQUFvQixrQkFBa0IsY0FBYyxZQUFZLGdCQUFnQixpQkFBaUIseUNBQXlDLHVDQUF1Qyx1Q0FBdUMsR0FBRyxtREFBbUQsb0JBQW9CLGNBQWMsWUFBWSxlQUFlLGtCQUFrQixvQkFBb0IsMERBQTBELGlCQUFpQixHQUFHLHNEQUFzRCxrQkFBa0IsdUJBQXVCLGlCQUFpQixHQUFHLGlFQUFpRSx5QkFBeUIsR0FBRyxPQUFPLHlJQUF5SSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsYUFBYSxZQUFZLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxpREFBaUQsNEJBQTRCLG9GQUFvRixjQUFjLG9CQUFvQix1Q0FBdUMsY0FBYyxZQUFZLGtCQUFrQixzQ0FBc0MsNEhBQTRILHFEQUFxRCxnQkFBZ0IsMEJBQTBCLG1DQUFtQyxzQkFBc0IsK0NBQStDLDZCQUE2Qix1QkFBdUIsK0JBQStCLHdDQUF3QyxZQUFZLHNCQUFzQiwwREFBMEQsOENBQThDLHdCQUF3QiwrQkFBK0IsU0FBUyxPQUFPLEtBQUssR0FBRyw2QkFBNkIsdUJBQXVCLG9CQUFvQixjQUFjLFlBQVksR0FBRyx3QkFBd0Isb0JBQW9CLGFBQWEsY0FBYyxHQUFHLG9CQUFvQixvQkFBb0IsV0FBVyxZQUFZLEdBQUcsaUNBQWlDLHdCQUF3Qiw0QkFBNEIsR0FBRyxvRkFBb0YsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxrQ0FBa0MsNkRBQTZELEtBQUssa0NBQWtDLG9DQUFvQyxvQ0FBb0MsMENBQTBDLG1DQUFtQyxpQkFBaUIseURBQXlELE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM5NUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyX3Rhc2tiYXJfXzFWWHBQIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEzMDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuLlRhc2tiYXJfdGFza2Jhcl9fMVZYcFAgLlRhc2tiYXJfZW50cmllc19fdG5vODkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGxlZnQ6IDM5cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMCAxIDE2MHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDkwcHggLSAoJHN0YXJ0TWVudVRvdGFsV2lkdGggKiAyKSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5UYXNrYmFyX3Rhc2tiYXJfXzFWWHBQIC5UYXNrYmFyX2VudHJpZXNfX3Rubzg5IGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcHg7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5UYXNrYmFyX3Rhc2tiYXJfXzFWWHBQIC5UYXNrYmFyX2VudHJpZXNfX3Rubzg5IGxpOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogdW5zZXQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2Jhci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG9DQUFBO0VBT0Esa0NBQUE7VUFBQSwwQkFBQTtBQVpGO0FBY0U7RUNwQkEsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VEcUJFLFVBdkJrQjtFQXlCbEIsYUFBQTtFQUNBLGVBQUE7RUFFQSxxREFBQTtFQUNBLFlBQUE7QUFiSjtBQWVJO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtBQWROO0FBZ0JNO0VBQ0Usb0JBQUE7QUFkUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdAL3N0eWxlcy9tYXBzJztcXG5AaW1wb3J0ICdAL3N0eWxlcy9taXhpbnMnO1xcblxcbiRzdGFydE1lbnVUb3RhbFdpZHRoOiBtYXAtZ2V0KCRzdGFydG1lbnUsIHdpZHRoKSArIG1hcC1nZXQoJHN0YXJ0bWVudSwgcGFkZGluZyk7XFxuXFxuLnRhc2tiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogbWFwLWdldCgkekluZGV4LCB0YXNrYmFyKTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogbWFwLWdldCgkdGFza2JhciwgaGVpZ2h0KTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoXFxuICAgIDAsXFxuICAgIDAlLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyLCBiYXNlLWxpZ2h0bmVzcyksXFxuICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICApO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKG1hcC1nZXQoJHRhc2tiYXIsIGJsdXIpKTtcXG5cXG4gIC5lbnRyaWVzIHtcXG4gICAgQGluY2x1ZGUgYm90dG9tTGVmdDtcXG5cXG4gICAgbGVmdDogJHN0YXJ0TWVudVRvdGFsV2lkdGg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDAgMSBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS13aWR0aCk7XFxuXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAje21hcC1nZXQoJGNsb2NrLCB3aWR0aCl9IC0gKCRzdGFydE1lbnVUb3RhbFdpZHRoICogMikpO1xcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGVudHJ5LXBhZGRpbmcpO1xcbiAgICAgIHdpZHRoOiBtYXAtZ2V0KCR0YXNrYmFyLCBlbnRyeS13aWR0aCk7XFxuXFxuICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ0Avc3R5bGVzL21hcHMnO1xcblxcbkBtaXhpbiBib3R0b21MZWZ0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbkBtaXhpbiBib3R0b21SaWdodCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuQG1peGluIHRvcExlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIHRleHRPdmVyZmxvd0VsbGlwc2lzIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcnMoJHNpemUsICRib3JkZXItcmFkaXVzLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6ICRzaXplO1xcbiAgICBoZWlnaHQ6ICRzaXplO1xcbiAgfVxcblxcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGZvcmVncm91bmQtY29sb3IsIDEwJSk7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtY29sb3I7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZm9yZWdyb3VuZC1jb2xvciwgMjAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YXNrYmFyXCI6IFwiVGFza2Jhcl90YXNrYmFyX18xVlhwUFwiLFxuXHRcImVudHJpZXNcIjogXCJUYXNrYmFyX2VudHJpZXNfX3Rubzg5XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/Taskbar.module.scss\n");

/***/ })

})