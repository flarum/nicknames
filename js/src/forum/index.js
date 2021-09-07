import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import EditUserModal from 'flarum/common/components/EditUserModal';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import extractText from 'flarum/common/utils/extractText';
import Stream from 'flarum/common/utils/Stream';
import NickNameModal from './components/NicknameModal';

app.initializers.add('flarum/nicknames', () => {
  User.prototype.canEditOwnNickname = Model.attribute('canEditOwnNickname');

  extend(SettingsPage.prototype, 'accountItems', function (items) {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    if (this.user.canEditOwnNickname()) {
      items.add('changeNickname',
        <Button className="Button" onclick={() => app.modal.show(NickNameModal)}>
          {app.translator.trans('flarum-nicknames.forum.settings.change_nickname_button')}
        </Button>
      );
    }
  });

  extend(EditUserModal.prototype, 'oninit', function () {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    this.nickname = Stream(this.attrs.user.displayName());
  });

  extend(EditUserModal.prototype, 'fields', function (items) {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    items.add('nickname',
      <div className="Form-group">
        <label>{app.translator.trans('flarum-nicknames.forum.edit_user.nicknames_heading')}</label>
        <input className="FormControl"
               placeholder={extractText(app.translator.trans('flarum-nicknames.forum.edit_user.nicknames_text'))}
               bidi={this.nickname} />
      </div>, 100);
  });

  extend(EditUserModal.prototype, 'data', function (data) {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    const user = this.attrs.user;
    if (this.nickname() !== this.attrs.user.displayName()) {
      data.nickname = this.nickname();
    }
  });

  extend(SignUpModal.prototype, 'oninit', function () {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    this.nickname = Stream(this.attrs.username || '');

  });

  extend(SignUpModal.prototype, 'fields', function (items) {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    items.add(
      'nickname',
      <div className="Form-group">
        <input
          className="FormControl"
          name="nickname"
          type="text"
          placeholder={extractText(app.translator.trans('flarum-nicknames.forum.sign_up.nickname_placeholder'))}
          bidi={this.nickname}
          disabled={this.loading || this.isProvided('nickname')}
        />
      </div>,
      25
    );
  });

  extend(SignUpModal.prototype, 'submitData', function (data) {
    if (app.forum.attribute('displayNameDriver') !== 'nickname') return;

    data.nickname = this.nickname();
  });
  
});
