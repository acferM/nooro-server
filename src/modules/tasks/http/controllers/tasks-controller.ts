import type { Request, Response } from 'express'
import { createTaskService } from '../../services/create-task-service';
import { prisma } from '@/singletons/prisma';
import { HttpErrorHandler } from '@/utils/http-error-handler';
import { listTasksService } from '../../services/list-tasks-service';
import { deleteTaskService } from '../../services/delete-task-service';
import { editTaskService } from '../../services/edit-task-service';
import { getTaskService } from '../../services/get-task-service';

type CreateRequest = Request<unknown, unknown, { title: string; color: string }>
type CreateResponse = Response<{ id: string; title: string; color: string }>

type ListResponse = Response<{ id: string; title: string; color: string }[]>

type GetRequest = Request<{ id: string }>
type GetResponse = Response<{ id: string; title: string; color: string }>

type DeleteReuest = Request<{ id: string }>

type UpdateRequest = Request<{ id: string }, unknown, { title: string; color: string; completed: boolean }>
type UpdateResponse = Response<{ id: string; title: string; color: string }>

export class TasksController {
  @HttpErrorHandler()
  async create(request: CreateRequest, response: CreateResponse) {
    const { color, title } = request.body

    const task = await createTaskService({
      data: { color, title },
      deps: {
        prisma
      }
    })

    response.status(201).json(task)
  }

  @HttpErrorHandler()
  async list(_: Request, response: ListResponse) {
    const tasks = await listTasksService({
      deps: {
        prisma
      }
    })

    response.json(tasks)
  }

  @HttpErrorHandler()
  async get(request: GetRequest, response: GetResponse) {
    const { id } = request.params

    const task = await getTaskService({
      data: { id },
      deps: {
        prisma
      }
    })

    response.json(task)
  }

  @HttpErrorHandler()
  async delete(request: DeleteReuest, response: Response) {
    const { id } = request.params

    await deleteTaskService({
      data: { id },
      deps: {
        prisma
      }
    })

    response.status(204).send()
  }

  @HttpErrorHandler()
  async update(request: UpdateRequest, response: UpdateResponse) {
    const { id } = request.params
    const { color, title, completed } = request.body

    const task = await editTaskService({
      data: {
        id,
        title,
        color,
        completed
      },
      deps: {
        prisma
      }
    })

    response.json(task)
  }
}
