import path from 'path'
import { Authenticator } from 'remix-auth'
import type { Auth0Profile } from 'remix-auth-auth0'
import { Auth0Strategy } from 'remix-auth-auth0'
import dotenv from 'dotenv'
import { sessionStorage } from '~/services/session.server'
dotenv.config({ path: path.resolve('./.env') })

interface AuthConfig {
  audience: string
  callback: string
  clientId: string
  clientSecret: string
  domain: string
  logout: string
  secret: string
}

interface Auth {
  profile: Auth0Profile
  token: string
}

export const authConfig = {
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  callback:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_AUTH0_DEV_CALLBACK
      : process.env.REACT_APP_AUTH0_PROD_CALLBACK,
  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  logout:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_LOGOUT_DEV
      : process.env.REACT_APP_LOGOUT,
  secret: process.env.SECRET,
} as AuthConfig

export const auth = new Authenticator<Auth>(sessionStorage)

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: authConfig.callback,
    clientID: authConfig.clientId,
    clientSecret: authConfig.clientSecret,
    domain: authConfig.domain,
    audience: authConfig.audience,
  },
  async ({ accessToken, profile }) => {
    return { token: accessToken, profile }
  }
)

auth.use(auth0Strategy)
export const { getSession, commitSession, destroySession } = sessionStorage
