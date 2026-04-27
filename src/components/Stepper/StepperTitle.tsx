import * as React from 'react'
import { cn } from '@/lib/utils'
import { useItemStep, useStepper } from './stepper-context'

export interface StepperTitleProps extends React.ComponentPropsWithoutRef<'span'> {}

const StepperTitle = React.forwardRef<HTMLSpanElement, StepperTitleProps>(
  ({ className, ...props }, ref) => {
    const step = useItemStep()
    const { value, size } = useStepper()
    const active = step === value
    const complete = step < value
    const sm = size === 'sm'

    return (
      <span
        ref={ref}
        data-slot="stepper-title"
        className={cn(
          'text-center font-medium leading-tight break-words',
          sm ? 'max-w-[7rem] text-[11px]' : 'max-w-[10rem] text-xs',
          (active || complete) && 'text-foreground',
          !active && !complete && 'text-muted-foreground',
          className
        )}
        {...props}
      />
    )
  }
)
StepperTitle.displayName = 'StepperTitle'

export { StepperTitle }
