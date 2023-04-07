import type { LoaderArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = ({ request }: LoaderArgs) => {
  return auth.authenticate('auth0', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
}
