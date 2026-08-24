import ClassesPage from './pages/ClassesPage'
import LoginPage from './pages/LoginPage'
import MyBookingsPage from './pages/MyBookingsPage'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">FitZone Gym</p>
        <h1>Gym &amp; Class Booking System</h1>
      </header>
      <LoginPage />
      <ClassesPage />
      <MyBookingsPage />
    </main>
  )
}

export default App
