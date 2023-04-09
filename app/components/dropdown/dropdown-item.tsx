import React from 'react'
import { Text } from '..'
import type { DropItem } from '.'

interface Props {
  item: DropItem
  onChange: (item: DropItem) => void
}

export const DropdownItem = ({ item, onChange }: Props) => {
  // remove disabled item from selectable items
  if (item.disabled) {
    return null
  }

  return (
    <li
      className="px-2 py-1 flex items-center"
      style={{ width: '100%' }}
      tabIndex={0}
    >
      <button
        aria-label={`Select ${item.label}`}
        className="grow flex"
        onClick={() => onChange(item)}
      >
        {item.icon}
        <Text variant="body-copy-small">{item.label}</Text>
      </button>
    </li>
  )
}
