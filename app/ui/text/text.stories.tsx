import type { Meta } from '@storybook/react'
import { Text, TEXT_VARIANTS } from './text'

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
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
      {TEXT_VARIANTS.map((v, index) => (
        <Text variant={v} key={index}>
          Text
        </Text>
      ))}
    </div>
  )
}
