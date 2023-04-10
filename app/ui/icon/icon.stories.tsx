import type { Meta } from '@storybook/react'
import { Icon, ICON_TYPES } from './icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
}
export default meta

export const icons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {ICON_TYPES.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </div>
  )
}
