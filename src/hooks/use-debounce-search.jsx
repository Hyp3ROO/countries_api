import { useState, useEffect } from 'react'

const useDebounceSearch = (value, time = 250) => {
  const [debounceSearch, setDebounceSearch] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(value)
    }, time)

    return () => clearTimeout(timeout)
  }, [value, time])

  return debounceSearch
}
export default useDebounceSearch
