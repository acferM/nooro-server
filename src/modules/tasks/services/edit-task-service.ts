import { AppError } from "@/errors/AppError"
import { PrismaClient } from "@prisma/client"

type EditTaskServiceParams = {
  data: {
    id: string
    title: string
    color: string
    completed: boolean
  }
  deps: {
    prisma: PrismaClient
  }
}

export async function editTaskService({ data, deps }: EditTaskServiceParams) {
  const task = await deps.prisma.task.findUnique({
    where: {
      id: data.id
    },
    select: {
      id: true
    }
  })

  if (!task) {
    throw new AppError('Task not found', 404)
  }

  const updatedTask = await deps.prisma.task.update({
    where: {
      id: task.id
    },
    data: {
      color: data.color,
      title: data.title,
      completed: data.completed
    }
  })

  return updatedTask
}
