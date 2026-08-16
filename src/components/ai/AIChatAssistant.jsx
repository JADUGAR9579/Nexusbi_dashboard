import { X, Send, Sparkles, Bot, User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useAI } from '../../../context/AIContext'
import { formatDate } from '../../../utils/formatDate'

export const AIChatAssistant = () => {
  const { chatMessages, sendMessage, loading, setChatOpen } = useAI()
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [chatMessages])

  const handleSend = async () => {
    if (!input.trim() || loading) return
    const msg = input.trim()
    setInput('')
    await sendMessage(msg)
  }

  const suggestions = ['What is my revenue trend?', 'Show top performing products', 'Who are at-risk customers?', 'Forecast next month']

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-dark-100 border border-dark-400 rounded-xl shadow-2xl z-50 flex flex-col" style={{ height: '460px' }}>
      <div className="flex items-center gap-2.5 p-3.5 border-b border-dark-400">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
          <Sparkles size={13} className="text-indigo-400" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold text-gray-200">NexusBI AI</p>
          <p className="text-[10px] text-emerald-400">● Online</p>
        </div>
        <button onClick={() => setChatOpen(false)} className="text-gray-600 hover:text-gray-300 transition-colors"><X size={16} /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {chatMessages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-500/20' : 'bg-dark-50'}`}>
              {msg.role === 'user' ? <User size={12} className="text-indigo-400" /> : <Bot size={12} className="text-gray-400" />}
            </div>
            <div className={`max-w-[200px] rounded-xl px-3 py-2 text-xs leading-relaxed ${msg.role === 'user' ? 'bg-indigo-500 text-white rounded-tr-sm' : 'bg-dark-50 text-gray-300 rounded-tl-sm'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-dark-50 flex items-center justify-center"><Bot size={12} className="text-gray-400" /></div>
            <div className="bg-dark-50 rounded-xl rounded-tl-sm px-3 py-2">
              <div className="flex gap-1">{[0,1,2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />)}</div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {chatMessages.length <= 1 && (
        <div className="px-3 pb-2 flex flex-col gap-1">
          {suggestions.map(s => (
            <button key={s} onClick={() => handleSend(s) || setInput(s)} className="text-left text-[10px] text-gray-500 hover:text-indigo-400 hover:bg-dark-50 px-2 py-1.5 rounded-lg transition-colors truncate border border-transparent hover:border-dark-400">
              → {s}
            </button>
          ))}
        </div>
      )}

      <div className="p-3 border-t border-dark-400 flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Ask about your data..." className="flex-1 bg-dark-50 border border-dark-400 text-xs text-gray-200 placeholder-gray-600 rounded-lg px-3 py-2 outline-none focus:border-indigo-500/50 transition-colors" />
        <button onClick={handleSend} disabled={!input.trim() || loading}
          className="w-8 h-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white flex items-center justify-center transition-colors disabled:opacity-50 flex-shrink-0">
          <Send size={13} />
        </button>
      </div>
    </div>
  )
}
