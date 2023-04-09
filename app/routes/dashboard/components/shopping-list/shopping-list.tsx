import { useState } from 'react'
import type { Category, Item } from '../../types'
import { CategoryList, ShoppingListControls } from '..'

interface ShoppingListProps {
  items: Item[]
  categories: Category[]
}

export const ShoppingList = ({ items, categories }: ShoppingListProps) => {
  const [searchedItems, setSearchedItems] = useState<Item[] | null>(null)
  const [filteredCategory, setFilteredCategory] = useState<Category | null>(
    null
  )

  const handleFilter = (categoryId: string | null) => {
    if (!categoryId) {
      setFilteredCategory(null)
      return
    }

    const category = categories.find((c) => c.id === categoryId)
    setFilteredCategory(category as Category)
  }

  const handleSearch = (search: string) => {
    if (search === '') {
      setSearchedItems(null)
      return
    }

    const searched = items.filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase())
    )
    setSearchedItems(searched)
  }

  const isFiltered = !searchedItems && filteredCategory
  const isSearched = searchedItems && !filteredCategory

  return (
    <div className="container">
      <ShoppingListControls
        categories={categories}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
        hasItems={items.length > 0}
        hasPurchasedItems={items.filter((i) => i.purchased).length > 0}
      />
      {/* {isFiltered && (
        <FilteredList
          category={filteredCategory}
          items={items.filter((i) => i.categoryId === filteredCategory.id)}
        />
      )}
      {isSearched && <SearchedList items={searchedItems} />} */}

      {!isFiltered && !isSearched && (
        <div className="grid grid-cols-3 gap-x-8 gap-y-20">
          {categories
            .filter(
              (c) => c.categoryName !== 'all' && c.categoryName !== 'list'
            )
            .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
            .map((c) => {
              const categoryItems = items.filter((i) => i.categoryId === c.id)

              return (
                <CategoryList
                  category={c}
                  isEmpty={!categoryItems.length}
                  items={categoryItems}
                  key={c.id}
                />
              )
            })}
        </div>
      )}
    </div>
  )
}
