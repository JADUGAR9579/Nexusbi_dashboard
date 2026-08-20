export const APP_NAME = 'NexusBI'
export const APP_VERSION = '1.0.0'

export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/',
  ANALYTICS: '/analytics',
  REPORTS: '/reports',
  CUSTOMERS: '/customers',
  ORDERS: '/orders',
  PRODUCTS: '/products',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  HELP: '/help',
  NOT_FOUND: '*',
}

export const STATUS = {
  COMPLETED: 'completed',
  PENDING: 'pending',
  PROCESSING: 'processing',
  FAILED: 'failed',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
}

export const STATUS_COLORS = {
  completed: 'badge-success',
  active: 'badge-success',
  pending: 'badge-warning',
  processing: 'badge-info',
  failed: 'badge-danger',
  inactive: 'badge-gray',
}

export const CHART_COLORS = {
  primary: '#6366f1',
  green: '#22c97b',
  amber: '#f5a623',
  purple: '#a78bfa',
  red: '#f05252',
  gray: '#8892a4',
  blue: '#3b82f6',
}

export const CHART_COLORS_ARRAY = ['#6366f1','#22c97b','#f5a623','#a78bfa','#f05252','#3b82f6','#8892a4']

export const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 50, 100]
export const DEFAULT_ROWS_PER_PAGE = 10

export const DATE_FORMATS = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  TIME: 'HH:mm',
  FULL: 'MMM d, yyyy HH:mm',
}

export const REGIONS = ['India','USA','Europe','APAC','UK','China','Japan','Other']
export const CATEGORIES = ['SaaS','Analytics','AI','Growth','Developer','Enterprise']
export const ORDER_STATUSES = ['completed','pending','processing','failed']
