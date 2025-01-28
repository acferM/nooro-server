import { z } from 'zod'

export const deleteTaskSchema = z.object({
  request: z.object({
    params: z.object({
      id: z.string({ message: 'Id must be a string' }).uuid({ message: 'Id must be a valid uuid' }),
    }),
  })
})

