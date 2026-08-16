import { Sparkles, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { useAI } from '../../../context/AIContext'
import { Loader } from '../../ui/Loader/Loader'
import { classNames } from '../../../utils/helpers'

const tagStyles = {
  success: 'bg-emerald-500/10 text-emerald-400',
  warning: 'bg-amber-500/10 text-amber-400',
  info: 'bg-indigo-500/10 text-indigo-400',
  danger: 'bg-red-500/10 text-red-400',
}

export const AIInsightsPanel = () => {
  const { insights, loading, refreshInsights } = useAI()

  return (
    <div className="bg-dark-100 border border-indigo-500/20 rounded-xl p-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 to-purple-500/3 pointer-events-none" />
      <div className="flex items-center justify-between mb-4 relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
            <Sparkles size={15} className="text-indigo-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200">AI Business Insights</h3>
            <p className="text-xs text-gray-600">Powered by NexusBI Intelligence — updated just now</p>
          </div>
        </div>
        <button onClick={() => refreshInsights()} disabled={loading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-transparent border border-dark-400 text-gray-500 hover:text-gray-200 hover:border-dark-500 text-xs font-medium transition-colors disabled:opacity-50">
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center py-8"><Loader /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative">
          {insights.map((ins, i) => (
            <div key={ins.id || i} className="bg-dark-50 border border-dark-400 rounded-lg p-3.5 hover:border-dark-500 transition-colors">
              <div className="text-xl mb-2">{ins.icon}</div>
              <p className="text-xs font-semibold text-gray-200 mb-1.5">{ins.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-2">{ins.text}</p>
              <span className={classNames('inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full', tagStyles[ins.tagType] || tagStyles.info)}>
                {ins.tag}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
