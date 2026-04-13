import type * as React from 'react'
import type { HeaderVariant } from '../Navbar/header-types'
import type { CareerHubChevronsVariant } from './career-hub/chevron-art'
import type { HexagonVariant } from './career-hub/hexagon-art'
import type { BlueHexagonVariant } from './career-hub/blue-hexagon-art'
import type { WaveVariant } from './career-hub/wave-art'

export type ProductBackgroundVariant = HeaderVariant
export type { CareerHubChevronsVariant, HexagonVariant, BlueHexagonVariant, WaveVariant }

export interface ProductBackgroundProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Talent Acquisition (blue) or Career Hub (grey / chevrons). */
  variant: ProductBackgroundVariant
  /** Photo background; overrides chevrons/hexagons. Cover + center. */
  src?: string
  /** Scrim over photo when `src` is set. @default true */
  imageScrim?: boolean
  /** Career Hub chevron art; omit for token gradient. Ignored if `src` or TA. */
  chevronsVariant?: CareerHubChevronsVariant
  /** Hexagon background art; omit for token gradient. Ignored if `src`. */
  hexagonsVariant?: HexagonVariant
  /** Monochrome blue hexagon art; omit for token gradient. Ignored if `src`. */
  blueHexagonsVariant?: BlueHexagonVariant
  /** Flowing wave ribbon art; omit for token gradient. Ignored if `src`. */
  wavesVariant?: WaveVariant
}
