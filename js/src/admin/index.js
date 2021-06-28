import { extend, override } from 'flarum/extend';
import EditFooterLinksModal from './components/EditFooterLinksModal';
import StatusWidget from 'flarum/admin/components/StatusWidget';
import ExtensionsWidget from 'flarum/admin/components/ExtensionsWidget';
import HeaderSecondary from 'flarum/admin/components/HeaderSecondary';
import AdminHeader from 'flarum/admin/components/AdminHeader';
import FlarumExtensionPage from 'flarum/admin/components/ExtensionPage';
import UserListPage from 'flarum/admin/components/UserListPage';
import classList from 'flarum/common/utils/classList';
import icon from 'flarum/common/helpers/icon';
import listItems from 'flarum/common/helpers/listItems';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import AdminNav from 'flarum/admin/components/AdminNav';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import LinkButton from 'flarum/common/components/LinkButton';
import DashboardPage from 'flarum/admin/components/DashboardPage';
import Navigation from 'flarum/common/components/Navigation';
import Dropdown from 'flarum/common/components/Dropdown';
import Button from 'flarum/common/components/Button';

import ExtensionPage from './components/ExtensionPage';
import ExtensionsPage from './components/ExtensionsPage';
import UploadImageButton from './components/UploadImageButton';

app.initializers.add('afrux-theme-base', () => {
  const footerHooked = app.data.resources[0].attributes['afrux-theme-base.footerHooked'];
  const bannerHooked = app.data.resources[0].attributes['afrux-theme-base.bannerHooked'];
  const currentThemeId = app.data.resources[0].attributes['currentThemeId'];
  const normalizeStatusWidgetStructure = app.data.resources[0].attributes['afrux-theme-base.normalizeStatusWidgetStructure'];
  const normalizeAdminHeaderStructure = app.data.resources[0].attributes['afrux-theme-base.normalizeAdminHeaderStructure'];
  const normalizeExtensionPageStructure = app.data.resources[0].attributes['afrux-theme-base.normalizeExtensionPageStructure'];
  const normalizeUserTable = app.data.resources[0].attributes['afrux-theme-base.normalizeUserTable'];
  const addExtensionsPage = app.data.resources[0].attributes['afrux-theme-base.addExtensionsPage'];

  if (bannerHooked) {
    app.extensionData
      .for(currentThemeId)
      .registerSetting(() => {
        return (
          <div className="Form-group HeroImageForm">
            <label for="afrux-theme-base.hero_banner">{app.translator.trans('afrux-theme-base.admin.settings.hero_banner')}</label>
            <UploadImageButton setting="afrux-theme-base.hero_banner" serializedName="afruxHeroBanner" routeName="afrux_banner" name="afrux_banner" />
          </div>
        );
      })
      .registerSetting({
        setting: 'afrux-theme-base.hero_banner_position',
        type: 'text',
        label: app.translator.trans('afrux-theme-base.admin.settings.hero_banner_position'),
      });
  }

  if (footerHooked) {
    app.extensionData
      .for(currentThemeId)
      .registerSetting(function () {
        return (
          <div className="Form-group">
            <label>{app.translator.trans('afrux-theme-base.admin.settings.footer_description')}</label>
            <textarea className="FormControl" bidi={this.setting('afrux-theme-base.footer_description')}>
              {this.setting('afrux-theme-base.footer_description')()}
            </textarea>
          </div>
        );
      })
      .registerSetting(() => (
        <div className="Form-group">
          <label>{app.translator.trans('afrux-theme-base.admin.settings.edit_footer_links')}</label>
          <Button className="Button" onclick={() => app.modal.show(EditFooterLinksModal)}>
            {app.translator.trans('afrux-theme-base.admin.settings.edit_footer_links')}
          </Button>
        </div>
      ))
      .registerSetting({
        setting: 'afrux-theme-base.footer_bottom_line',
        type: 'text',
        label: app.translator.trans('afrux-theme-base.admin.settings.footer_bottom_line'),
      });
  }

  if (normalizeStatusWidgetStructure) {
    override(StatusWidget.prototype, 'className', (original) => `${original()} ThemeBase-StatusWidget`);
    override(StatusWidget.prototype, 'content', function (original) {
      const items = this.items();

      items.remove('tools');

      const icons = {
        'version-flarum': 'fas fa-comment',
        'version-php': 'fab fa-php',
        'version-mysql': 'fas fa-database',
      };

      if (app.data.illuminateVersion) {
        icons['version-laravel'] = 'fab fa-laravel';
        items.add('version-laravel', [<strong>Laravel</strong>, <br />, app.data.illuminateVersion.replace('v', '')]);
      }

      Object.keys(items.items).map((key) => {
        const item = items.get(key);

        item[0].tag = 'div';
        item[0].attrs.className = 'ThemeBase-StatusWidget-key';
        item[2] = <div className="ThemeBase-StatusWidget-value">{item[2]}</div>;

        item[1] = <div className="ThemeBase-StatusWidget-content">{[item[0], item[2]]}</div>;
        item[0] = <div className="ThemeBase-StatusWidget-icon">{icon(icons[key])}</div>;

        delete item[2];
      });

      return [<ul>{listItems(items.toArray())}</ul>];
    });
  }

  if (normalizeAdminHeaderStructure) {
    override(AdminHeader.prototype, 'view', function (original, vnode) {
      switch (this.attrs.className) {
        case 'DashboardPage-header':
          this.handleClearCache = StatusWidget.prototype.handleClearCache;

          this.controls = () => (
            <Dropdown
              label={app.translator.trans('core.admin.dashboard.tools_button')}
              icon="fas fa-cog"
              buttonClassName="Button"
              menuClassName="Dropdown-menu--right"
            >
              <Button onclick={this.handleClearCache.bind(this)}>{app.translator.trans('core.admin.dashboard.clear_cache_button')}</Button>
            </Dropdown>
          );
          break;

        case 'ThemeBase-ExtensionsPage-header':
          if (addExtensionsPage && ExtensionsWidget.prototype.controlItems) {
            this.controls = () => {
              const buttonGroup = ExtensionsWidget.prototype.controlItems().toArray()[0].children;

              buttonGroup[0].attrs.menuClassName += ' Dropdown-menu--right';

              return buttonGroup;
            };
          }
      }

      return (
        <div className={classList(['ThemeBase-AdminHeader', this.attrs.className])}>
          <div className="container ThemeBase-AdminHeader-container">
            <div className="ThemeBase-AdminHeader-icon">{icon(this.attrs.icon)}</div>
            <div className="ThemeBase-AdminHeader-info">
              <h2 className="ThemeBase-AdminHeader-title">{vnode.children}</h2>
              <div className="ThemeBase-AdminHeader-description">{this.attrs.description}</div>
            </div>
            <div className="ThemeBase-AdminHeader-controls">{this.controls && this.controls()}</div>
          </div>
        </div>
      );
    });
    override(FlarumExtensionPage.prototype, 'header', ExtensionPage.prototype.header);
  }

  if (normalizeExtensionPageStructure) {
    override(FlarumExtensionPage.prototype, 'view', ExtensionPage.prototype.view);
    override(FlarumExtensionPage.prototype, 'content', ExtensionPage.prototype.content);
  }

  if (normalizeUserTable) {
    extend(UserListPage.prototype, 'columns', (columns) => {
      columns.add(
        'avatar',
        {
          name: icon('fas fa-user-circle'),
          content: (user) => avatar(user, { className: 'UserListPage-grid-avatar' }),
        },
        95
      );

      columns.remove('username');
      columns.add(
        'username',
        {
          name: app.translator.trans('core.admin.users.grid.columns.username.title'),
          content: (user) => {
            const displayName = username(user);
            const username_ = user.username();

            console.log(displayName, username_);

            if (username_ === displayName.text) {
              return username_;
            }

            return [username_, ' (', displayName, ')'];
          },
        },
        90
      );

      const joinDate = columns.get('joinDate');
      joinDate.name = [icon('fas fa-clock'), ' ', joinDate.name];

      const emailAddress = columns.get('emailAddress');
      emailAddress.name = [icon('far fa-envelope'), ' ', emailAddress.name];

      columns.add('profileLink', {
        name: '', //app.translator.trans('afrux-theme-base.admin.users.grid.columns.profile_link.title'),
        content: (user) => (
          <a className="Button Button--icon UserList-profileLinkBtn" href={`${app.forum.attribute('baseUrl')}/u/${user.slug()}`}>
            {icon('fas fa-link')}
          </a>
        ),
      });
    });

    extend(UserListPage.prototype, 'onupdate', function (vnode) {
      this.$('.UserList-emailIconBtn').removeClass('Button--text');
    });

    extend(UserListPage.prototype, 'content', function (vnode) {
      vnode[0] = (
        <div className="UserListPage-stat-container">
          <div class="UserListPage-totalUsers UserListPage-stat">
            <div className="UserListPage-stat-value">{this.userCount}</div>
            <div className="UserListPage-stat-key">{app.translator.trans('core.admin.users.total_users', { count: 0 })[0].replace(': ', '')}</div>
          </div>
        </div>
      );
    });
  }

  if (addExtensionsPage) {
    app.routes['extensions'] = { path: '/extensions', component: ExtensionsPage };

    override(AdminNav.prototype, 'view', function () {
      const items = this.items();

      items.remove('search');
      items.remove('category-core');

      items.add(
        'extensions',
        <LinkButton
          href={app.route('extensions')}
          icon="fas fa-puzzle-piece"
          title={app.translator.trans('afrux-theme-base.admin.extensions')}
          active={['extension', 'extensions'].includes(app.current.data.routeName)}
        >
          <span>{app.translator.trans('afrux-theme-base.admin.extensions')}</span>
          {app.current.data.extension ? <span className="ThemeBase-extensions-nav-current">{app.current.data.extension}</span> : []}
        </LinkButton>
      );

      return (
        <SelectDropdown className="AdminNav App-titleControl AdminNav-Main" buttonClassName="Button">
          {items.toArray().concat()}
        </SelectDropdown>
      );
    });

    extend(DashboardPage.prototype, 'availableWidgets', (items) => {
      items.remove('extensions');
    });

    extend(Navigation.prototype, 'getBackButton', function (button) {
      button.attrs.className = button.attrs.className.replace('Button--icon', '');

      if (app.current.data.routeName === 'extension') {
        button.attrs.href = app.route('extensions');
        delete button.attrs.onclick;
        button.children = app.translator.trans('afrux-theme-base.admin.extensions');
      } else {
        button.children = app.translator.trans('afrux-theme-base.admin.header.go_back');
      }

      return button;
    });
  }

  extend(FlarumExtensionPage.prototype, 'oninit', ExtensionPage.prototype.oninit);

  extend(HeaderSecondary.prototype, 'items', (items) => {
    items.get('help').attrs.className = 'Button Button--link';
  });
});
