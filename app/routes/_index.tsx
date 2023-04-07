import {
  ActionArgs,
  LoaderArgs,
  V2_MetaFunction,
  redirect,
} from '@remix-run/node'
import { Form } from '@remix-run/react'
import { auth } from '~/auth/auth.server'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'MarcheRunner' }]
}

export const loader = async ({ request }: LoaderArgs) => {
  const authData = await auth.isAuthenticated(request)
  if (authData) redirect('/dashboard')
  return null
}
export const action = async ({ request }: ActionArgs) => {
  return auth.authenticate('auth0', request)
}

export default function Index() {
  return (
    <div>
      <Form action="/auth/auth0" method="post">
        <button>Login with Auth0</button>
      </Form>

      <Form action="/auth/logout" method="post">
        <button>Logout</button>
      </Form>
    </div>
  )
}
