import clsx from 'clsx'
import AddDisabled from './symbols/add-disabled'
import AddGreen from './symbols/add-green'
import AddOrange from './symbols/add-orange'
import Checkmark from './symbols/checkmark'
import ErrorSymbol from './symbols/error'
import Info from './symbols/info'
import Selected from './symbols/selected'
import Success from './symbols/success'
import Unselected from './symbols/unselected'
import Warning from './symbols/warning'

export const SYMBOL_TYPES = [
  'add disabled',
  'add green',
  'add orange',
  'checkmark',
  'error',
  'info',
  'selected',
  'success',
  'unselected',
  'warning',
] as const
export type SymbolVariants = (typeof SYMBOL_TYPES)[number]

const symbolVariants: Record<SymbolVariants, JSX.Element> = {
  'add disabled': <AddDisabled />,
  'add green': <AddGreen />,
  'add orange': <AddOrange />,
  checkmark: <Checkmark />,
  error: <ErrorSymbol />,
  info: <Info />,
  selected: <Selected />,
  success: <Success />,
  unselected: <Unselected />,
  warning: <Warning />,
}

export interface SymbolProps {
  className?: string // passthrough for className
  symbol: SymbolVariants // symbol
  size?: 'small' | 'medium' | 'large'
}

export const Symbol = ({ className, size = 'medium', symbol }: SymbolProps) => (
  <div
    className={`${className ? className : ''} ${clsx(
      size === 'small' && 'h-3.5 w-3.5',
      size === 'medium' && 'h-6 w-6',
      size === 'medium' && 'h-6 w-6'
    )}`}
  >
    {symbolVariants[symbol]}
  </div>
)
