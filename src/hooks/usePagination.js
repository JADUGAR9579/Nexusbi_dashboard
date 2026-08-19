import { useState, useMemo } from 'react'

export const usePagination = (data, rowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(rowsPerPage)

  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const paginatedData = useMemo(() => data.slice(startIndex, endIndex), [data, startIndex, endIndex])

  const goToPage = (page) => setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(currentPage - 1)
  const changePageSize = (size) => { setPageSize(size); setCurrentPage(1) }

  return { paginatedData, currentPage, totalPages, pageSize, startIndex, endIndex: Math.min(endIndex, data.length), total: data.length, goToPage, nextPage, prevPage, changePageSize, hasNext: currentPage < totalPages, hasPrev: currentPage > 1 }
}
