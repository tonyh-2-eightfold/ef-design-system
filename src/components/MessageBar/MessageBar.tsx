import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './MessageBar.css'

export type MessageBarVariant = 'neutral' | 'success' | 'warning' | 'error'

export interface MessageBarProps {
  variant?: MessageBarVariant
  title: ReactNode
  description?: ReactNode
  actionLabel?: string
  onAction?: () => void
  onClose?: () => void
  className?: string
}

const ICONS: Record<MessageBarVariant, string> = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
}

export function MessageBar({
  variant = 'neutral',
  title,
  description,
  actionLabel,
  onAction,
  onClose,
  className,
}: MessageBarProps) {
  return (
    <div
      role="alert"
      data-variant={variant}
      className={cn('ef-messagebar', `ef-messagebar--${variant}`, className)}
    >
      <span className="material-symbols-outlined ef-messagebar__icon" aria-hidden>
        {ICONS[variant]}
      </span>
      <div className="ef-messagebar__body">
        <span className="ef-messagebar__title">{title}</span>
        {description && (
          <span className="ef-messagebar__description">{description}</span>
        )}
      </div>
      {actionLabel && onAction && (
        <button type="button" className="ef-messagebar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          className="ef-messagebar__close"
          onClick={onClose}
          aria-label="Dismiss"
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </div>
  )
}
