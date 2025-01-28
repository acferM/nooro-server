import { PrismaClient } from "@prisma/client"

type ListTasksServiceParams = {
  deps: {
    prisma: PrismaClient
  }
}

export async function listTasksService({ deps }: ListTasksServiceParams) {
  const tasks = await deps.prisma.task.findMany()

  console.log(tasks)

  return tasks
}
