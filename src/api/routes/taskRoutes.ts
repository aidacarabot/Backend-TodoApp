import { Router } from 'express'
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController'

const taskRoutes = Router();

taskRoutes.get('/', getTasks)
taskRoutes.post('/', createTask)
taskRoutes.put('/:id', updateTask)
taskRoutes.delete('/:id', deleteTask)

export default taskRoutes
