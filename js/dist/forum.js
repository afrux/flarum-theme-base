/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Footer */ "./src/forum/components/Footer.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extensions/afrux-theme-base/forum/components/Footer": _components_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/forum/components/Footer.js":
/*!****************************************!*\
  !*** ./src/forum/components/Footer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var Footer = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Footer, _Component);

  function Footer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.view = function view() {
    if (!this.hasLinks() && !this.hasDescription() && !this.hasBottomLine()) {
      return "";
    }

    return m("div", {
      className: "ThemeBaseFooter"
    }, this.separator(), m("div", {
      className: "ThemeBaseFooter-container container"
    }, this.upper(), app.forum.attribute("afrux-theme-base.footerBottomLine") && this.lower() || ""));
  };

  _proto.separator = function separator() {// ...
  };

  _proto.upper = function upper() {
    var links = (app.forum.attribute("afrux-theme-base.footerLinks") || []).filter(function (item) {
      return item !== null;
    }).map(function (item) {
      if (item.links) item.links = item.links.filter(function (item) {
        return item !== null;
      });
      return item;
    });
    return m("div", {
      className: "ThemeBaseFooter-upper"
    }, m("div", {
      className: ["ThemeBaseFooter-about", this.hasLinks() ? "" : "ThemeBaseFooter-about--large"].join(" ")
    }, m("div", {
      className: ["ThemeBaseFooter-logo", this.hasDescription() ? "" : "ThemeBaseFooter-logo--large"].join(" ")
    }, app.forum.attribute("logoUrl") ? m("img", {
      src: app.forum.attribute("logoUrl"),
      alt: "logo"
    }) : m("h1", {
      className: "ThemeBaseFooter-title"
    }, app.forum.attribute("title"))), this.hasDescription() ? m("p", {
      className: "ThemeBaseFooter-logo-description"
    }, app.forum.attribute("afrux-theme-base.footerDescription")) : ""), this.hasLinks() ? m("div", {
      className: "ThemeBaseFooter-links"
    }, links.map(function (group) {
      return m("div", {
        className: "ThemeBaseFooter-linkGroup"
      }, m("h6", {
        className: "ThemeBaseFooter-linkGroup-title"
      }, group.title), m("ul", null, group.links.map(function (link) {
        return m("li", {
          className: "ThemeBaseFooter-links-item"
        }, m("a", {
          href: link.url,
          rel: "noopener"
        }, link.label));
      })));
    })) : "");
  };

  _proto.lower = function lower() {
    return m("div", {
      className: "ThemeBaseFooter-lower"
    }, m("p", {
      className: "ThemeBaseFooter-bottomLine"
    }, app.forum.attribute("afrux-theme-base.footerBottomLine")));
  };

  _proto.hasLinks = function hasLinks() {
    return app.forum.attribute("afrux-theme-base.footerLinks") && app.forum.attribute("afrux-theme-base.footerLinks").length;
  };

  _proto.hasDescription = function hasDescription() {
    return Boolean(app.forum.attribute("afrux-theme-base.footerDescription"));
  };

  _proto.hasBottomLine = function hasBottomLine() {
    return Boolean(app.forum.attribute("afrux-theme-base.footerBottomLine"));
  };

  return Footer;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/admin");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__);




app.initializers.add("afrux-theme-base", function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_2___default().prototype), "mount", function () {
    if (app.forum.attribute("afrux-theme-base.footerHooked")) m.mount(document.getElementById("footer"), _components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_WelcomeHero__WEBPACK_IMPORTED_MODULE_3___default().prototype), "view", function (vdom) {
    if (!app.forum.attribute("afruxHeroBanner") || !(vdom && typeof vdom === "object" && "attrs" in vdom)) return;
    vdom.attrs.className += " Hero--banner";
    vdom.attrs.style = vdom.attrs.style || {};
    vdom.attrs.style["--banner-url"] = "url(\"" + app.forum.attribute("afruxHeroBanner") + "\")";

    if (app.forum.attribute("afruxHeroBannerPosition")) {
      vdom.attrs.style["--banner-position"] = app.forum.attribute("afruxHeroBannerPosition");
    }
  });
}); // Expose compat API



Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_5__.compat, _compat__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "@flarum/core/admin":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core;

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/ForumApplication":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['forum/ForumApplication']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/ForumApplication'];

/***/ }),

/***/ "flarum/forum/components/WelcomeHero":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/WelcomeHero']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/WelcomeHero'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map