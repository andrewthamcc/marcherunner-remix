import { useState, useRef } from 'react'
import type { ElementRef } from 'react'
import { Form } from '@remix-run/react'
import {
  Button,
  CategoryIcon,
  IconButton,
  Symbol,
  TextInput,
  Text,
} from '../../../../components'
import type { CategoryVariants } from '../../../../components'
import type { Category } from '../../types'
import { getCategoryTitle } from '~/utils/get-category-title'

interface Props {
  category: Category
}

type InputHandle = ElementRef<typeof TextInput>

export const CategoryControls = ({ category }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [itemName, setItemName] = useState('')
  const itemInput = useRef<InputHandle>(null)

  return (
    <div className="py-2">
      {!isEditing ? (
        <Button
          a11ylabel={`Add item ${category.categoryName}`}
          className="flex items-center gap-2"
          label="add item"
          onClick={() => setIsEditing(true)}
          fullWidth
          plain
        >
          <CategoryIcon
            className="h-8 w-8"
            icon={category.categoryName as CategoryVariants}
          />
          <Text className="font-semibold" variant="body-copy">
            {getCategoryTitle(category.categoryName as CategoryVariants)}
          </Text>
          <Symbol className="w-3.5 h-3.5 ml-auto" symbol="add orange" />
        </Button>
      ) : (
        <Form
          className="flex items-center gap-2"
          action="/item/create"
          method="post"
          reloadDocument
        >
          <CategoryIcon
            className="h-8 w-8"
            icon={category.categoryName as CategoryVariants}
          />
          <input type="hidden" name="categoryId" value={category.id} />
          <TextInput
            autofocus
            className="grow"
            id={category.id}
            name="name"
            onBlur={() => setIsEditing(false)}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Add an item"
            ref={itemInput}
            value={itemName}
          />
          <Button
            a11ylabel="add item"
            disabled={!itemName}
            label="add item"
            type="submit"
            plain
          >
            <Symbol
              className="w-5 h-5"
              symbol={itemName ? 'add green' : 'add disabled'}
            />
          </Button>

          <IconButton
            a11ylabel="clear"
            className="w-10 h-10"
            color="red"
            icon="close"
            onClick={() => {
              setItemName('')
              setIsEditing(false)
            }}
          />
        </Form>
      )}
    </div>
  )
}
