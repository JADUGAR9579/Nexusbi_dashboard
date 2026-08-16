import { classNames } from '../../../utils/helpers'

export const PageContainer = ({ children, className }) => (
  <div className={classNames('page-enter space-y-5', className)}>{children}</div>
)

export const PageHeader = ({ title, subtitle, action }) => (
  <div className="flex items-start justify-between">
    <div>
      <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
    {action && <div className="flex items-center gap-2">{action}</div>}
  </div>
)
