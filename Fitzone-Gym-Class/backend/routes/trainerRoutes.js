import { Router } from 'express'

const router = Router()

const trainers = [
  {
    id: 'trainer-1',
    name: 'Rahul Sharma',
    specialization: 'Strength Training',
    available: true,
  },
  {
    id: 'trainer-2',
    name: 'Priya Mehta',
    specialization: 'Yoga and Mobility',
    available: false,
  },
]

router.get('/', (req, res) => {
  res.status(200).json(trainers)
})

export default router
