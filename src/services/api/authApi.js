const delay = (ms = 800) => new Promise(r => setTimeout(r, ms))

export const authApi = {
  login: async (email, password) => {
    await delay()
    if (!email || password.length < 6) throw new Error('Invalid credentials')
    return { user: { id: 1, name: 'Shivnath Bonde', email, role: 'admin', avatar: 'SB' }, token: 'demo_token_123' }
  },
  register: async (data) => {
    await delay(1000)
    return { user: { id: Date.now(), name: `${data.firstName} ${data.lastName}`, email: data.email, role: 'user' }, token: 'demo_token_new' }
  },
  logout: async () => { await delay(200) },
  forgotPassword: async (email) => { await delay(); return { message: `Reset link sent to ${email}` } },
}
