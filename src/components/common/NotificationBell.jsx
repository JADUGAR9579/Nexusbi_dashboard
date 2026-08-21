import { Bell } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import analyticsData from '../../services/mock/analytics.json'

export const NotificationBell = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const unread = analyticsData.notifications.filter(n => !n.read).length
  const typeStyles = { success: 'text-emerald-400', warning: 'text-amber-400', error: 'text-red-400', info: 'text-indigo-400' }

  return (
    <div className="relative">
      <button onClick={() => setOpen(p => !p)} className="relative text-gray-500 hover:text-gray-200 p-2 rounded-lg hover:bg-dark-50 transition-colors">
        <Bell size={17} />
        {unread > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{unread}</span>}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-dark-100 border border-dark-400 rounded-xl shadow-xl z-50">
          <div className="p-3 border-b border-dark-400 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-200">Notifications</span>
            <span className="badge-danger text-xs">{unread} new</span>
          </div>
          <div className="divide-y divide-dark-400 max-h-72 overflow-y-auto">
            {analyticsData.notifications.map(n => (
              <div key={n.id} className={`p-3 hover:bg-dark-50 cursor-pointer ${!n.read ? 'bg-dark-50/50' : ''}`}>
                <div className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${typeStyles[n.type]?.replace('text','bg')}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-300">{n.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{n.message}</p>
                    <p className="text-[10px] text-gray-600 mt-1">{n.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-dark-400">
            <button onClick={() => { navigate('/notifications'); setOpen(false) }} className="w-full text-xs text-indigo-400 hover:text-indigo-300 py-1.5 text-center">View all notifications</button>
          </div>
        </div>
      )}
    </div>
  )
}
