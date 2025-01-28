import { AppError } from "@/errors/AppError"
import { PrismaClient } from "@prisma/client"

type GetTaskServiceParams = {
  data: {
    id: string
  }
  deps: {
    prisma: PrismaClient
  }
}

export async function getTaskService({ data, deps }: GetTaskServiceParams) {
  const task = await deps.prisma.task.findUnique({
    where: {
      id: data.id,
    },
  })

  if (!task) {
    throw new AppError('Task not found', 404)
  }

  return task
}
