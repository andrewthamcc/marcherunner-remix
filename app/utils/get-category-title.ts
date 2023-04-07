import { CategoryVariants } from '../components'

const categoryTiles: Record<CategoryVariants, string> = {
  all: 'All',
  bakery: 'Bakery',
  beverage: 'Beverages',
  dairy: 'Dairy & Cheese',
  dry: 'Dry & Canned Goods',
  frozen: 'Frozen Foods',
  household: 'Household Items',
  list: 'List',
  meat: 'Meat',
  pharmacy: 'Pharmacy & Personal Items',
  prepared: 'Deli & Prepared Foods',
  produce: 'Fruits & Vegetables',
  seafood: 'Seafood',
  snacks: 'Snacks',
}

export const getCategoryTitle = (category: CategoryVariants) =>
  categoryTiles[category]
