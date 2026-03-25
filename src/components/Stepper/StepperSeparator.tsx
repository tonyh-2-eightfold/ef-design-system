import * as React from 'react'
import { cn } from '../../lib/utils'
import { StepperConnectorSegmentContext, useStepper } from './stepper-context'
import type { StepperSize } from './stepper-context'
import './StepperConnector.css'

export interface StepperSeparatorProps extends React.ComponentPropsWithoutRef<'li'> {
  /** 0-based segment between step N and N+1; prefer StepperList + context */
  segmentIndex?: number
}

const StepperSeparator = React.forwardRef<HTMLLIElement, StepperSeparatorProps>(
  ({ className, segmentIndex: segmentIndexProp, style, children, ...props }, ref) => {
    const { value, size } = useStepper()
    const ctxSeg = React.useContext(StepperConnectorSegmentContext)
    const segmentIndex =
      typeof ctxSeg === 'number' ? ctxSeg : segmentIndexProp ?? 0
    const sm = size === 'sm'

    const v = Number(value)
    const filled = Number.isFinite(v) && v > Number(segmentIndex)

    return (
      <li
        ref={ref}
        {...props}
        data-slot="stepper-separator"
        data-state={filled ? 'filled' : 'upcoming'}
        aria-hidden
        className={cn(
          'flex min-h-px min-w-[1rem] flex-1 list-none items-center self-start p-0',
          sm ? 'mx-0.5 mt-3' : 'mx-1 mt-4',
          className
        )}
        style={style}
      >
        <span
          data-ef-stepper-connector-bar
          data-filled={filled ? 'true' : 'false'}
          className="box-border block h-[2px] w-full min-w-[1rem] shrink-0 rounded-full"
        />
        {children}
      </li>
    )
  }
)
StepperSeparator.displayName = 'StepperSeparator'

export { StepperSeparator }
