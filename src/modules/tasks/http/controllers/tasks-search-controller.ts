import type { Request, Response } from 'express'
import { searchTaskService } from '../../services/search-task-service';
import { prisma } from '@/singletons/prisma';
import { HttpErrorHandler } from '@/utils/http-error-handler';

type CreateRequest = Request<unknown, unknown, unknown, { query: string }>
type CreateResponse = Response<{ id: string; title: string; color: string }[]>

export class TasksSearchController {
  @HttpErrorHandler()
  async create(request: CreateRequest, response: CreateResponse) {
    const { query } = request.query

    const tasks = await searchTaskService({
      data: { query },
      deps: {
        prisma
      }
    })

    response.json(tasks)
  }
}
