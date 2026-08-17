import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

export const TablePagination = ({ table, total, pageSize, pageIndex }) => {
  const start = pageIndex * pageSize + 1
  const end = Math.min((pageIndex + 1) * pageSize, total)
  const pageCount = table.getPageCount()

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-dark-400">
      <span className="text-xs text-gray-600">Showing {start}–{end} of {total} results</span>
      <div className="flex items-center gap-1">
        <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <ChevronsLeft size={13} />
        </button>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <ChevronLeft size={13} />
        </button>
        {Array.from({ length: Math.min(pageCount, 5) }).map((_, i) => {
          const page = i
          return (
            <button key={i} onClick={() => table.setPageIndex(page)}
              className={`w-7 h-7 flex items-center justify-center rounded-lg border text-xs font-medium transition-colors ${pageIndex === page ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' : 'border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500'}`}>
              {page + 1}
            </button>
          )
        })}
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <ChevronRight size={13} />
        </button>
        <button onClick={() => table.setPageIndex(pageCount - 1)} disabled={!table.getCanNextPage()}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
          <ChevronsRight size={13} />
        </button>
      </div>
    </div>
  )
}
