import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { LoadingSpinner } from '~/ui'
import { getCategories, getItems } from '~/models'
import { CategoryList } from '~/components'
import type { Category, Item } from '~/types'

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)

  if (authData) {
    const categories = getCategories()
    const items = getItems(authData.token)

    const data = Promise.all([categories, items])
    return defer({ data })
  }

  return redirect('/')
}

export default function Component() {
  const { data } = useLoaderData()

  return (
    <Suspense
      fallback={
        <div className="flex grow items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <Await errorElement={<p>oh no</p>} resolve={data}>
        {([categories, items]: [categories: Category[], item: Item[]]) => (
          <div className="container">
            <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-y-20 mb-8">
              {categories
                .filter(
                  (c) => c.categoryName !== 'all' && c.categoryName !== 'list'
                )
                .sort((a, b) => a.categoryName.localeCompare(b.categoryName))
                .map((c) => {
                  const categoryItems = items.filter(
                    (i) => i.categoryId === c.id
                  )

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
          </div>
        )}
      </Await>
    </Suspense>
  )
}
