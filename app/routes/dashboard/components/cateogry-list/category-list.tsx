import clsx from 'clsx'
import type { Item, Category } from '../../types'
import { Text } from '../../../../components'
import { CategoryControls, CategoryItem } from '..'

interface CategoryListProps {
  category: Category
  isEmpty: boolean
  items: Item[]
}

export const CategoryList = ({
  category,
  isEmpty,
  items,
}: CategoryListProps) => {
  const isEmptyStyle = clsx(isEmpty && 'order-last')

  return (
    <div className={`p2 ${isEmptyStyle}`}>
      <CategoryControls category={category} />
      <hr />
      {!items.length ? (
        <Text className="mt-4 italic" align="center" variant="body-copy-xsmall">
          Nothing here...
        </Text>
      ) : (
        <ul className="mt-2">
          {items.map((i) => (
            <CategoryItem item={i} key={i.id} />
          ))}
        </ul>
      )}
    </div>
  )
}
