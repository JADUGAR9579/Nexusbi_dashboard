import { TrendingUp, TrendingDown, DollarSign, Users, UserCheck, Percent, ShoppingBag, Heart, Receipt, BarChart2 } from 'lucide-react'
import { SparklineChart } from '../SparklineChart/SparklineChart'
import { formatCurrency, formatNumber, formatPercent } from '../../../utils/formatCurrency'
import { classNames } from '../../../utils/helpers'

const icons = { DollarSign, Users, UserCheck, Percent, TrendingUp, ShoppingBag, Heart, Receipt, BarChart2 }
const colorMap = {
  blue: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', spark: '#6366f1' },
  green: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', spark: '#22c97b' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', spark: '#f5a623' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', spark: '#a78bfa' },
}

const formatValue = (value, format) => {
  if (format === 'currency') return formatCurrency(value, 'USD', true)
  if (format === 'percent') return `${value}%`
  return formatNumber(value, true)
}

export const KpiCard = ({ label, icon, color = 'blue', value, change, format = 'number' }) => {
  const Icon = icons[icon] || BarChart2
  const c = colorMap[color] || colorMap.blue
  const isUp = change >= 0

  return (
    <div className="bg-dark-100 border border-dark-400 rounded-xl p-4 hover:border-dark-500 transition-all duration-150 hover:-translate-y-0.5 cursor-default">
      <div className="flex items-start justify-between mb-3">
        <div className={classNames('w-9 h-9 rounded-lg flex items-center justify-center', c.bg)}>
          <Icon size={16} className={c.text} />
        </div>
        <span className={classNames('flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full', isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400')}>
          {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
          {isUp ? '+' : ''}{change}%
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-100 tracking-tight mb-0.5">{formatValue(value, format)}</div>
      <div className="text-xs text-gray-500 mb-2">{label}</div>
      <SparklineChart trend={isUp ? 'up' : 'down'} color={c.spark} />
    </div>
  )
}
