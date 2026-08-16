import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts'

const RECHARTS_TOOLTIP = {
  contentStyle: {
    backgroundColor: '#161b27',
    border: '1px solid #2a3348',
    borderRadius: '8px',
    fontSize: '12px',
  },
  labelStyle: { color: '#8892a4' },
  itemStyle: { color: '#e8eaf0' },
}

const predictions = [
  {
    metric: 'Revenue',
    current: 2840000,
    predicted: 3218000,
    growth: 13.3,
    data: [2200000, 2400000, 2600000, 2840000, 3000000, 3100000, 3218000],
    trend: 'up',
  },
  {
    metric: 'Users',
    current: 48392,
    predicted: 54800,
    growth: 13.2,
    data: [38000, 42000, 45000, 48392, 50000, 52500, 54800],
    trend: 'up',
  },
  {
    metric: 'Churn',
    current: 2.8,
    predicted: 3.4,
    growth: 21.4,
    data: [2.1, 2.3, 2.6, 2.8, 3.0, 3.2, 3.4],
    trend: 'down',
  },
]

const fmtValue = (metric, v) => {
  if (metric === 'Revenue') return `$${(v / 1_000_000).toFixed(2)}M`
  if (metric === 'Churn')   return `${v}%`
  return v.toLocaleString()
}

export const AITrendPrediction = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {predictions.map(p => {
      const chartData = p.data.map((v, i) => ({ i, v }))
      const isGood = (p.trend === 'up' && p.metric !== 'Churn') ||
                     (p.trend === 'down' && p.metric === 'Churn')
      const color   = isGood ? '#22c97b' : '#f05252'
      const gradId  = `pgGrad_${p.metric}`
      const Icon    = p.trend === 'up' ? TrendingUp : TrendingDown

      return (
        <div key={p.metric} className="bg-dark-50 border border-dark-400 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-300">{p.metric} Forecast</span>
            <span className={`flex items-center gap-1 text-xs font-bold ${isGood ? 'text-emerald-400' : 'text-red-400'}`}>
              <Icon size={12} />
              {p.growth > 0 ? '+' : ''}{p.growth}%
            </span>
          </div>
          <div className="text-lg font-bold text-gray-100 mb-0.5">
            {fmtValue(p.metric, p.predicted)}
          </div>
          <p className="text-[10px] text-gray-600 mb-3">Projected next quarter</p>

          <ResponsiveContainer width="100%" height={50}>
            <AreaChart data={chartData} margin={{ top: 2, right: 0, left: 0, bottom: 2 }}>
              {/* ✅ SVG defs as JSX — NOT imported from recharts */}
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={color} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone" dataKey="v"
                stroke={color} strokeWidth={1.5}
                fill={`url(#${gradId})`}
                dot={false}
                isAnimationActive={false}
              />
              <Tooltip
                {...RECHARTS_TOOLTIP}
                formatter={v => [fmtValue(p.metric, v), p.metric]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )
    })}
  </div>
)
