import clsx from 'clsx'
import { useFetcher } from '@remix-run/react'
import { Checkbox, IconButton } from '~/ui'
import type { Item } from '~/types'

interface CategoryItemProps {
  item: Item
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  const fetcher = useFetcher()
  const isDeleting = fetcher?.submission?.method === 'DELETE'
  const isUpdating =
    fetcher.formMethod === 'PUT' && fetcher.state === 'submitting'

  return (
    <li
      className={`flex items-center justify-between ml-1 ${clsx(
        isDeleting && 'hidden'
      )}`}
    >
      <Checkbox
        checked={item.purchased}
        id={item.id}
        label={item.name}
        loading={isUpdating}
        name={item.id}
        onChange={() =>
          fetcher.submit(null, { action: `/item/${item.id}`, method: 'PUT' })
        }
      />
      <fetcher.Form action={`/item/${item.id}`} method="DELETE">
        <IconButton
          a11ylabel="Delete Item"
          className="category-item-delete"
          icon="trash"
          size="small"
          submit
        />
      </fetcher.Form>
    </li>
  )
}
