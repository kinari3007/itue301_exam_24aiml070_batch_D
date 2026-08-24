export const demoToken = 'sample-fitzone-token'

function authGuard(req, res, next) {
  const authorization = req.get('Authorization')
  const [scheme, token] = authorization?.split(' ') ?? []

  if (scheme !== 'Bearer' || token !== demoToken) {
    return res.status(401).json({ error: 'Missing or invalid authentication' })
  }

  req.member = {
    id: 'member-1',
    name: 'FitZone Member',
    email: 'member@fitzone.test',
    role: 'member',
  }

  next()
}

export default authGuard
