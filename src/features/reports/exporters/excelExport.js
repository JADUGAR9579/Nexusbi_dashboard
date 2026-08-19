import { exportToExcel } from '../../../utils/exportHelpers'
export const exportRevenueExcel = (data) => exportToExcel(data.topProducts || [], 'revenue-report', 'Revenue')
export const exportUsersExcel = (data) => exportToExcel(data.users || [], 'user-report', 'Users')
export const exportSalesExcel = (data) => exportToExcel(data.orders || [], 'sales-report', 'Sales')
