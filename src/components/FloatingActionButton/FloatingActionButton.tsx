import * as React from 'react'
import { cn } from '@/lib/utils'
import './FloatingActionButton.css'

export type FloatingActionButtonVariant = 'primary' | 'secondary'
export type FloatingActionButtonSize = 'default' | 'small'

export interface FloatingActionButtonProps {
  /** Lucide/React icon or Material Symbol node */
  icon: React.ReactNode
  /** Visible label — renders an extended FAB when provided */
  label?: string
  variant?: FloatingActionButtonVariant
  size?: FloatingActionButtonSize
  onClick?: () => void
  disabled?: boolean
  /** aria-label — required when no label is provided */
  'aria-label'?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function FloatingActionButton({
  icon,
  label,
  variant = 'primary',
  size = 'default',
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  className,
  type = 'button',
}: FloatingActionButtonProps) {
  const isExtended = Boolean(label)

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={!label ? (ariaLabel ?? 'Action') : undefined}
      data-variant={variant}
      data-size={size}
      data-extended={isExtended || undefined}
      className={cn(
        'ef-fab',
        `ef-fab--${variant}`,
        size === 'small' && 'ef-fab--small',
        isExtended && 'ef-fab--extended',
        className
      )}
    >
      <span className="ef-fab__icon" aria-hidden>{icon}</span>
      {label && <span className="ef-fab__label">{label}</span>}
    </button>
  )
}
