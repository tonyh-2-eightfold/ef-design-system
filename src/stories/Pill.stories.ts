import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pill } from '../components/Pill/Pill'

const meta = {
  title: 'EF Design System/Pill',
  component: Pill,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'critical', 'empty', 'orange', 'blueGreen'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    children: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof Pill>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {
  args: { variant: 'neutral', children: 'Pill' },
}

export const Critical: Story = {
  args: { variant: 'critical', children: 'Critical' },
}

export const WithIcon: Story = {
  args: { variant: 'orange', children: 'Label', icon: 'star' },
}

export const Small: Story = {
  args: { variant: 'neutral', size: 'small', children: 'Small' },
}

export const Large: Story = {
  args: { variant: 'neutral', size: 'large', children: 'Large' },
}
