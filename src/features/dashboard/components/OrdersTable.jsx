import { useState, useMemo } from 'react'
import { Plus, FileText, Table2 } from 'lucide-react'
import { Badge } from '../../../components/ui/Badge/Badge'
import { TableSearch } from '../../../components/tables/TableSearch/TableSearch'
import { StatusFilter } from '../../../components/filters/StatusFilter/StatusFilter'
import { Button } from '../../../components/ui/Button/Button'
import { exportToCSV, exportToExcel } from '../../../utils/exportHelpers'
import { formatCurrency } from '../../../utils/formatCurrency'
import { usePagination } from '../../../hooks/usePagination'
import { Card, CardHeader } from '../../../components/ui/Card/Card'
import ordersData from '../../../services/mock/orders.json'

export const OrdersTable = () => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [selected, setSelected] = useState([])

  const filtered = useMemo(() => ordersData.filter(o => {
    const q = search.toLowerCase()
    const matchQ = !q || o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q) || o.product.toLowerCase().includes(q)
    const matchS = !status || o.status === status
    return matchQ && matchS
  }), [search, status])

  const { paginatedData, currentPage, totalPages, goToPage, startIndex, endIndex, total } = usePagination(filtered, 8)

  const toggleSelect = (id) => setSelected(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
  const toggleAll = (e) => setSelected(e.target.checked ? paginatedData.map(o => o.id) : [])

  return (
    <Card className="p-0 overflow-hidden">
      <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-dark-400">
        <h3 className="text-sm font-semibold text-gray-200">Latest Orders</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <TableSearch onSearch={setSearch} placeholder="Search orders..." />
          <StatusFilter value={status} onChange={setStatus} />
          <Button size="sm" icon={FileText} onClick={() => exportToCSV(filtered, 'orders')}>CSV</Button>
          <Button size="sm" icon={Table2} onClick={() => exportToExcel(filtered, 'orders')}>Excel</Button>
          <Button size="sm" variant="primary" icon={Plus}>New</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="table-header-cell w-8"><input type="checkbox" className="accent-indigo-500" onChange={toggleAll} /></th>
              <th className="table-header-cell">Order ID</th>
              <th className="table-header-cell">Customer</th>
              <th className="table-header-cell">Product</th>
              <th className="table-header-cell">Revenue</th>
              <th className="table-header-cell">Date</th>
              <th className="table-header-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map(o => (
              <tr key={o.id} className={`hover:bg-dark-50/50 transition-colors ${selected.includes(o.id) ? 'bg-indigo-500/5' : ''}`}>
                <td className="table-cell"><input type="checkbox" className="accent-indigo-500" checked={selected.includes(o.id)} onChange={() => toggleSelect(o.id)} /></td>
                <td className="table-cell font-medium text-indigo-400">{o.id}</td>
                <td className="table-cell text-gray-300">{o.customer}</td>
                <td className="table-cell">{o.product}</td>
                <td className="table-cell font-semibold text-emerald-400">{formatCurrency(o.revenue)}</td>
                <td className="table-cell">{o.date}</td>
                <td className="table-cell"><Badge type={o.status} dot>{o.status.charAt(0).toUpperCase()+o.status.slice(1)}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-dark-400">
        <span className="text-xs text-gray-600">Showing {startIndex+1}–{endIndex} of {total}</span>
        <div className="flex gap-1">
          {[...Array(Math.min(totalPages,5))].map((_,i) => (
            <button key={i} onClick={() => goToPage(i+1)}
              className={`w-7 h-7 text-xs rounded-lg border transition-colors ${currentPage===i+1 ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500'}`}>
              {i+1}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
