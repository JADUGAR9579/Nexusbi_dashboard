import { Card, CardHeader } from '../../../components/ui/Card/Card'
import { Avatar } from '../../../components/ui/Avatar/Avatar'
import analyticsData from '../../../services/mock/analytics.json'

const typeColors = { upgrade:'text-indigo-400', order:'text-emerald-400', refund:'text-amber-400', signup:'text-purple-400', renewal:'text-emerald-400', review:'text-yellow-400', export:'text-gray-400', team:'text-blue-400' }

export const ActivityFeed = () => (
  <Card>
    <CardHeader title="Recent Activity" />
    <div className="space-y-3">
      {analyticsData.recentActivity.map((a, i) => (
        <div key={i} className="flex items-start gap-2.5">
          <Avatar name={a.user} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-300 leading-snug">
              <span className="font-medium text-gray-200">{a.user}</span>{' '}
              <span className={typeColors[a.type] || 'text-gray-400'}>{a.action}</span>
            </p>
            <p className="text-[10px] text-gray-600 mt-0.5">{a.time}</p>
          </div>
        </div>
      ))}
    </div>
  </Card>
)
