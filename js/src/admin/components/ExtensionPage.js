import FlarumExtensionPage from "flarum/admin/components/ExtensionPage";
import listItems from 'flarum/common/helpers/listItems';
import Switch from 'flarum/common/components/Switch';
import icon from 'flarum/common/helpers/icon';
import Button from "flarum/common/components/Button";

export default class ExtensionPage extends FlarumExtensionPage {
  oninit() {
    app.current.data.extension = this.extension.extra['flarum-extension'].title;
  }

  header() {
    const topItems = this.topItems();

    topItems.get('version').attrs.className += " UiKit-Label";

    return (
      <div className="ExtensionPage-header ThemeBase-AdminHeader">
        <div className="ThemeBase-AdminHeader-container">
          <span className="ThemeBase-AdminHeader-icon" style={this.extension.icon}>
            {this.extension.icon ? icon(this.extension.icon.name) : ''}
          </span>
          <div className="ThemeBase-AdminHeader-info">
            <h2 className="ThemeBase-AdminHeader-title">{this.extension.extra['flarum-extension'].title}</h2>
            <div className="ThemeBase-AdminHeader-description helpText">{this.extension.description}</div>
          </div>
          <div className="ExtensionPage-headerTopItems">
            <ul>{listItems(topItems.toArray())}</ul>
          </div>
        </div>
      </div>
    );
  }

  view() {
    if (!this.extension) return null;

    const sections = this.sections();
    const infoItems = this.infoItems();
    this.activeSection = this.activeSection || 'content';

    if (sections.items['permissions']) {
      sections.items['permissions'].content[0] = sections.items['permissions'].content[0].children[1].children;
    }

    return (
      <div className={'ExtensionPage ThemeBase-ExtensionPage ' + this.className()}>
        {this.header()}
        <div className="ExtensionPage-body ThemeBase-ExtensionPage-body">
          <div className="container">
            <div className="ExtensionPage-headerItems ThemeBase-ExtensionPage-headerItems">
              <Switch state={this.isEnabled()} onchange={this.toggle.bind(this, this.extension.id)}>
                {this.isEnabled(this.extension.id)
                  ? app.translator.trans('core.admin.extension.enabled')
                  : app.translator.trans('core.admin.extension.disabled')}
              </Switch>
              <aside className="ThemeBase-ExtensionPage-ExtensionInfo">
                <ul>{listItems(infoItems.toArray())}</ul>
              </aside>
            </div>
            <div className="ExtensionPage-sections-nav ThemeBase-ExtensionPage-sections-nav">
              {Object.keys(sections.items).map(section => {
                const sectionNameKey = `afrux-theme-base.admin.extension.sections.${section}`;

                return (
                  <Button
                    className="Button ExtensionPage-sections-nav-item ThemeBase-ExtensionPage-sections-nav-item"
                    onclick={() => this.activeSection = section}>
                    {app.translator.trans(sectionNameKey) === sectionNameKey ? section : app.translator.trans(sectionNameKey)}
                  </Button>
                );
              })}
            </div>
            <div className="ExtensionPage-sections ThemeBase-ExtensionPage-sections">
              {Object.keys(sections.items).map(sectionKey => {
                const content = sections.items[sectionKey].content;

                if (content.attrs && content.attrs.className) {
                  content.attrs.className = content.attrs.className.replace('ExtensionPage', 'ThemeBase-ExtensionPage');
                }

                return (
                  <div className={["ExtensionPage-section ThemeBase-ExtensionPage-section", this.activeSection === sectionKey ? 'ExtensionPage-section--active ThemeBase-ExtensionPage-section--active' : ''].join(' ')}>
                    {sections.items[sectionKey].content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  content(original) {
    if (!this.isEnabled()) {
      return (
        <div className="ThemeBase-infobox">
          {app.translator.trans('core.admin.extension.enable_to_see')}
        </div>
      )
    }

    return original();
  }
}
