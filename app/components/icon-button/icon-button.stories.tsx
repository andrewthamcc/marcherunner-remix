import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconButton } from './icon-button'

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: {
    a11ylabel: 'storybook buton',
    label: 'Icon Button',
    onClick: action('clicked'),
  },
} as Meta

type Story = StoryObj<typeof IconButton>

export const Icon: Story = {
  args: {
    icon: 'close',
  },
}
