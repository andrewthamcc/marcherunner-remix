import { Form, useSubmit } from '@remix-run/react'
import { Checkbox, IconButton } from '../../../../components'
import type { Item } from '../../types'

interface CategoryItemProps {
  item: Item
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  const submit = useSubmit()
  const { id, name, purchased } = item

  return (
    <li className="flex items-center justify-between ml-1">
      <Checkbox
        checked={purchased}
        id={`${id}-${name}`}
        label={name}
        name={`${id}-${name}`}
        onChange={() =>
          submit(
            { itemId: id },
            { action: '/item/update', method: 'post', replace: true }
          )
        }
      />
      <Form action="/item/delete" method="post" reloadDocument>
        <input type="hidden" name="itemId" value={id} />
        <IconButton
          a11ylabel="Delete Item"
          className="category-item-delete"
          icon="trash"
          submit
        />
      </Form>
    </li>
  )
}
