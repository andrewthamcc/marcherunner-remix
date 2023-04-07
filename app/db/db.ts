import path from 'path'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
dotenv.config({ path: path.resolve('./.env') })

let db: PrismaClient

declare global {
  var __db: PrismaClient | undefined
}

const env = process.env.NODE_ENV || 'development'
const url =
  env === 'development'
    ? process.env.DATABASE_DEV_URL
    : process.env.DATABASE_URL

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient({
    datasources: {
      db: {
        url,
      },
    },
  })
} else {
  if (!global.__db) {
    global.__db = new PrismaClient({
      datasources: {
        db: {
          url,
        },
      },
    })
  }
  db = global.__db
}

export { db }
