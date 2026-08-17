import { useState, useMemo } from 'react'
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { TablePagination } from '../TablePagination/TablePagination'
import { EmptyState } from '../../common/EmptyState/EmptyState'
import { classNames } from '../../../utils/helpers'

export const DataTable = ({ columns, data, loading, pageSize = 10 }) => {
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize })

  const table = useReactTable({
    data, columns,
    state: { sorting, globalFilter, pagination },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(data.length / pagination.pageSize),
  })

  const rows = table.getRowModel().rows.slice(pagination.pageIndex * pagination.pageSize, (pagination.pageIndex + 1) * pagination.pageSize)
  const total = table.getFilteredRowModel().rows.length

  if (loading) return <div className="p-8 text-center text-gray-500 text-sm">Loading data...</div>

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(hg => (
              <tr key={hg.id}>
                {hg.headers.map(header => (
                  <th key={header.id} className="table-header-cell whitespace-nowrap"
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                    style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default', width: header.getSize() }}>
                    <div className="flex items-center gap-1.5">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && (
                        header.column.getIsSorted() === 'asc' ? <ArrowUp size={12} className="text-indigo-400" /> :
                        header.column.getIsSorted() === 'desc' ? <ArrowDown size={12} className="text-indigo-400" /> :
                        <ArrowUpDown size={12} className="text-gray-600" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={columns.length}><EmptyState /></td></tr>
            ) : rows.map(row => (
              <tr key={row.id} className="hover:bg-dark-50/50 transition-colors">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="table-cell">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination table={table} total={total} pageSize={pagination.pageSize} pageIndex={pagination.pageIndex} />
    </div>
  )
}
