export const kpiConfig = [
  { key: 'totalRevenue', label: 'Total Revenue', icon: 'DollarSign', color: 'blue', format: 'currency' },
  { key: 'totalUsers', label: 'Total Users', icon: 'Users', color: 'green', format: 'number' },
  { key: 'activeCustomers', label: 'Active Customers', icon: 'UserCheck', color: 'purple', format: 'number' },
  { key: 'conversionRate', label: 'Conversion Rate', icon: 'Percent', color: 'amber', format: 'percent' },
  { key: 'monthlyGrowth', label: 'Monthly Growth', icon: 'TrendingUp', color: 'green', format: 'percent' },
  { key: 'ordersCompleted', label: 'Orders Completed', icon: 'ShoppingBag', color: 'blue', format: 'number' },
  { key: 'retentionRate', label: 'Retention Rate', icon: 'Heart', color: 'purple', format: 'percent' },
  { key: 'avgOrderValue', label: 'Avg Order Value', icon: 'Receipt', color: 'amber', format: 'currency' },
]

export const dateRangeOptions = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 90 days', value: '90d' },
  { label: 'This year', value: 'ytd' },
  { label: 'Custom range', value: 'custom' },
]
