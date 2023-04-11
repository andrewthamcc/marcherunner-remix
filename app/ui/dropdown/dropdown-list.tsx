import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { DropdownItem } from './dropdown-item'
import type { DropItem } from './dropdown'

interface Coords {
  width?: number
  x: number
  y: number
}

interface Props {
  coords: Coords // passthrough of coordinates to render list
  isOpen: boolean
  list: DropItem[] // passthrough of list items
  listWidth?: number // passthrough of optional prop for width of rendered list
  onChange: (value: DropItem) => void // passthrough of function for selecting value
}

export const DropdownList = ({
  coords,
  isOpen,
  list,
  listWidth,
  onChange,
}: Props) => {
  useEffect(() => {
    let portalRoot = document.querySelector('#portal-root')
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.setAttribute('id', 'portal-root')
      document.body.appendChild(portalRoot)
    }
  }, [])

  const style = {
    width: listWidth ? listWidth : coords.width,
    top: coords.y,
    left: coords.x,
    translate: '-50%',
  }

  const dropdownList = (
    <ul
      className="box-content rounded-lg border-2 border-slate-300 bg-white shadow-xl absolute flex flex-col items-center justify-center"
      style={style}
    >
      {list.map((item, index) => (
        <DropdownItem item={item} key={index} onChange={onChange} />
      ))}
    </ul>
  )

  const portalRoot = document.querySelector('#portal-root')

  if (!isOpen || !portalRoot) return null

  return ReactDOM.createPortal(dropdownList, portalRoot)
}
