import { getInitials } from '../../../utils/helpers'
import { classNames } from '../../../utils/helpers'

const sizes = { xs: 'w-6 h-6 text-xs', sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12 text-base', xl: 'w-16 h-16 text-xl' }
const colors = ['bg-indigo-500/20 text-indigo-300','bg-emerald-500/20 text-emerald-300','bg-amber-500/20 text-amber-300','bg-purple-500/20 text-purple-300','bg-red-500/20 text-red-300']

export const Avatar = ({ name, src, size = 'md', className }) => {
  const colorIdx = name ? name.charCodeAt(0) % colors.length : 0
  return (
    <div className={classNames('rounded-full flex items-center justify-center font-semibold flex-shrink-0', sizes[size], !src ? colors[colorIdx] : '', className)}>
      {src ? <img src={src} alt={name} className="w-full h-full rounded-full object-cover" /> : getInitials(name)}
    </div>
  )
}
