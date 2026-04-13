import type { CSSProperties } from 'react'
import { chevronArtDataUrl, type CareerHubChevronsVariant } from './career-hub/chevron-art'
import { hexagonArtDataUrl, type HexagonVariant } from './career-hub/hexagon-art'
import { blueHexagonArtDataUrl, type BlueHexagonVariant } from './career-hub/blue-hexagon-art'
import { waveArtDataUrl, type WaveVariant } from './career-hub/wave-art'
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
    blueHexagonsVariant?: BlueHexagonVariant
    wavesVariant?: WaveVariant
  }
): ProductBackgroundFillLayer {
  const hasImage = Boolean(options.src?.trim())
  const isWaves = !hasImage && options.wavesVariant != null
  const isBlueHexagons = !hasImage && !isWaves && options.blueHexagonsVariant != null
  const isHexagons = !hasImage && !isWaves && !isBlueHexagons && options.hexagonsVariant != null
  const isChevrons =
    variant === 'career-hub' && !hasImage && !isWaves && !isHexagons && !isBlueHexagons && options.chevronsVariant != null

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

  if (isWaves && options.wavesVariant) {
    return {
      hasImage: false,
      isChevrons: false,
      isHexagons: true,
      fillStyle: {
        backgroundImage: waveArtDataUrl(options.wavesVariant),
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    }
  }

  if (isBlueHexagons && options.blueHexagonsVariant) {
    return {
      hasImage: false,
      isChevrons: false,
      isHexagons: true,
      fillStyle: {
        backgroundImage: blueHexagonArtDataUrl(options.blueHexagonsVariant),
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
