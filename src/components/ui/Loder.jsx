import { Loader2 } from 'lucide-react'
import { classNames } from '../../../utils/helpers'

export const Loader = ({ size = 24, className, fullScreen = false }) => {
  if (fullScreen) return (
    <div className="fixed inset-0 bg-dark-200 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-3">
        <Loader2 size={40} className="animate-spin text-indigo-400" />
        <span className="text-gray-400 text-sm">Loading NexusBI...</span>
      </div>
    </div>
  )
  return <Loader2 size={size} className={classNames('animate-spin text-indigo-400', className)} />
}
