import { Suspense, useEffect, useState } from 'react'
import clsx from 'clsx'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import {
  Await,
  Outlet,
  useFetcher,
  useLoaderData,
  useLocation,
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
  const { pathname } = useLocation()

  const dropdownList = (categories as Category[])
    .filter((c) => c.categoryName !== 'list')
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
      <Await errorElement={<p>oh no</p>} resolve={items}>
        {(items: Item[]) => (
          <Layout isAuthenticated>
            <div className="container flex gap-4 items-center justify-between my-8">
              {selectedCategory && (
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
                  listWidth={window.screen.width < 600 ? 225 : undefined}
                  width={window.screen.width < 600 ? 225 : undefined}
                />
              )}

              {pathname === '/dashboard' && (
                <div className="flex items-center gap-4">
                  <fetcher.Form
                    className="flex flex-col items-center justify-center"
                    action="/clear/purchased"
                    method="post"
                  >
                    <IconButton
                      a11ylabel="delete purchased items"
                      color="green"
                      disabled={!(items.filter((i) => i.purchased).length > 0)}
                      icon="checkout cart"
                      submit
                      size="large"
                    />
                    <p
                      className={clsx(
                        !(items.filter((i) => i.purchased).length > 0)
                          ? 'text-gray-500'
                          : 'text-runnerGreen',
                        'text-center text-[6px] font-semibold'
                      )}
                    >
                      Clear Purchased
                    </p>
                  </fetcher.Form>

                  <fetcher.Form
                    className="flex flex-col items-center justify-center"
                    action="/clear/all"
                    method="post"
                  >
                    <IconButton
                      className="!mb-0"
                      a11ylabel="delete all items"
                      color="red"
                      disabled={items.length === 0}
                      icon="clear cart"
                      submit
                      size="large"
                    />
                    <p
                      className={clsx(
                        items.length === 0 ? 'text-gray-500' : 'text-red-500',
                        'text-center text-[6px] font-semibold'
                      )}
                    >
                      Empty Cart
                    </p>
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
