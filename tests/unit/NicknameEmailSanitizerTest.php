<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Nicknames\Tests\unit;

use Flarum\Nicknames\NicknameDriver;
use Flarum\Testing\unit\TestCase;
use Flarum\User\User;

class NicknameEmailSanitizerTest extends TestCase
{
    private function displayName(string $nickname): string
    {
        $driver = new NicknameDriver();

        $user = new User();
        $user->nickname = $nickname;

        return $driver->displayName($user);
    }

    /** @test */
    public function clean_nickname_is_unchanged()
    {
        $this->assertSame('Jane Smith', $this->displayName('Jane Smith'));
    }

    /** @test */
    public function dot_gets_zero_width_space_inserted()
    {
        $this->assertSame("nasty.\u{200B}com", $this->displayName('nasty.com'));
    }

    /** @test */
    public function multiple_dots_all_get_zero_width_space()
    {
        $this->assertSame("first.\u{200B}last.\u{200B}com", $this->displayName('first.last.com'));
    }

    /** @test */
    public function square_brackets_are_stripped()
    {
        $this->assertSame('CLICK', $this->displayName('[CLICK]'));
    }

    /** @test */
    public function parentheses_are_stripped()
    {
        $this->assertSame('evilcom', $this->displayName('evil(com)'));
    }

    /** @test */
    public function angle_brackets_are_stripped()
    {
        $this->assertSame("evil.\u{200B}com", $this->displayName('<evil.com>'));
    }

    /** @test */
    public function markdown_link_syntax_is_neutralised()
    {
        $this->assertSame("CLICKhttps://evil.\u{200B}com", $this->displayName('[CLICK](https://evil.com)'));
    }

    /** @test */
    public function username_fallback_also_gets_sanitized()
    {
        $driver = new NicknameDriver();

        $user = new User();
        $user->nickname = null;
        $user->username = 'nasty.com';

        $this->assertSame("nasty.\u{200B}com", $driver->displayName($user));
    }
}
