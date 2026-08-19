import { useState } from 'react'
import { Camera, Save } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Avatar } from '../../../components/ui/Avatar/Avatar'
import { Button } from '../../../components/ui/Button/Button'
import { Badge } from '../../../components/ui/Badge/Badge'
import { useAuth } from '../../../hooks/useAuth'
import { toast } from 'react-toastify'

export default function Profile() {
  const { user, updateProfile } = useAuth()
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', role: user?.role || 'admin', bio: 'Full-stack developer and data enthusiast building NexusBI.', phone: '+91 98765 43210', location: 'Khopoli, Maharashtra, India', company: 'NexusBI Inc.' })

  const save = () => { updateProfile({ name: form.name, email: form.email }) }

  return (
    <PageContainer>
      <PageHeader title="Profile" subtitle="Manage your personal account settings" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="flex flex-col items-center text-center p-6">
          <div className="relative mb-4">
            <Avatar name={user?.name} size="xl" />
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <Camera size={12} className="text-white" />
            </button>
          </div>
          <h2 className="text-base font-semibold text-gray-200 mb-0.5">{user?.name}</h2>
          <p className="text-xs text-gray-500 mb-3">{user?.email}</p>
          <Badge type="success" className="capitalize">{user?.role}</Badge>
          <div className="w-full mt-5 pt-4 border-t border-dark-400 space-y-2.5 text-left">
            {[['Member since','Jan 2024'],['Last login','Today, 10:23 AM'],['Plan','Enterprise'],['Storage','2.4 GB / 50 GB']].map(([l,v]) => (
              <div key={l} className="flex justify-between">
                <span className="text-xs text-gray-600">{l}</span>
                <span className="text-xs text-gray-300">{v}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="lg:col-span-2 space-y-4">
          <Card>
            <h3 className="text-sm font-semibold text-gray-200 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[['name','Full Name'],['email','Email'],['phone','Phone'],['location','Location'],['company','Company'],['role','Role']].map(([k, label]) => (
                <div key={k}>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
                  <input value={form[k]} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))} disabled={k==='role'}
                    className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 disabled:opacity-50 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Bio</label>
              <textarea value={form.bio} onChange={e => setForm(p => ({ ...p, bio: e.target.value }))} rows={3}
                className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors resize-none" />
            </div>
            <Button variant="primary" icon={Save} className="mt-4" onClick={save}>Update profile</Button>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}
