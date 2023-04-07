import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const GROCERY_CATEGORIES = [
  'all',
  'bakery',
  'beverage',
  'dairy',
  'dry',
  'frozen',
  'household',
  'meat',
  'pharmacy',
  'prepared',
  'produce',
  'seafood',
  'snacks',
] as const

export const seedGroceryCategories = async () => {
  GROCERY_CATEGORIES.forEach(async (c) => {
    await prisma.groceryCategory.upsert({
      where: { categoryName: c as string },
      update: {},
      create: {
        categoryName: c,
      },
    })
  })
}
