<?php
/**
 * @file
 * Contains \Drupal\Core\Asset\AssetCollectionRendererInterface.
 */

namespace Drupal\Core\Asset;
use Symfony\Component\HttpFoundation\Request;

/**
 * Interface defining a service that generates a render array to render assets.
 */
interface AssetCollectionRendererInterface {

  /**
   * Renders an asset collection.
   *
   * @param array $assets
   *   An asset collection.
   *
   * @return array
   *   A render array to render the asset collection.
   */
  public function render(array $assets, Request $request);

}
