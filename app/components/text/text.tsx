import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export const TEXT_VARIANTS = [
  'body-copy',
  'body-copy-small',
  'body-copy-xsmall',
  'body-copy-large',
  'body-copy-xlarge',
] as const
export type TextVariant = (typeof TEXT_VARIANTS)[number]

export const COLOR_VARIANTS = [
  'black',
  'red',
  'green',
  'orange',
  'white',
] as const
export type ColorVariant = (typeof COLOR_VARIANTS)[number]

export interface TextProps {
  align?: 'left' | 'center' | 'right'
  className?: string
  color?: ColorVariant
  span?: boolean
  variant?: TextVariant
}

export const Text = ({
  align = 'left',
  className = '',
  color = 'black',
  children,
  span = false,
  variant = 'body-copy',
}: PropsWithChildren<TextProps>) => {
  const textAlign = clsx(
    align === 'left' && 'text-left',
    align === 'center' && 'text-center',
    align === 'right' && 'text-right'
  )

  const textColor = clsx(
    color === 'green' && 'text-runnerGreen',
    color === 'orange' && 'text-runnerOrange',
    color === 'red' && 'text-red-500',
    color === 'black' && 'text-black',
    color === 'white' && 'text-white'
  )

  const textVariant = clsx(
    variant === 'body-copy' && 'text-md',
    variant === 'body-copy-small' && 'text-sm',
    variant === 'body-copy-xsmall' && 'text-xs',
    variant === 'body-copy-large' && 'text-lg',
    variant === 'body-copy-xlarge' && 'text-xl'
  )

  if (span)
    return (
      <span className={`${className} ${textColor} ${textVariant}`}>
        {children}
      </span>
    )

  return (
    <p className={`${className} ${textAlign} ${textColor} ${textVariant}`}>
      {children}
    </p>
  )
}
