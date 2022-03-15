import AdminPage from "flarum/admin/components/AdminPage";
import getCategorizedExtensions from "flarum/admin/utils/getCategorizedExtensions";
import ExtensionsWidget from "flarum/admin/components/ExtensionsWidget";
import icon from "flarum/common/helpers/icon";
import isExtensionEnabled from "flarum/admin/utils/isExtensionEnabled";
import Link from "flarum/common/components/Link";

export default class ExtensionsPage extends AdminPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.extensions = app.categorizedExtensions || getCategorizedExtensions();
  }

  headerInfo() {
    return {
      className: "ThemeBase-ExtensionsPage",
      icon: "fas fa-puzzle-piece",
      title: app.translator.trans("afrux-theme-base.admin.extensions.title"),
      description: app.translator.trans(
        "afrux-theme-base.admin.extensions.description"
      ),
    };
  }

  content() {
    return (
      <div className="ThemeBase-ExtensionCategories">
        <div className="ThemeBase-ExtensionCategories-container">
          {Object.keys(this.extensions).map((category) => (
            <div className="ThemeBase-ExtensionCategory">
              <h3 className="ThemeBase-ExtensionCategory-title">
                {(app.categoryLabels && app.categoryLabels[category]) ||
                  app.translator.trans(`core.admin.nav.categories.${category}`)}
              </h3>
              <div className="ThemeBase-ExtensionCategory-container">
                {this.extensions[category].map((extension) => (
                  <Link
                    href={app.route("extension", { id: extension.id })}
                    className="ThemeBase-Extension"
                  >
                    <div className="ThemeBase-Extension-icon">
                      <span
                        className="ExtensionListItem-icon ExtensionIcon"
                        style={extension.icon}
                      >
                        {extension.icon ? icon(extension.icon.name) : ""}
                      </span>
                    </div>
                    <div className="ThemeBase-Extension-content">
                      <div className="ThemeBase-Extension-title">
                        <div
                          className={[
                            "ExtensionListItem-Dot",
                            "ThemeBase-Extension-state",
                            isExtensionEnabled(extension.id)
                              ? "enabled"
                              : "disabled",
                          ].join(" ")}
                        ></div>
                        <div className="ThemeBase-Extension-title-value">
                          {extension.extra["flarum-extension"].title}
                        </div>
                      </div>
                      <div className="ThemeBase-Extension-details">
                        <div className="ThemeBase-Extension-package">
                          {extension.name}
                        </div>
                        <div className="ThemeBase-Extension-version">
                          {extension.version}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
