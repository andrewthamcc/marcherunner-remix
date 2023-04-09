import { Text } from '../../../../components'
import type { Category, Item } from '../../types'
import { CategoryControls, CategoryItem } from '..'

interface FilteredListProps {
  category: Category
  items: Item[]
}

export const FilteredList = ({ category, items }: FilteredListProps) => {
  return (
    <div className="filtered-items">
      <CategoryControls category={category} />
      <hr />
      {items.length === 0 && (
        <Text align="center" variant="body-copy-xsmall">
          Nothing here...
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
