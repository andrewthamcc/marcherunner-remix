import { redirect } from '@remix-run/node'
import type { ActionArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = () => redirect('/dashboard')
export const action = ({ request }: ActionArgs) =>
  auth.authenticate('auth0', request)
