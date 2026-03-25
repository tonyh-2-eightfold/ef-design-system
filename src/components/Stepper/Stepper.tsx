import * as React from 'react'
import { cn } from '../../lib/utils'
import { StepperContext } from './stepper-context'
import type { StepperSize } from './stepper-context'

/**
 * Root stepper. Octuple DS Theme 2
 * ([Figma](https://www.figma.com/design/SlKRC7oKF7XZyHMv2op4ch/Octuple-DS--Theme-2-?node-id=3452-4369)).
 * Composable API (shadcn-style); semantic HTML + ARIA.
 *
 * `size="sm"` — compact variant for dialogs and tight spaces.
 */
export interface StepperProps extends React.ComponentPropsWithoutRef<'nav'> {
  value: number
  onValueChange?: (step: number) => void
  /** @default 'default' */
  size?: StepperSize
}

const Stepper = React.forwardRef<HTMLElement, StepperProps>(
  ({ className, value, onValueChange, size = 'default', children, ...props }, ref) => (
    <StepperContext.Provider value={{ value, onValueChange, size }}>
      <nav
        ref={ref as React.Ref<HTMLElement>}
        aria-label="Steps"
        data-slot="stepper"
        data-size={size}
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
