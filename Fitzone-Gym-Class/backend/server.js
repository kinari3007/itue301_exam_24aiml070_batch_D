import express from 'express'
import authRoutes from './routes/authRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import trainerRoutes from './routes/trainerRoutes.js'
import requestLogger from './middleware/requestLogger.js'

const app = express()
const port = process.env.PORT || 5000

app.use(requestLogger)
app.use(express.json())

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/trainers', trainerRoutes)
app.use('/api/v1/bookings', bookingRoutes)

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.use((error, req, res, _next) => {
  console.error(error)
  const status = error.statusCode === 400 ? 400 : 500
  const message = status === 400 ? 'Invalid JSON request body' : 'Something went wrong'
  res.status(status).json({ error: message })
})

app.listen(port, () => {
  console.log(`FitZone API listening on port ${port}`)
})
