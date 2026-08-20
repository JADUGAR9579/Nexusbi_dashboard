export const CHART_TOOLTIP_STYLE = {
  contentStyle: {
    backgroundColor: '#161b27',
    border: '1px solid #2a3348',
    borderRadius: '8px',
    fontSize: '12px',
    color: '#e8eaf0',
  },
  labelStyle: { color: '#8892a4', fontSize: '11px' },
  itemStyle: { color: '#e8eaf0' },
}

export const CHART_GRID_STYLE = {
  strokeDasharray: '3 3',
  stroke: 'rgba(255,255,255,0.05)',
}

export const CHART_AXIS_STYLE = {
  tick: { fill: '#5a6478', fontSize: 11 },
  axisLine: false,
  tickLine: false,
}

export const gradientDef = (id, color, opacity1 = 0.3, opacity2 = 0) => (
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="${color}" stopOpacity="${opacity1}"/>
    <stop offset="95%" stopColor="${color}" stopOpacity="${opacity2}"/>
  </linearGradient>`
)

export const formatYAxis = (value) => {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`
  return `$${value}`
}

export const formatYAxisNumber = (value) => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`
  return value
}
