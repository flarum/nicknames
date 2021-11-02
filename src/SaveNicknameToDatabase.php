<?php

namespace Flarum\Nicknames;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Event\Saving;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;

class SaveNicknameToDatabase {
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings) {
        $this->settings = $settings;
    }

    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $isSelf = $actor->id === $user->id;
        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['nickname'])) {
            if ($isSelf) {
                $actor->assertCan('editOwnNickname', $user);
            } elseif ($actor->exists) {
                $actor->assertCan('edit', $user);
            } elseif (!$user->exists && !$this->settings->get('flarum-nicknames.set_on_registration')) {
                throw new PermissionDeniedException();
            }

            $nickname = $attributes['nickname'];

            // If the user sets their nickname back to the username
            // set the nickname to null so that it just falls back to the username
            if ($user->username === $nickname) {
                $user->nickname = null;
            } else {
                $user->nickname = $nickname;
            }
        }
    }
}
