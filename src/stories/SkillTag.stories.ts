import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { SkillTag } from '../components/SkillTag/SkillTag'

const meta = {
  title: 'EF Design System/SkillTag',
  component: SkillTag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['selected', 'addable'] },
    children: { control: 'text' },
  },
  args: { onRemove: fn(), onAdd: fn() },
} satisfies Meta<typeof SkillTag>

export default meta
type Story = StoryObj<typeof meta>

export const Selected: Story = {
  args: { variant: 'selected', children: 'React', onRemove: fn() },
}

export const SelectedWithRemove: Story = {
  args: { variant: 'selected', children: 'TypeScript', onRemove: fn() },
}

export const Addable: Story = {
  args: { variant: 'addable', children: 'Add skill', onAdd: fn() },
}
