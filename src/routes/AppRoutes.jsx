import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { DashboardLayout } from '../components/layout/DashboardLayout/DashboardLayout'
import { Loader } from '../components/ui/Loader/Loader'

const Login = lazy(() => import('../features/auth/pages/Login'))
const Register = lazy(() => import('../features/auth/pages/Register'))
const ForgotPassword = lazy(() => import('../features/auth/pages/ForgotPassword'))
const Dashboard = lazy(() => import('../features/dashboard/pages/Dashboard'))
const Analytics = lazy(() => import('../features/analytics/pages/Analytics'))
const Reports = lazy(() => import('../features/reports/pages/Reports'))
const Customers = lazy(() => import('../features/customers/pages/Customers'))
const Orders = lazy(() => import('../features/orders/pages/Orders'))
const Products = lazy(() => import('../features/products/pages/Products'))
const Settings = lazy(() => import('../features/settings/pages/Settings'))
const Profile = lazy(() => import('../features/profile/pages/Profile'))
const Notifications = lazy(() => import('../features/notifications/pages/Notifications'))

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className="flex items-center justify-center h-64"><Loader /></div>}>
    {children}
  </Suspense>
)

export const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<PublicRoute><SuspenseWrapper><Login /></SuspenseWrapper></PublicRoute>} />
    <Route path="/register" element={<PublicRoute><SuspenseWrapper><Register /></SuspenseWrapper></PublicRoute>} />
    <Route path="/forgot-password" element={<PublicRoute><SuspenseWrapper><ForgotPassword /></SuspenseWrapper></PublicRoute>} />
    <Route path="/" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
      <Route index element={<SuspenseWrapper><Dashboard /></SuspenseWrapper>} />
      <Route path="analytics" element={<SuspenseWrapper><Analytics /></SuspenseWrapper>} />
      <Route path="reports" element={<SuspenseWrapper><Reports /></SuspenseWrapper>} />
      <Route path="customers" element={<SuspenseWrapper><Customers /></SuspenseWrapper>} />
      <Route path="orders" element={<SuspenseWrapper><Orders /></SuspenseWrapper>} />
      <Route path="products" element={<SuspenseWrapper><Products /></SuspenseWrapper>} />
      <Route path="settings" element={<SuspenseWrapper><Settings /></SuspenseWrapper>} />
      <Route path="profile" element={<SuspenseWrapper><Profile /></SuspenseWrapper>} />
      <Route path="notifications" element={<SuspenseWrapper><Notifications /></SuspenseWrapper>} />
    </Route>
    <Route path="*" element={
      <div className="min-h-screen bg-dark-200 flex items-center justify-center flex-col gap-4">
        <div className="text-6xl font-bold text-indigo-400">404</div>
        <div className="text-gray-400 text-lg">Page not found</div>
        <a href="/" className="btn-primary">Go Home</a>
      </div>
    } />
  </Routes>
)
