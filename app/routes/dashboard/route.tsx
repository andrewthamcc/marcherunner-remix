import { Suspense, useEffect, useState } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import {
  Await,
  Outlet,
  useFetcher,
  useLoaderData,
  useNavigate,
  useParams,
} from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { Layout } from '~/layout'
import { CategoryIcon, Dropdown, IconButton, LoadingSpinner } from '~/ui'
import type { CategoryVariants, DropItem } from '~/ui'
import { getCategories, getItems } from '~/models'
import { getCategoryTitle } from '~/utils/get-category-title'
import type { Category, Item } from '~/types'

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)

  if (authData) {
    const categories = await getCategories()
    const items = getItems(authData.token)

    return defer({ categories, items })
  }

  return redirect('/')
}

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState<DropItem | null>(
    null
  )
  const { categories, items } = useLoaderData()
  const { category } = useParams()
  const fetcher = useFetcher()
  const navigate = useNavigate()

  const dropdownList = (categories as Category[])
    .map((c) => ({
      icon: <CategoryIcon icon={c.categoryName as CategoryVariants} />,
      label: getCategoryTitle(c.categoryName as CategoryVariants),
      value: c.categoryName,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))

  useEffect(() => {
    const currentCategory = dropdownList.find((l) => l.value === category)
    setSelectedCategory(currentCategory ?? dropdownList[0])
  }, [category])

  return (
    <Suspense
      fallback={
        <Layout>
          <div className="flex grow items-center justify-center">
            <LoadingSpinner />
          </div>
        </Layout>
      }
    >
      <Await errorElement={<p>uh oh</p>} resolve={items}>
        {(items: Item[]) => (
          <Layout isAuthenticated>
            <div className="container flex items-center my-8">
              {dropdownList && selectedCategory && (
                <Dropdown
                  list={dropdownList}
                  onChange={(category) => {
                    setSelectedCategory(category)

                    if (category.value === 'all') {
                      return navigate('/dashboard')
                    }

                    navigate(`/dashboard/${category.value}`)
                  }}
                  value={selectedCategory}
                />
              )}

              {!category && (
                <div className="flex items-center gap-2">
                  <fetcher.Form action="/clear/purchased" method="post">
                    <IconButton
                      a11ylabel="delete purchased items"
                      color="green"
                      disabled={!(items.filter((i) => i.purchased).length > 0)}
                      icon="checkout cart"
                      submit
                      size="medium"
                    />
                  </fetcher.Form>

                  <fetcher.Form action="/clear/all" method="post">
                    <IconButton
                      a11ylabel="delete all items"
                      color="red"
                      disabled={items.length === 0}
                      icon="clear cart"
                      submit
                      size="medium"
                    />
                  </fetcher.Form>
                </div>
              )}
            </div>
            <Outlet />
          </Layout>
        )}
      </Await>
    </Suspense>
  )
}
