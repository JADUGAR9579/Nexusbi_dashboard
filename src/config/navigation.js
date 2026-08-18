import { LayoutDashboard, BarChart3, FileText, Users, ShoppingCart, Package, Settings, UserCircle, Bell, HelpCircle } from 'lucide-react'

export const navigationItems = [
  { group: 'Overview', items: [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/reports', label: 'Reports', icon: FileText },
  ]},
  { group: 'Management', items: [
    { path: '/customers', label: 'Customers', icon: Users },
    { path: '/orders', label: 'Orders', icon: ShoppingCart, badge: 12 },
    { path: '/products', label: 'Products', icon: Package },
  ]},
  { group: 'System', items: [
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/profile', label: 'Profile', icon: UserCircle },
    { path: '/notifications', label: 'Notifications', icon: Bell, badge: 3 },
    { path: '/help', label: 'Help Center', icon: HelpCircle },
  ]},
]
