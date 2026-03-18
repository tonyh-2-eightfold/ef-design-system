import * as React from 'react'
import { cn } from '../../lib/utils'
import { ItemStepContext, useStepper } from './stepper-context'

export interface StepperItemProps extends Omit<React.ComponentPropsWithoutRef<'li'>, 'children'> {
  step?: number
  children?: React.ReactNode
}

const StepperItem = React.forwardRef<HTMLLIElement, StepperItemProps>(
  ({ className, step: stepProp, children, ...props }, ref) => {
    const step = stepProp ?? 0
    const { value } = useStepper()
    const state =
      step < value ? 'complete' : step === value ? 'active' : 'upcoming'

    return (
      <ItemStepContext.Provider value={step}>
        <li
          ref={ref}
          data-slot="stepper-item"
          data-state={state}
          className={cn(
            'relative flex min-w-0 shrink-0 flex-col items-center gap-2',
            className
          )}
          {...props}
        >
          {children}
        </li>
      </ItemStepContext.Provider>
    )
  }
)
StepperItem.displayName = 'StepperItem'

export { StepperItem }
