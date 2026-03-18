import * as React from 'react'
import { cn } from '../../lib/utils'
import { useItemStep, useStepper } from './stepper-context'

export interface StepperTitleProps extends React.ComponentPropsWithoutRef<'span'> {}

const StepperTitle = React.forwardRef<HTMLSpanElement, StepperTitleProps>(
  ({ className, ...props }, ref) => {
    const step = useItemStep()
    const { value } = useStepper()
    const active = step === value
    const complete = step < value

    return (
      <span
        ref={ref}
        data-slot="stepper-title"
        className={cn(
          'max-w-[10rem] text-center text-xs font-medium leading-tight break-words',
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
