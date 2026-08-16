import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartWrapper } from '../ChartWrapper/ChartWrapper'

const COLORS = ['#6366f1', '#22c97b', '#f5a623', '#a78bfa', '#8892a4']

const data = [
  { name: 'Enterprise', value: 38 },
  { name: 'Pro',        value: 28 },
  { name: 'Growth',     value: 18 },
  { name: 'Starter',    value: 11 },
  { name: 'Other',      value:  5 },
]

export const SalesPieChart = () => (
  <ChartWrapper title="Sales Distribution">
    <ResponsiveContainer width="100%" height={160}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" cy="50%"
          innerRadius={45} outerRadius={70}
          paddingAngle={3}
          dataKey="value"
          nameKey="name"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#161b27',
            border: '1px solid #2a3348',
            borderRadius: '8px',
            fontSize: '12px',
          }}
          formatter={(v, n) => [`${v}%`, n]}
        />
      </PieChart>
    </ResponsiveContainer>
    <div className="flex flex-wrap gap-2 mt-2 justify-center">
      {data.map((d, i) => (
        <span key={d.name} className="flex items-center gap-1.5 text-xs text-gray-400">
          <span
            className="w-2 h-2 rounded-sm flex-shrink-0"
            style={{ background: COLORS[i] }}
          />
          {d.name} {d.value}%
        </span>
      ))}
    </div>
  </ChartWrapper>
)
