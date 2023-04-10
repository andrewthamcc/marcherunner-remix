import { prisma } from '~/db/db'

export const getCategories = async () => {
  return prisma.groceryCategory.findMany()
}

export const getCategory = async (categoryName: string) => {
  return prisma.groceryCategory.findUnique({ where: { categoryName } })
}
