/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2!./src/style.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"body,\\nhtml {\\n  width: 100%;\\n}\\n\\n.container {\\n  display: block;\\n  width: 60%;\\n  margin: 5rem auto;\\n  padding: 1rem;\\n  box-shadow: 0 0 5px gray;\\n  border-radius: 10px;\\n}\\n\\n.card {\\n  display: block;\\n  margin: 5rem;\\n  padding: 5rem 3rem;\\n  border: 1px solid black;\\n  background-color: #e6e6fa;\\n}\\n.card div {\\n  text-align: center;\\n}\\n.card__input {\\n  width: 50%;\\n  margin: 1rem;\\n  padding: 0.5rem;\\n  border: 1px solid gray;\\n}\\n.card__input-expire {\\n  width: 10%;\\n  margin: 1rem 0;\\n}\\n.card__input-cvv {\\n  width: 10%;\\n}\\n\\n.form {\\n  display: block;\\n}\\n.form div {\\n  text-align: center;\\n}\\n.form__input {\\n  padding: 0.5rem;\\n  width: 50%;\\n  border: 1px solid gray;\\n}\\n.form__input-name {\\n  margin-top: 1rem;\\n}\\n.form__alert {\\n  display: block;\\n  font-size: 12px;\\n  color: red;\\n}\\n.form__expire {\\n  margin: 1rem 0;\\n}\\n.form__expire-select {\\n  width: 10%;\\n}\\n.form__input-cvv {\\n  width: 10%;\\n}\\n.form__btn {\\n  margin: 1rem;\\n  padding: 1rem 2rem;\\n  background-color: #e6e6fa;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Applications/ogino_kota/ogino(15)/src/style.scss\",\"style.scss\"],\"names\":[],\"mappings\":\"AAAA;;EAEE,WAAA;ACCF;;ADEA;EACE,cAAA;EACA,UAAA;EACA,iBAAA;EACA,aAAA;EACA,wBAAA;EACA,mBAAA;ACCF;;ADEA;EACE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,yBAAA;ACCF;ADCE;EACE,kBAAA;ACCJ;ADEE;EACE,UAAA;EACA,YAAA;EACA,eAAA;EACA,sBAAA;ACAJ;ADGE;EACE,UAAA;EACA,cAAA;ACDJ;ADIE;EACE,UAAA;ACFJ;;ADMA;EACE,cAAA;ACHF;ADKE;EACE,kBAAA;ACHJ;ADME;EACE,eAAA;EACA,UAAA;EACA,sBAAA;ACJJ;ADOE;EACE,gBAAA;ACLJ;ADQE;EACE,cAAA;EACA,eAAA;EACA,UAAA;ACNJ;ADSE;EACE,cAAA;ACPJ;ADUE;EACE,UAAA;ACRJ;ADWE;EACE,UAAA;ACTJ;ADYE;EACE,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;ACVJ\",\"file\":\"style.scss\",\"sourcesContent\":[\"body,\\nhtml {\\n  width: 100%;\\n}\\n\\n.container {\\n  display: block;\\n  width: 60%;\\n  margin: 5rem auto;\\n  padding: 1rem;\\n  box-shadow: 0 0 5px gray;\\n  border-radius: 10px;\\n}\\n\\n.card {\\n  display: block;\\n  margin: 5rem;\\n  padding: 5rem 3rem;\\n  border: 1px solid black;\\n  background-color: #e6e6fa;\\n\\n  div {\\n    text-align: center;\\n  }\\n\\n  &__input {\\n    width: 50%;\\n    margin: 1rem;\\n    padding: 0.5rem;\\n    border: 1px solid gray;\\n  }\\n\\n  &__input-expire {\\n    width: 10%;\\n    margin: 1rem 0;\\n  }\\n\\n  &__input-cvv {\\n    width: 10%;\\n  }\\n}\\n\\n.form {\\n  display: block;\\n\\n  div {\\n    text-align: center;\\n  }\\n\\n  &__input {\\n    padding: 0.5rem;\\n    width: 50%;\\n    border: 1px solid gray;\\n  }\\n\\n  &__input-name {\\n    margin-top: 1rem;\\n  }\\n\\n  &__alert {\\n    display: block;\\n    font-size: 12px;\\n    color: red;\\n  }\\n\\n  &__expire {\\n    margin: 1rem 0;\\n  }\\n\\n  &__expire-select {\\n    width: 10%;\\n  }\\n\\n  &__input-cvv {\\n    width: 10%;\\n  }\\n\\n  &__btn {\\n    margin: 1rem;\\n    padding: 1rem 2rem;\\n    background-color: #e6e6fa;\\n    border-radius: 5px;\\n    cursor: pointer;\\n  }\\n}\\n\",\"body,\\nhtml {\\n  width: 100%;\\n}\\n\\n.container {\\n  display: block;\\n  width: 60%;\\n  margin: 5rem auto;\\n  padding: 1rem;\\n  box-shadow: 0 0 5px gray;\\n  border-radius: 10px;\\n}\\n\\n.card {\\n  display: block;\\n  margin: 5rem;\\n  padding: 5rem 3rem;\\n  border: 1px solid black;\\n  background-color: #e6e6fa;\\n}\\n.card div {\\n  text-align: center;\\n}\\n.card__input {\\n  width: 50%;\\n  margin: 1rem;\\n  padding: 0.5rem;\\n  border: 1px solid gray;\\n}\\n.card__input-expire {\\n  width: 10%;\\n  margin: 1rem 0;\\n}\\n.card__input-cvv {\\n  width: 10%;\\n}\\n\\n.form {\\n  display: block;\\n}\\n.form div {\\n  text-align: center;\\n}\\n.form__input {\\n  padding: 0.5rem;\\n  width: 50%;\\n  border: 1px solid gray;\\n}\\n.form__input-name {\\n  margin-top: 1rem;\\n}\\n.form__alert {\\n  display: block;\\n  font-size: 12px;\\n  color: red;\\n}\\n.form__expire {\\n  margin: 1rem 0;\\n}\\n.form__expire-select {\\n  width: 10%;\\n}\\n.form__input-cvv {\\n  width: 10%;\\n}\\n.form__btn {\\n  margin: 1rem;\\n  padding: 1rem 2rem;\\n  background-color: #e6e6fa;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/validation.js */ \"./src/js/validation.js\");\n/* harmony import */ var _js_validation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_validation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/text.js */ \"./src/js/text.js\");\n/* harmony import */ var _js_text_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_text_js__WEBPACK_IMPORTED_MODULE_2__);\n\n// 入力フォームのバリデーション\n\n// 入力のリアルタイム反映\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/text.js":
/*!************************!*\
  !*** ./src/js/text.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cardNumInput = document.querySelector(\"input[name='number']\");\nconst cardNameInput = document.querySelector(\"input[name='name']\");\nconst cardMonthSelected = document.querySelector(\"select[name='month']\");\nconst cardYearSelected = document.querySelector(\"select[name='year']\");\nconst cardCvvInput = document.querySelector(\"input[name='cvv']\");\nconst inputNumberText = document.querySelector(\"input[name='card_number']\");\nconst inputNameText = document.querySelector(\"input[name='card_name']\");\nconst inputMonthText = document.querySelector(\"input[name='card_month']\");\nconst inputYearText = document.querySelector(\"input[name='card_year']\");\nconst inputCvvText = document.querySelector(\"input[name='card_cvv']\");\n\n// 下のインプットで入力した値が表示される（もっといい書き方があるのかな。。？）\n// 同じような内容を５回書いているのでまとめられそう？\ncardNumInput.addEventListener('keyup', (e) => {\n  const text = e.target.value;\n  inputNumberText.value = text;\n});\n\ncardNameInput.addEventListener('keyup', (e) => {\n  const text = e.target.value;\n  inputNameText.value = text;\n});\n\ncardMonthSelected.addEventListener('change', (e) => {\n  const text = e.target.value;\n  inputMonthText.value = text;\n});\n\ncardYearSelected.addEventListener('change', (e) => {\n  const text = e.target.value;\n  inputYearText.value = text;\n});\n\ncardCvvInput.addEventListener('keyup', (e) => {\n  // const text = e.target.value;\n  const a = '*';\n  const text = inputCvvText.value;\n  const inputLength = text.length;\n\n  // 伏字表示\n  if (text == '' && e.keyCode !== 8 && e.keyCode !== 46) {\n      inputCvvText.value = '*';\n  //8はバックスペース、46はデリートキー\n  }else if(e.keyCode == 8 || e.keyCode == 46){\n    // 空白時に文字消去キーを押した場合にはリターン\n    if(text.length == 0){\n      return;\n    }\n    inputCvvText.value = text.slice(0,-1);\n  }else{\n    inputCvvText.value =  text.concat('*');\n  }\n});\n\n\n//# sourceURL=webpack:///./src/js/text.js?");

/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cardNumInput = document.querySelector(\"input[name='number']\");\nconst cardNameInput = document.querySelector(\"input[name='name']\");\nconst cardMonthSelected = document.querySelector(\"select[name='month']\");\nconst cardYearSelected = document.querySelector(\"select[name='year']\");\nconst cardCvvInput = document.querySelector(\"input[name='cvv']\");\nconst cardSubitBtn = document.querySelector(\"button\");\nconst formAlertNumber = document.querySelector(\".form__alert-number\");\nconst formAlertName = document.querySelector(\".form__alert-name\");\nconst formAlertExpire = document.querySelector(\".form__alert-expire\");\nconst formAlertCvv = document.querySelector(\".form__alert-cvv\");\n\n// 記入内容が正しいか判断するフラッグ\nlet numberFlag = false;\nlet nameFlag = false;\nlet monthFlag = false;\nlet yearFlag = false;\nlet cvvFlag = false;\n// フラッグを配列にして渡す\nlet flagArray = [numberFlag, nameFlag, monthFlag, yearFlag, cvvFlag];\n\n// インプットフォームの背景色変更\nfunction changeBackground(num, el) {\n  if (num == 0) {\n    el.target.style.backgroundColor = '#90ee90';\n  }\n  if (num == 1) {\n    el.target.style.backgroundColor = '#ffb6c1';\n  }\n}\n\n// カード番号の入力バリデーション\ncardNumInput.addEventListener('change', (e) => {\n  const inputNumber = e.target.value;\n  if (inputNumber.match(/^[0-9]{16}$/) == null) {\n    if (flagArray[0] == true) {\n      flagArray[0] = false;\n    }\n    formAlertNumber.textContent = \"正しい番号を入力して下さい\";\n    changeBackground(1, e);\n  } else {\n    changeBackground(0, e);\n    flagArray[0] = true;\n    if (formAlertNumber.textContent !== '') {\n      formAlertNumber.textContent = '';\n    }\n  }\n});\n\n// 名前入力のバリデーション\ncardNameInput.addEventListener('change', (e) => {\n  const inputName = e.target.value;\n  if (inputName.match(/^([A-Z]+)( [A-Z]+)*$/) == null) {\n    if (flagArray[1] == true) {\n      flagArray[1] = false;\n    }\n    formAlertName.textContent = \"正しい名前を入力して下さい\";\n    changeBackground(1, e);\n  } else {\n    changeBackground(0, e);\n    flagArray[1] = true;\n    if (formAlertName.textContent !== '') {\n      formAlertName.textContent = '';\n    }\n  }\n});\n\n// CVVのバリデーション\ncardCvvInput.addEventListener('change', (e) => {\n  const inputCvv = e.target.value;\n  if (inputCvv.match(/^[0-9]{3}$/) == null) {\n    if (flagArray[4] == true) {\n      flagArray[4] = false;\n    }\n    formAlertCvv.textContent = \"正しいCVVを入力して下さい\";\n    changeBackground(1, e);\n  } else {\n    changeBackground(0, e);\n    flagArray[4] = true;\n    if (formAlertCvv.textContent !== '') {\n      formAlertCvv.textContent = '';\n    }\n  }\n});\n\n// 有効期限のバリデーションは月と年両方から判断するためSubmit時にかける\n// change時に綺麗にかける方法が思いつきませんでした\nconst now = new Date();\nconst nowMonth = now.getMonth() + 1;\nconst nowYear = now.getFullYear();\n// 有効月のエラー文\ncardMonthSelected.addEventListener('change', (e) => {\n  if (formAlertExpire.textContent !== '' && e.target.value >= nowMonth) {\n    formAlertExpire.textContent = '';\n    flagArray[2] = true;\n    return;\n  }\n  flagArray[2] = true;\n});\n// 有効年のエラー文\ncardYearSelected.addEventListener('change', (e) => {\n  if (formAlertExpire.textContent !== '' && e.target.value >= nowYear) {\n    formAlertExpire.textContent = '';\n    flagArray[3] = true;\n    return;\n  }\n  flagArray[3] = true;\n});\n// 送信時のvalidation処理\ncardSubitBtn.addEventListener('click', (e) => {\n  const inputMonth = cardMonthSelected.value;\n  const inputYear = cardYearSelected.value;\n  if (inputMonth < nowMonth && inputYear <= nowYear) {\n    formAlertExpire.textContent = \"正しい有効期限を入力して下さい\";\n    flagArray[2] = false;\n    return;\n  }\n  if (flagArray.includes(false)) {\n    alert('カード情報を正しく入力して下さい');\n    console.log(flagArray);\n    return;\n  }\n  console.log(flagArray);\n  alert('カード番号：' + cardNumInput.value + ' カード氏名：' + cardNameInput.value + ' 有効月：' + cardMonthSelected.value + ' 有効年：' + cardYearSelected.value + ' CVV：' + cardCvvInput.value)\n  // document.querySelector('.form').submit();\n});\n\n\n//# sourceURL=webpack:///./src/js/validation.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--4-1!../node_modules/sass-loader/dist/cjs.js??ref--4-2!./style.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });