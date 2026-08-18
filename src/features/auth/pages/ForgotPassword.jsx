import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-dark-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">N</div>
          <h1 className="text-2xl font-bold text-gray-100">Reset password</h1>
          <p className="text-gray-500 mt-1.5 text-sm">Enter your email to receive a reset link</p>
        </div>
        <div className="bg-dark-100 border border-dark-400 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-4">
              <CheckCircle size={40} className="text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-200 font-medium mb-1">Check your inbox</p>
              <p className="text-gray-500 text-sm mb-4">We sent a reset link to <strong className="text-gray-300">{email}</strong></p>
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 text-sm">← Back to sign in</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@company.com"
                  className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                {loading && <Loader2 size={15} className="animate-spin" />}
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
              <div className="text-center"><Link to="/login" className="text-xs text-gray-500 hover:text-gray-300">← Back to sign in</Link></div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
