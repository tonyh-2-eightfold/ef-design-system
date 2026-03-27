import type { CSSProperties } from 'react'
import { chevronArtDataUrl, type CareerHubChevronsVariant } from './career-hub/chevron-art'
import { hexagonArtDataUrl, type HexagonVariant } from './career-hub/hexagon-art'
import { photoScrimGradient } from './photo-scrim'
import type { ProductBackgroundVariant } from './product-background.types'

export interface ProductBackgroundFillLayer {
  fillStyle: CSSProperties | undefined
  hasImage: boolean
  isChevrons: boolean
  isHexagons: boolean
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
    hexagonsVariant?: HexagonVariant
  }
): ProductBackgroundFillLayer {
  const hasImage = Boolean(options.src?.trim())
  const isHexagons = !hasImage && options.hexagonsVariant != null
  const isChevrons =
    variant === 'career-hub' && !hasImage && !isHexagons && options.chevronsVariant != null

  if (hasImage && options.src) {
    return {
      hasImage: true,
      isChevrons: false,
      isHexagons: false,
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

  if (isHexagons && options.hexagonsVariant) {
    return {
      hasImage: false,
      isChevrons: false,
      isHexagons: true,
      fillStyle: {
        backgroundImage: hexagonArtDataUrl(options.hexagonsVariant),
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }
  }

  if (isChevrons && options.chevronsVariant) {
    return {
      hasImage: false,
      isChevrons: true,
      isHexagons: false,
      fillStyle: {
        backgroundColor: 'var(--color-background1-grey)',
        backgroundImage: chevronArtDataUrl(options.chevronsVariant),
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }
  }

  return {
    hasImage: false,
    isChevrons: false,
    isHexagons: false,
    fillStyle: undefined,
  }
}
