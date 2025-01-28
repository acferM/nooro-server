import { PrismaClient } from "@prisma/client"

type CreateTaskServiceParams = {
  data: {
    title: string
    color: string
  }
  deps: {
    prisma: PrismaClient
  }
}

export async function createTaskService({ data, deps }: CreateTaskServiceParams) {
  const task = await deps.prisma.task.create({
    data: {
      color: data.color,
      title: data.title,
    }
  })

  return task
}
