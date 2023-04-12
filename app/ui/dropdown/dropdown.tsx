import { useState, useRef, useEffect } from 'react'
import { Icon, Text } from '..'
import { useOutsideClick } from '../../hooks'
import { DropdownList } from './dropdown-list'

export interface DropItem {
  disabled?: boolean
  icon?: JSX.Element
  label: string
  value: unknown
}

interface DropdownProps {
  className?: string // passthrough for className
  disabled?: boolean
  label?: string // label for dropdown
  list: DropItem[] // array of dropdown items - TypeScript would help with creating a model for this data
  listWidth?: number // optional prop for width of rendered dropdown list
  placeholder?: string
  onChange: (value: DropItem) => void // passthrough for method of changing the value similar usage to onChange
  value: DropItem | null // passthrough for setting value of dropdown
  width?: number // width of dropdown menu
}

interface Coords {
  x: number
  y: number
  width: number
}

export const Dropdown = ({
  className,
  disabled = false,
  label,
  list,
  placeholder = 'Select',
  listWidth = 275,
  onChange,
  value,
  width = 275,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [coords, setCoords] = useState<Coords>({ x: 0, y: 0, width: 0 })
  const dropdownRef = useRef<null | HTMLDivElement>(null)
  useOutsideClick(dropdownRef, isOpen, () => setIsOpen(false))

  useEffect(() => {
    if (dropdownRef && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      const dropCoords = {
        x: rect.right - rect.width / 2,
        y: rect.bottom + 10 + window.scrollY,
        width: rect.width,
      }
      setCoords(dropCoords)
    }
  }, [dropdownRef])

  return (
    <div
      className={`${className ? className : ''}`}
      ref={dropdownRef}
      style={{ width: `${width}px` }}
    >
      {!!label && (
        <label className="w-100 ml-1 mb-1 text-xs text-left">{label}</label>
      )}
      <button
        aria-label="Category Filter"
        className="rounded-lg"
        style={{ width: '100%' }}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className="border-2 border-slate-300 rounded-lg ease-in duration-100 flex items-center px-2 py-1"
          style={{
            borderColor: isOpen ? '#18bc33' : disabled ? 'undefined' : '',
          }}
          tabIndex={0}
        >
          {value?.icon && <div className="h-[25px] w-[25px]">{value.icon}</div>}
          <Text className="grow">{!value ? placeholder : value.label}</Text>
          <Icon
            className="flex items-center justify-between"
            icon="caret down"
          />
        </div>
        <DropdownList
          coords={coords}
          isOpen={isOpen}
          list={list}
          listWidth={listWidth}
          onChange={onChange}
        />
      </button>
    </div>
  )
}
