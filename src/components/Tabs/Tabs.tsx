import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import './Tabs.css'

function Tabs({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        'group/tabs flex gap-2 data-[orientation=horizontal]:flex-col',
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  'group/tabs-list inline-flex w-fit items-center justify-center rounded-[var(--radius-8,24px)] p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none',
  {
    variants: {
      variant: {
        default: 'bg-muted',
        line: 'p-0 gap-6 bg-transparent border-b border-[var(--border,#d9dce1)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function TabsList({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  leadingIcon,
  badge,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  /** Icon or element shown before the label */
  leadingIcon?: React.ReactNode
  /** Number shown in a badge (e.g. count); omitted when undefined */
  badge?: number
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-7,20px)] border border-transparent px-4 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
        'group-data-[variant=line]/tabs-list:px-0 group-data-[variant=line]/tabs-list:pb-3 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent',
        'group-data-[variant=default]/tabs-list:data-[state=active]:bg-[var(--color-blue-20,#BCE4FF)] group-data-[variant=default]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)] group-data-[variant=default]/tabs-list:data-[state=active]:border-transparent dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground group-data-[variant=line]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)]',
        'after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[variant=line]/tabs-list:after:!bottom-[-2px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 group-data-[variant=line]/tabs-list:data-[state=active]:after:bg-[var(--color-secondary-blue)]',
        className
      )}
      {...props}
    >
      {leadingIcon && <span className="shrink-0 [&_svg]:size-4">{leadingIcon}</span>}
      {children}
      {badge != null && (
        <span data-slot="tabs-badge" className="ml-1.5 h-6 min-w-6 rounded-xl px-1.5 text-center text-xs font-medium tabular-nums inline-flex items-center justify-center bg-muted text-muted-foreground">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </TabsPrimitive.Trigger>
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
