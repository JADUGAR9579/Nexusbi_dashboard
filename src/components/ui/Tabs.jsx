import { classNames } from '../../../utils/helpers'

export const Tabs = ({ tabs, active, onChange, className }) => (
  <div className={classNames('flex gap-1', className)}>
    {tabs.map(tab => (
      <button key={tab.key} onClick={() => onChange(tab.key)}
        className={classNames('px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-150', active === tab.key ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'bg-transparent border-dark-400 text-gray-500 hover:text-gray-300 hover:border-dark-500')}>
        {tab.label}
      </button>
    ))}
  </div>
)
