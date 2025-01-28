import { tasksRouter } from '@/modules/tasks/http/tasks-routes';
import { Router } from 'express';

export const appRouter = Router();

appRouter.use('/tasks', tasksRouter)
