import * as React from 'react'
import { cn } from '@/lib/utils'
import './NumberBadge.css'

export type NumberBadgeColor =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'teal'
  | 'mint'
  | 'sky'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'grey'

export type NumberBadgeSize = 'sm' | 'md' | 'lg'

export interface NumberBadgeProps extends React.ComponentPropsWithoutRef<'span'> {
  /** The number to display */
  value: number | string
  /** @default 'grey' */
  color?: NumberBadgeColor
  /** @default 'md' */
  size?: NumberBadgeSize
}

const NumberBadge = React.forwardRef<HTMLSpanElement, NumberBadgeProps>(
  ({ className, value, color = 'grey', size = 'md', ...props }, ref) => (
    <span
      ref={ref}
      data-slot="number-badge"
      className={cn(
        'number-badge',
        `number-badge--${size}`,
        `number-badge--${color}`,
        className
      )}
      {...props}
    >
      {value}
    </span>
  )
)
NumberBadge.displayName = 'NumberBadge'

export { NumberBadge }
