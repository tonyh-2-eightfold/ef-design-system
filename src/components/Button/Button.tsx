import type { ButtonHTMLAttributes } from 'react'
import { cloneElement, isValidElement, type ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import './Button.css'

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: 'btn--default',
      primary: 'btn--primary',
      destructive: 'btn--destructive',
      outline: 'btn--outline',
      secondary: 'btn--secondary',
      ghost: 'btn--ghost',
      link: 'btn--link',
      orange: 'btn--orange',
    },
    size: {
      default: 'btn--default',
      xs: 'btn--xs',
      sm: 'btn--sm',
      lg: 'btn--lg',
      icon: 'btn--icon',
      'icon-xs': 'btn--icon-xs',
      'icon-sm': 'btn--icon-sm',
      'icon-lg': 'btn--icon-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<VariantProps<typeof buttonVariants>> {
  asChild?: boolean
  /** Renders before the label with correct spacing (data-icon="inline-start") */
  leadingIcon?: ReactNode
  /** Renders after the label with correct spacing (data-icon="inline-end") */
  trailingIcon?: ReactNode
  /** Number shown in a badge pill after the label (e.g. count); omitted when undefined */
  badge?: number
}

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

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  leadingIcon,
  trailingIcon,
  badge,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const hasSlots = leadingIcon != null || trailingIcon != null || badge != null
  const content = hasSlots ? (
    <>
      {leadingIcon != null && wrapIcon(leadingIcon, 'inline-start')}
      {children}
      {badge != null && (
        <span className="btn__badge" data-slot="button-badge">
          {badge > 99 ? '99+' : badge}
        </span>
      )}
      {trailingIcon != null && wrapIcon(trailingIcon, 'inline-end')}
    </>
  ) : (
    children
  )
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {content}
    </Comp>
  )
}

export { buttonVariants }
