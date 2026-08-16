import { Select } from '../../ui/Select/Select'
import { REGIONS } from '../../../utils/constants'

export const RegionFilter = ({ value, onChange }) => (
  <Select value={value} onChange={e => onChange(e.target.value)}
    options={[{ value: '', label: 'All Regions' }, ...REGIONS.map(r => ({ value: r, label: r }))]} />
)
