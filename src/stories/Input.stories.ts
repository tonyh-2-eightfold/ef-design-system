import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Input } from '../components/Input/Input'

const meta = {
  title: 'EF Design System/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    shape: { control: 'select', options: ['rounded', 'pill'], description: 'Rounded corner (12/10/8px) or pill (24px)' },
    state: { control: 'select', options: ['default', 'error', 'warning', 'success'] },
    leadingIcon: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    placeholder: 'Placeholder text',
    onClear: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: { size: 'medium' },
}

export const Large: Story = {
  args: { size: 'large', placeholder: 'Type to search' },
}

export const Small: Story = {
  args: { size: 'small' },
}

export const WithLeadingIcon: Story = {
  args: { size: 'large', leadingIcon: 'search', placeholder: 'Type to search' },
}

export const WithClear: Story = {
  args: {
    size: 'large',
    leadingIcon: 'search',
    placeholder: 'Type to search',
    defaultValue: 'UX Designer',
    onClear: fn(),
  },
}

export const Disabled: Story = {
  args: { size: 'medium', placeholder: 'Disabled', disabled: true },
}

export const Error: Story = {
  args: { size: 'medium', state: 'error', placeholder: 'Error state' },
}

export const Warning: Story = {
  args: { size: 'medium', state: 'warning', placeholder: 'Warning state' },
}

export const Success: Story = {
  args: { size: 'medium', state: 'success', placeholder: 'Success state' },
}

export const PillMedium: Story = {
  args: { size: 'medium', shape: 'pill', placeholder: 'Pill shape' },
}

export const PillLargeWithIcon: Story = {
  args: { size: 'large', shape: 'pill', leadingIcon: 'search', placeholder: 'Type to search' },
}
