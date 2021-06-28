<?php

/*
 * This file is part of ThemeBase.
 *
 * (c) Sami Mazouz <sychocouldy@gmail.com>
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Afrux\ThemeBase\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Filesystem;
use Laminas\Diactoros\Response\EmptyResponse;
use Psr\Http\Message\ServerRequestInterface;

class DeleteHeroImageController extends AbstractDeleteController
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Filesystem
     */
    protected $uploadDir;

    public function __construct(SettingsRepositoryInterface $settings, Factory $filesystemFactory)
    {
        $this->settings = $settings;
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    /**
     * {@inheritdoc}
     */
    protected function delete(ServerRequestInterface $request)
    {
        $request->getAttribute('actor')->assertAdmin();

        $path = $this->settings->get('afrux-theme-base.hero_banner');

        $this->settings->set('afrux-theme-base.hero_banner', null);

        if ($this->uploadDir->has($path)) {
            $this->uploadDir->delete($path);
        }

        return new EmptyResponse(204);
    }
}
