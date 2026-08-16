import { Search, Bell, Sun, Moon, Sparkles, Menu } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../../hooks/useTheme'
import { useDashboard } from '../../../context/DashboardContext'
import { useAI } from '../../../context/AIContext'
import { Avatar } from '../../ui/Avatar/Avatar'
import { useAuth } from '../../../hooks/useAuth'

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const { toggleSidebar, globalSearch, setGlobalSearch } = useDashboard()
  const { setChatOpen } = useAI()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [searchFocus, setSearchFocus] = useState(false)

  return (
    <header className="h-14 bg-dark-100 border-b border-dark-400 flex items-center gap-3 px-4 flex-shrink-0 sticky top-0 z-30">
      <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-200 p-1.5 rounded-lg hover:bg-dark-50 transition-colors">
        <Menu size={18} />
      </button>

      <div className={`flex items-center gap-2 bg-dark-50 border rounded-lg px-3 py-2 flex-1 max-w-md transition-colors ${searchFocus ? 'border-indigo-500/50' : 'border-dark-400'}`}>
        <Search size={14} className="text-gray-600 flex-shrink-0" />
        <input type="text" placeholder="Search users, orders, products..." value={globalSearch} onChange={e => setGlobalSearch(e.target.value)}
          onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)}
          className="bg-transparent text-sm text-gray-200 placeholder-gray-600 outline-none w-full" />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button onClick={() => setChatOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20 transition-colors text-xs font-medium">
          <Sparkles size={13} /> AI Insights
        </button>
        <button onClick={() => navigate('/notifications')} className="relative text-gray-500 hover:text-gray-200 p-2 rounded-lg hover:bg-dark-50 transition-colors">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>
        <button onClick={toggleTheme} className="text-gray-500 hover:text-gray-200 p-2 rounded-lg hover:bg-dark-50 transition-colors">
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button onClick={() => navigate('/profile')} className="ml-1">
          <Avatar name={user?.name} size="sm" className="cursor-pointer ring-2 ring-transparent hover:ring-indigo-500/50 transition-all" />
        </button>
      </div>
    </header>
  )
}
