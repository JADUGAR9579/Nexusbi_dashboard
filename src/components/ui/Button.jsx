import { Loader2 } from 'lucide-react'
import { classNames } from '../../../utils/helpers'

const variants = {
  primary: 'bg-indigo-500 hover:bg-indigo-600 text-white border-transparent',
  outline: 'bg-transparent border-dark-400 hover:border-dark-500 hover:bg-dark-50 text-gray-400 hover:text-gray-200',
  ghost: 'bg-transparent hover:bg-dark-50 text-gray-400 hover:text-gray-200 border-transparent',
  danger: 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20',
  success: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20',
}
const sizes = {
  xs: 'px-2.5 py-1.5 text-xs rounded-md',
  sm: 'px-3 py-2 text-xs rounded-lg',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-5 py-2.5 text-sm rounded-lg',
}

export const Button = ({ children, variant = 'outline', size = 'md', loading, disabled, className, icon: Icon, ...props }) => (
  <button
    disabled={disabled || loading}
    className={classNames('flex items-center gap-2 font-medium border transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed', variants[variant], sizes[size], className)}
    {...props}
  >
    {loading ? <Loader2 size={14} className="animate-spin" /> : Icon ? <Icon size={14} /> : null}
    {children}
  </button>
)
