import { exportToPDF } from '../../../utils/exportHelpers'
export const exportRevenuePDF = (data) => exportToPDF('Revenue Report', ['Product','Revenue','Growth'], (data.topProducts||[]).map(p => [p.name, `$${p.revenue?.toLocaleString()}`, `${p.growth}%`]), 'revenue-report')
export const exportUsersPDF = (data) => exportToPDF('User Report', ['Name','Email','Orders','LTV'], (data.users||[]).map(u => [u.name, u.email, u.orders, `$${u.ltv}`]), 'user-report')
export const exportSalesPDF = (data) => exportToPDF('Sales Report', ['Order ID','Customer','Product','Revenue','Date','Status'], (data.orders||[]).map(o => [o.id, o.customer, o.product, `$${o.revenue}`, o.date, o.status]), 'sales-report')
