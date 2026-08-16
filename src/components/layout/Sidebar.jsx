import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react'
import { navigationItems } from '../../../config/navigation'
import { useAuth } from '../../../hooks/useAuth'
import { useDashboard } from '../../../context/DashboardContext'
import { Avatar } from '../../ui/Avatar/Avatar'
import { classNames } from '../../../utils/helpers'

export const Sidebar = () => {
  const { user, logout } = useAuth()
  const { sidebarOpen } = useDashboard()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <aside className={classNames('flex flex-col bg-dark-100 border-r border-dark-400 transition-all duration-200 overflow-hidden flex-shrink-0', sidebarOpen ? 'w-56' : 'w-14')}>
      {/* Logo */}
      <div className="h-14 flex items-center gap-3 px-4 border-b border-dark-400 flex-shrink-0">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">N</div>
        {sidebarOpen && <span className="font-bold text-gray-200 text-base whitespace-nowrap">NexusBI</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        {navigationItems.map(group => (
          <div key={group.group}>
            {sidebarOpen && <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-2 mb-1">{group.group}</p>}
            <div className="space-y-0.5">
              {group.items.map(item => (
                <NavLink key={item.path} to={item.path} end={item.path === '/'}
                  className={({ isActive }) => classNames('flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 group relative', isActive ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-400 hover:text-gray-200 hover:bg-dark-50')}>
                  <item.icon size={16} className="flex-shrink-0" />
                  {sidebarOpen && (
                    <>
                      <span className="truncate">{item.label}</span>
                      {item.badge && <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                    </>
                  )}
                  {!sidebarOpen && item.badge && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{item.badge}</span>}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-dark-400">
        <div className={classNames('flex items-center gap-2.5 p-2 rounded-lg cursor-pointer hover:bg-dark-50 transition-colors', !sidebarOpen && 'justify-center')}>
          <Avatar name={user?.name} size="sm" />
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-200 truncate">{user?.name}</p>
              <p className="text-[10px] text-gray-600 capitalize">{user?.role}</p>
            </div>
          )}
          {sidebarOpen && <button onClick={handleLogout} className="text-gray-600 hover:text-red-400 transition-colors p-1"><LogOut size={14} /></button>}
        </div>
      </div>
    </aside>
  )
}
