import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'
import './Progress.css'

const progressBarClassName =
  'relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]'

/**
 * - `scale` — bar, then one row: min/max at the ends; rounded progress number only, aligned with the fill end.
 * - `complete-left` — “{n}% complete” below the bar, left-aligned.
 * - `none` — optional custom `label` below the bar, or bar only.
 */
export type ProgressLabelVariant = 'none' | 'scale' | 'complete-left'

export interface ProgressProps
  extends Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, 'children'> {
  /** 0–max; omit or pass `null` for indeterminate (animated bar). */
  value?: number | null
  labelVariant?: ProgressLabelVariant
  /** When `labelVariant="scale"`, bottom row left (default `0`). */
  scaleStartLabel?: React.ReactNode
  /** When `labelVariant="scale"`, bottom row right (default `100`). */
  scaleEndLabel?: React.ReactNode
  /** When `labelVariant="scale"`, overrides the numeric label (default: rounded percent 0–100). */
  progressValueLabel?: string
  /**
   * When `labelVariant="complete-left"`, overrides the full “n% complete” line (string).
   */
  completeLabelOverride?: string
  /** Renders below the bar when `labelVariant` is `none`. */
  label?: React.ReactNode
  /** Class names for label rows (scale ends, progress below, complete line). */
  labelClassName?: string
}

function completeLeftText(value: number | null, max: number): string {
  if (value == null) return '…'
  const pct = Math.min(100, Math.max(0, Math.round((value / max) * 100)))
  return `${pct}% complete`
}

/**
 * Linear progress — Radix Progress + Octuple DS Theme 2 track/fill
 * ([Figma](https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?node-id=3693-5068)).
 */
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      label,
      labelClassName,
      labelVariant = 'none',
      scaleStartLabel = '0',
      scaleEndLabel = '100',
      progressValueLabel,
      completeLabelOverride,
      value,
      max = 100,
      ...props
    },
    ref
  ) => {
    const numericValue = typeof value === 'number' && !Number.isNaN(value) ? value : null
    const safeMax = typeof max === 'number' && max > 0 ? max : 100
    const pct =
      numericValue != null ? Math.min(100, Math.max(0, (numericValue / safeMax) * 100)) : 0

    const scaleNumberText =
      progressValueLabel ??
      (numericValue != null
        ? String(Math.min(100, Math.max(0, Math.round((numericValue / safeMax) * 100))))
        : '…')
    const completeLine =
      completeLabelOverride ?? completeLeftText(numericValue, safeMax)

    const useField =
      labelVariant === 'scale' || labelVariant === 'complete-left' || label != null

    const bar = (
      <ProgressPrimitive.Root
        ref={ref}
        data-slot="progress"
        className={cn(progressBarClassName, useField ? undefined : className)}
        value={numericValue}
        max={safeMax}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            'h-full w-full flex-1 rounded-[var(--radius-full)] bg-[rgba(44,140,201,1)]',
            'origin-left transition-transform duration-500 ease-out',
            'data-[state=indeterminate]:w-[36%] data-[state=indeterminate]:max-w-none data-[state=indeterminate]:flex-none'
          )}
          style={
            numericValue != null
              ? { transform: `translateX(-${100 - pct}%)` }
              : undefined
          }
        />
      </ProgressPrimitive.Root>
    )

    if (!useField) {
      return bar
    }

    if (labelVariant === 'scale') {
      const pctPos = Math.min(100, Math.max(0, pct))
      const isIndeterminate = numericValue === null

      return (
        <div
          data-slot="progress-field"
          className={cn('inline-flex w-full max-w-full flex-col gap-1', className)}
        >
          {bar}
          <div
            data-slot="progress-scale-row"
            className={cn('relative mt-1 min-h-[1.125rem]', labelClassName)}
          >
            <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
              <span data-slot="progress-scale-start">{scaleStartLabel}</span>
              <span data-slot="progress-scale-end">{scaleEndLabel}</span>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-end">
              <div
                data-slot="progress-current-cluster"
                className="absolute bottom-0 z-10 flex items-baseline gap-1.5 whitespace-nowrap text-xs text-muted-foreground"
                style={
                  isIndeterminate
                    ? {
                        left: '50%',
                        transform: 'translateX(-50%)',
                      }
                    : {
                        left: `${pctPos}%`,
                        transform: 'translateX(-100%)',
                      }
                }
              >
                <span className="tabular-nums" data-slot="progress-current-value">
                  {scaleNumberText}
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (labelVariant === 'complete-left') {
      return (
        <div
          data-slot="progress-field"
          className={cn('inline-flex w-full max-w-full flex-col gap-1', className)}
        >
          {bar}
          <span
            data-slot="progress-complete-label"
            className={cn('block text-left text-xs text-muted-foreground', labelClassName)}
          >
            {completeLine}
          </span>
        </div>
      )
    }

    return (
      <div
        data-slot="progress-field"
        className={cn('inline-flex w-full max-w-full flex-col gap-1', className)}
      >
        {bar}
        <span
          data-slot="progress-label"
          className={cn('text-xs text-muted-foreground', labelClassName)}
        >
          {label}
        </span>
      </div>
    )
  }
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
