import React from 'react'
import type { IconVariants } from '../icon'
import { Icon } from '../icon'
import { Button } from '../button'

export interface IconButtonProps {
  a11ylabel: string
  className?: string // passthrough for className
  color?: 'gray' | 'green' | 'orange' | 'red'
  disabled?: boolean
  icon: IconVariants
  onClick?: () => void
  submit?: boolean
}

export const IconButton = ({
  a11ylabel,
  color = 'gray',
  disabled = false,
  icon,
  onClick,
  submit = false,
}: IconButtonProps) => {
  return (
    <Button
      aria-label={a11ylabel}
      label={a11ylabel}
      disabled={disabled}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      plain
    >
      {icon && (
        <Icon
          className="w-6 h-6"
          color={disabled ? 'gray' : color}
          icon={icon}
        />
      )}
    </Button>
  )
}
