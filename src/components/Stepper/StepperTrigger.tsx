import * as React from 'react'
import { cn } from '@/lib/utils'
import { useItemStep, useStepper } from './stepper-context'

export interface StepperTriggerProps extends React.ComponentPropsWithoutRef<'button'> {}

const StepperTrigger = React.forwardRef<HTMLButtonElement, StepperTriggerProps>(
  ({ className, type = 'button', disabled, onClick, children, ...props }, ref) => {
    const { value, onValueChange, size } = useStepper()
    const step = useItemStep()
    const canNavigate =
      onValueChange != null && !disabled && step <= value
    const sm = size === 'sm'

    const triggerClassName = cn(
      'group/stepper-trigger flex rounded-md',
      sm
        ? 'w-auto flex-row items-center gap-2 text-left'
        : 'w-full max-w-[10rem] flex-col items-center gap-2 text-center'
    )

    const cls = cn(
      triggerClassName,
      canNavigate &&
        'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90',
      !onValueChange && 'cursor-default',
      onValueChange && step > value && 'cursor-default',
      className
    )

    if (!onValueChange) {
      return (
        <div
          data-slot="stepper-trigger"
          aria-current={step === value ? 'step' : undefined}
          className={cls}
        >
          {children}
        </div>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        data-slot="stepper-trigger"
        aria-current={step === value ? 'step' : undefined}
        disabled={disabled ?? step > value}
        className={cn(
          cls,
          'disabled:pointer-events-none disabled:opacity-100'
        )}
        onClick={(e) => {
          onClick?.(e)
          if (!e.defaultPrevented && canNavigate) onValueChange(step)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)
StepperTrigger.displayName = 'StepperTrigger'

export { StepperTrigger }
