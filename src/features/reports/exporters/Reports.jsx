import { useState, useEffect } from 'react'
import { TrendingUp, Users, ShoppingCart, FileText, Table2, Download, RefreshCw } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Button } from '../../../components/ui/Button/Button'
import { reportsApi } from '../../../services/api/reportsApi'
import { toast } from 'react-toastify'
import { exportRevenueCSV, exportUsersCSV, exportSalesCSV } from '../exporters/csvExport'
import { exportRevenueExcel, exportUsersExcel, exportSalesExcel } from '../exporters/excelExport'
import { exportRevenuePDF, exportUsersPDF, exportSalesPDF } from '../exporters/pdfExport'
import { formatCurrency } from '../../../utils/formatCurrency'

const reportCards = [
  { key:'revenue', title:'Revenue Report', desc:'Monthly, quarterly & annual revenue breakdowns with growth projections', icon:TrendingUp, color:'text-indigo-400', bg:'bg-indigo-500/10' },
  { key:'user', title:'User Report', desc:'User acquisition, retention, churn analysis and engagement metrics', icon:Users, color:'text-emerald-400', bg:'bg-emerald-500/10' },
  { key:'sales', title:'Sales Report', desc:'Order volumes, product performance and regional revenue breakdown', icon:ShoppingCart, color:'text-amber-400', bg:'bg-amber-500/10' },
]

export default function Reports() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState({})

  const fetchReport = async (type) => {
    setLoading(p => ({ ...p, [type]: true }))
    try {
      const result = await reportsApi[`get${type.charAt(0).toUpperCase()+type.slice(1)}Report`]()
      setData(p => ({ ...p, [type]: result }))
      toast.success(`${type} report loaded`)
    } catch { toast.error('Failed to load report') }
    finally { setLoading(p => ({ ...p, [type]: false })) }
  }

  useEffect(() => { fetchReport('revenue'); fetchReport('user'); fetchReport('sales') }, [])

  const exportFns = {
    revenue: { csv: exportRevenueCSV, excel: exportRevenueExcel, pdf: exportRevenuePDF },
    user: { csv: exportUsersCSV, excel: exportUsersExcel, pdf: exportUsersPDF },
    sales: { csv: exportSalesCSV, excel: exportSalesExcel, pdf: exportSalesPDF },
  }

  return (
    <PageContainer>
      <PageHeader title="Reports" subtitle="Generate, preview and export business reports" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reportCards.map(r => (
          <Card key={r.key} hover>
            <div className={`w-10 h-10 rounded-xl ${r.bg} flex items-center justify-center mb-4`}>
              <r.icon size={20} className={r.color} />
            </div>
            <h3 className="text-sm font-semibold text-gray-200 mb-1.5">{r.title}</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">{r.desc}</p>
            {data[r.key] && (
              <div className="mb-3 p-2.5 bg-dark-50 rounded-lg">
                <p className="text-[10px] text-gray-600 mb-1">Last generated: {new Date().toLocaleDateString()}</p>
                {r.key === 'revenue' && <p className="text-xs text-gray-300">Total: <span className="text-emerald-400 font-semibold">{formatCurrency(data[r.key].totalRevenue, 'USD', true)}</span></p>}
                {r.key === 'user' && <p className="text-xs text-gray-300">Total users: <span className="text-emerald-400 font-semibold">{data[r.key].totalUsers?.toLocaleString()}</span></p>}
                {r.key === 'sales' && <p className="text-xs text-gray-300">Total orders: <span className="text-emerald-400 font-semibold">{data[r.key].totalOrders?.toLocaleString()}</span></p>}
              </div>
            )}
            <div className="flex gap-2 flex-wrap">
              <Button size="xs" icon={FileText} onClick={() => exportFns[r.key].pdf(data[r.key] || {})}>PDF</Button>
              <Button size="xs" icon={Table2} onClick={() => exportFns[r.key].csv(data[r.key] || {})}>CSV</Button>
              <Button size="xs" icon={Download} onClick={() => exportFns[r.key].excel(data[r.key] || {})}>Excel</Button>
              <Button size="xs" icon={RefreshCw} loading={loading[r.key]} onClick={() => fetchReport(r.key)}>Refresh</Button>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}
