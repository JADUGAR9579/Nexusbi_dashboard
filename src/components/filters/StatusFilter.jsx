import { Select } from '../../ui/Select/Select'
import { ORDER_STATUSES } from '../../../utils/constants'

export const StatusFilter = ({ value, onChange }) => (
  <Select value={value} onChange={e => onChange(e.target.value)}
    options={[{ value: '', label: 'All Status' }, ...ORDER_STATUSES.map(s => ({ value: s, label: s.charAt(0).toUpperCase() + s.slice(1) }))]} />
)
