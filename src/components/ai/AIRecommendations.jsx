import { Lightbulb, ArrowRight } from 'lucide-react'

const recommendations = [
  { title: 'Upsell Enterprise users', desc: '148 Pro users match criteria for Enterprise upgrade. Expected revenue: +$44K/month.', priority: 'High' },
  { title: 'Re-engage dormant users', desc: '1,240 users inactive 30+ days. A targeted email campaign could recover 18% CTR.', priority: 'Medium' },
  { title: 'Optimize checkout flow', desc: 'Mobile abandonment is 31%. Removing the address field could improve conversions by ~12%.', priority: 'High' },
  { title: 'Launch APAC pricing tier', desc: 'India & SEA traffic up 34%. A $29/mo local tier could unlock 2,000+ new paying users.', priority: 'Medium' },
]

const priorityStyle = { High: 'badge-danger', Medium: 'badge-warning', Low: 'badge-info' }

export const AIRecommendations = () => (
  <div className="space-y-2.5">
    {recommendations.map((r, i) => (
      <div key={i} className="bg-dark-50 border border-dark-400 rounded-lg p-3.5 flex items-start gap-3 hover:border-dark-500 transition-colors cursor-pointer">
        <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Lightbulb size={13} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-gray-200">{r.title}</span>
            <span className={`${priorityStyle[r.priority]} text-[10px]`}>{r.priority}</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
        </div>
        <ArrowRight size={14} className="text-gray-600 flex-shrink-0 mt-1" />
      </div>
    ))}
  </div>
)
