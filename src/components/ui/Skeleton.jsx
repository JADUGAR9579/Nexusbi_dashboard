import { classNames } from '../../../utils/helpers'

export const Skeleton = ({ className }) => (
  <div className={classNames('skeleton rounded-lg', className)} />
)

export const SkeletonCard = () => (
  <div className="bg-dark-100 border border-dark-400 rounded-xl p-4 space-y-3">
    <div className="flex justify-between">
      <Skeleton className="h-9 w-9 rounded-lg" />
      <Skeleton className="h-5 w-16 rounded-full" />
    </div>
    <Skeleton className="h-7 w-24" />
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-9 w-full" />
  </div>
)

export const SkeletonTable = ({ rows = 5 }) => (
  <div className="space-y-2 p-4">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex gap-4">
        <Skeleton className="h-10 w-8 rounded" />
        <Skeleton className="h-10 flex-1 rounded" />
        <Skeleton className="h-10 flex-1 rounded" />
        <Skeleton className="h-10 w-24 rounded" />
      </div>
    ))}
  </div>
)
