import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import ClassesPage from './pages/ClassesPage'
import LoginPage from './pages/LoginPage'
import MyBookingsPage from './pages/MyBookingsPage'
import './App.css'

const AdminPanel = lazy(() => import('./pages/AdminPanel'))

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="app-shell">
          <header className="app-header">
            <p className="eyebrow">FitZone Gym</p>
            <h1>Gym &amp; Class Booking System</h1>
          </header>
          <Navigation />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />
            </Route>
            <Route
              path="/admin"
              element={
                <Suspense fallback={<p>Loading Admin Panel...</p>}>
                  <AdminPanel />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
