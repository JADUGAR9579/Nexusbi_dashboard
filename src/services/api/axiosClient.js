import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

axiosClient.interceptors.request.use((config) => {
  const user = localStorage.getItem('nexusbi_user')
  if (user) {
    const parsed = JSON.parse(user)
    if (parsed?.token) config.headers.Authorization = `Bearer ${parsed.token}`
  }
  return config
}, err => Promise.reject(err))

axiosClient.interceptors.response.use(
  res => res.data,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('nexusbi_user')
      window.location.href = '/login'
    }
    return Promise.reject(err)
  }
)

export default axiosClient
