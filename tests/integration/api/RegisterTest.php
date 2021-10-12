<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Nicknames\Tests\integration\forum;

use Flarum\Extend;
use Flarum\Testing\integration\TestCase;
use Flarum\User\User;

class RegisterTest extends TestCase
{
    /**
     * @inheritDoc
     */
    protected function setUp(): void
    {
        $this->extension('flarum-nicknames');
        $this->extend(
            (new Extend\Csrf)->exemptRoute('register')
        );
    }

    /**
     * @test
     */
    public function can_register_with_nickname()
    {
        $response = $this->send(
            $this->request('POST', '/register', [
                'json' => [
                    'nickname' => 'фларум',
                    'username' => 'test',
                    'password' => 'too-obscure',
                    'email' => 'test@machine.local',
                ]
            ])
        );

        $this->assertEquals(201, $response->getStatusCode());

        /** @var User $user */
        $user = User::where('username', 'test')->firstOrFail();

        $this->assertEquals(0, $user->is_email_confirmed);
        $this->assertEquals('test', $user->username);
        $this->assertEquals('test@machine.local', $user->email);
    }

    /**
     * @test
     */
    public function cant_register_with_nickname_if_not_allowed()
    {
        $this->database()->table('group_permission')->where('permission', 'user.editOwnNickname')->delete();
        $response = $this->send(
            $this->request('POST', '/register', [
                'json' => [
                    'nickname' => 'фларум',
                    'username' => 'test',
                    'password' => 'too-obscure',
                    'email' => 'test@machine.local',
                ]
            ])
        );

        $this->assertEquals(403, $response->getStatusCode());
    }
}
