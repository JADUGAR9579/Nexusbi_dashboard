export const formatCurrency = (amount, currency = 'USD', compact = false) => {
  if (compact && amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`
  }
  if (compact && amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}K`
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const formatNumber = (num, compact = false) => {
  if (compact && num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (compact && num >= 1_000) return `${(num / 1_000).toFixed(1)}K`
  return new Intl.NumberFormat('en-US').format(num)
}

export const formatPercent = (value, decimals = 1) => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`
}
