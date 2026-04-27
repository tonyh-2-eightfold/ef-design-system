import type { ReactNode } from 'react'
import { cloneElement, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import './Tag.css'

export type TagSize = '24' | '30' | '44'
export type TagColor = 'grey' | 'blue' | 'green' | 'red' | 'orange' | 'violet' | 'blue-green' | 'blue-violet'
export type TagVariant = 'default' | 'selected' | 'disabled'

export interface TagProps {
  children: ReactNode
  onRemove?: () => void
  variant?: TagVariant
  /** Octuple color family — controls background, text, and border */
  color?: TagColor
  size?: TagSize
  value?: string
  className?: string
  disabled?: boolean
  /** Icon or element shown before the label */
  leadingIcon?: ReactNode
  /** Icon or element shown after the label (before remove button if present) */
  trailingIcon?: ReactNode
}

function wrapIcon(icon: ReactNode, dataIcon: 'inline-start' | 'inline-end'): ReactNode {
  if (icon == null) return null
  if (isValidElement(icon)) {
    return cloneElement(icon as React.ReactElement<{ 'data-icon'?: string }>, {
      'data-icon': dataIcon,
    })
  }
  return (
    <span data-icon={dataIcon} style={{ display: 'inline-flex' }}>
      {icon}
    </span>
  )
}

export function Tag({
  children,
  onRemove,
  variant = 'default',
  color,
  size = '24',
  value,
  className,
  disabled = false,
  leadingIcon,
  trailingIcon,
}: TagProps) {
  const classes = cn(
    'tag',
    size === '24' && 'tag--24',
    size === '30' && 'tag--30',
    size === '44' && 'tag--44',
    variant === 'selected' && 'tag--selected',
    variant === 'disabled' && 'tag--disabled',
    color && `tag--color-${color}`,
    className
  )

  return (
    <span className={classes} data-value={value}>
      {leadingIcon != null && wrapIcon(leadingIcon, 'inline-start')}
      {children}
      {trailingIcon != null && wrapIcon(trailingIcon, 'inline-end')}
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
export function tagGroupItemClass(size: TagSize) {
  return cn('tag', 'tag--selectable', `tag--${size}`)
}
