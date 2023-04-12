import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import clsx from 'clsx'
import { Text } from '../text'

export interface TextInputProps {
  autofocus?: boolean
  className?: string
  disabled?: boolean
  id?: string
  name: string
  label?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void // passthrough of callback for onBlur event
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  tabIndex?: number // passthrough for tab index
  value: string
}

interface TextInputHandle {
  focusInput: () => void
}

const TextInputWithRef: React.ForwardRefRenderFunction<
  TextInputHandle,
  TextInputProps
> = (
  {
    autofocus = false,
    className,
    disabled,
    id,
    name,
    label,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required,
    tabIndex,
    value,
  },
  ref
) => {
  const [errors, setErrors] = useState<null | string>(null)
  useImperativeHandle(ref, () => ({ focusInput }))
  const inputRef = useRef<HTMLInputElement | null>(null)

  const focusInput = () => {
    if (inputRef && inputRef.current) inputRef.current.focus()
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e)
    setErrors(null)
  }

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e)

    if (required && !value) {
      setErrors('This is required')
    }
  }

  const inputStyles = clsx(
    errors ? 'border-red-500' : 'border-slate-300',
    disabled
      ? 'text-gray-400'
      : 'focus:border-runnerGreen active:border-runnerGreen'
  )

  return (
    <div className={`m2 relative flex flex-col ${className ? className : ''}`}>
      {label && (
        <label className="ml-1 mb-1 text-xs font-semibold" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        autoFocus={autofocus}
        className={`border-2 ${inputStyles} rounded-lg px-2 py-1 focus:outline-none ease-in duration-100 text-sm`}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={validateInput}
        onChange={onChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        ref={inputRef}
        tabIndex={tabIndex}
        type="text"
        value={value}
      />
      <Text
        className="absolute px-1 left-[16px] bottom-[-6px] bg-white text-red-500"
        color="red"
        variant="body-copy-xsmall"
      >
        {errors}
      </Text>
    </div>
  )
}

export const TextInput = forwardRef(TextInputWithRef)
