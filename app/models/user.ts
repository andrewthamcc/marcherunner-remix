import { isTokenValid } from '~/auth/is-token-valid'
import type { Auth0TokenResponse, Permission } from '~/auth/types'

export const PERMISSION_ERROR = 'User does not have the correct permissions.'

/**
 *
 * @param permission: Permissions
 * @param token: auth0 token
 * @returns userId: - string
 */
export const hasPermission = async (permission: Permission, token: string) => {
  const res = (await isTokenValid(token)) as unknown as Auth0TokenResponse

  if (res.permissions.includes(permission)) return res.sub

  throw new Error(PERMISSION_ERROR)
}
