import type { Meta } from '@storybook/react'
import { Symbol, SYMBOL_TYPES } from './symbol'

const meta: Meta<typeof Symbol> = {
  title: 'Atoms/Symbol',
  component: Symbol,
}
export default meta
export const symbols = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {SYMBOL_TYPES.map((symbol, index) => (
        <Symbol key={index} symbol={symbol} />
      ))}
    </div>
  )
}
