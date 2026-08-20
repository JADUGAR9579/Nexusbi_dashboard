import { format, formatDistanceToNow, parseISO, isValid } from 'date-fns'

export const formatDate = (date, pattern = 'MMM d, yyyy') => {
  const d = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(d)) return 'Invalid date'
  return format(d, pattern)
}

export const formatRelativeTime = (date) => {
  const d = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(d)) return ''
  return formatDistanceToNow(d, { addSuffix: true })
}

export const formatDateTime = (date) => {
  const d = typeof date === 'string' ? parseISO(date) : date
  if (!isValid(d)) return ''
  return format(d, 'MMM d, yyyy HH:mm')
}
