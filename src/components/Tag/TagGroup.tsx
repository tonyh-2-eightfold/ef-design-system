import React, { type ReactNode } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { cn } from '@/lib/utils'
import { Tag, tagGroupItemClass, type TagSize } from './Tag'

export type TagGroupType = 'single' | 'multiple'

export interface TagGroupProps {
  /** Single or multiple selection */
  type?: TagGroupType
  /** Controlled value (string for single, string[] for multiple) */
  value?: string | string[]
  /** Controlled value change */
  onValueChange?: (value: string | string[]) => void
  /** Uncontrolled default value */
  defaultValue?: string | string[]
  /** Disable all tags */
  disabled?: boolean
  /** Tag size applied to all items (24h, 30h, 44h) */
  size?: TagSize
  children?: ReactNode
  className?: string
}

function isTagChild(
  child: ReactNode
): child is React.ReactElement<{ value?: string; children?: ReactNode; leadingIcon?: ReactNode; trailingIcon?: ReactNode; disabled?: boolean }> {
  return React.isValidElement(child) && typeof child.type !== 'string' && (child.type === Tag || (child.type as { displayName?: string }).displayName === 'Tag')
}

export function TagGroup({
  type = 'single',
  value,
  onValueChange,
  defaultValue,
  disabled = false,
  size = '24',
  children,
  className,
}: TagGroupProps) {
  return (
    <ToggleGroup.Root
      type={type}
      value={value as never}
      onValueChange={onValueChange as never}
      defaultValue={defaultValue as never}
      disabled={disabled}
      className={cn('tag-group', className)}
      asChild={false}
    >
      {React.Children.map(children, (child) => {
        if (!isTagChild(child)) return child
        const itemValue = child.props.value
        if (itemValue == null) return child
        const { leadingIcon, trailingIcon } = child.props
        return (
          <ToggleGroup.Item
            key={itemValue}
            value={itemValue}
            className={tagGroupItemClass(size)}
            disabled={child.props.disabled}
          >
            {leadingIcon != null && <span data-icon="inline-start">{leadingIcon}</span>}
            {child.props.children}
            {trailingIcon != null && <span data-icon="inline-end">{trailingIcon}</span>}
          </ToggleGroup.Item>
        )
      })}
    </ToggleGroup.Root>
  )
}

