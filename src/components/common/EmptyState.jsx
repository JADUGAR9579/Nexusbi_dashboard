import { PackageOpen } from 'lucide-react'

export const EmptyState = ({ title = 'No data found', description = 'Try adjusting your filters or search terms.', action }) => (
  <div className="flex flex-col items-center justify-center py-16 gap-3">
    <PackageOpen size={40} className="text-gray-600" />
    <div className="text-center">
      <p className="text-gray-300 font-medium">{title}</p>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
    {action && <div className="mt-2">{action}</div>}
  </div>
)
