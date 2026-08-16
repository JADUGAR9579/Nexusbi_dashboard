import { useState } from 'react'

export const RevenueFilter = ({ value, onChange }) => {
  const [min, setMin] = useState(value?.min || '')
  const [max, setMax] = useState(value?.max || '')
  const apply = () => onChange({ min: Number(min) || 0, max: Number(max) || Infinity })
  return (
    <div className="flex items-center gap-2">
      <input value={min} onChange={e => setMin(e.target.value)} placeholder="Min $"
        className="w-20 bg-dark-50 border border-dark-400 text-gray-200 text-xs rounded-lg px-2 py-2 outline-none focus:border-indigo-500/50" />
      <span className="text-gray-600 text-xs">—</span>
      <input value={max} onChange={e => setMax(e.target.value)} placeholder="Max $"
        className="w-20 bg-dark-50 border border-dark-400 text-gray-200 text-xs rounded-lg px-2 py-2 outline-none focus:border-indigo-500/50" />
      <button onClick={apply} className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs rounded-lg transition-colors">Apply</button>
    </div>
  )
}
