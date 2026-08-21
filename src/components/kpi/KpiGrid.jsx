import { KpiCard } from './KpiCard'

export const KpiGrid = ({ data = [], loading = false }) => {
  const items = Array.isArray(data) ? data : []

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-dark-100 border border-dark-400 rounded-xl p-4 animate-pulse">
            <div className="h-10 w-10 rounded-lg bg-dark-50 mb-4" />
            <div className="h-7 w-2/3 bg-dark-50 rounded mb-2" />
            <div className="h-4 w-1/2 bg-dark-50 rounded mb-3" />
            <div className="h-9 w-full bg-dark-50 rounded" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <KpiCard
          key={item.label}
          label={item.label}
          icon={item.icon}
          color={item.color}
          value={item.value}
          change={item.change}
          format={item.format}
        />
      ))}
    </div>
  )
}
