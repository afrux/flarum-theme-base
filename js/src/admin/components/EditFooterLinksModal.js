import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import extractText from 'flarum/common/utils/extractText';
import saveSettings from 'flarum/admin/utils/saveSettings';

export default class EditFooterLinksModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    this.links = Stream((app.data.settings['afrux-theme-base.footer_links'] && JSON.parse(app.data.settings['afrux-theme-base.footer_links'])) || []);
    this.loading = Stream(false);
  }

  title() {
    return app.translator.trans('afrux-theme-base.admin.settings.edit_footer_links');
  }

  className() {
    return 'EditFooterLinksModal Modal--medium';
  }

  content() {
    return (
      <div className="EditFooterLinksModal-groups Modal-body">
        {this.links().map((group, groupIndex) => (
          <div className="EditFooterLinksModal-groups-item">
            <div className="EditFooterLinksModal-groups-item-title">
              <div
                className="EditFooterLinksModal-groups-item-title-text"
                contenteditable="true"
                oninput={(e) => {
                  this.saveGroup({ ...group, title: e.target.innerHTML }, groupIndex);
                }}
              >
                {m.trust(group.title)}
              </div>
              <div className="EditFooterLinksModal-groups-item-title-controls">
                <Button
                  className="Button Button--icon"
                  icon="fas fa-times"
                  onclick={() => {
                    this.saveGroup(group, groupIndex, true);
                  }}
                />
              </div>
            </div>
            <div className="EditFooterLinksModal-links">
              {group.links.map((link, index) => this.link(link, index, groupIndex))}
              <Button
                className="Button"
                icon="fas fa-plus"
                onclick={() => {
                  this.saveLink({ url: '', label: '' }, groupIndex);
                }}
              >
                {app.translator.trans('afrux-theme-base.admin.settings.links_modal.add_link')}
              </Button>
            </div>
          </div>
        ))}
        <div>
          <Button
            className="Button Button--primary"
            loading={this.loading()}
            onclick={() => {
              saveSettings({
                'afrux-theme-base.footer_links': JSON.stringify(this.links()),
              }).then(() => {
                this.loading(false);
                app.modal.close();
              });

              this.loading(true);
            }}
          >
            {app.translator.trans('core.lib.edit_user.submit_button')}
          </Button>
          <Button
            className="Button"
            icon="fas fa-plus-circle"
            onclick={() => {
              this.saveGroup({
                title: extractText(
                  app.translator.trans('afrux-theme-base.admin.settings.links_modal.group_name', { number: this.links().length + 1 })
                ),
                links: [],
              });
            }}
          >
            {app.translator.trans('afrux-theme-base.admin.settings.links_modal.add_group')}
          </Button>
        </div>
      </div>
    );
  }

  link({ url, label }, index, groupIndex) {
    const links = [...this.links()];

    return (
      <div className="EditFooterLinksModal-links-item">
        <input
          oninput={(e) => {
            this.saveLink({ url, label: e.target.value }, groupIndex, index);
          }}
          value={label}
          className="FormControl EditFooterLinksModal-links-item-label"
          placeholder={app.translator.trans('afrux-theme-base.admin.settings.links_modal.link_label')}
          aria-labeledby={app.translator.trans('afrux-theme-base.admin.settings.links_modal.link_label')}
        />
        <input
          oninput={(e) => {
            this.saveLink({ label, url: e.target.value }, groupIndex, index);
          }}
          value={url}
          className="FormControl EditFooterLinksModal-links-item-url"
          placeholder={app.translator.trans('afrux-theme-base.admin.settings.links_modal.link_url')}
          aria-labeledby={app.translator.trans('afrux-theme-base.admin.settings.links_modal.link_url')}
        />
        <Button
          className="Button Button--icon"
          icon="fas fa-times"
          onclick={() => {
            this.saveLink({}, groupIndex, index, true);
          }}
        />
      </div>
    );
  }

  saveLink(link, groupIndex, index = null, del = false) {
    const links = [...this.links()];

    if (del) delete links[groupIndex].links[index];
    else if (index !== null) links[groupIndex].links[index] = link;
    else links[groupIndex].links.push(link);

    this.links(links);
  }

  saveGroup(group, groupIndex = null, del = false) {
    const links = [...this.links()];

    if (del) delete links[groupIndex];
    else if (groupIndex !== null) links[groupIndex] = group;
    else links.push(group);

    this.links(links);
  }
}
