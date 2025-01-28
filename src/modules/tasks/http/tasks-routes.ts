import { Router } from 'express'
import { TasksController } from './controllers/tasks-controller'
import { createTaskSchema } from '../schemas/create-task'
import { validateSchema } from '@/http/middlewares/validate-schema'
import { deleteTaskSchema } from '../schemas/delete-task'
import { updateTaskSchema } from '../schemas/update-task'

export const tasksRouter = Router()

const tasksController = new TasksController()

tasksRouter.post('/', validateSchema(createTaskSchema), tasksController.create)

tasksRouter.get('/', tasksController.list)

tasksRouter.get('/:id', tasksController.get)

tasksRouter.put('/:id', validateSchema(updateTaskSchema), tasksController.update)

tasksRouter.delete('/:id', validateSchema(deleteTaskSchema), tasksController.delete)
