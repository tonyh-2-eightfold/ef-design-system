import type { ProductBackgroundVariant } from './product-background.types'

/** Gradient scrim layered over `src` for readable foreground content. */
export function photoScrimGradient(variant: ProductBackgroundVariant): string {
  if (variant === 'talent-acquisition') {
    return 'linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)'
  }
  return 'linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)'
}
