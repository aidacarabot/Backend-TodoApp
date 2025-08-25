import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//! GET /tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' })
  }
}

//! POST /tasks
export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body
  if (!title || !color) {
    return res.status(400).json({ error: 'Title and color are required' })
  }
  try {
    const newTask = await prisma.task.create({
      data: { title, color }
    })
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' })
  }
}

//! PUT /tasks/:id
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, color, completed } = req.body
  // Solo incluir los campos definidos
  const data: any = {}
  if (title !== undefined) data.title = title
  if (color !== undefined) data.color = color
  if (completed !== undefined) data.completed = completed
  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data
    })
    res.json({ message: 'Task updated', task: updatedTask })
  } catch (error) {
    res.status(404).json({ error: 'Task not found or error updating task' })
  }
}

//! DELETE /tasks/:id
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.task.delete({ where: { id: Number(id) } })
    res.json({ message: 'Task deleted' })
  } catch (error) {
    res.status(404).json({ error: 'Task not found or error deleting task' })
  }
}
