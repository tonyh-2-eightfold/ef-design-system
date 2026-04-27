import type { ReactNode } from 'react'
import { cloneElement, isValidElement } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import './Badge.css'

const badgeVariants = cva('badge', {
  variants: {
    variant: {
      default: 'badge--default',
      primary: 'badge--primary',
      secondary: 'badge--secondary',
      destructive: 'badge--destructive',
      outline: 'badge--outline',
      ghost: 'badge--ghost',
      link: 'badge--link',
    },
    size: {
      '44': 'badge--44',
      '30': 'badge--30',
      '24': 'badge--24',
      none: 'badge--none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: '24',
  },
})

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>
export type BadgeSize = NonNullable<VariantProps<typeof badgeVariants>['size']>

function wrapIcon(icon: ReactNode, dataIcon: 'inline-start' | 'inline-end'): ReactNode {
  if (icon == null) return null
  if (isValidElement(icon)) {
    return cloneElement(icon as React.ReactElement<{ 'data-icon'?: string }>, {
      'data-icon': dataIcon,
    })
  }
  return (
    <span data-icon={dataIcon} style={{ display: 'inline-flex' }}>
      {icon}
    </span>
  )
}

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>,
    VariantProps<typeof badgeVariants> {
  children?: ReactNode
  asChild?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

export function Badge({
  className,
  variant = 'default',
  size = '24',
  asChild = false,
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'
  const content = asChild ? (
    children
  ) : (
    <>
      {leadingIcon != null && wrapIcon(leadingIcon, 'inline-start')}
      {children}
      {trailingIcon != null && wrapIcon(trailingIcon, 'inline-end')}
    </>
  )

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {content}
    </Comp>
  )
}

export { badgeVariants }
