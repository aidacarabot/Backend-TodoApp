"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//! GET /tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};
exports.getTasks = getTasks;
//! POST /tasks
const createTask = async (req, res) => {
    const { title, color } = req.body;
    if (!title || !color) {
        return res.status(400).json({ error: 'Title and color are required' });
    }
    try {
        const newTask = await prisma.task.create({
            data: { title, color }
        });
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
};
exports.createTask = createTask;
//! PUT /tasks/:id
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    try {
        const updatedTask = await prisma.task.update({
            where: { id: Number(id) },
            data: { title, color, completed }
        });
        res.json({ message: 'Task updated', task: updatedTask });
    }
    catch (error) {
        res.status(404).json({ error: 'Task not found or error updating task' });
    }
};
exports.updateTask = updateTask;
//! DELETE /tasks/:id
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({ where: { id: Number(id) } });
        res.json({ message: 'Task deleted' });
    }
    catch (error) {
        res.status(404).json({ error: 'Task not found or error deleting task' });
    }
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=taskController.js.map