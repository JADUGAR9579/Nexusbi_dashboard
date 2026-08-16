import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useDebounce } from '../../../hooks/useDebounce'
import { classNames } from '../../../utils/helpers'

export const SearchBar = ({ placeholder = 'Search...', onSearch, className }) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 300)
  const handleChange = (e) => { setValue(e.target.value); onSearch?.(debouncedValue) }
  const clear = () => { setValue(''); onSearch?.('') }
  return (
    <div className={classNames('relative', className)}>
      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
      <input value={value} onChange={handleChange} placeholder={placeholder}
        className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500/50 text-gray-200 placeholder-gray-600 text-sm rounded-lg pl-9 pr-8 py-2 outline-none transition-colors" />
      {value && <button onClick={clear} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300"><X size={13} /></button>}
    </div>
  )
}
