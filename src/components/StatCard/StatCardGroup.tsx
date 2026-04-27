import * as React from 'react'
import { cn } from '@/lib/utils'

export interface StatCardGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  /** @default 'lg' */
  size?: 'lg' | 'md' | 'sm'
}

const StatCardGroup = React.forwardRef<HTMLDivElement, StatCardGroupProps>(
  ({ className, size = 'lg', children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="stat-card-group"
      className={cn(
        'stat-card-group',
        `stat-card-group--${size}`,
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child, i) => (
        <>
          {i > 0 && <div className="stat-card-group__divider" aria-hidden />}
          {child}
        </>
      ))}
    </div>
  )
)
StatCardGroup.displayName = 'StatCardGroup'

export { StatCardGroup }
