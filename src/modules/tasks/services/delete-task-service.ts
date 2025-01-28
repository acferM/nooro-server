import { AppError } from "@/errors/AppError"
import { PrismaClient } from "@prisma/client"

type DeleteTaskServiceParams = {
  data: {
    id: string
  }
  deps: {
    prisma: PrismaClient
  }
}

export async function deleteTaskService({ data, deps }: DeleteTaskServiceParams) {
  const task = await deps.prisma.task.findUnique({
    where: {
      id: data.id
    },
    select: {
      id: true
    }
  })

  if (!task) {
    throw new AppError('Task not found')
  }

  await deps.prisma.task.delete({
    where: {
      id: data.id
    }
  })
}
