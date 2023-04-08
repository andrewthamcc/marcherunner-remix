import { useState } from 'react'
import type { Meta } from '@storybook/react'
import { TextInput } from './text-input'

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
}
export default meta

export const Simple = () => {
  const [value, setValue] = useState('')

  return (
    <TextInput
      label="Text Input - Simple"
      name="story-text-input"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  )
}

export const Disabled = () => {
  return (
    <TextInput
      disabled
      label="Text Input - Disabled"
      name="story-text-input"
      onChange={() => undefined}
      value={'disabled'}
    />
  )
}

export const Required = () => {
  const [value, setValue] = useState('')

  return (
    <TextInput
      label="Text Input - Required"
      name="story-text-input"
      onChange={(e) => setValue(e.target.value)}
      required
      value={value}
    />
  )
}
