import { CheckCheck, Trash2, Bell } from 'lucide-react'
import { useState } from 'react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Button } from '../../../components/ui/Button/Button'
import { Badge } from '../../../components/ui/Badge/Badge'
import analyticsData from '../../../services/mock/analytics.json'

export default function Notifications() {
  const [notifs, setNotifs] = useState(analyticsData.notifications)
  const markAll = () => setNotifs(p => p.map(n => ({ ...n, read: true })))
  const remove = (id) => setNotifs(p => p.filter(n => n.id !== id))
  const unread = notifs.filter(n => !n.read).length

  return (
    <PageContainer>
      <PageHeader title="Notifications" subtitle={`${unread} unread notification${unread !== 1 ? 's' : ''}`}
        action={<>
          <Button icon={CheckCheck} onClick={markAll}>Mark all read</Button>
          <Button icon={Trash2} onClick={() => setNotifs([])}>Clear all</Button>
        </>} />
      <Card className="divide-y divide-dark-400 p-0 overflow-hidden">
        {notifs.length === 0 ? (
          <div className="flex flex-col items-center py-16 gap-3">
            <Bell size={36} className="text-gray-600" />
            <p className="text-gray-500 text-sm">No notifications</p>
          </div>
        ) : notifs.map(n => (
          <div key={n.id} className={`flex items-start gap-3 p-4 hover:bg-dark-50/50 transition-colors ${!n.read ? 'bg-indigo-500/3' : ''}`}>
            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${n.type==='success'?'bg-emerald-400':n.type==='warning'?'bg-amber-400':n.type==='error'?'bg-red-400':'bg-indigo-400'}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-gray-200">{n.title}</p>
                {!n.read && <Badge type="info" className="text-[10px]">New</Badge>}
              </div>
              <p className="text-xs text-gray-500">{n.message}</p>
              <p className="text-[10px] text-gray-600 mt-1">{n.time}</p>
            </div>
            <button onClick={() => remove(n.id)} className="text-gray-600 hover:text-red-400 transition-colors p-1 rounded">
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </Card>
    </PageContainer>
  )
}
