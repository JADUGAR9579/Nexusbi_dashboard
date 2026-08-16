import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import { Navbar } from '../Navbar/Navbar'
import { AIChatAssistant } from '../../ai/AIChatAssistant/AIChatAssistant'
import { useAI } from '../../../context/AIContext'

export const DashboardLayout = () => {
  const { chatOpen } = useAI()
  return (
    <div className="flex h-screen overflow-hidden bg-dark-200">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </main>
      </div>
      {chatOpen && <AIChatAssistant />}
    </div>
  )
}
