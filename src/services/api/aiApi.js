const HF_API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY
const HF_MODEL = import.meta.env.VITE_HUGGINGFACE_MODEL || 'mistralai/Mistral-7B-Instruct-v0.2'

export const aiApi = {
  generateInsight: async (prompt) => {
    if (!HF_API_KEY) {
      return { generated_text: 'Add VITE_HUGGINGFACE_API_KEY to .env to enable live AI insights.' }
    }
    const res = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${HF_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 200, temperature: 0.7 } })
    })
    const data = await res.json()
    return data[0] || { generated_text: 'Unable to generate insight.' }
  }
}
