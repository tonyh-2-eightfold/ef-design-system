import * as React from 'react'
import { cn } from '../../lib/utils'
import './StepperIndicator.css'
import { ItemStepContext, StepperContext } from './stepper-context'

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

function indicatorClassName(state: StepperIndicatorState) {
  return cn(
    'flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-full)] text-xs font-semibold tabular-nums transition-colors',
    state === 'complete' && cn(primaryBtnIndicator, '[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none'),
    state === 'active' &&
      cn(
        primaryBtnIndicator,
        'ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background'
      ),
    state === 'upcoming' &&
      'bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]'
  )
}

function CompleteCheckIcon() {
  return (
    <span
      className="material-symbols-outlined font-normal"
      style={{ fontSize: '18px', fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
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

    if (forceState != null) {
      const n = stepDisplay ?? 1
      const showCheck = forceState === 'complete'
      return (
        <div
          ref={ref}
          data-slot="stepper-indicator"
          data-state={forceState}
          className={cn(indicatorClassName(forceState), className)}
          {...props}
        >
          {children ?? (showCheck ? <CompleteCheckIcon /> : n)}
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
        className={cn(indicatorClassName(state), className)}
        {...props}
      >
        {children ?? (showCheck ? <CompleteCheckIcon /> : n)}
      </div>
    )
  }
)
StepperIndicator.displayName = 'StepperIndicator'

export { StepperIndicator }
