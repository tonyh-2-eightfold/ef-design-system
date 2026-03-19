import type { CSSProperties } from 'react'
import { chevronArtDataUrl, type CareerHubChevronsVariant } from './career-hub/chevron-art'
import { photoScrimGradient } from './photo-scrim'
import type { ProductBackgroundVariant } from './product-background.types'

export interface ProductBackgroundFillLayer {
  fillStyle: CSSProperties | undefined
  hasImage: boolean
  isChevrons: boolean
}

/**
 * Maps props → fill layer inline styles + flags (CSS gradients use data-slot selectors).
 */
export function resolveProductBackgroundFillLayer(
  variant: ProductBackgroundVariant,
  options: {
    src?: string
    imageScrim: boolean
    chevronsVariant?: CareerHubChevronsVariant
  }
): ProductBackgroundFillLayer {
  const hasImage = Boolean(options.src?.trim())
  const isChevrons =
    variant === 'career-hub' && !hasImage && options.chevronsVariant != null

  if (hasImage && options.src) {
    return {
      hasImage: true,
      isChevrons: false,
      fillStyle: {
        backgroundImage: options.imageScrim
          ? `${photoScrimGradient(variant)}, url(${options.src})`
          : `url(${options.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
    }
  }

  if (isChevrons && options.chevronsVariant) {
    return {
      hasImage: false,
      isChevrons: true,
      fillStyle: {
        backgroundColor: 'var(--color-background1-grey)',
        backgroundImage: chevronArtDataUrl(options.chevronsVariant),
        /** Fill the whole slot (e.g. navbar + header): scale up like object-fit: cover; anchor top-right. */
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }
  }

  return {
    hasImage: false,
    isChevrons: false,
    fillStyle: undefined,
  }
}
