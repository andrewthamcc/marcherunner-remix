import { prisma } from '~/db/db'

export const getCategories = async () => {
  return prisma.groceryCategory.findMany()
}
