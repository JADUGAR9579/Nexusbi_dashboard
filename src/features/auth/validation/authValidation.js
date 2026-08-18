import { z } from 'zod'
export const loginSchema = z.object({ email: z.string().email('Enter a valid email'), password: z.string().min(6, 'Min 6 characters'), rememberMe: z.boolean().optional() })
export const registerSchema = z.object({ firstName: z.string().min(2,'Min 2 chars'), lastName: z.string().min(2,'Min 2 chars'), email: z.string().email(), password: z.string().min(8,'Min 8 chars').regex(/[A-Z]/,'Needs uppercase').regex(/[0-9]/,'Needs number'), confirmPassword: z.string() }).refine(d => d.password === d.confirmPassword, { message:"Passwords don't match", path:['confirmPassword'] })
export const forgotPasswordSchema = z.object({ email: z.string().email('Enter a valid email') })
