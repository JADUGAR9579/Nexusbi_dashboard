import { Calendar } from 'lucide-react'
import { useState } from 'react'
import { dateRangeOptions } from '../../../config/dashboardConfig'
import { classNames } from '../../../utils/helpers'

export const DateRangeFilter = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)
  const selected = dateRangeOptions.find(o => o.value === value) || dateRangeOptions[1]
  return (
    <div className="relative">
      <button onClick={() => setOpen(p => !p)}
        className="flex items-center gap-2 px-3 py-2 bg-dark-50 border border-dark-400 rounded-lg text-gray-400 hover:text-gray-200 text-xs font-medium transition-colors hover:border-dark-500">
        <Calendar size={13} /> {selected.label}
        <span className="text-gray-600">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-dark-100 border border-dark-400 rounded-xl shadow-xl z-20 min-w-max">
          {dateRangeOptions.map(o => (
            <button key={o.value} onClick={() => { onChange(o.value); setOpen(false) }}
              className={classNames('w-full text-left px-4 py-2.5 text-xs transition-colors', o.value === value ? 'text-indigo-400 bg-indigo-500/5' : 'text-gray-400 hover:text-gray-200 hover:bg-dark-50')}>
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
