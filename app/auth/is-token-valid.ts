import path from 'path'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import type { JwtHeader, JwtPayload } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
dotenv.config({ path: path.resolve('./.env') })

const jwksURL = `${process.env.AUTH0_JWKSURL}/.well-known/jwks.json`
const client = jwksClient({
  jwksUri: jwksURL,
})

type CallBack = <X, Y>(a: X, b: Y) => void

async function getKey(header: JwtHeader, callback: CallBack) {
  try {
    const key = await client.getSigningKey(header.kid)
    callback(null, key.getPublicKey())
  } catch (error) {
    return error
  }
}

export const isTokenValid = (token: string): Promise<string | JwtPayload> => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error('No JWT provided'))
    }

    jwt.verify(
      token,
      getKey as unknown as CallBack,
      {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER,
        algorithms: ['RS256'],
      },
      (error, decoded) => {
        if (error || decoded === undefined) {
          reject(error || 'No JWT Provided')
        } else {
          resolve(decoded)
        }
      }
    )
  })
}
