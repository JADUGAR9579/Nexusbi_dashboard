import { Search } from 'lucide-react'
import { useDebounce } from '../../../hooks/useDebounce'
import { useState, useEffect } from 'react'

export const TableSearch = ({ onSearch, placeholder = 'Search...' }) => {
  const [value, setValue] = useState('')
  const debounced = useDebounce(value, 300)
  useEffect(() => { onSearch?.(debounced) }, [debounced])
  return (
    <div className="relative">
      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      <input value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}
        className="bg-dark-50 border border-dark-400 focus:border-indigo-500/50 text-gray-200 placeholder-gray-600 text-sm rounded-lg pl-9 pr-3 py-2 outline-none transition-colors w-52" />
    </div>
  )
}
