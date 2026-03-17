import type { ReactNode } from 'react'
import { DropdownMenu } from '../DropdownMenu/DropdownMenu'
import type { ButtonProps } from '../Button/Button'
import { Button } from '../Button/Button'

export interface ButtonDropdownProps {
  /** Button label (or use trigger for full control) */
  children: ReactNode
  /** Menu items (DropdownMenu.Item, etc.) */
  menu: ReactNode
  /** Button variant/size – used when trigger is not provided */
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  /** Custom trigger element (e.g. <Button>Actions</Button>). When provided, children are ignored for the trigger. */
  trigger?: ReactNode
  /** Props passed to the default Button when trigger is not provided */
  buttonProps?: Omit<ButtonProps, 'children' | 'variant' | 'size'>
  /** Dropdown content align */
  align?: 'start' | 'center' | 'end'
  /** Dropdown content side offset in px */
  sideOffset?: number
}

/**
 * Button that opens a dropdown menu (actions/links). Use for "Actions", "More", etc.
 * Canonically distinct from Select (which is for choosing a form value).
 */
export function ButtonDropdown({
  children,
  menu,
  variant = 'outline',
  size = 'default',
  trigger,
  buttonProps,
  align = 'end',
  sideOffset = 4,
}: ButtonDropdownProps) {
  const triggerNode =
    trigger != null ? (
      trigger
    ) : (
      <Button variant={variant} size={size} {...buttonProps}>
        {children}
      </Button>
    )

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>{triggerNode}</DropdownMenu.Trigger>
      <DropdownMenu.Content align={align} sideOffset={sideOffset}>
        {menu}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
