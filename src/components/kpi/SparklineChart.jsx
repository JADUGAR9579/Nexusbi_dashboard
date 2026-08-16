import { useMemo } from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

const generateData = (trend = 'up') => {
  const points = []
  let val = randomBetween(40, 60)
  for (let i = 0; i < 12; i++) {
    val += randomBetween(-8, trend === 'up' ? 12 : 8)
    val = clamp(val, 10, 100)
    points.push({ i, v: Math.round(val) })
  }
  return points
}

export const SparklineChart = ({ trend = 'up', color = '#6366f1' }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => generateData(trend), [trend])

  return (
    <ResponsiveContainer width="100%" height={36}>
      <LineChart data={data} margin={{ top: 2, right: 0, left: 0, bottom: 2 }}>
        <Line
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
