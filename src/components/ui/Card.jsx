import { classNames } from '../../../utils/helpers'

export const Card = ({ children, className, hover = false, onClick }) => (
  <div className={classNames('bg-dark-100 border border-dark-400 rounded-xl p-4', hover && 'cursor-pointer hover:border-dark-500 transition-all duration-150 hover:-translate-y-0.5', className)} onClick={onClick}>
    {children}
  </div>
)

export const CardHeader = ({ title, subtitle, action, className }) => (
  <div className={classNames('flex items-center justify-between mb-4', className)}>
    <div>
      {title && <h3 className="text-sm font-semibold text-gray-200">{title}</h3>}
      {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
    {action && <div>{action}</div>}
  </div>
)
