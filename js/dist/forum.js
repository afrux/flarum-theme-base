module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Footer */ "./src/forum/components/Footer.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  'extensions/afrux-theme-base/forum/components/Footer': _components_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/forum/components/Footer.js":
/*!****************************************!*\
  !*** ./src/forum/components/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var Footer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Footer, _Component);

  function Footer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.view = function view() {
    if (!this.hasLinks() && !this.hasDescription() && !this.hasBottomLine()) {
      return '';
    }

    return m("div", {
      className: "ThemeBaseFooter"
    }, this.separator(), m("div", {
      className: "ThemeBaseFooter-container container"
    }, this.upper(), app.forum.attribute('afrux-theme-base.footerBottomLine') && this.lower() || ''));
  };

  _proto.separator = function separator() {// ...
  };

  _proto.upper = function upper() {
    return m("div", {
      className: "ThemeBaseFooter-upper"
    }, m("div", {
      className: ["ThemeBaseFooter-about", this.hasLinks() ? '' : 'ThemeBaseFooter-about--large'].join(' ')
    }, m("div", {
      className: ["ThemeBaseFooter-logo", this.hasDescription() ? '' : 'ThemeBaseFooter-logo--large'].join(' ')
    }, m("img", {
      src: app.forum.attribute('logoUrl'),
      alt: "logo"
    })), this.hasDescription() ? m("p", {
      className: "ThemeBaseFooter-logo-description"
    }, app.forum.attribute('afrux-theme-base.footerDescription')) : ''), this.hasLinks() ? m("div", {
      className: "ThemeBaseFooter-links"
    }, app.forum.attribute('afrux-theme-base.footerLinks').map(function (group) {
      return m("div", {
        className: "ThemeBaseFooter-linkGroup"
      }, m("h6", {
        className: "ThemeBaseFooter-linkGroup-title"
      }, group.title), m("ul", null, group.links.map(function (link) {
        return m("li", {
          className: "ThemeBaseFooter-links-item"
        }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          to: link.url
        }, link.label));
      })));
    })) : '');
  };

  _proto.lower = function lower() {
    return m("div", {
      className: "ThemeBaseFooter-lower"
    }, m("p", {
      className: "ThemeBaseFooter-bottomLine"
    }, app.forum.attribute('afrux-theme-base.footerBottomLine')));
  };

  _proto.hasLinks = function hasLinks() {
    return app.forum.attribute('afrux-theme-base.footerLinks') && app.forum.attribute('afrux-theme-base.footerLinks').length;
  };

  _proto.hasDescription = function hasDescription() {
    return Boolean(app.forum.attribute('afrux-theme-base.footerDescription'));
  };

  _proto.hasBottomLine = function hasBottomLine() {
    return Boolean(app.forum.attribute('afrux-theme-base.footerBottomLine'));
  };

  return Footer;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Footer */ "./src/forum/components/Footer.js");
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/ForumApplication */ "flarum/forum/ForumApplication");
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/WelcomeHero */ "flarum/forum/components/WelcomeHero");
/* harmony import */ var flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__);




app.initializers.add('afrux-theme-base', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'mount', function () {
    if (app.forum.attribute('afrux-theme-base.footerHooked')) m.mount(document.getElementById('footer'), _components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function (vnode) {
    if (!app.forum.attribute('afruxHeroBanner')) return;
    vnode.attrs.className += ' Hero--banner';
    vnode.attrs.style = vnode.attrs.style || {};
    vnode.attrs.style['--banner-url'] = "url(\"" + app.forum.attribute('afruxHeroBanner') + "\")";

    if (app.forum.attribute('afruxHeroBannerPosition')) {
      vnode.attrs.style['--banner-position'] = app.forum.attribute('afruxHeroBannerPosition');
    }
  });
}); // Expose compat API



Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__["compat"], _compat__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/ForumApplication":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['forum/ForumApplication']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/ForumApplication'];

/***/ }),

/***/ "flarum/forum/components/WelcomeHero":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/WelcomeHero']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/WelcomeHero'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map