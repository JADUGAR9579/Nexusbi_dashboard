import { createContext, useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { toast } from 'react-toastify'

export const AuthContext = createContext(null)

const DEMO_USER = { id: 1, name: 'Shivnath Bonde', email: 'admin@nexusbi.io', role: 'admin', avatar: 'SB' }

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('nexusbi_user', null)
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (email, password) => {
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 800))
      if (email && password.length >= 6) {
        const userData = { ...DEMO_USER, email }
        setUser(userData)
        toast.success(`Welcome back, ${userData.name}!`)
        return { success: true }
      }
      throw new Error('Invalid credentials')
    } catch (err) {
      toast.error(err.message || 'Login failed')
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }, [setUser])

  const register = useCallback(async (data) => {
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1000))
      const userData = { ...DEMO_USER, name: `${data.firstName} ${data.lastName}`, email: data.email }
      setUser(userData)
      toast.success('Account created successfully!')
      return { success: true }
    } catch (err) {
      toast.error('Registration failed')
      return { success: false }
    } finally {
      setLoading(false)
    }
  }, [setUser])

  const logout = useCallback(() => {
    setUser(null)
    toast.info('Logged out successfully')
  }, [setUser])

  const updateProfile = useCallback((updates) => {
    setUser(prev => ({ ...prev, ...updates }))
    toast.success('Profile updated!')
  }, [setUser])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateProfile, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
