import { useState } from 'react'
import type { Meta } from '@storybook/react'
import { RadioButton } from './radio-button'

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
  component: RadioButton,
}
export default meta

export const Simple = () => {
  const [selected, setSelected] = useState('Value 1')

  return (
    <>
      <RadioButton
        checked={selected === 'Value 1'}
        id="radio-button-story-1"
        label="Radio Button Label 1"
        name="radio-button-story"
        value="Value 1"
        onChange={() => setSelected('Value 1')}
      />
      <RadioButton
        checked={selected === 'Value 2'}
        id="radio-button-story-2"
        label="Radio Button Label 2"
        name="radio-button-story"
        value="Value 2"
        onChange={() => setSelected('Value 2')}
      />
    </>
  )
}
