import { useState } from 'react'
import type { Meta } from '@storybook/react'
import { CategoryIcon } from '../category-icon'
import { Dropdown } from './dropdown'
import type { DropItem } from './dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
} as Meta

const list: DropItem[] = [
  {
    disabled: false,
    label: 'Item 1',
    value: '1',
    icon: <CategoryIcon icon="all" />,
  },
  {
    disabled: false,
    label: 'Item 2',
    value: '1',
    icon: <CategoryIcon icon="list" />,
  },
  {
    disabled: false,
    label: 'Item 3',
    value: '1',
    icon: <CategoryIcon icon="produce" />,
  },
]

export const Simple = () => {
  const [selected, setSelected] = useState<null | DropItem>(null)

  return (
    <div>
      <Dropdown
        label="Select..."
        list={list}
        onChange={(item) => setSelected(item)}
        value={selected}
      />
      <div id="portal-root" />
    </div>
  )
}

export const Disabled = () => {
  const [selected, setSelected] = useState<null | DropItem>(null)

  return (
    <div>
      <Dropdown
        disabled
        label="Disabled"
        list={list}
        onChange={(item) => setSelected(item)}
        value={selected}
      />
      <div id="portal-root" />
    </div>
  )
}
