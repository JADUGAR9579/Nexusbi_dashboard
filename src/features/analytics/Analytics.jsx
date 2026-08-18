import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { RevenueLineChart } from '../../../components/charts/RevenueLineChart/RevenueLineChart'
import { UserGrowthAreaChart } from '../../../components/charts/UserGrowthAreaChart/UserGrowthAreaChart'
import { TrafficBarChart } from '../../../components/charts/TrafficBarChart/TrafficBarChart'
import { RegionalMapChart } from '../../../components/charts/RegionalMapChart/RegionalMapChart'
import { AITrendPrediction } from '../../../components/ai/AITrendPrediction/AITrendPrediction'
import { AIRecommendations } from '../../../components/ai/AIRecommendations/AIRecommendations'
import { Card, CardHeader } from '../../../components/ui/Card/Card'

const RECHARTS_TOOLTIP = {
  contentStyle: {
    backgroundColor: '#161b27',
    border: '1px solid #2a3348',
    borderRadius: '8px',
    fontSize: '12px',
  },
  labelStyle: { color: '#8892a4' },
  itemStyle: { color: '#e8eaf0' },
  cursor: { fill: 'rgba(99,102,241,0.05)' },
}

const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const monthlyRev  = [820000,940000,1050000,1180000,1090000,1240000,1380000,1290000,1420000,1550000,1680000,1820000]

const monthlyData = monthLabels.map((l, i) => ({
  label: l,
  revenue: monthlyRev[i],
  target:  Math.round(monthlyRev[i] * 0.88),
}))

const funnelData = [
  { stage: 'Visits',    users: 100000 },
  { stage: 'Signups',   users: 28000  },
  { stage: 'Trial',     users: 11000  },
  { stage: 'Paid',      users: 4720   },
  { stage: 'Renewed',   users: 4100   },
]

const analyticsKpis = [
  { label: 'Avg Session',       value: '4m 23s', change: '+12%', good: true  },
  { label: 'Bounce Rate',       value: '38.2%',  change: '-3.4%', good: true  },
  { label: 'Page Views',        value: '2.1M',   change: '+22%',  good: true  },
  { label: 'Goal Completions',  value: '8,432',  change: '+17%',  good: true  },
]

export default function Analytics() {
  return (
    <PageContainer>
      <PageHeader title="Analytics" subtitle="Deep-dive performance metrics and trend analysis" />

      {/* Top KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {analyticsKpis.map(k => (
          <Card key={k.label}>
            <div className={`text-xs font-semibold mb-1 ${k.good ? 'text-emerald-400' : 'text-red-400'}`}>
              {k.change}
            </div>
            <div className="text-2xl font-bold text-gray-100">{k.value}</div>
            <div className="text-xs text-gray-500 mt-0.5">{k.label}</div>
          </Card>
        ))}
      </div>

      {/* Revenue + Monthly vs Target */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RevenueLineChart />
        <Card>
          <CardHeader title="Monthly Revenue vs Target" />
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="label"
                tick={{ fill: '#5a6478', fontSize: 10 }}
                axisLine={false} tickLine={false}
              />
              <YAxis
                tick={{ fill: '#5a6478', fontSize: 10 }}
                axisLine={false} tickLine={false}
                tickFormatter={v => `$${(v / 1000).toFixed(0)}K`}
              />
              <Tooltip
                {...RECHARTS_TOOLTIP}
                formatter={v => [`$${(v / 1000).toFixed(0)}K`]}
              />
              <Bar dataKey="target"  fill="rgba(99,102,241,0.3)" radius={[4,4,0,0]} name="Target" />
              <Bar dataKey="revenue" fill="#6366f1"               radius={[4,4,0,0]} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Funnel + Traffic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader title="Conversion Funnel" />
          <div className="space-y-2.5 mt-1">
            {funnelData.map(f => {
              const w = Math.round((f.users / funnelData[0].users) * 100)
              return (
                <div key={f.stage}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{f.stage}</span>
                    <span className="text-gray-300 font-medium">
                      {f.users.toLocaleString()}{' '}
                      <span className="text-gray-600">({w}%)</span>
                    </span>
                  </div>
                  <div className="h-2 bg-dark-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
        <TrafficBarChart />
      </div>

      {/* User Growth + Regional */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <UserGrowthAreaChart />
        <RegionalMapChart />
      </div>

      {/* AI sections */}
      <Card>
        <CardHeader title="AI Trend Predictions" subtitle="Next quarter forecasts based on current data" />
        <AITrendPrediction />
      </Card>

      <Card>
        <CardHeader title="AI Recommendations" subtitle="Actions to improve your metrics" />
        <AIRecommendations />
      </Card>
    </PageContainer>
  )
}
