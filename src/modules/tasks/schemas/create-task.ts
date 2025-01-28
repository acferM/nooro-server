import { z } from "zod";

export const createTaskSchema = z.object({
  request: z.object({
    body: z.object({
      color: z.string({ message: 'Color must be a string' }).min(7, 'Color must have 7 characters like #FFFFFF').max(7, 'Color must have 7 characters like #FFFFFF'),
      title: z.string({ message: 'Title must be a string' }).min(1, 'Title must have at least 1 character'),
    }),
  })
})


