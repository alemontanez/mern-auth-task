import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:5173'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  res.append('Access-Control-Allow-Credentials', 'true')
  next()
})

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json('API funcionando')
})
app.use('/api/auth', authRoutes)
app.use('/api', taskRoutes)

export default app