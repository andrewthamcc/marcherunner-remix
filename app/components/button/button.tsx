import type { PropsWithChildren } from 'react'

export interface ButtonProps {
  a11ylabel?: string
  border?: boolean
  className?: string // passthrough for className
  color?: 'green'
  disabled?: boolean
  label: string
  plain?: boolean
  onClick?: () => void
  type?: 'submit' | 'button'
  width?: number
}

export const Button = ({
  a11ylabel = '',
  border = false,
  children,
  className = '',
  color = 'green',
  disabled = false,
  label,
  plain = false,
  onClick,
  type = 'button',
  width,
}: ButtonProps & PropsWithChildren) => {
  const calcWidth = children ? 'auto' : `${width}px`

  return (
    <button
      aria-label={a11ylabel}
      className={`${className} bg-runner-green`}
      disabled={disabled}
      name={label}
      onClick={onClick}
      style={{ width: calcWidth }}
      type={type}
    >
      {children}
      <span className={`button-text ${children ? 'none' : ''}`}>{label}</span>
    </button>
  )
}
