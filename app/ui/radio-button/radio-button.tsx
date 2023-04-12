import React from 'react'
import { Symbol } from '../symbol'

export interface RadioButtonProps {
  checked: boolean
  className?: string // passthrough for className
  disabled?: boolean
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string // label name
  onChange: () => void // change handler
  value: string | number
}

export const RadioButton = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  label,
  onChange,
  value,
}: RadioButtonProps) => {
  return (
    <div className={`flex items-center  ${className ? className : ''}`}>
      <input
        className="hidden"
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <div onClick={onChange}>
        <Symbol
          className="[&>svg]:w-[14px] [&>svg]:h-[14px]"
          symbol={checked ? 'selected' : 'unselected'}
        />
      </div>
      <label htmlFor={id} className="ml-1 text-xs font-semibold">
        {label}
      </label>
    </div>
  )
}
