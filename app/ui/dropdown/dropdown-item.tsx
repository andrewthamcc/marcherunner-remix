import React from 'react'
import { Text } from '..'
import type { DropItem } from '.'

interface DropItemProps {
  item: DropItem
  onChange: (item: DropItem) => void
}

export const DropdownItem = ({ item, onChange }: DropItemProps) => {
  // remove disabled item from selectable items
  if (item.disabled) {
    return null
  }

  return (
    <li
      className="flex items-center first-of-type:rounded-t-lg last-of-type:rounded-b-lg hover:bg-slate-50"
      style={{ width: '100%' }}
      tabIndex={0}
    >
      <button
        aria-label={`Select ${item.label}`}
        className="flex items-center gap-2 p-2"
        onClick={() => onChange(item)}
        style={{ width: '100%' }}
      >
        {item.icon}
        <Text variant="body-copy-small">{item.label}</Text>
      </button>
    </li>
  )
}
