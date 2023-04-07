import { Suspense } from 'react'
import { defer, redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { Await, useAsyncError, useLoaderData } from '@remix-run/react'
import { auth } from '~/auth/auth.server'
import { getCategories } from '~/models/grocery-category'
import { getItems } from '~/models/items'

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)

  if (authData) {
    const categories = getCategories()
    const items = getItems(authData?.token)

    const data = Promise.all([categories, items])
    return defer({ data })
  }

  return redirect('/')
}

export default function Dashboard() {
  const { data } = useLoaderData()

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <Await errorElement={<ErrorEl />} resolve={data}>
          {([categories, items]) => {
            console.log(categories, items)
            return <h1>Dashboard!</h1>
          }}
        </Await>
      </Suspense>
    </div>
  )
}

const ErrorEl = () => {
  const error = useAsyncError()
  console.error(error)
  return null
}
