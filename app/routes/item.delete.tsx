import { redirect } from '@remix-run/node'
import type { ActionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'
import { deleteItem } from '~/models/items'

export const action = async ({ request }: ActionArgs) => {
  const user = await auth.isAuthenticated(request)
  const formData = await request.formData()
  const itemId = formData.get('itemId')

  if (typeof itemId !== 'string') {
    throw new Error('Invalid form data')
  }

  if (user) {
    deleteItem(itemId, user.token)
  } else {
    throw new Error('Please authenticate')
  }

  return redirect('/dashboard')
}
