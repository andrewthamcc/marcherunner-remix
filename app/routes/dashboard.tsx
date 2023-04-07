import { redirect } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)

  if (authData) return authData
  return redirect('/')
}

export default function Dashboard() {
  return (
    <div>
      <p>Dashboard!</p>
    </div>
  )
}
