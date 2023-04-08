import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
}
export default meta

export const Simple = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      checked={checked}
      id="checkbox"
      label="Checkbox"
      name="checkbox-story"
      onChange={() => setChecked(!checked)}
    />
  )
}
