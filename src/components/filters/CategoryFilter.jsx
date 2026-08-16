import { Select } from '../../ui/Select/Select'
import { CATEGORIES } from '../../../utils/constants'

export const CategoryFilter = ({ value, onChange }) => (
  <Select value={value} onChange={e => onChange(e.target.value)}
    options={[{ value: '', label: 'All Categories' }, ...CATEGORIES.map(c => ({ value: c, label: c }))]} />
)
