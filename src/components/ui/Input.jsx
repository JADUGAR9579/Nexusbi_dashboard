import { classNames } from '../../../utils/helpers'

export const Input = ({ label, error, icon: Icon, className, ...props }) => (
  <div className="flex flex-col gap-1.5">
    {label && <label className="text-xs font-medium text-gray-400">{label}</label>}
    <div className="relative">
      {Icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Icon size={14} /></div>}
      <input
        className={classNames('w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg py-2 text-sm outline-none transition-colors', Icon ? 'pl-9 pr-3' : 'px-3', error ? 'border-red-500/50' : '', className)}
        {...props}
      />
    </div>
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
)
