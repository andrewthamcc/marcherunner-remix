import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

export interface ButtonProps {
  a11ylabel?: string
  border?: boolean
  className?: string
  color?: 'green' | 'orange'
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

  const buttonStyles = clsx(
    plain
      ? 'bg-transparent border-transparent hover:bg-transparent active:bg-transparent !text-black'
      : 'text-white',
    color === 'green' &&
      'bg-runnerGreen hover:bg-runnerGreen-light active:bg-runnerGreen-dark',
    color === 'orange' &&
      'bg-runnerOrange hover:bg-runnerOrange-light active:bg-runnerOrange-dark',
    !border && 'border-2 border-slate-700',
    disabled && '!bg-gray-400'
  )

  return (
    <button
      aria-label={a11ylabel}
      className={`${className} ${buttonStyles} px-8 py-1 rounded-full focus:outline-none ease-in duration-200`}
      disabled={disabled}
      name={label}
      onClick={onClick}
      style={{ width: calcWidth }}
      type={type}
    >
      {children}
      <span className={`text-sm ${children && 'hidden'}`}>{label}</span>
    </button>
  )
}
