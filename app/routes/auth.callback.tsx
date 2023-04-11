import type { LoaderArgs } from '@remix-run/node'
import { auth } from '~/auth/auth.server'

export const loader = ({ request }: LoaderArgs) =>
  auth.authenticate('auth0', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
