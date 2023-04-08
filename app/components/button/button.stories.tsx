import type { StoryObj, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
    onClick: action('clicked'),
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Plain: Story = {
  args: {
    plain: true,
  },
}
