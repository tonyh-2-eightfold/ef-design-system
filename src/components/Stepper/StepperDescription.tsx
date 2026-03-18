import * as React from 'react'
import { cn } from '../../lib/utils'

export interface StepperDescriptionProps extends React.ComponentPropsWithoutRef<'span'> {}

const StepperDescription = React.forwardRef<HTMLSpanElement, StepperDescriptionProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="stepper-description"
      className={cn(
        'max-w-[10rem] text-center text-[11px] leading-snug text-muted-foreground break-words',
        className
      )}
      {...props}
    />
  )
)
StepperDescription.displayName = 'StepperDescription'

export { StepperDescription }
