import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import './Snackbar.css'

export type SnackbarVariant = 'default' | 'success' | 'warning' | 'error'
export type SnackbarSize = 'default' | 'small'

export interface SnackbarProps {
  variant?: SnackbarVariant
  message: ReactNode
  /** Optional inline action (e.g. "Undo", "Retry") */
  actionLabel?: string
  onAction?: () => void
  onClose?: () => void
  size?: SnackbarSize
  className?: string
}

const ICONS: Record<SnackbarVariant, string> = {
  default: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
}

export function Snackbar({
  variant = 'default',
  message,
  actionLabel,
  onAction,
  onClose,
  size = 'default',
  className,
}: SnackbarProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-variant={variant}
      data-size={size}
      className={cn(
        'ef-snackbar',
        `ef-snackbar--${variant}`,
        size === 'small' && 'ef-snackbar--small',
        className
      )}
    >
      <span className="material-symbols-outlined ef-snackbar__icon" aria-hidden>
        {ICONS[variant]}
      </span>
      <span className="ef-snackbar__message">{message}</span>
      {actionLabel && onAction && (
        <button type="button" className="ef-snackbar__action" onClick={onAction}>
          {actionLabel}
        </button>
      )}
      {onClose && (
        <button
          type="button"
          className="ef-snackbar__close"
          onClick={onClose}
          aria-label="Dismiss"
        >
          <span className="material-symbols-outlined" aria-hidden>close</span>
        </button>
      )}
    </div>
  )
}

/**
 * SnackbarContainer — fixed bottom-right host for imperative toasts.
 * Wrap at app root; render <Snackbar> children inside.
 */
export function SnackbarContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className={cn('ef-snackbar-container', className)}
    >
      {children}
    </div>
  )
}
