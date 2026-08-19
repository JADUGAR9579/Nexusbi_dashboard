import analyticsData from '../mock/analytics.json'
import revenueData from '../mock/revenue.json'

const delay = (ms = 300) => new Promise(r => setTimeout(r, ms))

export const analyticsApi = {
  getKpis: async () => { await delay(); return analyticsData.kpis },
  getRevenue: async (period = 'monthly') => { await delay(); return { data: revenueData[period], labels: revenueData[`${period === 'monthly' ? 'month' : period}Labels`] || revenueData.monthLabels } },
  getTraffic: async () => { await delay(); return analyticsData.traffic },
  getUserGrowth: async () => { await delay(); return analyticsData.userGrowth },
  getSalesDistribution: async () => { await delay(); return analyticsData.salesDistribution },
  getConversionFunnel: async () => { await delay(); return analyticsData.conversionFunnel },
  getRecentActivity: async () => { await delay(); return analyticsData.recentActivity },
  getNotifications: async () => { await delay(); return analyticsData.notifications },
  getRegionalData: async () => { await delay(); return revenueData.byRegion },
}
