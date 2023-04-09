import React from 'react'
import { CategoryIcon, Text } from '../../../../components'
import type { Item } from '../../types'
import { CategoryItem } from '..'

interface SearchedLIstProps {
  items: Item[]
}

export const SearchedList = ({ items }: SearchedLIstProps) => {
  return (
    <div className="searched-items">
      <div className="searched-items-header">
        <CategoryIcon className="searched-items-icon" icon="list" />{' '}
        <Text className="searched-items-title">Search Results</Text>
      </div>
      <hr />
      {items.length === 0 && (
        <Text align="center" variant="body-copy-xsmall">
          No results
        </Text>
      )}
      <ul>
        {items.map((i) => (
          <CategoryItem item={i} key={i.id} />
        ))}
      </ul>
    </div>
  )
}
