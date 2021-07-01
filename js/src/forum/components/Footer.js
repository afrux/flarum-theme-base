import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class Footer extends Component {
  view() {
    if (!this.hasLinks() && !this.hasDescription() && !this.hasBottomLine()) {
      return '';
    }

    return (
      <div className="ThemeBaseFooter">
        {this.separator()}
        <div className="ThemeBaseFooter-container container">
          {this.upper()}
          {(app.forum.attribute('afrux-theme-base.footerBottomLine') && this.lower()) || ''}
        </div>
      </div>
    );
  }

  separator() {
    // ...
  }

  upper() {
    return (
      <div className="ThemeBaseFooter-upper">
        <div className={['ThemeBaseFooter-about', this.hasLinks() ? '' : 'ThemeBaseFooter-about--large'].join(' ')}>
          <div className={['ThemeBaseFooter-logo', this.hasDescription() ? '' : 'ThemeBaseFooter-logo--large'].join(' ')}>
            {app.forum.attribute('logoUrl') ? (
              <img src={app.forum.attribute('logoUrl')} alt="logo" />
            ) : (
              <h1 className="ThemeBaseFooter-title">{app.forum.attribute('title')}</h1>
            )}
          </div>
          {this.hasDescription() ? (
            <p className="ThemeBaseFooter-logo-description">{app.forum.attribute('afrux-theme-base.footerDescription')}</p>
          ) : (
            ''
          )}
        </div>
        {this.hasLinks() ? (
          <div className="ThemeBaseFooter-links">
            {app.forum.attribute('afrux-theme-base.footerLinks').map((group) => (
              <div className="ThemeBaseFooter-linkGroup">
                <h6 className="ThemeBaseFooter-linkGroup-title">{group.title}</h6>
                <ul>
                  {group.links.map((link) => (
                    <li className="ThemeBaseFooter-links-item">
                      <a href={link.url} rel="noopener">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }

  lower() {
    return (
      <div className="ThemeBaseFooter-lower">
        <p className="ThemeBaseFooter-bottomLine">{app.forum.attribute('afrux-theme-base.footerBottomLine')}</p>
      </div>
    );
  }

  hasLinks() {
    return app.forum.attribute('afrux-theme-base.footerLinks') && app.forum.attribute('afrux-theme-base.footerLinks').length;
  }

  hasDescription() {
    return Boolean(app.forum.attribute('afrux-theme-base.footerDescription'));
  }

  hasBottomLine() {
    return Boolean(app.forum.attribute('afrux-theme-base.footerBottomLine'));
  }
}
