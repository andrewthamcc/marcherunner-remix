import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  a11ylabel?: string
  border?: boolean
  className?: string
  color?: 'green' | 'orange'
  disabled?: boolean
  fullWidth?: boolean
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
  fullWidth = false,
  label,
  plain = false,
  onClick,
  type = 'button',
  width,
}: ButtonProps & PropsWithChildren) => {
  const calcWidth = children ? 'auto' : `${width}px`

  const buttonStyles = clsx(
    plain
      ? 'bg-transparent !p-0 hover:bg-transparent active:bg-transparent'
      : 'px-8 py-1 rounded-full focus:outline-none ease-in duration-200 text-white',
    color === 'green' &&
      'bg-runnerGreen hover:bg-runnerGreen-light active:bg-runnerGreen-dark',
    color === 'orange' &&
      'bg-runnerOrange hover:bg-runnerOrange-light active:bg-runnerOrange-dark',
    border && 'border-2 border-slate-300',
    disabled && !plain && '!bg-gray-400'
  )

  return (
    <button
      aria-label={a11ylabel}
      className={`${className} ${buttonStyles}`}
      disabled={disabled}
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : calcWidth }}
      type={type}
    >
      {children}
      <span className={`text-sm ${children && 'hidden'}`}>{label}</span>
    </button>
  )
}
