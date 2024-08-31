<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('users', 'jobtitle')) {
            $schema->table('users', function (Blueprint $table) {
                $table->string('jobtitle', 150)->after('nickname')->index()->nullable();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->dropColumn('jobtitle');
        });
    }
];