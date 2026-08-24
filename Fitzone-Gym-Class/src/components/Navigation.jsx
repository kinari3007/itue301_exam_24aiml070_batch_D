import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navigation() {
  const { member, logout } = useAuth()

  return (
    <nav className="navigation" aria-label="Main navigation">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/my-bookings">My Bookings</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      {member && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  )
}

export default Navigation
