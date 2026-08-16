import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartWrapper } from '../ChartWrapper/ChartWrapper'

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

const labels      = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const newUsers    = [1200,1450,1380,1620,1800,1950,2100,1980,2250,2400,2650,2900]
const returningUsers = [2100,2350,2200,2580,2800,3050,3200,3100,3450,3700,3950,4200]
const data = labels.map((l, i) => ({ label: l, new: newUsers[i], returning: returningUsers[i] }))

export const UserGrowthAreaChart = () => (
  <ChartWrapper
    title="User Growth"
    action={
      <div className="flex gap-3 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-indigo-400 inline-block" />New
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-sm bg-emerald-400 inline-block" />Returning
        </span>
      </div>
    }
  >
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
        {/* ✅ SVG defs are native JSX — NOT imported from recharts */}
        <defs>
          <linearGradient id="newGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#22c97b" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#22c97b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="label"
          tick={{ fill: '#5a6478', fontSize: 10 }}
          axisLine={false} tickLine={false}
        />
        <YAxis
          tick={{ fill: '#5a6478', fontSize: 10 }}
          axisLine={false} tickLine={false}
          tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
        />
        <Tooltip {...RECHARTS_TOOLTIP} />
        <Area
          type="monotone" dataKey="returning"
          stroke="#22c97b" strokeWidth={1.5}
          fill="url(#retGrad)" dot={false}
          name="Returning"
        />
        <Area
          type="monotone" dataKey="new"
          stroke="#6366f1" strokeWidth={1.5}
          fill="url(#newGrad)" dot={false}
          name="New"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartWrapper>
)
