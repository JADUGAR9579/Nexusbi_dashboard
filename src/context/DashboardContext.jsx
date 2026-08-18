import { createContext, useState, useContext } from 'react'

export const DashboardContext = createContext(null)

export const DashboardProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [dateRange, setDateRange] = useState('30d')
  const [activeFilters, setActiveFilters] = useState({})
  const [globalSearch, setGlobalSearch] = useState('')

  const toggleSidebar = () => setSidebarOpen(p => !p)

  return (
    <DashboardContext.Provider value={{ sidebarOpen, toggleSidebar, dateRange, setDateRange, activeFilters, setActiveFilters, globalSearch, setGlobalSearch }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  const ctx = useContext(DashboardContext)
  if (!ctx) throw new Error('useDashboard must be used within DashboardProvider')
  return ctx
}
