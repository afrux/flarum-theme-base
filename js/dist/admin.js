module.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=34)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["common/components/Button"]},function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}a.d(t,"a",(function(){return s}))},function(e,t){e.exports=flarum.core.compat["common/helpers/icon"]},function(e,t){e.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(e,t){e.exports=flarum.core.compat["common/components/Link"]},function(e,t){e.exports=flarum.core.compat["common/helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["admin/components/StatusWidget"]},function(e,t){e.exports=flarum.core.compat["admin/components/UserListPage"]},function(e,t){e.exports=flarum.core.compat["admin/components/ExtensionsWidget"]},,,,,,function(e,t){e.exports=flarum.core.compat["common/components/Modal"]},function(e,t){e.exports=flarum.core.compat["common/utils/Stream"]},function(e,t){e.exports=flarum.core.compat["common/utils/extractText"]},function(e,t){e.exports=flarum.core.compat["admin/utils/saveSettings"]},function(e,t){e.exports=flarum.core.compat["admin/components/HeaderSecondary"]},function(e,t){e.exports=flarum.core.compat["admin/components/AdminHeader"]},function(e,t){e.exports=flarum.core.compat["common/utils/classList"]},function(e,t){e.exports=flarum.core.compat["common/helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["common/helpers/username"]},function(e,t){e.exports=flarum.core.compat["admin/components/AdminNav"]},function(e,t){e.exports=flarum.core.compat["common/components/SelectDropdown"]},function(e,t){e.exports=flarum.core.compat["common/components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["admin/components/DashboardPage"]},function(e,t){e.exports=flarum.core.compat["common/components/Navigation"]},function(e,t){e.exports=flarum.core.compat["common/components/Dropdown"]},function(e,t){e.exports=flarum.core.compat["common/components/Switch"]},function(e,t){e.exports=flarum.core.compat["admin/components/AdminPage"]},function(e,t){e.exports=flarum.core.compat["admin/utils/getCategorizedExtensions"]},function(e,t){e.exports=flarum.core.compat["admin/utils/isExtensionEnabled"]},function(e,t,a){"use strict";a.r(t);var n=a(0);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=a(2),r=a(15),i=a.n(r),c=a(1),l=a.n(c),u=a(16),p=a.n(u),d=a(17),f=a.n(d),h=a(18),x=a.n(h),v=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.oninit=function(t){e.prototype.oninit.call(this,t),this.links=p()(app.data.settings["afrux-theme-base.footer_links"]&&JSON.parse(app.data.settings["afrux-theme-base.footer_links"])||[])},a.title=function(){return app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links")},a.className=function(){return"EditFooterLinksModal Modal--medium"},a.content=function(){var e=this;return m("div",{className:"EditFooterLinksModal-groups Modal-body"},this.links().map((function(t,a){return m("div",{className:"EditFooterLinksModal-groups-item"},m("div",{className:"EditFooterLinksModal-groups-item-title"},m("div",{className:"EditFooterLinksModal-groups-item-title-text",contenteditable:"true",oninput:function(n){e.saveGroup(s({},t,{title:n.target.value}),a)}},m.trust(t.title)),m("div",{className:"EditFooterLinksModal-groups-item-title-controls"},m(l.a,{className:"Button Button--icon",icon:"fas fa-times",onclick:function(){e.saveGroup(t,a,!0)}}))),m("div",{className:"EditFooterLinksModal-links"},t.links.map((function(t,n){return e.link(t,n,a)})),m(l.a,{className:"Button",icon:"fas fa-plus",onclick:function(){e.saveLink({url:"",label:""},a)}},app.translator.trans("afrux-theme-base.admin.settings.links_modal.add_link"))))})),m("div",null,m(l.a,{className:"Button Button--primary",onclick:function(){x()({"afrux-theme-base.footerLinks":JSON.stringify(e.links())})}},app.translator.trans("core.lib.edit_user.submit_button")),m(l.a,{className:"Button Button--primary",icon:"fas fa-plus-circle",onclick:function(){e.saveGroup({title:f()(app.translator.trans("afrux-theme-base.admin.settings.links_modal.group_name",{number:e.links().length+1})),links:[]})}},app.translator.trans("afrux-theme-base.admin.settings.links_modal.add_group"))))},a.link=function(e,t,a){var n=this,s=e.url,o=e.label;[].concat(this.links());return m("div",{className:"EditFooterLinksModal-links-item"},m("input",{oninput:function(e){n.saveLink({url:s,label:e.target.value},a,t)},value:o,className:"FormControl EditFooterLinksModal-links-item-label",placeholder:app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_label"),"aria-labeledby":app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_label")}),m("input",{oninput:function(e){n.saveLink({label:o,url:e.target.value},a,t)},value:s,className:"FormControl EditFooterLinksModal-links-item-url",placeholder:app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_url"),"aria-labeledby":app.translator.trans("afrux-theme-base.admin.settings.links_modal.link_url")}),m(l.a,{className:"Button Button--icon",icon:"fas fa-times",onclick:function(){n.saveLink({},a,t,!0)}}))},a.saveLink=function(e,t,a,n){void 0===a&&(a=null),void 0===n&&(n=!1);var s=[].concat(this.links());n?delete s[t].links[a]:null!==a?s[t].links[a]=e:s[t].links.push(e),this.links(s)},a.saveGroup=function(e,t,a){void 0===t&&(t=null),void 0===a&&(a=!1);var n=[].concat(this.links());a?delete n[t]:null!==t?n[t]=e:n.push(e),this.links(n)},t}(i.a),b=a(7),g=a.n(b),N=a(9),y=a.n(N),k=a(19),B=a.n(k),E=a(20),_=a.n(E),T=a(4),P=a.n(T),L=a(8),O=a.n(L),j=a(21),S=a.n(j),A=a(3),w=a.n(A),C=a(6),H=a.n(C),U=a(22),F=a.n(U),I=a(23),M=a.n(I),z=a(24),D=a.n(z),W=a(25),G=a.n(W),q=a(26),J=a.n(q),V=a(27),K=a.n(V),Q=a(28),R=a.n(Q),X=a(29),Y=a.n(X),Z=a(30),ee=a.n(Z),te=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.oninit=function(){app.current.data.extension=this.extension.extra["flarum-extension"].title},a.header=function(){var e=this.topItems();return e.get("version").attrs.className+=" UiKit-Label",m("div",{className:"ExtensionPage-header ThemeBase-AdminHeader"},m("div",{className:"ThemeBase-AdminHeader-container"},m("span",{className:"ThemeBase-AdminHeader-icon",style:this.extension.icon},this.extension.icon?w()(this.extension.icon.name):""),m("div",{className:"ThemeBase-AdminHeader-info"},m("h2",{className:"ThemeBase-AdminHeader-title"},this.extension.extra["flarum-extension"].title),m("div",{className:"ThemeBase-AdminHeader-description helpText"},this.extension.description)),m("div",{className:"ExtensionPage-headerTopItems"},m("ul",null,H()(e.toArray())))))},a.view=function(){var e=this;if(!this.extension)return null;var t=this.sections(),a=this.infoItems();return this.activeSection=this.activeSection||"content",t.items.permissions&&(t.items.permissions.content[0]=t.items.permissions.content[0].children[1].children),m("div",{className:"ExtensionPage ThemeBase-ExtensionPage "+this.className()},this.header(),m("div",{className:"ExtensionPage-body ThemeBase-ExtensionPage-body"},m("div",{className:"container"},m("div",{className:"ExtensionPage-headerItems ThemeBase-ExtensionPage-headerItems"},m(ee.a,{state:this.isEnabled(),onchange:this.toggle.bind(this,this.extension.id)},this.isEnabled(this.extension.id)?app.translator.trans("core.admin.extension.enabled"):app.translator.trans("core.admin.extension.disabled")),m("aside",{className:"ThemeBase-ExtensionPage-ExtensionInfo"},m("ul",null,H()(a.toArray())))),m("div",{className:"ExtensionPage-sections-nav ThemeBase-ExtensionPage-sections-nav"},Object.keys(t.items).map((function(t){var a="afrux-theme-base.admin.extension.sections."+t;return m(l.a,{className:["Button ExtensionPage-sections-nav-item ThemeBase-ExtensionPage-sections-nav-item",e.activeSection===t?"Button--active":""],onclick:function(){return e.activeSection=t}},app.translator.trans(a)===a?t:app.translator.trans(a))}))),m("div",{className:"ExtensionPage-sections ThemeBase-ExtensionPage-sections"},Object.keys(t.items).map((function(a){var n=t.items[a].content;return n.attrs&&n.attrs.className&&(n.attrs.className=n.attrs.className.replace("ExtensionPage","ThemeBase-ExtensionPage")),m("div",{className:["ExtensionPage-section ThemeBase-ExtensionPage-section",e.activeSection===a?"ExtensionPage-section--active ThemeBase-ExtensionPage-section--active":""].join(" ")},t.items[a].content)}))))))},a.content=function(e){return this.isEnabled()?e():m("div",{className:"ThemeBase-infobox"},app.translator.trans("core.admin.extension.enable_to_see"))},t}(P.a),ae=a(31),ne=a.n(ae),se=a(32),oe=a.n(se),re=a(33),ie=a.n(re),me=a(5),ce=a.n(me),le=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.oninit=function(t){e.prototype.oninit.call(this,t),this.extensions=app.categorizedExtensions||oe()()},a.headerInfo=function(){return{className:"ThemeBase-ExtensionsPage",icon:"fas fa-puzzle-piece",title:app.translator.trans("afrux-theme-base.admin.extensions"),description:"List of all installed extensions."}},a.content=function(){var e=this;return m("div",{className:"ThemeBase-ExtensionCategories"},m("div",{className:"ThemeBase-ExtensionCategories-container"},Object.keys(this.extensions).map((function(t){return m("div",{className:"ThemeBase-ExtensionCategory"},m("h3",{className:"ThemeBase-ExtensionCategory-title"},app.categoryLabels&&app.categoryLabels[t]||app.translator.trans("core.admin.nav.categories."+t)),m("div",{className:"ThemeBase-ExtensionCategory-container"},e.extensions[t].map((function(e){return m(ce.a,{href:app.route("extension",{id:e.id}),className:"ThemeBase-Extension"},m("div",{className:"ThemeBase-Extension-icon"},m("span",{className:"ExtensionListItem-icon ExtensionIcon",style:e.icon},e.icon?w()(e.icon.name):"")),m("div",{className:"ThemeBase-Extension-content"},m("div",{className:"ThemeBase-Extension-title"},m("div",{className:["ExtensionListItem-Dot","ThemeBase-Extension-state",ie()(e.id)?"enabled":"disabled"].join(" ")}),m("div",{className:"ThemeBase-Extension-title-value"},e.extra["flarum-extension"].title)),m("div",{className:"ThemeBase-Extension-details"},m("div",{className:"ThemeBase-Extension-package"},e.name),m("div",{className:"ThemeBase-Extension-version"},e.version))))}))))}))))},t}(ne.a),ue=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).loading=!1,t}Object(o.a)(t,e);var a=t.prototype;return a.view=function(t){return this.attrs.loading=this.loading,this.attrs.className=(this.attrs.className||"")+" Button",app.data.settings[this.attrs.setting]?(this.attrs.onclick=this.remove.bind(this),m("div",{className:"UploadImageButton-container"},m("div",{className:"UploadImageButton-image-container"},m("img",{className:"UploadImageButton-image",src:app.forum.attribute(this.attrs.serializedName),alt:""})),e.prototype.view.call(this,s({},t,{children:app.translator.trans("core.admin.upload_image.remove_button")})))):(this.attrs.onclick=this.upload.bind(this),e.prototype.view.call(this,s({},t,{children:app.translator.trans("core.admin.upload_image.upload_button")})))},a.upload=function(){var e=this;this.loading||$('<input type="file">').appendTo("body").hide().click().on("change",(function(t){var a=new FormData;a.append(e.attrs.name,$(t.target)[0].files[0]),e.loading=!0,m.redraw(),app.request({method:"POST",url:e.resourceUrl(),serialize:function(e){return e},body:a}).then(e.success.bind(e),e.failure.bind(e))}))},a.remove=function(){this.loading=!0,m.redraw(),app.request({method:"DELETE",url:this.resourceUrl()}).then(this.success.bind(this),this.failure.bind(this))},a.resourceUrl=function(){return app.forum.attribute("apiUrl")+"/"+this.attrs.routeName},a.success=function(e){window.location.reload()},a.failure=function(e){this.loading=!1,m.redraw()},t}(l.a);app.initializers.add("afrux-theme-base",(function(){var e=app.data.resources[0].attributes["afrux-theme-base.footerHooked"],t=app.data.resources[0].attributes["afrux-theme-base.bannerHooked"],a=app.data.resources[0].attributes.currentThemeId,s=app.data.resources[0].attributes["afrux-theme-base.normalizeStatusWidgetStructure"],o=app.data.resources[0].attributes["afrux-theme-base.normalizeAdminHeaderStructure"],r=app.data.resources[0].attributes["afrux-theme-base.normalizeExtensionPageStructure"],i=app.data.resources[0].attributes["afrux-theme-base.normalizeUserTable"],c=app.data.resources[0].attributes["afrux-theme-base.addExtensionsPage"];t&&app.extensionData.for(a).registerSetting((function(){return m("div",{className:"Form-group HeroImageForm"},m("label",{for:"afrux-theme-base.hero_banner"},app.translator.trans("afrux-theme-base.admin.settings.hero_banner")),m(ue,{setting:"afrux-theme-base.hero_banner",serializedName:"afruxHeroBanner",routeName:"afrux_banner",name:"afrux_banner"}))})).registerSetting({setting:"afrux-theme-base.hero_banner_position",type:"text",label:app.translator.trans("afrux-theme-base.admin.settings.hero_banner_position")}),e&&app.extensionData.for(a).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("afrux-theme-base.admin.settings.footer_description")),m("textarea",{className:"FormControl",bidi:this.setting("afrux-theme-base.footer_description")},this.setting("afrux-theme-base.footer_description")()))})).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links")),m(l.a,{className:"Button",onclick:function(){return app.modal.show(v)}},app.translator.trans("afrux-theme-base.admin.settings.edit_footer_links")))})).registerSetting({setting:"afrux-theme-base.footer_bottom_line",type:"text",label:app.translator.trans("afrux-theme-base.admin.settings.footer_bottom_line")}),s&&(Object(n.override)(g.a.prototype,"className",(function(e){return e()+" ThemeBase-StatusWidget"})),Object(n.override)(g.a.prototype,"content",(function(e){var t=this.items();t.remove("tools");var a={"version-flarum":"fas fa-comment","version-php":"fab fa-php","version-mysql":"fas fa-database"};return app.data.illuminateVersion&&(a["version-laravel"]="fab fa-laravel",t.add("version-laravel",[m("strong",null,"Laravel"),m("br",null),app.data.illuminateVersion.replace("v","")])),Object.keys(t.items).map((function(e){var n=t.get(e);n[0].tag="div",n[0].attrs.className="ThemeBase-StatusWidget-key",n[2]=m("div",{className:"ThemeBase-StatusWidget-value"},n[2]),n[1]=m("div",{className:"ThemeBase-StatusWidget-content"},[n[0],n[2]]),n[0]=m("div",{className:"ThemeBase-StatusWidget-icon"},w()(a[e])),delete n[2]})),[m("ul",null,H()(t.toArray()))]}))),o&&(Object(n.override)(_.a.prototype,"view",(function(e,t){var a=this;switch(this.attrs.className){case"DashboardPage-header":this.handleClearCache=g.a.prototype.handleClearCache,this.controls=function(){return m(Y.a,{label:app.translator.trans("core.admin.dashboard.tools_button"),icon:"fas fa-cog",buttonClassName:"Button",menuClassName:"Dropdown-menu--right"},m(l.a,{onclick:a.handleClearCache.bind(a)},app.translator.trans("core.admin.dashboard.clear_cache_button")))};break;case"ThemeBase-ExtensionsPage-header":this.controls=function(){var e=y.a.prototype.controlItems().toArray()[0].children;return e[0].attrs.menuClassName+=" Dropdown-menu--right",e}}return m("div",{className:S()(["ThemeBase-AdminHeader",this.attrs.className])},m("div",{className:"container ThemeBase-AdminHeader-container"},m("div",{className:"ThemeBase-AdminHeader-icon"},w()(this.attrs.icon)),m("div",{className:"ThemeBase-AdminHeader-info"},m("h2",{className:"ThemeBase-AdminHeader-title"},t.children),m("div",{className:"ThemeBase-AdminHeader-description"},this.attrs.description)),m("div",{className:"ThemeBase-AdminHeader-controls"},this.controls&&this.controls())))})),Object(n.override)(P.a.prototype,"header",te.prototype.header)),r&&(Object(n.override)(P.a.prototype,"view",te.prototype.view),Object(n.override)(P.a.prototype,"content",te.prototype.content)),i&&(Object(n.extend)(O.a.prototype,"columns",(function(e){e.add("avatar",{name:w()("fas fa-user-circle"),content:function(e){return F()(e,{className:"UserListPage-grid-avatar"})}},95),e.remove("username"),e.add("username",{name:app.translator.trans("core.admin.users.grid.columns.username.title"),content:function(e){var t=M()(e),a=e.username();return console.log(t,a),a===t.text?a:[a," (",t,")"]}},90);var t=e.get("joinDate");t.name=[w()("fas fa-clock")," ",t.name];var a=e.get("emailAddress");a.name=[w()("far fa-envelope")," ",a.name],e.add("profileLink",{name:"",content:function(e){return m("a",{className:"Button Button--icon UserList-profileLinkBtn",href:app.forum.attribute("baseUrl")+"/u/"+e.slug()},w()("fas fa-link"))}})})),Object(n.extend)(O.a.prototype,"onupdate",(function(e){this.$(".UserList-emailIconBtn").removeClass("Button--text")})),Object(n.extend)(O.a.prototype,"content",(function(e){e[0]=m("div",{className:"UserListPage-stat-container"},m("div",{class:"UserListPage-totalUsers UserListPage-stat"},m("div",{className:"UserListPage-stat-value"},this.userCount),m("div",{className:"UserListPage-stat-key"},app.translator.trans("core.admin.users.total_users",{count:0})[0].replace(": ",""))))}))),c&&(app.routes.extensions={path:"/extensions",component:le},Object(n.override)(D.a.prototype,"view",(function(){var e=this.items();return e.remove("search"),e.remove("category-core"),e.add("extensions",m(J.a,{href:app.route("extensions"),icon:"fas fa-puzzle-piece",title:app.translator.trans("afrux-theme-base.admin.extensions"),active:["extension","extensions"].includes(app.current.data.routeName)},m("span",null,app.translator.trans("afrux-theme-base.admin.extensions")),app.current.data.extension?m("span",{className:"ThemeBase-extensions-nav-current"},app.current.data.extension):[])),m(G.a,{className:"AdminNav App-titleControl AdminNav-Main",buttonClassName:"Button"},e.toArray().concat())})),Object(n.extend)(K.a.prototype,"availableWidgets",(function(e){e.remove("extensions")})),Object(n.extend)(R.a.prototype,"getBackButton",(function(e){return e.attrs.className=e.attrs.className.replace("Button--icon",""),"extension"===app.current.data.routeName?(e.attrs.href=app.route("extensions"),delete e.attrs.onclick,e.children=app.translator.trans("afrux-theme-base.admin.extensions")):e.children=app.translator.trans("afrux-theme-base.admin.header.go_back"),e}))),Object(n.extend)(P.a.prototype,"oninit",te.prototype.oninit),Object(n.extend)(B.a.prototype,"items",(function(e){e.get("help").attrs.className="Button Button--link"}))}))}]);
//# sourceMappingURL=admin.js.map