import * as React from 'react'
import { cn } from '../../lib/utils'
import './StatCard.css'

export type StatCardColor = 'green' | 'grey' | 'red' | 'teal' | 'blue' | 'dark'
export type StatCardSize = 'lg' | 'md' | 'sm'
export type StatCardVariant = 'filled' | 'outlined' | 'ghost'

export type StatCardBadge = 'alert' | 'success' | 'info' | boolean

export interface StatCardProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Material Symbols icon name */
  icon?: string
  /** Label text above the value */
  label: string
  /** The main stat number */
  value: number | string
  /** Optional percentage or secondary text shown after the value */
  pct?: string
  /** @default 'grey' */
  color?: StatCardColor
  /** @default 'lg' */
  size?: StatCardSize
  /** @default 'outlined' */
  variant?: StatCardVariant
  /** Show a badge on the icon circle. true or 'alert' = red, 'success' = green, 'info' = blue */
  iconBadge?: StatCardBadge
}

function badgeClass(badge: StatCardBadge): string {
  if (badge === true || badge === 'alert') return 'stat-card__badge--alert'
  if (badge === 'success') return 'stat-card__badge--success'
  if (badge === 'info') return 'stat-card__badge--info'
  return ''
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, icon = 'person', label, value, pct, color = 'grey', size = 'lg', variant = 'outlined', iconBadge, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="stat-card"
      className={cn(
        'stat-card',
        `stat-card--${size}`,
        `stat-card--${color}`,
        `stat-card--${variant}`,
        className
      )}
      {...props}
    >
      <div className="stat-card__icon">
        <span className="material-symbols-outlined" aria-hidden>
          {icon}
        </span>
        {iconBadge && (
          <span className={cn('stat-card__badge', badgeClass(iconBadge))} aria-hidden />
        )}
      </div>
      <div className="stat-card__text">
        <span className="stat-card__label">{label}</span>
        <div className="stat-card__value-row">
          <span className="stat-card__value">{value}</span>
          {pct && <span className="stat-card__pct">({pct})</span>}
        </div>
      </div>
    </div>
  )
)
StatCard.displayName = 'StatCard'

export { StatCard }
