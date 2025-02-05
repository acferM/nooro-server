import { z } from 'zod'

export const searchTaskSchema = z.object({
  request: z.object({
    query: z.object({
      query: z.string({ message: 'Query must be a string' }),
    })
  })
})
