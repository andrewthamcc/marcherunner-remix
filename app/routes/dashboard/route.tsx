import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { Await, useAsyncError, useLoaderData } from '@remix-run/react'
import { LoadingSpinner } from '../../components'
import { ShoppingList } from './components'
import { auth } from '~/auth/auth.server'
import { getCategories } from '~/models/grocery-category'
import { Layout } from '~/layout'
import { getItems } from '~/models/items'

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

export default function Dashboard() {
  const { data } = useLoaderData()

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
      <Await errorElement={<ErrorEl />} resolve={data}>
        {([categories, items]) => {
          return (
            <Layout isAuthenticated>
              <ShoppingList categories={categories} items={items} />
            </Layout>
          )
        }}
      </Await>
    </Suspense>
  )
}

const ErrorEl = () => {
  const error = useAsyncError()
  console.error(error)
  return null
}
