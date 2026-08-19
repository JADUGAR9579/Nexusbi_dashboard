import { useState, useMemo } from 'react'
import { Plus, Filter, Download } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Badge } from '../../../components/ui/Badge/Badge'
import { Avatar } from '../../../components/ui/Avatar/Avatar'
import { Button } from '../../../components/ui/Button/Button'
import { TableSearch } from '../../../components/tables/TableSearch/TableSearch'
import { RegionFilter } from '../../../components/filters/RegionFilter/RegionFilter'
import { usePagination } from '../../../hooks/usePagination'
import { formatCurrency } from '../../../utils/formatCurrency'
import { exportToCSV } from '../../../utils/exportHelpers'
import usersData from '../../../services/mock/users.json'

const kpis = [
  { label:'Total Customers', value:'48,392', change:'+12.5%', good:true },
  { label:'Active Today', value:'3,847', change:'+8.2%', good:true },
  { label:'New This Month', value:'1,204', change:'+18.1%', good:true },
  { label:'Churned', value:'231', change:'+2.3%', good:false },
]

export default function Customers() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [sortAsc, setSortAsc] = useState(true)

  const filtered = useMemo(() => {
    let list = usersData.filter(u => {
      const q = search.toLowerCase()
      return (!q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) && (!region || u.region === region)
    })
    return list.sort((a,b) => {
      const av = a[sortBy]; const bv = b[sortBy]
      if (av < bv) return sortAsc ? -1 : 1
      if (av > bv) return sortAsc ? 1 : -1
      return 0
    })
  }, [search, region, sortBy, sortAsc])

  const { paginatedData, currentPage, totalPages, goToPage, startIndex, endIndex, total } = usePagination(filtered, 10)
  const sort = (key) => { if(sortBy===key) setSortAsc(p=>!p); else { setSortBy(key); setSortAsc(true) } }

  return (
    <PageContainer>
      <PageHeader title="Customers" subtitle="Manage and monitor your customer base"
        action={<>
          <Button icon={Download} onClick={() => exportToCSV(filtered,'customers')}>Export</Button>
          <Button variant="primary" icon={Plus}>Add Customer</Button>
        </>} />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {kpis.map(k => (
          <Card key={k.label}>
            <div className={`text-xs font-semibold mb-1 ${k.good ? 'text-emerald-400' : 'text-red-400'}`}>{k.change}</div>
            <div className="text-2xl font-bold text-gray-100">{k.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{k.label}</div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-dark-400">
          <h3 className="text-sm font-semibold text-gray-200">All Customers</h3>
          <div className="flex items-center gap-2">
            <TableSearch onSearch={setSearch} placeholder="Search customers..." />
            <RegionFilter value={region} onChange={setRegion} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="table-header-cell"><input type="checkbox" className="accent-indigo-500" /></th>
                <th className="table-header-cell cursor-pointer hover:text-gray-300" onClick={() => sort('name')}>Customer</th>
                <th className="table-header-cell">Email</th>
                <th className="table-header-cell cursor-pointer hover:text-gray-300" onClick={() => sort('region')}>Region</th>
                <th className="table-header-cell cursor-pointer hover:text-gray-300" onClick={() => sort('orders')}>Orders</th>
                <th className="table-header-cell cursor-pointer hover:text-gray-300" onClick={() => sort('ltv')}>Lifetime Value</th>
                <th className="table-header-cell">Last Active</th>
                <th className="table-header-cell cursor-pointer hover:text-gray-300" onClick={() => sort('status')}>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map(u => (
                <tr key={u.id} className="hover:bg-dark-50/50 transition-colors">
                  <td className="table-cell"><input type="checkbox" className="accent-indigo-500" /></td>
                  <td className="table-cell">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={u.name} size="sm" />
                      <div>
                        <p className="text-xs font-medium text-gray-200">{u.name}</p>
                        <p className="text-[10px] text-gray-600 capitalize">{u.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">{u.email}</td>
                  <td className="table-cell">{u.region}</td>
                  <td className="table-cell">{u.orders}</td>
                  <td className="table-cell font-semibold text-emerald-400">{formatCurrency(u.ltv)}</td>
                  <td className="table-cell">{u.last}</td>
                  <td className="table-cell"><Badge type={u.status} dot>{u.status.charAt(0).toUpperCase()+u.status.slice(1)}</Badge></td>
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
                className={`w-7 h-7 text-xs rounded-lg border transition-colors ${currentPage===i+1 ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'border-dark-400 text-gray-500 hover:text-gray-200'}`}>{i+1}</button>
            ))}
          </div>
        </div>
      </Card>
    </PageContainer>
  )
}
