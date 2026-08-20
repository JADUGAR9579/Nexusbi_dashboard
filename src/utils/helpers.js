export const generateId = () => Math.random().toString(36).substr(2, 9)

export const getInitials = (name) => {
  if (!name) return '?'
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

export const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const generateSparklineData = (points = 12, trend = 'up') => {
  const data = []
  let val = randomBetween(40, 60)
  for (let i = 0; i < points; i++) {
    val += randomBetween(-8, trend === 'up' ? 12 : 8)
    val = clamp(val, 10, 100)
    data.push(Math.round(val))
  }
  return data
}

export const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const truncate = (str, length = 40) => str?.length > length ? str.slice(0, length) + '...' : str

export const sortByKey = (arr, key, asc = true) => {
  return [...arr].sort((a, b) => {
    const av = a[key]; const bv = b[key]
    if (av < bv) return asc ? -1 : 1
    if (av > bv) return asc ? 1 : -1
    return 0
  })
}

export const groupBy = (arr, key) => arr.reduce((acc, item) => {
  const group = item[key]
  if (!acc[group]) acc[group] = []
  acc[group].push(item)
  return acc
}, {})
