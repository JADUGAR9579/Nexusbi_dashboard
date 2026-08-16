import { useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'
import { ChartWrapper } from '../ChartWrapper/ChartWrapper'
import { Tabs } from '../../ui/Tabs/Tabs'

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

const tabs = [
  { key: 'daily', label: 'Daily' },
  { key: 'weekly', label: 'Weekly' },
  { key: 'monthly', label: 'Monthly' },
  { key: 'yearly', label: 'Yearly' },
]

const dailyRev   = [42800,38500,55200,61400,49800,71200,68900,82400,75600,91200,88300,95700,78400,103200,98700,115400,108900,122300,118700,131400,125800,142100,138600,151200,147800,159300,155700,168400,163200,172800]
const weeklyRev  = [142000,178000,165000,190000,210000,225000,198000,240000,218000,255000,270000,290000]
const monthlyRev = [820000,940000,1050000,1180000,1090000,1240000,1380000,1290000,1420000,1550000,1680000,1820000]
const yearlyRev  = [4200000,5800000,7200000,8400000,9100000]
const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const yearLabels  = ['2020','2021','2022','2023','2024']

const buildData = (period) => {
  const values =
    period === 'daily'   ? dailyRev :
    period === 'weekly'  ? weeklyRev :
    period === 'monthly' ? monthlyRev : yearlyRev
  const labels =
    period === 'monthly' ? monthLabels :
    period === 'yearly'  ? yearLabels :
    values.map((_, i) => period === 'daily' ? `D${i + 1}` : `W${i + 1}`)
  return labels.map((l, i) => ({ label: l, value: values[i] }))
}

const fmtY = v =>
  v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` :
  v >= 1_000     ? `$${(v / 1_000).toFixed(0)}K` : `$${v}`

export const RevenueLineChart = () => {
  const [period, setPeriod] = useState('monthly')
  const data = buildData(period)

  return (
    <ChartWrapper
      title="Revenue Analytics"
      action={<Tabs tabs={tabs} active={period} onChange={setPeriod} />}
    >
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
          {/* ✅ SVG defs are JSX — NOT imported from recharts */}
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366f1" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis
            dataKey="label"
            tick={{ fill: '#5a6478', fontSize: 10 }}
            axisLine={false} tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tickFormatter={fmtY}
            tick={{ fill: '#5a6478', fontSize: 10 }}
            axisLine={false} tickLine={false}
            width={55}
          />
          <Tooltip
            {...RECHARTS_TOOLTIP}
            formatter={v => [`$${v.toLocaleString()}`, 'Revenue']}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
            fill="url(#revGrad)"
            dot={false}
            activeDot={{ r: 4, fill: '#6366f1' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}
