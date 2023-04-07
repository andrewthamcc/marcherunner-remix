import { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, ButtonProps } from './button'

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'Button',
    onClick: action('clicked'),
  },
} as Meta

export const GreenButton = () => <Button label="button" />
