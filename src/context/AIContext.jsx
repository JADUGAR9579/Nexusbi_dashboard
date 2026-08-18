import { createContext, useState, useContext, useCallback } from 'react'
import { generateInsights } from '../services/huggingface/insightGenerator'

export const AIContext = createContext(null)

export const AIProvider = ({ children }) => {
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your NexusBI AI assistant. Ask me anything about your business data.', time: new Date() }
  ])

  const refreshInsights = useCallback(async (data) => {
    setLoading(true)
    try {
      const result = await generateInsights(data)
      setInsights(result)
    } catch (err) {
      console.error('AI insights failed:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const sendMessage = useCallback(async (message) => {
    setChatMessages(prev => [...prev, { role: 'user', content: message, time: new Date() }])
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 1200))
      const reply = `Based on your current data: ${message.toLowerCase().includes('revenue') ? 'Revenue is up 18.2% this month, driven primarily by enterprise plan upgrades.' : message.toLowerCase().includes('user') ? 'You have 48,392 total users with a 12.5% growth rate.' : 'I\'ve analyzed your question. Your key metrics look strong overall. Would you like a detailed breakdown?'}`
      setChatMessages(prev => [...prev, { role: 'assistant', content: reply, time: new Date() }])
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <AIContext.Provider value={{ insights, loading, chatOpen, setChatOpen, chatMessages, refreshInsights, sendMessage }}>
      {children}
    </AIContext.Provider>
  )
}

export const useAI = () => {
  const ctx = useContext(AIContext)
  if (!ctx) throw new Error('useAI must be used within AIProvider')
  return ctx
}
