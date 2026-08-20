import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { DashboardProvider } from './context/DashboardContext'
import { AIProvider } from './context/AIContext'
import { AppRoutes } from './routes/AppRoutes'
import { ErrorBoundary } from './components/common/ErrorBoundary/ErrorBoundary'

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <DashboardProvider>
            <AIProvider>
              <AppRoutes />
            </AIProvider>
          </DashboardProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
