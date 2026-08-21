# NexusBI — Enterprise Analytics Dashboard

A production-ready analytics dashboard built with React, Tailwind CSS, Recharts, TanStack Table, and AI-powered insights.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Add your VITE_HUGGINGFACE_API_KEY for live AI insights (optional)

# 3. Start dev server
npm run dev
# Opens at http://localhost:3000

# 4. Login with demo credentials
# Email: admin@nexusbi.io
# Password: Admin123!
```

## 📦 Build for Production

```bash
npm run build       # Output → dist/
npm run preview     # Preview production build locally
```

## 🌐 Deploy

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# vite.config.js → add: base: '/repo-name/'
npm run build
gh-pages -d dist
```

## 🗂️ Project Structure

```
src/
├── assets/                   # Images, icons, logos
├── components/
│   ├── ui/                   # Button, Input, Modal, Badge, Card, Tabs…
│   ├── layout/               # Sidebar, Navbar, DashboardLayout
│   ├── charts/               # Revenue, Pie, Bar, Area, Regional charts
│   ├── tables/               # DataTable, Pagination, Search, Filters
│   ├── filters/              # DateRange, Status, Category, Region
│   ├── kpi/                  # KpiCard, SparklineChart, KpiGrid
│   ├── ai/                   # AIInsightsPanel, AIChatAssistant, Predictions
│   └── common/               # SearchBar, ThemeToggle, NotificationBell
├── features/
│   ├── auth/                 # Login, Register, ForgotPassword + validation
│   ├── dashboard/            # Main dashboard page + OrdersTable, ActivityFeed
│   ├── analytics/            # Full analytics page with funnel
│   ├── reports/              # Reports + PDF/CSV/Excel exporters
│   ├── customers/            # Customer management table
│   ├── orders/               # Orders management table
│   ├── products/             # Product catalog grid/list view
│   ├── notifications/        # Notification feed
│   ├── profile/              # User profile editor
│   └── settings/             # General, Security, Notifications, Billing tabs
├── context/                  # Auth, Theme, Dashboard, AI contexts
├── hooks/                    # useAuth, useTheme, usePagination, useFilters…
├── services/
│   ├── api/                  # analyticsApi, authApi, reportsApi, aiApi
│   ├── huggingface/          # insightGenerator, trendPredictor, anomalyDetector
│   └── mock/                 # users.json, orders.json, products.json, revenue.json
├── routes/                   # AppRoutes, ProtectedRoute, PublicRoute
├── utils/                    # formatCurrency, formatDate, exportHelpers, helpers
└── config/                   # navigation, dashboardConfig, chartConfig
```

## ✨ Features

- **8 KPI Cards** with sparklines and trend indicators
- **5 Chart Types**: Area/Line, Pie/Doughnut, Bar, Regional
- **Orders Table** with sort, search, filter, pagination, CSV/Excel/PDF export
- **AI Insights Panel** with HuggingFace integration (fallback to mock)
- **AI Chat Assistant** floating chat widget
- **Dark / Light theme** with localStorage persistence
- **Auth flow**: Login, Register, Forgot Password with Zod validation
- **9 Pages**: Dashboard, Analytics, Reports, Customers, Orders, Products, Settings, Profile, Notifications
- **Protected Routes** with redirect on logout
- **Responsive** mobile-first design

## 🤖 AI Setup (HuggingFace)

1. Get a free API key at https://huggingface.co/settings/tokens
2. Add to `.env`:  
   ```
   VITE_HUGGINGFACE_API_KEY=hf_your_key_here
   ```
3. Restart the dev server — AI insights will be live

## 🛠️ Tech Stack

| Category | Library |
|----------|---------|
| Framework | React 18 |
| Styling | Tailwind CSS 3 |
| Charts | Recharts |
| Table | TanStack Table v8 |
| Data Fetching | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Notifications | React Toastify |
| Export | jsPDF, jspdf-autotable, SheetJS, PapaParse |
| Icons | Lucide React |
| Build | Vite 5 |
