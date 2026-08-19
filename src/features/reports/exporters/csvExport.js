import { exportToCSV } from '../../../utils/exportHelpers'
export const exportRevenueCSV = (data) => exportToCSV(data.topProducts || [], 'revenue-report')
export const exportUsersCSV = (data) => exportToCSV(data.users || [], 'user-report')
export const exportSalesCSV = (data) => exportToCSV(data.orders || [], 'sales-report')
