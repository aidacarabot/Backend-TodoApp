import express, { Request, Response, NextFunction } from 'express'
import taskRoutes from './src/api/routes/taskRoutes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.use('/tasks', taskRoutes)

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
