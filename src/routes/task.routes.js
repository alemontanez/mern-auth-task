import { Router } from 'express'
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/task.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { taskSchema } from '../schemas/task.schema.js'

const router = Router()

router.get('/tasks', authRequired, getTasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validateSchema(taskSchema), createTask)
router.delete('/tasks/:id', authRequired, deleteTask)
router.put('/tasks/:id', authRequired, updateTask)

export default router