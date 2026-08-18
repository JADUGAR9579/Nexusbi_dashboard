import { Loader2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../validation/authValidation'
import { useAuth } from '../../../hooks/useAuth'

export default function Register() {
  const { register: reg, loading } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerSchema) })

  const onSubmit = async (data) => {
    const result = await reg(data)
    if (result.success) navigate('/')
  }

  return (
    <div className="min-h-screen bg-dark-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">N</div>
          <h1 className="text-2xl font-bold text-gray-100">Create your account</h1>
          <p className="text-gray-500 mt-1.5 text-sm">Start your 14-day free trial</p>
        </div>
        <div className="bg-dark-100 border border-dark-400 rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">First name</label>
                <input {...register('firstName')} placeholder="John" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
                {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Last name</label>
                <input {...register('lastName')} placeholder="Doe" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
                {errors.lastName && <p className="text-xs text-red-400 mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Work email</label>
              <input {...register('email')} type="email" placeholder="you@company.com" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
              <input {...register('password')} type="password" placeholder="Min 8 chars, 1 uppercase, 1 number" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none" />
              {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Confirm password</label>
              <input {...register('confirmPassword')} type="password" placeholder="Repeat password" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none" />
              {errors.confirmPassword && <p className="text-xs text-red-400 mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm mt-2">
              {loading && <Loader2 size={15} className="animate-spin" />}
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>
          <div className="mt-5 pt-4 border-t border-dark-400 text-center">
            <p className="text-xs text-gray-600">Already have an account? <Link to="/login" className="text-indigo-400 hover:text-indigo-300">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
