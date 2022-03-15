/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/compat.js":
/*!*****************************!*\
  !*** ./src/admin/compat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_EditFooterLinksModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditFooterLinksModal */ "./src/admin/components/EditFooterLinksModal.js");
/* harmony import */ var _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ExtensionPage */ "./src/admin/components/ExtensionPage.js");
/* harmony import */ var _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ExtensionsPage */ "./src/admin/components/ExtensionsPage.js");
/* harmony import */ var _components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UploadImageButton */ "./src/admin/components/UploadImageButton.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extensions/afrux-theme-base/admin/components/EditFooterLinksModal": _components_EditFooterLinksModal__WEBPACK_IMPORTED_MODULE_0__["default"],
  "extensions/afrux-theme-base/admin/components/ExtensionPage": _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__["default"],
  "extensions/afrux-theme-base/admin/components/ExtensionsPage": _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_2__["default"],
  "extensions/afrux-theme-base/admin/components/UploadImageButton": _components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/admin/components/EditFooterLinksModal.js":
/*!******************************************************!*\
  !*** ./src/admin/components/EditFooterLinksModal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditFooterLinksModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6__);








var EditFooterLinksModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditFooterLinksModal, _Modal);

  function EditFooterLinksModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditFooterLinksModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    var footerLinks = app.data.settings["afrux-theme-base.footer_links"];
    var links = (footerLinks && JSON.parse(footerLinks) || []).filter(function (item) {
      return item !== null;
    }).map(function (item) {
      if (item.links) item.links = item.links.filter(function (item) {
        return item !== null;
      });
      return item;
    });
    this.links = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(links);
    this.loading = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(false);
  };

  _proto.title = function title() {
    return app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links");
  };

  _proto.className = function className() {
    return "EditFooterLinksModal Modal--medium";
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "EditFooterLinksModal-groups Modal-body"
    }, this.links().map(function (group, groupIndex) {
      return m("div", {
        className: "EditFooterLinksModal-groups-item"
      }, m("div", {
        className: "EditFooterLinksModal-groups-item-title"
      }, m("div", {
        className: "EditFooterLinksModal-groups-item-title-text",
        contenteditable: "true",
        oninput: function oninput(e) {
          _this.saveGroup((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, group, {
            title: e.target.innerHTML
          }), groupIndex);
        }
      }, m.trust(group.title)), m("div", {
        className: "EditFooterLinksModal-groups-item-title-controls"
      }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button Button--icon",
        icon: "fas fa-times",
        onclick: function onclick() {
          _this.saveGroup(group, groupIndex, true);
        }
      }))), m("div", {
        className: "EditFooterLinksModal-links"
      }, group.links.map(function (link, index) {
        return _this.link(link, index, groupIndex);
      }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button",
        icon: "fas fa-plus",
        onclick: function onclick() {
          _this.saveLink({
            url: "",
            label: ""
          }, groupIndex);
        }
      }, app.translator.trans("afrux-theme-base.admin.settings.links_modal.add_link"))));
    }), m("div", null, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--primary",
      loading: this.loading(),
      onclick: function onclick() {
        flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_6___default()({
          "afrux-theme-base.footer_links": JSON.stringify(_this.links())
        }).then(function () {
          _this.loading(false);

          app.modal.close();
        });

        _this.loading(true);
      }
    }, app.translator.trans("core.lib.edit_user.submit_button")), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button",
      icon: "fas fa-plus-circle",
      onclick: function onclick() {
        _this.saveGroup({
          title: flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_5___default()(app.translator.trans("afrux-theme-base.admin.settings.links_modal.group_name", {
            number: _this.links().length + 1
          })),
          links: []
        });
      }
    }, app.translator.trans("afrux-theme-base.admin.settings.links_modal.add_group"))));
  };

  _proto.link = function link(_ref, index, groupIndex) {
    var _this2 = this;

    var url = _ref.url,
        label = _ref.label;
    var links = [].concat(this.links());
    return m("div", {
      className: "EditFooterLinksModal-links-item"
    }, m("input", {
      oninput: function oninput(e) {
        _this2.saveLink({
          url: url,
          label: e.target.value
        }, groupIndex, index);
      },
      value: label,
      className: "FormControl EditFooterLinksModal-links-item-label",
      placeholder: app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_label"),
      "aria-labeledby": app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_label")
    }), m("input", {
      oninput: function oninput(e) {
        _this2.saveLink({
          label: label,
          url: e.target.value
        }, groupIndex, index);
      },
      value: url,
      className: "FormControl EditFooterLinksModal-links-item-url",
      placeholder: app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_url"),
      "aria-labeledby": app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_url")
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--icon",
      icon: "fas fa-times",
      onclick: function onclick() {
        _this2.saveLink({}, groupIndex, index, true);
      }
    }));
  };

  _proto.saveLink = function saveLink(link, groupIndex, index, del) {
    if (index === void 0) {
      index = null;
    }

    if (del === void 0) {
      del = false;
    }

    var links = [].concat(this.links());
    if (del) delete links[groupIndex].links[index];else if (index !== null) links[groupIndex].links[index] = link;else links[groupIndex].links.push(link);
    links[groupIndex].links = links[groupIndex].links.filter(function (item) {
      return item !== null;
    });
    this.links(links);
  };

  _proto.saveGroup = function saveGroup(group, groupIndex, del) {
    if (groupIndex === void 0) {
      groupIndex = null;
    }

    if (del === void 0) {
      del = false;
    }

    var links = [].concat(this.links());
    if (del) delete links[groupIndex];else if (groupIndex !== null) links[groupIndex] = group;else links.push(group);
    links = links.filter(function (item) {
      return item !== null;
    });
    this.links(links);
  };

  return EditFooterLinksModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/admin/components/ExtensionPage.js":
/*!***********************************************!*\
  !*** ./src/admin/components/ExtensionPage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtensionPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);







var ExtensionPage = /*#__PURE__*/function (_FlarumExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionPage, _FlarumExtensionPage);

  function ExtensionPage() {
    return _FlarumExtensionPage.apply(this, arguments) || this;
  }

  var _proto = ExtensionPage.prototype;

  _proto.oninit = function oninit() {
    app.current.data.extension = this.extension.extra["flarum-extension"].title;
  };

  _proto.header = function header() {
    var topItems = this.topItems();
    topItems.get("version").attrs.className += " TagLabel";
    return m("div", {
      className: "ExtensionPage-header ThemeBase-AdminHeader"
    }, m("div", {
      className: "ThemeBase-AdminHeader-container"
    }, m("span", {
      className: "ThemeBase-AdminHeader-icon",
      style: this.extension.icon
    }, this.extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(this.extension.icon.name) : ""), m("div", {
      className: "ThemeBase-AdminHeader-info"
    }, m("h2", {
      className: "ThemeBase-AdminHeader-title"
    }, this.extension.extra["flarum-extension"].title), m("div", {
      className: "ThemeBase-AdminHeader-description helpText"
    }, this.extension.description)), m("div", {
      className: "ExtensionPage-headerTopItems"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default()(topItems.toArray())))));
  };

  _proto.view = function view() {
    var _this = this;

    if (!this.extension) return null;
    var sections = this.sections();
    var infoItems = this.infoItems();
    this.activeSection = this.activeSection || "content";

    if (sections.items["permissions"]) {
      sections.items["permissions"].content[0] = sections.items["permissions"].content[0].children[1].children;
    }

    return m("div", {
      className: "ExtensionPage ThemeBase-ExtensionPage " + this.className()
    }, this.header(), m("div", {
      className: "ExtensionPage-body ThemeBase-ExtensionPage-body"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "ExtensionPage-headerItems ThemeBase-ExtensionPage-headerItems"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default()), {
      state: this.isEnabled(),
      onchange: this.toggle.bind(this, this.extension.id)
    }, this.isEnabled(this.extension.id) ? app.translator.trans("core.admin.extension.enabled") : app.translator.trans("core.admin.extension.disabled")), m("aside", {
      className: "ThemeBase-ExtensionPage-ExtensionInfo"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_2___default()(infoItems.toArray())))), m("div", {
      className: "ExtensionPage-sections-nav ThemeBase-ExtensionPage-sections-nav"
    }, Object.keys(sections.items).map(function (section) {
      var sectionNameKey = "afrux-theme-base.admin.extension.sections." + section;
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        className: ["Button ExtensionPage-sections-nav-item ThemeBase-ExtensionPage-sections-nav-item", _this.activeSection === section ? "Button--active" : ""],
        onclick: function onclick() {
          return _this.activeSection = section;
        }
      }, app.translator.trans(sectionNameKey) === sectionNameKey ? section : app.translator.trans(sectionNameKey));
    })), m("div", {
      className: "ExtensionPage-sections ThemeBase-ExtensionPage-sections"
    }, Object.keys(sections.items).map(function (sectionKey) {
      var content = sections.items[sectionKey].content;

      if (content.attrs && content.attrs.className) {
        content.attrs.className = content.attrs.className.replace("ExtensionPage", "ThemeBase-ExtensionPage");
      }

      return m("div", {
        className: ["ExtensionPage-section ThemeBase-ExtensionPage-section", _this.activeSection === sectionKey ? "ExtensionPage-section--active ThemeBase-ExtensionPage-section--active" : ""].join(" ")
      }, sections.items[sectionKey].content);
    })))));
  };

  _proto.content = function content(original) {
    if (!this.isEnabled()) {
      return m("div", {
        className: "ThemeBase-infobox"
      }, app.translator.trans("core.admin.extension.enable_to_see"));
    }

    return original();
  };

  return ExtensionPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/admin/components/ExtensionsPage.js":
/*!************************************************!*\
  !*** ./src/admin/components/ExtensionsPage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExtensionsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/AdminPage */ "flarum/admin/components/AdminPage");
/* harmony import */ var flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/utils/getCategorizedExtensions */ "flarum/admin/utils/getCategorizedExtensions");
/* harmony import */ var flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/ExtensionsWidget */ "flarum/admin/components/ExtensionsWidget");
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/utils/isExtensionEnabled */ "flarum/admin/utils/isExtensionEnabled");
/* harmony import */ var flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__);








var ExtensionsPage = /*#__PURE__*/function (_AdminPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ExtensionsPage, _AdminPage);

  function ExtensionsPage() {
    return _AdminPage.apply(this, arguments) || this;
  }

  var _proto = ExtensionsPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _AdminPage.prototype.oninit.call(this, vnode);

    this.extensions = app.categorizedExtensions || flarum_admin_utils_getCategorizedExtensions__WEBPACK_IMPORTED_MODULE_2___default()();
  };

  _proto.headerInfo = function headerInfo() {
    return {
      className: "ThemeBase-ExtensionsPage",
      icon: "fas fa-puzzle-piece",
      title: app.translator.trans("afrux-theme-base.admin.extensions.title"),
      description: app.translator.trans("afrux-theme-base.admin.extensions.description")
    };
  };

  _proto.content = function content() {
    var _this = this;

    return m("div", {
      className: "ThemeBase-ExtensionCategories"
    }, m("div", {
      className: "ThemeBase-ExtensionCategories-container"
    }, Object.keys(this.extensions).map(function (category) {
      return m("div", {
        className: "ThemeBase-ExtensionCategory"
      }, m("h3", {
        className: "ThemeBase-ExtensionCategory-title"
      }, app.categoryLabels && app.categoryLabels[category] || app.translator.trans("core.admin.nav.categories." + category)), m("div", {
        className: "ThemeBase-ExtensionCategory-container"
      }, _this.extensions[category].map(function (extension) {
        return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: app.route("extension", {
            id: extension.id
          }),
          className: "ThemeBase-Extension"
        }, m("div", {
          className: "ThemeBase-Extension-icon"
        }, m("span", {
          className: "ExtensionListItem-icon ExtensionIcon",
          style: extension.icon
        }, extension.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()(extension.icon.name) : "")), m("div", {
          className: "ThemeBase-Extension-content"
        }, m("div", {
          className: "ThemeBase-Extension-title"
        }, m("div", {
          className: ["ExtensionListItem-Dot", "ThemeBase-Extension-state", flarum_admin_utils_isExtensionEnabled__WEBPACK_IMPORTED_MODULE_5___default()(extension.id) ? "enabled" : "disabled"].join(" ")
        }), m("div", {
          className: "ThemeBase-Extension-title-value"
        }, extension.extra["flarum-extension"].title)), m("div", {
          className: "ThemeBase-Extension-details"
        }, m("div", {
          className: "ThemeBase-Extension-package"
        }, extension.name), m("div", {
          className: "ThemeBase-Extension-version"
        }, extension.version))));
      })));
    })));
  };

  return ExtensionsPage;
}((flarum_admin_components_AdminPage__WEBPACK_IMPORTED_MODULE_1___default()));



/***/ }),

/***/ "./src/admin/components/UploadImageButton.js":
/*!***************************************************!*\
  !*** ./src/admin/components/UploadImageButton.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadImageButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);




var UploadImageButton = /*#__PURE__*/function (_Button) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadImageButton, _Button);

  function UploadImageButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Button.call.apply(_Button, [this].concat(args)) || this;
    _this.loading = false;
    return _this;
  }

  var _proto = UploadImageButton.prototype;

  _proto.view = function view(vnode) {
    this.attrs.loading = this.loading;
    this.attrs.className = (this.attrs.className || "") + " Button";

    if (app.data.settings[this.attrs.setting]) {
      this.attrs.onclick = this.remove.bind(this);
      return m("div", {
        className: "UploadImageButton-container"
      }, m("div", {
        className: "UploadImageButton-image-container"
      }, m("img", {
        className: "UploadImageButton-image",
        src: app.forum.attribute(this.attrs.serializedName),
        alt: ""
      })), _Button.prototype.view.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
        children: app.translator.trans("core.admin.upload_image.remove_button")
      })));
    } else {
      this.attrs.onclick = this.upload.bind(this);
    }

    return _Button.prototype.view.call(this, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, vnode, {
      children: app.translator.trans("core.admin.upload_image.upload_button")
    }));
  }
  /**
   * Prompt the user to upload an image.
   */
  ;

  _proto.upload = function upload() {
    var _this2 = this;

    if (this.loading) return;
    var $input = $('<input type="file">');
    $input.appendTo("body").hide().click().on("change", function (e) {
      var body = new FormData();
      body.append(_this2.attrs.name, $(e.target)[0].files[0]);
      _this2.loading = true;
      m.redraw();
      app.request({
        method: "POST",
        url: _this2.resourceUrl(),
        serialize: function serialize(raw) {
          return raw;
        },
        body: body
      }).then(_this2.success.bind(_this2), _this2.failure.bind(_this2));
    });
  }
  /**
   * Remove the logo.
   */
  ;

  _proto.remove = function remove() {
    this.loading = true;
    m.redraw();
    app.request({
      method: "DELETE",
      url: this.resourceUrl()
    }).then(this.success.bind(this), this.failure.bind(this));
  };

  _proto.resourceUrl = function resourceUrl() {
    return app.forum.attribute("apiUrl") + "/" + this.attrs.routeName;
  }
  /**
   * After a successful upload/removal, reload the page.
   *
   * @param {Object} response
   * @protected
   */
  ;

  _proto.success = function success(response) {
    window.location.reload();
  }
  /**
   * If upload/removal fails, stop loading.
   *
   * @param {Object} response
   * @protected
   */
  ;

  _proto.failure = function failure(response) {
    this.loading = false;
    m.redraw();
  };

  return UploadImageButton;
}((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EditFooterLinksModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EditFooterLinksModal */ "./src/admin/components/EditFooterLinksModal.js");
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/StatusWidget */ "flarum/admin/components/StatusWidget");
/* harmony import */ var flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/ExtensionsWidget */ "flarum/admin/components/ExtensionsWidget");
/* harmony import */ var flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/HeaderSecondary */ "flarum/admin/components/HeaderSecondary");
/* harmony import */ var flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/admin/components/AdminHeader */ "flarum/admin/components/AdminHeader");
/* harmony import */ var flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/admin/components/UserListPage */ "flarum/admin/components/UserListPage");
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/admin/components/AdminNav */ "flarum/admin/components/AdminNav");
/* harmony import */ var flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/admin/components/DashboardPage */ "flarum/admin/components/DashboardPage");
/* harmony import */ var flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flarum/common/components/Navigation */ "flarum/common/components/Navigation");
/* harmony import */ var flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ExtensionPage */ "./src/admin/components/ExtensionPage.js");
/* harmony import */ var _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ExtensionsPage */ "./src/admin/components/ExtensionsPage.js");
/* harmony import */ var _components_UploadImageButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/UploadImageButton */ "./src/admin/components/UploadImageButton.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./compat */ "./src/admin/compat.js");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @flarum/core/admin */ "@flarum/core/admin");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_24__);























app.initializers.add("afrux-theme-base", function () {
  var footerHooked = app.data.resources[0].attributes["afrux-theme-base.footerHooked"];
  var bannerHooked = app.data.resources[0].attributes["afrux-theme-base.bannerHooked"];
  var currentThemeId = app.data.resources[0].attributes["currentThemeId"];
  var normalizeStatusWidgetStructure = app.data.resources[0].attributes["afrux-theme-base.normalizeStatusWidgetStructure"];
  var normalizeAdminHeaderStructure = app.data.resources[0].attributes["afrux-theme-base.normalizeAdminHeaderStructure"];
  var normalizeExtensionPageStructure = app.data.resources[0].attributes["afrux-theme-base.normalizeExtensionPageStructure"];
  var normalizeUserTable = app.data.resources[0].attributes["afrux-theme-base.normalizeUserTable"];
  var addExtensionsPage = app.data.resources[0].attributes["afrux-theme-base.addExtensionsPage"];

  if (bannerHooked) {
    app.extensionData["for"](currentThemeId).registerSetting(function () {
      return m("div", {
        className: "Form-group HeroImageForm"
      }, m("label", {
        "for": "afrux-theme-base.hero_banner"
      }, app.translator.trans("afrux-theme-base.admin.settings.hero_banner")), m(_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
        setting: "afrux-theme-base.hero_banner",
        serializedName: "afruxHeroBanner",
        routeName: "afrux_banner",
        name: "afrux_banner"
      }));
    }).registerSetting({
      setting: "afrux-theme-base.hero_banner_position",
      type: "text",
      label: app.translator.trans("afrux-theme-base.admin.settings.hero_banner_position")
    });
  }

  if (footerHooked) {
    app.extensionData["for"](currentThemeId).registerSetting(function () {
      return m("div", {
        className: "Form-group"
      }, m("label", null, app.translator.trans("afrux-theme-base.admin.settings.footer_description")), m("textarea", {
        className: "FormControl",
        bidi: this.setting("afrux-theme-base.footer_description")
      }, this.setting("afrux-theme-base.footer_description")()));
    }).registerSetting(function () {
      return m("div", {
        className: "Form-group"
      }, m("label", null, app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links")), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_19___default()), {
        className: "Button",
        onclick: function onclick() {
          return app.modal.show(_components_EditFooterLinksModal__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
      }, app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links")));
    }).registerSetting({
      setting: "afrux-theme-base.footer_bottom_line",
      type: "text",
      label: app.translator.trans("afrux-theme-base.admin.settings.footer_bottom_line")
    });
  }

  if (normalizeStatusWidgetStructure) {
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2___default().prototype), "className", function (original) {
      return original() + " ThemeBase-StatusWidget";
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2___default().prototype), "content", function (original) {
      var items = this.items();
      items.remove("tools");
      var icons = {
        "version-flarum": "fas fa-comment",
        "version-php": "fab fa-php",
        "version-mysql": "fas fa-database"
      };

      if (app.data.illuminateVersion) {
        icons["version-laravel"] = "fab fa-laravel";
        items.add("version-laravel", [m("strong", null, "Laravel"), m("br", null), app.data.illuminateVersion.replace("v", "")]);
      }

      Object.keys(items.items).map(function (key) {
        var item = items.get(key);
        item[0].tag = "div";
        item[0].attrs.className = "ThemeBase-StatusWidget-key";
        item[2] = m("div", {
          className: "ThemeBase-StatusWidget-value"
        }, item[2]);
        item[1] = m("div", {
          className: "ThemeBase-StatusWidget-content"
        }, [item[0], item[2]]);
        item[0] = m("div", {
          className: "ThemeBase-StatusWidget-icon"
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()(icons[key]));
        delete item[2];
      });
      return [m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_10___default()(items.toArray()))];
    });
  }

  if (normalizeAdminHeaderStructure) {
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_AdminHeader__WEBPACK_IMPORTED_MODULE_5___default().prototype), "view", function (original, vnode) {
      var _this = this;

      switch (this.attrs.className) {
        case "DashboardPage-header":
          this.handleClearCache = (flarum_admin_components_StatusWidget__WEBPACK_IMPORTED_MODULE_2___default().prototype.handleClearCache);

          this.controls = function () {
            return m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_18___default()), {
              label: app.translator.trans("core.admin.dashboard.tools_button"),
              icon: "fas fa-cog",
              buttonClassName: "Button",
              menuClassName: "Dropdown-menu--right"
            }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_19___default()), {
              onclick: _this.handleClearCache.bind(_this)
            }, app.translator.trans("core.admin.dashboard.clear_cache_button")));
          };

          break;

        case "ThemeBase-ExtensionsPage-header":
          if (addExtensionsPage && (flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3___default().prototype.controlItems)) {
            this.controls = function () {
              var buttonGroup = flarum_admin_components_ExtensionsWidget__WEBPACK_IMPORTED_MODULE_3___default().prototype.controlItems().toArray()[0].children;
              buttonGroup[0].attrs.menuClassName += " Dropdown-menu--right";
              return buttonGroup;
            };
          }

      }

      return m("div", {
        className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_8___default()(["ThemeBase-AdminHeader", this.attrs.className])
      }, m("div", {
        className: "container ThemeBase-AdminHeader-container"
      }, m("div", {
        className: "ThemeBase-AdminHeader-icon"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()(this.attrs.icon)), m("div", {
        className: "ThemeBase-AdminHeader-info"
      }, m("h2", {
        className: "ThemeBase-AdminHeader-title"
      }, vnode.children), m("div", {
        className: "ThemeBase-AdminHeader-description"
      }, this.attrs.description)), m("div", {
        className: "ThemeBase-AdminHeader-controls"
      }, this.controls && this.controls())));
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), "header", _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_20__["default"].prototype.header);
  }

  if (normalizeExtensionPageStructure) {
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), "view", _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_20__["default"].prototype.view);
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), "content", _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_20__["default"].prototype.content);
  }

  if (normalizeUserTable) {
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7___default().prototype), "columns", function (columns) {
      columns.add("avatar", {
        name: flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()("fas fa-user-circle"),
        content: function content(user) {
          return flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_11___default()(user, {
            className: "UserListPage-grid-avatar"
          });
        }
      }, 95);
      columns.remove("username");
      columns.add("username", {
        name: app.translator.trans("core.admin.users.grid.columns.username.title"),
        content: function content(user) {
          var displayName = flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_12___default()(user);
          var username_ = user.username();
          console.log(displayName, username_);

          if (username_ === displayName.text) {
            return username_;
          }

          return [username_, " (", displayName, ")"];
        }
      }, 90);
      var joinDate = columns.get("joinDate");
      joinDate.name = [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()("fas fa-clock"), " ", joinDate.name];
      var emailAddress = columns.get("emailAddress");
      emailAddress.name = [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()("far fa-envelope"), " ", emailAddress.name];
      columns.add("profileLink", {
        name: "",
        //app.translator.trans('afrux-theme-base.admin.users.grid.columns.profile_link.title'),
        content: function content(user) {
          return m("a", {
            className: "Button Button--icon UserList-profileLinkBtn",
            href: app.forum.attribute("baseUrl") + "/u/" + user.slug()
          }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_9___default()("fas fa-link"));
        }
      });
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7___default().prototype), "onupdate", function (vnode) {
      this.$(".UserList-emailIconBtn").removeClass("Button--text");
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_7___default().prototype), "content", function (vnode) {
      vnode[0] = m("div", {
        className: "UserListPage-stat-container"
      }, m("div", {
        "class": "UserListPage-totalUsers UserListPage-stat"
      }, m("div", {
        className: "UserListPage-stat-value"
      }, this.userCount), m("div", {
        className: "UserListPage-stat-key"
      }, app.translator.trans("core.admin.users.total_users", {
        count: 0
      })[0].replace(": ", ""))));
    });
  }

  if (addExtensionsPage) {
    app.routes["extensions"] = {
      path: "/extensions",
      component: _components_ExtensionsPage__WEBPACK_IMPORTED_MODULE_21__["default"]
    };
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_admin_components_AdminNav__WEBPACK_IMPORTED_MODULE_13___default().prototype), "view", function () {
      var items = this.items();
      items.remove("search");
      items.remove("category-core");
      items.add("extensions", m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_15___default()), {
        href: app.route("extensions"),
        icon: "fas fa-puzzle-piece",
        title: app.translator.trans("afrux-theme-base.admin.extensions.title"),
        active: ["extension", "extensions"].includes(app.current.data.routeName)
      }, m("span", null, app.translator.trans("afrux-theme-base.admin.extensions.title")), app.current.data.extension ? m("span", {
        className: "ThemeBase-extensions-nav-current"
      }, app.current.data.extension) : []));
      return m((flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_14___default()), {
        className: "AdminNav App-titleControl AdminNav-Main",
        buttonClassName: "Button"
      }, items.toArray().concat());
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_DashboardPage__WEBPACK_IMPORTED_MODULE_16___default().prototype), "availableWidgets", function (items) {
      items.remove("extensions");
    });
    (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_common_components_Navigation__WEBPACK_IMPORTED_MODULE_17___default().prototype), "getBackButton", function (button) {
      button.attrs.className = button.attrs.className.replace("Button--icon", "");

      if (app.current.data.routeName === "extension") {
        button.attrs.href = app.route("extensions");
        delete button.attrs.onclick;
        button.children = app.translator.trans("afrux-theme-base.admin.extensions.title");
      } else {
        button.children = app.translator.trans("afrux-theme-base.admin.header.go_back");
      }

      return button;
    });
  }

  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), "oninit", _components_ExtensionPage__WEBPACK_IMPORTED_MODULE_20__["default"].prototype.oninit);
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_4___default().prototype), "items", function (items) {
    items.get("help").attrs.className = "Button Button--link";
  });
}); // Expose compat API



Object.assign(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_24__.compat, _compat__WEBPACK_IMPORTED_MODULE_23__["default"]);

/***/ }),

/***/ "@flarum/core/admin":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core;

/***/ }),

/***/ "flarum/admin/components/AdminHeader":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminHeader']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/AdminHeader'];

/***/ }),

/***/ "flarum/admin/components/AdminNav":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminNav']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/AdminNav'];

/***/ }),

/***/ "flarum/admin/components/AdminPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['admin/components/AdminPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/AdminPage'];

/***/ }),

/***/ "flarum/admin/components/DashboardPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/DashboardPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/DashboardPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionsWidget":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionsWidget']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionsWidget'];

/***/ }),

/***/ "flarum/admin/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/HeaderSecondary']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/admin/components/StatusWidget":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/StatusWidget']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/StatusWidget'];

/***/ }),

/***/ "flarum/admin/components/UserListPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UserListPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UserListPage'];

/***/ }),

/***/ "flarum/admin/utils/getCategorizedExtensions":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/getCategorizedExtensions']" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/getCategorizedExtensions'];

/***/ }),

/***/ "flarum/admin/utils/isExtensionEnabled":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/isExtensionEnabled']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/isExtensionEnabled'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/saveSettings'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Navigation":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/Navigation']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Navigation'];

/***/ }),

/***/ "flarum/common/components/SelectDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/SelectDropdown']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SelectDropdown'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map