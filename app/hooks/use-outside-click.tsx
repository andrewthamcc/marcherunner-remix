import { useEffect } from 'react'

/**
  
 * @param ref  {React.Ref | null} - the ref node
 * @param bool {boolean} - boolean condition of when the clickoutside should execute
 * @param callback {() => void} - callback fn to execute
 */
export const useOutsideClick = <T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  bool: boolean,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && bool) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
