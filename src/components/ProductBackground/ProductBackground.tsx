import * as React from 'react'
import { cn } from '../../lib/utils'
import { resolveProductBackgroundFillLayer } from './resolve-fill-layer'
import type { ProductBackgroundProps } from './product-background.types'
import './styles/gradient-fills.css'

/**
 * Product chrome backgrounds: **TA** / **CH** token gradients, **CH chevron** art, **hexagon** art, or **photo** + scrim.
 */
const ProductBackground = React.forwardRef<HTMLDivElement, ProductBackgroundProps>(
  (
    {
      className,
      variant,
      src,
      imageScrim = true,
      chevronsVariant,
      hexagonsVariant,
      children,
      ...props
    },
    ref
  ) => {
    const { fillStyle, hasImage, isChevrons, isHexagons } = resolveProductBackgroundFillLayer(variant, {
      src,
      imageScrim,
      chevronsVariant,
      hexagonsVariant,
    })

    return (
      <div
        ref={ref}
        data-slot="product-background"
        data-variant={variant}
        className={cn('relative isolate w-full overflow-hidden', className)}
        {...props}
      >
        <div
          aria-hidden
          data-slot="product-background-fill"
          {...(hasImage ? { 'data-has-image': '' } : {})}
          {...(isChevrons ? { 'data-ch-chevrons': '' } : {})}
          {...(isHexagons ? { 'data-hexagons': '' } : {})}
          className={cn(
            'pointer-events-none absolute inset-0 -z-10',
            (hasImage || isChevrons || isHexagons) && 'min-h-full min-w-full'
          )}
          style={fillStyle}
        />
        <div className="relative min-h-0">{children}</div>
      </div>
    )
  }
)
ProductBackground.displayName = 'ProductBackground'

export { ProductBackground }
