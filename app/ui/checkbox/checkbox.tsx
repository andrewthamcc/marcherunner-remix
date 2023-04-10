import clsx from 'clsx'
import { Symbol } from '../symbol'
import { LoadingSpinner } from '../loading-spinner'

export interface CheckboxProps {
  checked: boolean // boolean for marking checked
  className?: string
  disabled?: boolean
  id?: string // id for input required if labels are being used
  name: string // name for label
  label?: string
  loading?: boolean
  onChange: () => void // change handler
}

export const Checkbox = ({
  checked,
  className,
  disabled = false,
  id,
  name,
  label,
  loading = false,
  onChange,
}: CheckboxProps) => {
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
        <Symbol symbol={checked ? 'checkmark' : 'unselected'} size="small" />
      </div>
      <label htmlFor={id} className={`${labelStyle} ml-1 text-sm`}>
        {label}
      </label>
      {loading && <LoadingSpinner variant="small" />}
    </div>
  )
}
