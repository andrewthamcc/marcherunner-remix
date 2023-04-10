import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { LoadingSpinner } from '~/ui'
import { getCategory, getCategoryItems } from '~/models'
import { CategoryList } from '~/components'

export const loader = async ({ request, params }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)
  if (typeof params.category !== 'string') throw new Error('Invalid request')

  if (authData) {
    const category = getCategory(params.category)
    const items = getCategoryItems(params.category, authData.token)

    const data = Promise.all([category, items])
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
        {([category, items]) => (
          <div className="container">
            <CategoryList
              category={category}
              isEmpty={!items.length}
              items={items}
            />
          </div>
        )}
      </Await>
    </Suspense>
  )
}
