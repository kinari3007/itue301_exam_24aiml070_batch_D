import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    member: null,
    token: null,
    role: null,
  })

  function login() {
    setAuth({
      member: { name: 'FitZone Member', email: 'member@fitzone.test' },
      token: 'sample-fitzone-token',
      role: 'member',
    })
  }

  function logout() {
    setAuth({ member: null, token: null, role: null })
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
