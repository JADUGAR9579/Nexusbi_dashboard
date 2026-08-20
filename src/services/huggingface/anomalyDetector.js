export const detectAnomalies = async (data) => {
  await new Promise(r => setTimeout(r, 500))
  const mean = data.reduce((a, b) => a + b, 0) / data.length
  const std = Math.sqrt(data.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b, 0) / data.length)
  const anomalies = data.map((val, idx) => ({ index: idx, value: val, isAnomaly: Math.abs(val - mean) > 2 * std, deviation: ((val - mean) / std).toFixed(2) })).filter(a => a.isAnomaly)
  return { anomalies, mean: Math.round(mean), std: Math.round(std), anomalyCount: anomalies.length }
}
