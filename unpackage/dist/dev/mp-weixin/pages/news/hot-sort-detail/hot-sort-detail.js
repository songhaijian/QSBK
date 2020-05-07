(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/hot-sort-detail/hot-sort-detail"],{

/***/ 66:
/*!**************************************************************************************!*\
  !*** D:/H5/QSBK/main.js?{"page":"pages%2Fnews%2Fhot-sort-detail%2Fhot-sort-detail"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _hotSortDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/news/hot-sort-detail/hot-sort-detail.vue */ 67));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_hotSortDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 67:
/*!*****************************************************************!*\
  !*** D:/H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hot-sort-detail.vue?vue&type=template&id=369e1b20&scoped=true& */ 68);
/* harmony import */ var _hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-sort-detail.vue?vue&type=script&lang=js& */ 70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "369e1b20",
  null,
  false,
  _hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/*!************************************************************************************************************!*\
  !*** D:/H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue?vue&type=template&id=369e1b20&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./hot-sort-detail.vue?vue&type=template&id=369e1b20&scoped=true& */ 69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_template_id_369e1b20_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 69:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue?vue&type=template&id=369e1b20&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 70:
/*!******************************************************************************************!*\
  !*** D:/H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Tools/HBuilderX.2.6.15.20200421.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./hot-sort-detail.vue?vue&type=script&lang=js& */ 71);
/* harmony import */ var _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_2_6_15_20200421_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_hot_sort_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/H5/QSBK/pages/news/hot-sort-detail/hot-sort-detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var sNewsTopicDetail = function sNewsTopicDetail() {__webpack_require__.e(/*! require.ensure | component/news/s-news-topic-detail */ "component/news/s-news-topic-detail").then((function () {return resolve(__webpack_require__(/*! ../../../component/news/s-news-topic-detail.vue */ 174));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var sTabBar = function sTabBar() {__webpack_require__.e(/*! require.ensure | component/index/s-tab-bar */ "component/index/s-tab-bar").then((function () {return resolve(__webpack_require__(/*! ../../../component/index/s-tab-bar.vue */ 94));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var sNewsCommonList = function sNewsCommonList() {__webpack_require__.e(/*! require.ensure | component/common/s-news-common-list */ "component/common/s-news-common-list").then((function () {return resolve(__webpack_require__(/*! ../../../component/common/s-news-common-list.vue */ 115));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var sLoadMore = function sLoadMore() {__webpack_require__.e(/*! require.ensure | component/index/s-load-more */ "component/index/s-load-more").then((function () {return resolve(__webpack_require__(/*! ../../../component/index/s-load-more.vue */ 101));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =





















{
  components: {
    sNewsTopicDetail: sNewsTopicDetail,
    sTabBar: sTabBar,
    sNewsCommonList: sNewsCommonList,
    sLoadMore: sLoadMore },

  data: function data() {
    return {
      topicDetailObj: {
        imagePath: "/static/topicpic/3.jpeg",
        title: "天天大卡",
        desc: "面试官:在电梯里巧遇马云你会做什么?90后女孩的回答当场被录用",
        newsNum: 507,
        todayNum: 707 },

      tabIndex: 1,
      tabBars: [{
        name: '默认',
        id: 'moren' },
      {
        name: '最新',
        id: 'zuixin' }],

      itemStyle: "width:50%;",
      topicDetailList: [{
        loadText: "上拉加载更多...",
        list: [
        // 文字
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "",
          video: false,
          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 图文
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 1, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "/static/datapic/1.jpg",
          video: false,
          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 视频
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "/static/datapic/1.jpg",
          video: {
            playNum: "20W次播放",
            videoTime: "2:47" },

          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 分享
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "",
          video: false,
          share: {
            shareTitle: "从男人监督告诉你,为什么他对你有好感却不追呢",
            shareImg: "/static/datapic/1.jpg" },

          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 }] },


      {
        loadText: "上拉加载更多...",
        list: [
        // 文字
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "",
          video: false,
          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 图文
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 1, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "/static/datapic/1.jpg",
          video: false,
          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 视频
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "/static/datapic/1.jpg",
          video: {
            playNum: "20W次播放",
            videoTime: "2:47" },

          share: false,
          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 },

        // 分享
        {
          userPic: "/static/userpic/10.jpg",
          userName: "三鱼先生",
          sex: 0, //0:男 1：女
          age: 25,
          isAttention: false,
          title: "六道快手家常菜,好吃又下饭,家人都喜欢",
          titlePic: "",
          video: false,
          share: {
            shareTitle: "从男人角度告诉你,为什么他对你有好感却不追呢",
            shareImg: "/static/datapic/1.jpg" },

          path: "深圳 龙岗",
          shareNum: 36,
          commentNum: 27,
          favNum: 9829 }] }] };




  },
  methods: {
    //TabBar点击事件
    handleItemClick: function handleItemClick(index) {
      this.tabIndex = index;
    } },

  onReachBottom: function onReachBottom() {
    this.topicDetailList[this.tabIndex].loadText = "加载中...";
    this.topicDetailList[this.tabIndex].list = [].concat(_toConsumableArray(this.topicDetailList[this.tabIndex].list), _toConsumableArray(this.topicDetailList[
    this.tabIndex].
    list));

    this.topicDetailList[this.tabIndex].loadText = "上拉加载更多...";
  },
  onPullDownRefresh: function onPullDownRefresh() {
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 2000);
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[66,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/news/hot-sort-detail/hot-sort-detail.js.map