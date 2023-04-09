import type { CategoryVariants } from '~/components'

export interface Item {
  readonly id: string
  readonly name: string
  readonly userId: string
  readonly categoryId: string
  readonly purchased: boolean
}
export interface Category {
  readonly id: string
  readonly categoryName: CategoryVariants
}
