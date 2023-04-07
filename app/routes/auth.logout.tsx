// app/routes/auth/logout.ts
import type { ActionArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { authConfig, getSession, destroySession } from '~/auth/auth.server'

export const action = async ({ request }: ActionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const logoutURL = new URL(authConfig.logout)

  logoutURL.searchParams.set('client_id', authConfig.clientId)
  logoutURL.searchParams.set('returnTo', authConfig.callback)

  return redirect(logoutURL.toString(), {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}
