import type { Meta } from '@storybook/react'
import { CategoryIcon, CATEGORY_ICONS } from './category-icon'

const meta: Meta<typeof CategoryIcon> = {
  title: 'Atoms/CategoryIcon',
  component: CategoryIcon,
}
export default meta

export const categoryIcons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '20px',
      }}
    >
      {CATEGORY_ICONS.map((c, index) => (
        <CategoryIcon icon={c} key={index} />
      ))}
    </div>
  )
}
