import ordersData from '../mock/orders.json'
import usersData from '../mock/users.json'
import revenueData from '../mock/revenue.json'

const delay = () => new Promise(r => setTimeout(r, 400))

export const reportsApi = {
  getRevenueReport: async () => { await delay(); return { ...revenueData, generatedAt: new Date().toISOString() } },
  getUserReport: async () => { await delay(); return { users: usersData, totalUsers: 48392, activeUsers: 31047, generatedAt: new Date().toISOString() } },
  getSalesReport: async () => { await delay(); return { orders: ordersData, totalOrders: 14821, totalRevenue: 2840000, generatedAt: new Date().toISOString() } },
}
