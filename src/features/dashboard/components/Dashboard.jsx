import { useEffect, useState } from 'react'
import { Download, Calendar } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { KpiGrid } from '../../../components/kpi/KpiGrid/KpiGrid'
import { RevenueLineChart } from '../../../components/charts/RevenueLineChart/RevenueLineChart'
import { SalesPieChart } from '../../../components/charts/SalesPieChart/SalesPieChart'
import { TrafficBarChart } from '../../../components/charts/TrafficBarChart/TrafficBarChart'
import { UserGrowthAreaChart } from '../../../components/charts/UserGrowthAreaChart/UserGrowthAreaChart'
import { RegionalMapChart } from '../../../components/charts/RegionalMapChart/RegionalMapChart'
import { AIInsightsPanel } from '../../../components/ai/AIInsightsPanel/AIInsightsPanel'
import { OrdersTable } from '../components/OrdersTable'
import { ActivityFeed } from '../components/ActivityFeed'
import { DateRangeFilter } from '../../../components/filters/DateRangeFilter/DateRangeFilter'
import { analyticsApi } from '../../../services/api/analyticsApi'
import { useAI } from '../../../context/AIContext'
import { Button } from '../../../components/ui/Button/Button'
import { exportToCSV } from '../../../utils/exportHelpers'
import ordersData from '../../../services/mock/orders.json'

export default function Dashboard() {
  const [kpis, setKpis] = useState(null)
  const [loading, setLoading] = useState(true)
  const [dateRange, setDateRange] = useState('30d')
  const { insights, refreshInsights } = useAI()

  useEffect(() => {
    analyticsApi.getKpis().then(d => { setKpis(d); setLoading(false) })
  }, [])

  useEffect(() => {
    if (!insights.length) refreshInsights({ revenue: '2.84M', users: '48392', growth: '18.2%' })
  }, [])

  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        subtitle={`${new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' })} — Overview`}
        action={
          <div className="flex items-center gap-2">
            <DateRangeFilter value={dateRange} onChange={setDateRange} />
            <Button variant="primary" icon={Download} onClick={() => exportToCSV(ordersData, 'dashboard-export')}>Export</Button>
          </div>
        }
      />
      <KpiGrid data={kpis} loading={loading} />
      <AIInsightsPanel />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><RevenueLineChart /></div>
        <SalesPieChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TrafficBarChart />
        <UserGrowthAreaChart />
        <ActivityFeed />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><OrdersTable /></div>
        <RegionalMapChart />
      </div>
    </PageContainer>
  )
}
