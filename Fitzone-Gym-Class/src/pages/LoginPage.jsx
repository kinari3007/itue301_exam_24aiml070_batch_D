import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { login, member } = useAuth()

  function handleLogin() {
    login()
    navigate('/classes')
  }

  return (
    <section className="page-section">
      <h2>Member Login</h2>
      <p>Sign in to manage your FitZone classes and bookings.</p>
      {member ? (
        <p className="login-status">Signed in as {member.name}</p>
      ) : (
        <button type="button" onClick={handleLogin}>
          Login as Sample Member
        </button>
      )}
    </section>
  )
}

export default LoginPage
