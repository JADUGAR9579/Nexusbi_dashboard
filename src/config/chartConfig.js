export const revenueChartConfig = {
  tabs: [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' },
    { key: 'yearly', label: 'Yearly' },
  ],
  color: '#6366f1',
  gradientId: 'revenueGradient',
}

export const pieChartConfig = {
  innerRadius: 60,
  outerRadius: 90,
  paddingAngle: 3,
}

export const barChartConfig = {
  barSize: 28,
  borderRadius: 6,
}

export const RECHARTS_TOOLTIP = {
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
