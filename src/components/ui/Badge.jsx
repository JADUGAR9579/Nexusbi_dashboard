import { classNames } from '../../../utils/helpers'

const types = {
  success: 'badge-success', warning: 'badge-warning', danger: 'badge-danger', info: 'badge-info', gray: 'badge-gray',
  completed: 'badge-success', active: 'badge-success', pending: 'badge-warning', processing: 'badge-info', failed: 'badge-danger', inactive: 'badge-gray',
}

export const Badge = ({ children, type = 'gray', dot = false, className }) => (
  <span className={classNames(types[type] || 'badge-gray', 'inline-flex items-center gap-1', className)}>
    {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
    {children}
  </span>
)
