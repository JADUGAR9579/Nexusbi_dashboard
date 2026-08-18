import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginForm } from '../hooks/useLoginForm'

export default function Login() {
  const { register, onSubmit, formState: { errors }, loading } = useLoginForm()
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="min-h-screen bg-dark-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">N</div>
          <h1 className="text-2xl font-bold text-gray-100">Welcome to NexusBI</h1>
          <p className="text-gray-500 mt-1.5 text-sm">Sign in to your analytics workspace</p>
        </div>

        <div className="bg-dark-100 border border-dark-400 rounded-2xl p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address</label>
              <input {...register('email')} type="email" placeholder="you@company.com"
                className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
              <div className="relative">
                <input {...register('password')} type={showPass ? 'text' : 'password'} placeholder="Enter your password"
                  className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 pr-10 text-sm outline-none transition-colors" />
                <button type="button" onClick={() => setShowPass(p => !p)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
                <input {...register('rememberMe')} type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</Link>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
              {loading && <Loader2 size={15} className="animate-spin" />}
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-dark-400 text-center">
            <p className="text-xs text-gray-600">Don't have an account? <Link to="/register" className="text-indigo-400 hover:text-indigo-300">Create one free</Link></p>
          </div>

          <div className="mt-4 p-3 bg-dark-50 border border-dark-400 rounded-lg">
            <p className="text-[11px] text-gray-600 text-center">Demo credentials: <span className="text-gray-400">admin@nexusbi.io / Admin123!</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
