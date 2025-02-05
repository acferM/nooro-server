import { PrismaClient } from "@prisma/client"
import Fuse from 'fuse.js'

type SearchTaskServiceParams = {
  data: {
    query: string
  }
  deps: {
    prisma: PrismaClient
  }
}

export async function searchTaskService({ data, deps }: SearchTaskServiceParams) {
  const tasks = await deps.prisma.task.findMany()

  const fuseInstance = new Fuse(tasks, {
    keys: ['title']
  })

  const fuseResults = fuseInstance.search(data.query)

  const filteredTasks = fuseResults.map((result) => result.item)

  return filteredTasks
}
