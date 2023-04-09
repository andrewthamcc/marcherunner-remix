import clsx from 'clsx'
import React from 'react'

interface LoadingSpinnerProps {
  variant?: 'small' | 'medium' | 'large'
}

export const LoadingSpinner = ({ variant = 'medium' }: LoadingSpinnerProps) => {
  return (
    <svg
      className={`animate-spin w-10 ${clsx(variant === 'small' && 'h-5 w-5')}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
    >
      <defs>
        <linearGradient
          id="a"
          x1="67.508%"
          x2="54.941%"
          y1="44.359%"
          y2="12.195%"
        >
          <stop offset="0%" stopColor="#18bc33" stopOpacity="0" />
          <stop offset="100%" stopColor="#18bc33" />
        </linearGradient>
      </defs>
      <g fill="none" fillOpacity="0" fillRule="evenodd" strokeWidth="2.5">
        <path
          stroke="url(#a)"
          d="M18.747 9.757A8.75 8.75 0 1 0 10 18.75c2.254 0 4.37-.854 5.978-2.36l2.769-6.633z"
          transform="matrix(1 0 0 -1 4 24)"
        />
        <path
          stroke="#18bc33"
          d="M13.178 22.712A8.751 8.751 0 1 1 19.54 7.228l-6.363"
        />
      </g>
    </svg>
  )
}
