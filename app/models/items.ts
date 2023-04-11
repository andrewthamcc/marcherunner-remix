import { hasPermission } from './user'
import { prisma } from '~/db/db'

interface Item {
  name: string
  categoryId: string
  userId: string
}

export const getItem = async (itemId: string, token: string) => {
  await hasPermission('read:items', token)
  return prisma.item.findUnique({ where: { id: itemId } })
}

export const getItems = async (token: string) => {
  const userId = await hasPermission('read:items', token)
  return prisma.item.findMany({ where: { userId } })
}

export const searchItems = async (name: string, token: string) => {
  const userId = await hasPermission('read:items', token)
  return prisma.item.findMany({ where: { userId, name: { contains: name } } })
}

export const getCategoryItems = async (categoryName: string, token: string) => {
  const userId = await hasPermission('read:items', token)

  const category = await prisma.groceryCategory.findUnique({
    where: { categoryName },
  })

  return prisma.item.findMany({ where: { userId, categoryId: category?.id } })
}

export const createItem = async (item: Item, token: string) => {
  await hasPermission('create:item', token)
  const { name, categoryId, userId } = item

  return prisma.item.create({
    data: {
      name,
      categoryId,
      userId,
    },
  })
}

export const updateItem = async (itemId: string, token: string) => {
  await hasPermission('update:item', token)

  const item = await prisma.item.findUnique({ where: { id: itemId } })
  if (!item) throw new Error('That item could not be found.')

  return prisma.item.update({
    where: {
      id: item.id,
    },
    data: {
      purchased: !item.purchased,
    },
  })
}

export const deleteItem = async (itemId: string, token: string) => {
  await hasPermission('delete:item', token)

  const item = prisma.item.findUnique({ where: { id: itemId } })
  if (!item) throw new Error('That item could not be found.')

  return prisma.item.delete({
    where: {
      id: itemId,
    },
  })
}

export const deleteItems = async (items: string[], token: string) => {
  await hasPermission('delete:items', token)

  return prisma.item.deleteMany({
    where: {
      id: {
        in: items,
      },
    },
  })
}

export const deleteAllItems = async (token: string) => {
  const userId = await hasPermission('delete:allitems', token)

  return prisma.item.deleteMany({ where: { userId } })
}

export const deletePurchasedItems = async (token: string) => {
  const userId = await hasPermission('delete:purchased', token)

  return prisma.item.deleteMany({
    where: { userId, purchased: true },
  })
}
