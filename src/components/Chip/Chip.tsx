import * as React from 'react'
import { cn } from '@/lib/utils'
import './Chip.css'

export type ChipSize = 'large' | 'medium' | 'small'
export type ChipVariant = 'default' | 'filled' | 'ghost'

export interface ChipProps {
  label: string
  /** URL for avatar image */
  avatarSrc?: string
  /** Initials shown when no avatarSrc (e.g. "DP") */
  avatarInitials?: string
  /** Icon element shown in place of avatar (non-person chips) */
  icon?: React.ReactNode
  /** 'large' = 32px | 'medium' = 24px | 'small' = 20px */
  size?: ChipSize
  variant?: ChipVariant
  onRemove?: () => void
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function Chip({
  label,
  avatarSrc,
  avatarInitials,
  icon,
  size = 'medium',
  variant = 'default',
  onRemove,
  onClick,
  className,
  disabled = false,
}: ChipProps) {
  const hasAvatar = Boolean(avatarSrc || avatarInitials)
  const isInteractive = Boolean(onClick) && !disabled

  return (
    <span
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      data-size={size}
      data-variant={variant}
      data-disabled={disabled || undefined}
      className={cn(
        'ef-chip',
        `ef-chip--${size}`,
        `ef-chip--${variant}`,
        isInteractive && 'ef-chip--interactive',
        className
      )}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={
        isInteractive
          ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.() } }
          : undefined
      }
    >
      {/* Avatar / Icon */}
      {hasAvatar && (
        <span className="ef-chip__avatar" aria-hidden>
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="ef-chip__avatar-img" />
          ) : (
            <span className="ef-chip__avatar-initials">{avatarInitials}</span>
          )}
        </span>
      )}
      {!hasAvatar && icon && (
        <span className="ef-chip__icon" aria-hidden>{icon}</span>
      )}

      <span className="ef-chip__label">{label}</span>

      {onRemove && !disabled && (
        <button
          type="button"
          className="ef-chip__remove"
          onClick={(e) => { e.stopPropagation(); onRemove() }}
          aria-label={`Remove ${label}`}
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </span>
  )
}
