import { aiApi } from '../api/aiApi'

const MOCK_INSIGHTS = [
  { id: 1, icon: '📈', title: 'Revenue spike detected', text: 'Revenue jumped 18.2% vs last month. Returning customers account for 72% of growth — loyalty campaigns are working well.', tag: 'Positive', tagType: 'success' },
  { id: 2, icon: '⚠️', title: 'Churn risk rising', text: '12 enterprise accounts show reduced login frequency over 14 days. Proactive outreach recommended to prevent churn.', tag: 'Action needed', tagType: 'warning' },
  { id: 3, icon: '🔮', title: 'Q3 revenue forecast', text: 'Based on current trajectory, Q3 revenue projected at $3.2M — 13% above target. Scale paid acquisition now.', tag: 'Forecast', tagType: 'info' },
  { id: 4, icon: '🛒', title: 'Cart abandonment up', text: 'Checkout abandonment rose to 31% on mobile. Simplifying payment flow could recover ~$42K/month.', tag: 'Opportunity', tagType: 'warning' },
  { id: 5, icon: '🌍', title: 'APAC opportunity', text: 'APAC traffic up 34% with only 8% revenue share. Consider localized pricing for India and SEA markets.', tag: 'Growth', tagType: 'success' },
  { id: 6, icon: '⚡', title: 'Traffic anomaly', text: 'Unusual spike at 2–4 AM IST on Tuesdays and Thursdays. Likely bot traffic — review rate limits.', tag: 'Alert', tagType: 'warning' },
]

export const generateInsights = async (data) => {
  try {
    if (!import.meta.env.VITE_HUGGINGFACE_API_KEY) {
      await new Promise(r => setTimeout(r, 800))
      return MOCK_INSIGHTS
    }
    const prompt = `[INST] Analyze this business data and provide 3 key insights: Revenue: $${data?.revenue || '2.84M'}, Users: ${data?.users || '48392'}, Growth: ${data?.growth || '18.2%'}. Format as JSON array with fields: title, text, tag. [/INST]`
    const result = await aiApi.generateInsight(prompt)
    try {
      const parsed = JSON.parse(result.generated_text.replace(/```json|```/g, '').trim())
      return Array.isArray(parsed) ? parsed : MOCK_INSIGHTS
    } catch { return MOCK_INSIGHTS }
  } catch { return MOCK_INSIGHTS }
}
