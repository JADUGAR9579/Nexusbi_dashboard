import { useState, useMemo } from 'react'
import { Plus, TrendingUp, TrendingDown, Package } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Badge } from '../../../components/ui/Badge/Badge'
import { Button } from '../../../components/ui/Button/Button'
import { TableSearch } from '../../../components/tables/TableSearch/TableSearch'
import { CategoryFilter } from '../../../components/filters/CategoryFilter/CategoryFilter'
import productsData from '../../../services/mock/products.json'
import { formatCurrency } from '../../../utils/formatCurrency'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [view, setView] = useState('grid')

  const filtered = useMemo(() => productsData.filter(p => {
    const q = search.toLowerCase()
    return (!q || p.name.toLowerCase().includes(q)) && (!category || p.category === category)
  }), [search, category])

  return (
    <PageContainer>
      <PageHeader title="Products" subtitle="Manage your product catalog and pricing"
        action={<Button variant="primary" icon={Plus}>Add Product</Button>} />
      <div className="flex items-center gap-2 flex-wrap">
        <TableSearch onSearch={setSearch} placeholder="Search products..." />
        <CategoryFilter value={category} onChange={setCategory} />
        <div className="flex gap-1 ml-auto">
          <Button size="sm" variant={view==='grid'?'primary':'outline'} onClick={() => setView('grid')}>Grid</Button>
          <Button size="sm" variant={view==='list'?'primary':'outline'} onClick={() => setView('list')}>List</Button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(p => (
            <Card key={p.id} hover>
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Package size={16} className="text-indigo-400" />
                </div>
                <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${p.growth >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                  {p.growth >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {p.growth >= 0 ? '+' : ''}{p.growth}%
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-200 mb-1">{p.name}</h3>
              <p className="text-xs text-gray-600 mb-3 leading-relaxed">{p.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-emerald-400">{formatCurrency(p.price)}<span className="text-xs text-gray-600">/mo</span></span>
                <Badge type="info">{p.category}</Badge>
              </div>
              <p className="text-xs text-gray-600">{p.sales.toLocaleString()} sales</p>
              <div className="mt-3 flex gap-2">
                <Button size="xs" variant="primary" className="flex-1 justify-center">Edit</Button>
                <Button size="xs" className="flex-1 justify-center">View</Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-0 overflow-hidden">
          <table className="w-full">
            <thead><tr>
              <th className="table-header-cell">Product</th>
              <th className="table-header-cell">Category</th>
              <th className="table-header-cell">Price</th>
              <th className="table-header-cell">Sales</th>
              <th className="table-header-cell">Growth</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Actions</th>
            </tr></thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="hover:bg-dark-50/50 transition-colors">
                  <td className="table-cell">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0"><Package size={13} className="text-indigo-400" /></div>
                      <span className="text-xs font-medium text-gray-200">{p.name}</span>
                    </div>
                  </td>
                  <td className="table-cell"><Badge type="info">{p.category}</Badge></td>
                  <td className="table-cell font-semibold text-emerald-400">{formatCurrency(p.price)}/mo</td>
                  <td className="table-cell">{p.sales.toLocaleString()}</td>
                  <td className="table-cell">
                    <span className={`text-xs font-semibold ${p.growth >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {p.growth >= 0 ? '+' : ''}{p.growth}%
                    </span>
                  </td>
                  <td className="table-cell"><Badge type={p.status}>{p.status}</Badge></td>
                  <td className="table-cell"><div className="flex gap-1"><Button size="xs">Edit</Button><Button size="xs">View</Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </PageContainer>
  )
}
