export const predictTrend = async (historicalData) => {
  await new Promise(r => setTimeout(r, 600))
  const last = historicalData[historicalData.length - 1]
  const avg = historicalData.slice(-3).reduce((a, b) => a + b, 0) / 3
  const growth = ((last - avg) / avg) * 100
  return {
    nextPeriodEstimate: Math.round(last * (1 + growth / 100)),
    growthRate: growth.toFixed(1),
    confidence: 78,
    trend: growth > 0 ? 'upward' : 'downward',
  }
}
