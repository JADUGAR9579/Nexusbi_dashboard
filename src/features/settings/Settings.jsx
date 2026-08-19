import { useState } from 'react'
import { Save, Bell, Shield, Link, CreditCard, ChevronRight } from 'lucide-react'
import { PageContainer, PageHeader } from '../../../components/layout/PageContainer/PageContainer'
import { Card } from '../../../components/ui/Card/Card'
import { Button } from '../../../components/ui/Button/Button'
import { toast } from 'react-toastify'

const tabs = [
  { key:'general', label:'General', icon:ChevronRight },
  { key:'notifications', label:'Notifications', icon:Bell },
  { key:'security', label:'Security', icon:Shield },
  { key:'integrations', label:'Integrations', icon:Link },
  { key:'billing', label:'Billing', icon:CreditCard },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general')
  const [form, setForm] = useState({ workspaceName:'NexusBI Analytics', timezone:'Asia/Kolkata (IST)', currency:'USD ($)', language:'English', dateFormat:'MMM d, yyyy' })
  const [notifs, setNotifs] = useState({ email:true, revenue:true, churn:true, reports:false, product:true })
  const save = () => { toast.success('Settings saved successfully!') }

  return (
    <PageContainer>
      <PageHeader title="Settings" subtitle="Manage your workspace preferences" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <Card className="h-fit p-2">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${activeTab===t.key ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-400 hover:text-gray-200 hover:bg-dark-50'}`}>
              <t.icon size={15} /> {t.label}
            </button>
          ))}
        </Card>
        <div className="lg:col-span-3">
          {activeTab === 'general' && (
            <Card>
              <h3 className="text-sm font-semibold text-gray-200 mb-5">General Settings</h3>
              <div className="space-y-4">
                {Object.entries(form).map(([k, v]) => (
                  <div key={k}>
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 capitalize">{k.replace(/([A-Z])/g,' $1')}</label>
                    <input value={v} onChange={e => setForm(p => ({ ...p, [k]: e.target.value }))}
                      className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors" />
                  </div>
                ))}
                <Button variant="primary" icon={Save} onClick={save}>Save changes</Button>
              </div>
            </Card>
          )}
          {activeTab === 'notifications' && (
            <Card>
              <h3 className="text-sm font-semibold text-gray-200 mb-5">Notification Preferences</h3>
              <div className="space-y-3">
                {Object.entries(notifs).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2 border-b border-dark-400 last:border-0">
                    <div>
                      <p className="text-sm text-gray-200 capitalize">{k} notifications</p>
                      <p className="text-xs text-gray-600">Receive {k} related alerts and updates</p>
                    </div>
                    <button onClick={() => setNotifs(p => ({ ...p, [k]: !v }))}
                      className={`w-10 h-6 rounded-full transition-colors ${v ? 'bg-indigo-500' : 'bg-dark-400'} relative`}>
                      <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${v ? 'left-5' : 'left-1'}`} />
                    </button>
                  </div>
                ))}
                <Button variant="primary" icon={Save} onClick={save}>Save preferences</Button>
              </div>
            </Card>
          )}
          {activeTab === 'security' && (
            <Card>
              <h3 className="text-sm font-semibold text-gray-200 mb-5">Security Settings</h3>
              <div className="space-y-4">
                <div><label className="block text-xs font-medium text-gray-400 mb-1.5">Current password</label><input type="password" placeholder="••••••••" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none" /></div>
                <div><label className="block text-xs font-medium text-gray-400 mb-1.5">New password</label><input type="password" placeholder="Min 8 chars" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none" /></div>
                <div><label className="block text-xs font-medium text-gray-400 mb-1.5">Confirm new password</label><input type="password" placeholder="Repeat new password" className="w-full bg-dark-50 border border-dark-400 focus:border-indigo-500 text-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none" /></div>
                <Button variant="primary" icon={Shield} onClick={save}>Update password</Button>
              </div>
            </Card>
          )}
          {(activeTab === 'integrations' || activeTab === 'billing') && (
            <Card>
              <h3 className="text-sm font-semibold text-gray-200 mb-3 capitalize">{activeTab} Settings</h3>
              <p className="text-sm text-gray-500">{activeTab === 'integrations' ? 'Connect your third-party tools like Slack, Zapier, and HubSpot.' : 'Manage your subscription, invoices and payment methods.'}</p>
              <Button variant="primary" className="mt-4">Configure</Button>
            </Card>
          )}
        </div>
      </div>
    </PageContainer>
  )
}
