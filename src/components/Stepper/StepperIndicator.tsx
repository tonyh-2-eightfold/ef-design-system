import * as React from 'react'
import { cn } from '@/lib/utils'
import './StepperIndicator.css'
import { ItemStepContext, StepperContext } from './stepper-context'
import type { StepperSize } from './stepper-context'

export type StepperIndicatorState = 'complete' | 'active' | 'upcoming'

export interface StepperIndicatorProps extends React.ComponentPropsWithoutRef<'div'> {
  /** 1-based display index; default step + 1 inside a step, or 1 when using forceState */
  stepDisplay?: number
  /**
   * Static preview for docs/catalog — renders this state without a Stepper parent.
   * Omit inside `StepperItem` so context drives `data-state`.
   */
  forceState?: StepperIndicatorState
}

/** Same fill + label color as primary Button (`btn--primary`). */
const primaryBtnIndicator =
  'bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]'

function indicatorClassName(state: StepperIndicatorState, size: StepperSize = 'default') {
  const sm = size === 'sm'
  return cn(
    'flex shrink-0 items-center justify-center rounded-[var(--radius-full)] font-semibold tabular-nums transition-colors',
    sm ? 'size-6 text-[10px]' : 'size-8 text-xs',
    state === 'complete' && cn(primaryBtnIndicator, sm ? '[&_.material-symbols-outlined]:text-[14px] [&_.material-symbols-outlined]:leading-none' : '[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none'),
    state === 'active' &&
      cn(
        primaryBtnIndicator,
        sm
          ? 'ring-[1.5px] ring-[var(--color-button-primary-bg)] ring-offset-[1.5px] ring-offset-background'
          : 'ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background'
      ),
    state === 'upcoming' &&
      'bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]'
  )
}

function CompleteCheckIcon({ sm }: { sm?: boolean }) {
  return (
    <span
      className="material-symbols-outlined font-normal"
      style={{ fontSize: sm ? '14px' : '18px', fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
      aria-hidden
    >
      check
    </span>
  )
}

const StepperIndicator = React.forwardRef<HTMLDivElement, StepperIndicatorProps>(
  ({ className, stepDisplay, forceState, children, ...props }, ref) => {
    const itemStep = React.useContext(ItemStepContext)
    const stepper = React.useContext(StepperContext)
    const size = stepper?.size ?? 'default'
    const sm = size === 'sm'

    if (forceState != null) {
      const n = stepDisplay ?? 1
      const showCheck = forceState === 'complete'
      return (
        <div
          ref={ref}
          data-slot="stepper-indicator"
          data-state={forceState}
          className={cn(indicatorClassName(forceState, size), className)}
          {...props}
        >
          {children ?? (showCheck ? <CompleteCheckIcon sm={sm} /> : n)}
        </div>
      )
    }

    if (itemStep == null || stepper == null) {
      throw new Error(
        'StepperIndicator must be inside StepperItem, or pass forceState for a static preview.'
      )
    }

    const step = itemStep
    const value = stepper.value
    const state: StepperIndicatorState =
      step < value ? 'complete' : step === value ? 'active' : 'upcoming'
    const n = stepDisplay ?? step + 1
    const showCheck = state === 'complete'

    return (
      <div
        ref={ref}
        data-slot="stepper-indicator"
        data-state={state}
        className={cn(indicatorClassName(state, size), className)}
        {...props}
      >
        {children ?? (showCheck ? <CompleteCheckIcon sm={sm} /> : n)}
      </div>
    )
  }
)
StepperIndicator.displayName = 'StepperIndicator'

export { StepperIndicator }
