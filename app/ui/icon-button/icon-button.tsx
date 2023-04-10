import React from 'react'
import type { IconVariants } from '../icon'
import { Icon } from '../icon'
import { Button } from '../button'
import clsx from 'clsx'

export interface IconButtonProps {
  a11ylabel: string
  className?: string // passthrough for className
  color?: 'gray' | 'green' | 'orange' | 'red'
  disabled?: boolean
  icon: IconVariants
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  submit?: boolean
}

export const IconButton = ({
  a11ylabel,
  color = 'gray',
  disabled = false,
  icon,
  onClick,
  size = 'medium',
  submit = false,
}: IconButtonProps) => (
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
        className={clsx(
          size === 'small' && 'w-4 h-4',
          size === 'medium' && 'w-6 h-6',
          size === 'large' && 'w-10 h-10'
        )}
        size={size}
        color={disabled ? 'gray' : color}
        icon={icon}
      />
    )}
  </Button>
)
