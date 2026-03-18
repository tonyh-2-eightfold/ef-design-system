import * as React from 'react'
import { cn } from '../../lib/utils'
import { StepperConnectorSegmentContext } from './stepper-context'
import type { StepperItemProps } from './StepperItem'
import type { StepperSeparatorProps } from './StepperSeparator'
import { StepperSeparator } from './StepperSeparator'

export interface StepperListProps extends React.ComponentPropsWithoutRef<'ol'> {}

function isSeparatorElement(
  child: React.ReactNode
): child is React.ReactElement<StepperSeparatorProps> {
  if (!React.isValidElement(child)) return false
  const t = child.type as { displayName?: string }
  return t === StepperSeparator || t?.displayName === 'StepperSeparator'
}

function isItemElement(child: React.ReactNode): child is React.ReactElement<StepperItemProps> {
  return (
    React.isValidElement(child) &&
    (child.type as { displayName?: string }).displayName === 'StepperItem'
  )
}

const StepperList = React.forwardRef<HTMLOListElement, StepperListProps>(
  ({ className, children, ...props }, ref) => {
    const nodes: React.ReactNode[] = []
    let step = 0
    let separatorIndex = 0
    React.Children.forEach(children, (child) => {
      if (isSeparatorElement(child)) {
        const seg = separatorIndex++
        nodes.push(
          <StepperConnectorSegmentContext.Provider key={child.key ?? `stepper-sep-${seg}`} value={seg}>
            {React.cloneElement(child, {
              key: child.key ?? `stepper-sep-inner-${seg}`,
              segmentIndex: seg,
            })}
          </StepperConnectorSegmentContext.Provider>
        )
        return
      }
      if (isItemElement(child)) {
        const s = step++
        nodes.push(
          React.cloneElement(child, {
            key: child.key ?? `stepper-item-${s}`,
            step: s,
          })
        )
        return
      }
      nodes.push(child)
    })

    return (
      <ol
        ref={ref}
        data-slot="stepper-list"
        className={cn('m-0 flex w-full list-none items-start gap-0 p-0', className)}
        {...props}
      >
        {nodes}
      </ol>
    )
  }
)
StepperList.displayName = 'StepperList'

export { StepperList }
