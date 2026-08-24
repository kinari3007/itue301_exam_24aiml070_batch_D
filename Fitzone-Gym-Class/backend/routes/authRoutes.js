import { Router } from 'express'
import { demoToken } from '../middleware/authGuard.js'

const router = Router()

router.post('/login', (req, res) => {
  const { email, password } = req.body ?? {}

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  res.status(200).json({
    member: {
      id: 'member-1',
      name: 'FitZone Member',
      email,
      role: 'member',
    },
    token: demoToken,
    role: 'member',
  })
})

export default router
