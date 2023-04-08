import clsx from 'clsx'
import { Symbol } from '../symbol'

export interface CheckboxProps {
  checked: boolean // boolean for marking checked
  className?: string
  disabled?: boolean
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string
  onChange: () => void // change handler
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  label,
  onChange,
}) => {
  const labelStyle = clsx(checked && 'italic text-gray-400 line-through')

  return (
    <div className={`flex items-center  ${className ? className : ''}`}>
      <input
        className="hidden"
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type="checkbox"
      />
      <div onClick={onChange}>
        <Symbol
          className="[&>svg]:w-[14px] [&>svg]:h-[14px]"
          symbol={checked ? 'checkmark' : 'unselected'}
        />
      </div>
      <label htmlFor={id} className={`${labelStyle} ml-1 text-sm`}>
        {label}
      </label>
    </div>
  )
}
