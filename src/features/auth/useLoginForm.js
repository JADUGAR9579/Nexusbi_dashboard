import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { loginSchema } from './validation/authValidation'

export const useLoginForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, loading } = useAuth()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'admin@nexusbi.io',
      password: 'Admin123!',
      rememberMe: true,
    },
  })

  const onSubmit = form.handleSubmit(async (data) => {
    const result = await login(data.email, data.password)

    if (result.success) {
      const redirectTo = location.state?.from?.pathname || '/'
      navigate(redirectTo, { replace: true })
    }
  })

  return { ...form, loading, onSubmit }
}
