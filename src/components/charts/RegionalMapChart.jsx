import { ChartWrapper } from '../ChartWrapper/ChartWrapper'

const regions = [
  { region: 'India',  revenue: 980000, pct: 34.5 },
  { region: 'USA',    revenue: 720000, pct: 25.4 },
  { region: 'Europe', revenue: 540000, pct: 19.0 },
  { region: 'APAC',   revenue: 380000, pct: 13.4 },
  { region: 'Other',  revenue: 220000, pct:  7.7 },
]

const fmtCurrency = (n) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` :
  n >= 1_000     ? `$${(n / 1_000).toFixed(0)}K` : `$${n}`

const max = Math.max(...regions.map(r => r.revenue))

export const RegionalMapChart = () => (
  <ChartWrapper title="Revenue by Region">
    <div className="space-y-3 mt-2">
      {regions.map(r => (
        <div key={r.region}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">{r.region}</span>
            <span className="text-gray-300 font-medium">
              {fmtCurrency(r.revenue)}{' '}
              <span className="text-gray-600">({r.pct}%)</span>
            </span>
          </div>
          <div className="h-1.5 bg-dark-50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${(r.revenue / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </ChartWrapper>
)
