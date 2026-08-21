import analyticsData from '../mock/analytics.json'
import revenueData from '../mock/revenue.json'

const delay = (ms = 300) => new Promise(r => setTimeout(r, ms))

const kpiMap = [
  { key: 'totalRevenue', label: 'Total Revenue', icon: 'DollarSign', color: 'blue', format: 'currency' },
  { key: 'totalUsers', label: 'Total Users', icon: 'Users', color: 'green', format: 'number' },
  { key: 'activeCustomers', label: 'Active Customers', icon: 'UserCheck', color: 'purple', format: 'number' },
  { key: 'conversionRate', label: 'Conversion Rate', icon: 'Percent', color: 'amber', format: 'percent' },
  { key: 'monthlyGrowth', label: 'Monthly Growth', icon: 'TrendingUp', color: 'green', format: 'percent' },
  { key: 'ordersCompleted', label: 'Orders Completed', icon: 'ShoppingBag', color: 'blue', format: 'number' },
  { key: 'retentionRate', label: 'Retention Rate', icon: 'Heart', color: 'purple', format: 'percent' },
  { key: 'avgOrderValue', label: 'Avg Order Value', icon: 'Receipt', color: 'amber', format: 'currency' },
]

export const analyticsApi = {
  getKpis: async () => {
    await delay()
    return kpiMap.map(({ key, label, icon, color, format }) => ({
      label,
      icon,
      color,
      format,
      value: analyticsData.kpis[key].value,
      change: analyticsData.kpis[key].change,
    }))
  },
  getRevenue: async (period = 'monthly') => { await delay(); return { data: revenueData[period], labels: revenueData[`${period === 'monthly' ? 'month' : period}Labels`] || revenueData.monthLabels } },
  getTraffic: async () => { await delay(); return analyticsData.traffic },
  getUserGrowth: async () => { await delay(); return analyticsData.userGrowth },
  getSalesDistribution: async () => { await delay(); return analyticsData.salesDistribution },
  getConversionFunnel: async () => { await delay(); return analyticsData.conversionFunnel },
  getRecentActivity: async () => { await delay(); return analyticsData.recentActivity },
  getNotifications: async () => { await delay(); return analyticsData.notifications },
  getRegionalData: async () => { await delay(); return revenueData.byRegion },
}
