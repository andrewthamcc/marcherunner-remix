import { useEffect, useState } from 'react'
import { Form } from '@remix-run/react'
import {
  CategoryIcon,
  Dropdown,
  IconButton,
  LoadingSpinner,
  Text,
} from '../../../../components'
import type { CategoryVariants, DropItem } from '../../../../components'
import { useModal } from '../../../../hooks'
import type { Category } from '../../types'
import { getCategoryTitle } from '~/utils/get-category-title'

interface Props {
  categories: Category[]
  handleFilter: (categoryId: string | null) => void
  handleSearch: (search: string) => void
  hasItems: boolean
  hasPurchasedItems: boolean
}

export const ShoppingListControls = ({
  categories,
  handleFilter,
  handleSearch,
  hasItems,
  hasPurchasedItems,
}: Props) => {
  const [dropdownList, setDropdownList] = useState<DropItem[] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<DropItem | null>(
    null
  )
  const { isOpen, closeModal, openModal } = useModal()

  useEffect(() => {
    const dropdownList = categories
      .map((c) => ({
        icon: <CategoryIcon icon={c.categoryName as CategoryVariants} />,
        label: getCategoryTitle(c.categoryName as CategoryVariants),
        value: c.id,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
    setDropdownList(dropdownList)
    setSelectedCategory(dropdownList[0])
  }, [])

  return (
    <div className="flex items-center justify-between py-8">
      {/* <div className="shopping-list-controls-search-container">
        <SearchInput
          className="shopping-list-controls-search"
          id="shopping-list-search"
          name="shopping-list-search"
          onSearch={handleSearch}
          placeholder="Search"
        />
      </div> */}

      <div className="flex justify-center items-center">
        {/* {dropdownList && selectedCategory && (
          <Dropdown
            list={dropdownList}
            onChange={(category) => {
              setSelectedCategory(category)

              if (category.label === 'All') {
                handleFilter(null)
                return
              }

              handleFilter(category.value as string)
            }}
            value={selectedCategory}
          />
        )} */}

        <div className="flex items-center gap-2">
          <Form
            className="flex items-center"
            action="/clear/purchased"
            method="post"
            reloadDocument
          >
            <IconButton
              a11ylabel="delete purchased items"
              color="green"
              disabled={!hasPurchasedItems}
              icon="checkout cart"
              submit
            />
          </Form>

          <Form action="/clear/all" method="post" reloadDocument>
            <IconButton
              a11ylabel="delete all items"
              color="red"
              disabled={!hasItems}
              icon="clear cart"
              submit
            />
          </Form>
        </div>
      </div>
    </div>
  )
}
