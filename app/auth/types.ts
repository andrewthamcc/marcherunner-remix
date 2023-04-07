import type { JwtPayload } from 'jsonwebtoken'

export const PERMISSIONS = [
  'create:item',
  'delete:item',
  'delete:items',
  'delete:allitems',
  'delete:purchased',
  'read:items',
  'update:item',
] as const
export type Permission = (typeof PERMISSIONS)[number]

export interface Auth0TokenResponse extends JwtPayload {
  sub: string
  permissions: Permission[]
}

export interface User {
  id: string
  permissions: Permission[]
}
