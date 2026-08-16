import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-50 border border-dark-400 text-gray-400 hover:text-gray-200 hover:border-dark-500 transition-colors text-xs font-medium">
      {theme === 'dark' ? <><Sun size={13} /> Light</> : <><Moon size={13} /> Dark</>}
    </button>
  )
}
