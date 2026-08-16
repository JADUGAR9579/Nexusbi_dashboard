import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
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
  cursor: { fill: 'rgba(99,102,241,0.05)' },
}

const data = [
  { source: 'Organic', value: 42, color: '#6366f1' },
  { source: 'Social',  value: 28, color: '#22c97b' },
  { source: 'Paid',    value: 18, color: '#f5a623' },
  { source: 'Direct',  value:  8, color: '#a78bfa' },
  { source: 'Referral',value:  4, color: '#f05252' },
]

export const TrafficBarChart = () => (
  <ChartWrapper title="Traffic Sources">
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
        <XAxis
          dataKey="source"
          tick={{ fill: '#5a6478', fontSize: 10 }}
          axisLine={false} tickLine={false}
        />
        <YAxis
          tick={{ fill: '#5a6478', fontSize: 10 }}
          axisLine={false} tickLine={false}
          tickFormatter={v => `${v}%`}
        />
        <Tooltip {...RECHARTS_TOOLTIP} formatter={v => [`${v}%`, 'Share']} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={32}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </ChartWrapper>
)
