import { Router } from 'express'
import { TasksController } from './controllers/tasks-controller'
import { createTaskSchema } from '../schemas/create-task'
import { validateSchema } from '@/http/middlewares/validate-schema'
import { deleteTaskSchema } from '../schemas/delete-task'
import { updateTaskSchema } from '../schemas/update-task'
import { TasksSearchController } from './controllers/tasks-search-controller'
import { searchTaskSchema } from '../schemas/search-task'

export const tasksRouter = Router()

const tasksController = new TasksController()
const tasksSearchController = new TasksSearchController()

tasksRouter.post('/', validateSchema(createTaskSchema), tasksController.create)

tasksRouter.get('/', tasksController.list)

tasksRouter.get('/search', validateSchema(searchTaskSchema), tasksSearchController.create)

tasksRouter.get('/:id', tasksController.get)

tasksRouter.put('/:id', validateSchema(updateTaskSchema), tasksController.update)

tasksRouter.delete('/:id', validateSchema(deleteTaskSchema), tasksController.delete)
