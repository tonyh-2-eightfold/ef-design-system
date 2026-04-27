import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import './Panel.css'

export type PanelWidth = 'narrow' | 'medium' | 'wide'

export interface PanelProps {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  subtitle?: React.ReactNode
  /** 'narrow' = 400px | 'medium' = 560px | 'wide' = 720px (default: 'medium') */
  width?: PanelWidth
  /** Label for confirm/save CTA */
  confirmLabel?: string
  onConfirm?: () => void
  confirmLoading?: boolean
  confirmDisabled?: boolean
  /** Label for cancel button (default: 'Cancel') */
  cancelLabel?: string
  children?: React.ReactNode
  className?: string
}

export function Panel({
  open,
  onClose,
  title,
  subtitle,
  width = 'medium',
  confirmLabel,
  onConfirm,
  confirmLoading = false,
  confirmDisabled = false,
  cancelLabel = 'Cancel',
  children,
  className,
}: PanelProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="ef-panel__overlay" />
        <DialogPrimitive.Content
          data-width={width}
          className={cn('ef-panel', `ef-panel--${width}`, className)}
          aria-describedby={undefined}
        >
          {/* Header */}
          <div className="ef-panel__header">
            <div className="ef-panel__header-text">
              <DialogPrimitive.Title className="ef-panel__title">
                {title}
              </DialogPrimitive.Title>
              {subtitle && (
                <DialogPrimitive.Description className="ef-panel__subtitle">
                  {subtitle}
                </DialogPrimitive.Description>
              )}
            </div>
            <DialogPrimitive.Close className="ef-panel__close" aria-label="Close panel">
              <span className="material-symbols-outlined" aria-hidden>close</span>
            </DialogPrimitive.Close>
          </div>

          {/* Body */}
          <div className="ef-panel__body">
            {children}
          </div>

          {/* Footer */}
          {(confirmLabel || onConfirm) && (
            <div className="ef-panel__footer">
              <button
                type="button"
                className="ef-panel__btn ef-panel__btn--cancel"
                onClick={onClose}
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                className="ef-panel__btn ef-panel__btn--confirm"
                onClick={onConfirm}
                disabled={confirmDisabled || confirmLoading}
                aria-busy={confirmLoading}
              >
                {confirmLoading ? (
                  <>
                    <span
                      className="material-symbols-outlined ef-panel__spinner"
                      aria-hidden
                    >
                      progress_activity
                    </span>
                    {confirmLabel}
                  </>
                ) : (
                  confirmLabel
                )}
              </button>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
