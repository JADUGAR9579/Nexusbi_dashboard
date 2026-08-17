import { Select } from '../../ui/Select/Select'
import { ORDER_STATUSES } from '../../../utils/constants'

export const TableFilters = ({ filters, onChange }) => (
  <div className="flex items-center gap-2">
    <Select options={[{ value: '', label: 'All Status' }, ...ORDER_STATUSES.map(s => ({ value: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))]}
      value={filters.status || ''} onChange={e => onChange('status', e.target.value)} className="w-36" />
  </div>
)
