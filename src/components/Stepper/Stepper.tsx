import * as React from 'react'
import { cn } from '../../lib/utils'
import { StepperContext } from './stepper-context'

/**
 * Root stepper. Octuple DS Theme 2
 * ([Figma](https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?node-id=3452-4369)).
 * Composable API (shadcn-style); semantic HTML + ARIA.
 */
export interface StepperProps extends React.ComponentPropsWithoutRef<'nav'> {
  value: number
  onValueChange?: (step: number) => void
}

const Stepper = React.forwardRef<HTMLElement, StepperProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => (
    <StepperContext.Provider value={{ value, onValueChange }}>
      <nav
        ref={ref as React.Ref<HTMLElement>}
        aria-label="Steps"
        data-slot="stepper"
        className={cn('w-full', className)}
        {...props}
      >
        {children}
      </nav>
    </StepperContext.Provider>
  )
)
Stepper.displayName = 'Stepper'

export { Stepper }
