import clsx from 'clsx'
import CaretDown from './icons/caret-down'
import CartCheckout from './icons/cart-checkout'
import CartClear from './icons/cart-clear'
import Chevron from './icons/chevron'
import Close from './icons/close'
import Logout from './icons/logout'
import Search from './icons/search'
import Trash from './icons/trash'

export const ICON_TYPES = [
  'caret down',
  'checkout cart',
  'clear cart',
  'chevron',
  'close',
  'logout',
  'search',
  'trash',
] as const
export type IconVariants = (typeof ICON_TYPES)[number]

const iconVariants: Record<IconVariants, JSX.Element> = {
  'caret down': <CaretDown />,
  'checkout cart': <CartCheckout />,
  'clear cart': <CartClear />,
  chevron: <Chevron />,
  close: <Close />,
  logout: <Logout />,
  search: <Search />,
  trash: <Trash />,
}

interface IconProps {
  className?: string
  color?: 'green' | 'orange' | 'red' | 'gray'
  icon: IconVariants
}

export const Icon: React.FC<IconProps> = ({
  className,
  color = 'gray',
  icon,
}) => {
  const SVG = iconVariants[icon]

  const iconColor = clsx(
    color === 'green' && '[&>svg]:fill-runnerGreen',
    color === 'orange' && '[&>svg]:fill-runnerOrange',
    color === 'red' && '[&>svg]:fill-red-500',
    color === 'gray' && '[&>svg]:fill-gray-400'
  )

  return (
    <div
      className={`${
        className ? className : ''
      } flex items-center justify-center h-8 w-8 ${iconColor}`}
    >
      {SVG}
    </div>
  )
}
