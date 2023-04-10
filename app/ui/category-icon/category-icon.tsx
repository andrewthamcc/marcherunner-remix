import All from './icons/all-items'
import Bakery from './icons/bakery'
import Beverage from './icons/beverage'
import Dairy from './icons/dairy'
import Dry from './icons/dry'
import Frozen from './icons/frozen'
import Household from './icons/household'
import List from './icons/list'
import Meat from './icons/meat'
import Pharmacy from './icons/pharmacy'
import Prepared from './icons/prepared'
import Produce from './icons/produce'
import Seafood from './icons/seafood'
import Snacks from './icons/snacks'

export const CATEGORY_ICONS = [
  'all',
  'bakery',
  'beverage',
  'dairy',
  'dry',
  'frozen',
  'household',
  'list',
  'meat',
  'pharmacy',
  'prepared',
  'produce',
  'seafood',
  'snacks',
] as const
export type CategoryVariants = (typeof CATEGORY_ICONS)[number]

const categoryVariants: Record<CategoryVariants, JSX.Element> = {
  all: <All />,
  bakery: <Bakery />,
  beverage: <Beverage />,
  dairy: <Dairy />,
  dry: <Dry />,
  frozen: <Frozen />,
  household: <Household />,
  list: <List />,
  meat: <Meat />,
  pharmacy: <Pharmacy />,
  prepared: <Prepared />,
  produce: <Produce />,
  seafood: <Seafood />,
  snacks: <Snacks />,
}

interface CategoryIconProps {
  className?: string
  icon: CategoryVariants
}

export const CategoryIcon = ({ className, icon }: CategoryIconProps) => {
  return (
    <div className={`${className ? className : 'w-6 h-6'}`}>
      {categoryVariants[icon]}
    </div>
  )
}
