<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Nicknames\Access;

use Flarum\Group\Group;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class UserPolicy extends AbstractPolicy
{
    /**
     * @param User $actor
     * @param User $user
     * @return bool|null
     */
    public function editOwnNickname(User $actor, User $user)
    {
        if ($actor->isGuest() && !$user->exists && Group::find(GROUP::MEMBER_ID)->hasPermission('user.editOwnNickname')) {
            return $this->allow();
        }
    }
}
