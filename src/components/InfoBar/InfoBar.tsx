import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './InfoBar.css'

export type InfoBarVariant = 'neutral' | 'success' | 'warning' | 'error' | 'ai-agent'

export interface InfoBarProps {
  variant?: InfoBarVariant
  message: ReactNode
  /** Label for optional inline action button */
  actionLabel?: string
  onAction?: () => void
  /** Show dismiss (×) button */
  onClose?: () => void
  className?: string
}

const ICONS: Record<InfoBarVariant, string> = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
  'ai-agent': 'auto_awesome',
}

export function InfoBar({
  variant = 'neutral',
  message,
  actionLabel,
  onAction,
  onClose,
  className,
}: InfoBarProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-variant={variant}
      className={cn('ef-infobar', `ef-infobar--${variant}`, className)}
    >
      <span className="material-symbols-outlined ef-infobar__icon" aria-hidden>
        {ICONS[variant]}
      </span>
      <span className="ef-infobar__message">{message}</span>
      {actionLabel && onAction && (
        <button type="button" className="ef-infobar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          className="ef-infobar__close"
          onClick={onClose}
          aria-label="Dismiss"
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </div>
  )
}
