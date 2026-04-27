import * as React from 'react'
import { cn } from '@/lib/utils'
import './SegmentedProgress.css'

export interface SegmentedProgressProps {
  /** Number of completed segments (0 → max) */
  value: number
  /** Total number of segments */
  max: number
  /** Accessible label (e.g. "3 of 5 steps complete") */
  label?: string
  /** Show the label below the segments */
  showLabel?: boolean
  className?: string
}

export function SegmentedProgress({
  value,
  max,
  label,
  showLabel = true,
  className,
}: SegmentedProgressProps) {
  const safeMax = Math.max(1, max)
  const safeValue = Math.min(safeMax, Math.max(0, value))

  const defaultLabel = `${safeValue} of ${safeMax} steps complete`
  const displayLabel = label ?? defaultLabel

  return (
    <div
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-label={displayLabel}
      className={cn('ef-segprogress', className)}
    >
      <div className="ef-segprogress__track">
        {Array.from({ length: safeMax }, (_, i) => (
          <div
            key={i}
            data-filled={i < safeValue || undefined}
            data-active={i === safeValue - 1 || undefined}
            className={cn(
              'ef-segprogress__segment',
              i < safeValue && 'ef-segprogress__segment--filled',
              i === safeValue && safeValue < safeMax && 'ef-segprogress__segment--next'
            )}
          />
        ))}
      </div>
      {showLabel && (
        <span className="ef-segprogress__label" aria-hidden>
          {displayLabel}
        </span>
      )}
    </div>
  )
}
