import { Router } from 'express'
import authGuard from '../middleware/authGuard.js'

const router = Router()
const bookings = []
let nextBookingId = 1
const validStatuses = new Set(['booked', 'attended', 'cancelled'])

router.use(authGuard)

router.post('/', (req, res) => {
  const { trainerId, className, date, timeSlot } = req.body ?? {}

  if (!trainerId || !className || !date || !timeSlot) {
    return res.status(400).json({
      error: 'trainerId, className, date, and timeSlot are required',
    })
  }

  const booking = {
    id: String(nextBookingId++),
    memberId: req.member.id,
    trainerId,
    className,
    date,
    timeSlot,
    status: 'booked',
  }

  bookings.push(booking)
  res.status(201).json(booking)
})

router.get('/my', (req, res) => {
  const memberBookings = bookings.filter(
    (booking) => booking.memberId === req.member.id,
  )

  res.status(200).json(memberBookings)
})

router.patch('/:id/status', (req, res) => {
  const { status } = req.body ?? {}

  if (!validStatuses.has(status)) {
    return res.status(400).json({
      error: 'Status must be booked, attended, or cancelled',
    })
  }

  const booking = bookings.find(
    (item) => item.id === req.params.id && item.memberId === req.member.id,
  )

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' })
  }

  booking.status = status
  res.status(200).json(booking)
})

export default router
