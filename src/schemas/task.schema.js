import { z } from 'zod'

export const taskSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(3, { message: 'Title must be at least 3 characters' })
    .max(100, { message: 'Title must not exceed 100 characters' }),
  description: z
    .string({ required_error: 'Description is required' })
    .min(10, { message: 'Description must be at least 10 characters' })
    .max(500, { message: 'Description must not exceed 500 characters' }),
  date: z
    .string()
    .datetime()
    .optional()
})