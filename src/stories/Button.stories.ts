import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '../components/Button/Button'

const meta = {
  title: 'EF Design System/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'orange'],
    },
    children: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Button' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Button' },
}

export const Outline: Story = {
  args: { variant: 'outline', children: 'Button' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Button' },
}

export const Orange: Story = {
  args: { variant: 'orange', children: 'Button' },
}
