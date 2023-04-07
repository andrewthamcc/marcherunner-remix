import { PrismaClient } from '@prisma/client'
import { seedGroceryCategories } from './grocery-categories'

const prisma = new PrismaClient()

async function main() {
  seedGroceryCategories()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
  })
