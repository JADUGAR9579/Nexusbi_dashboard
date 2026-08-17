import { ChevronDown } from 'lucide-react'
import { classNames } from '../../../utils/helpers'

export const Select = ({ label, options = [], error, className, ...props }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-xs font-medium text-gray-400">{label}</label>}
    <div className="relative">
      <select className={classNames('w-full appearance-none bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2 pr-8 text-sm outline-none transition-colors', className)} {...props}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
)
