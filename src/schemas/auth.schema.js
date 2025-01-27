import { z } from 'zod'

export const registerSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(3, { message: 'Username must be at least 3 characters' })
    .max(30, { message: 'Username must not exceed 30 characters' })
    .regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers, and underscores' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' })
    .transform((value) => value.toLowerCase()),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(128, { message: 'Password must not exceed 128 characters' })
})

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
})