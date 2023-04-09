import { useState, useEffect } from 'react'

/**
 
 * @param value - string value of the input
 * @param delay - time is ms to debounce default 200
 * @returns - string
 */
export const useDebounce = (value: string, delay = 200): string => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  if (!value) {
    return ''
  }

  return debouncedValue
}
