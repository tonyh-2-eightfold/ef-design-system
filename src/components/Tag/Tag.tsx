import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'
import './Tag.css'

export type TagSize = 'sm' | 'md'
export type TagVariant = 'default' | 'selected' | 'disabled'

export interface TagProps {
  children: ReactNode
  onRemove?: () => void
  variant?: TagVariant
  size?: TagSize
  value?: string
  className?: string
  disabled?: boolean
}

export function Tag({
  children,
  onRemove,
  variant = 'default',
  size = 'md',
  value,
  className,
  disabled = false,
}: TagProps) {
  const classes = cn(
    'tag',
    size === 'sm' && 'tag--sm',
    variant === 'selected' && 'tag--selected',
    variant === 'disabled' && 'tag--disabled',
    className
  )

  return (
    <span className={classes} data-value={value}>
      {children}
      {onRemove && !disabled && (
        <button
          type="button"
          className="tag__remove"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label={`Remove ${typeof children === 'string' ? children : 'tag'}`}
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </span>
  )
}

/** Class names for TagGroup item (Radix ToggleGroup.Item) */
export function tagGroupItemClass(size: 'sm' | 'md') {
  return cn('tag', 'tag--selectable', size === 'sm' && 'tag--sm')
}
