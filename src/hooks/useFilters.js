import { useState, useMemo } from 'react'

export const useFilters = (data, filterFn) => {
  const [filters, setFilters] = useState({})

  const filtered = useMemo(() => filterFn ? filterFn(data, filters) : data, [data, filters])

  const setFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const clearFilter = (key) => setFilters(prev => { const n = { ...prev }; delete n[key]; return n })
  const clearAllFilters = () => setFilters({})

  return { filtered, filters, setFilter, clearFilter, clearAllFilters, activeCount: Object.keys(filters).filter(k => filters[k]).length }
}
