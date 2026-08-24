import { useEffect, useState } from 'react'
import TrainerCard from '../components/TrainerCard'

const trainersApiUrl = 'http://localhost:5000/api/v1/trainers'

function ClassesPage() {
  const [trainers, setTrainers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTrainer, setSelectedTrainer] = useState('')
  const [selectedClassName, setSelectedClassName] = useState('Strength Basics')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Morning')

  useEffect(() => {
    async function loadTrainers() {
      try {
        const response = await fetch(trainersApiUrl)

        if (!response.ok) {
          throw new Error('Trainer request failed')
        }

        const trainerData = await response.json()
        setTrainers(trainerData)
        setSelectedTrainer(trainerData[0]?.name ?? '')
      } catch {
        setError('Failed to load trainers.')
      } finally {
        setLoading(false)
      }
    }

    loadTrainers()
  }, [])

  const filteredTrainers = trainers.filter((trainer) =>
    trainer.specialization.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="page-section">
      <h2>Gym Classes</h2>
      <p>Explore FitZone classes and meet our trainers.</p>
      {loading && <p>Loading trainers...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <label className="trainer-search">
          Search by specialization
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="e.g. strength"
          />
        </label>
      )}
      <form className="booking-form">
        <label>
          Trainer
          <select
            value={selectedTrainer}
            onChange={(event) => setSelectedTrainer(event.target.value)}
          >
            {trainers.map((trainer) => (
              <option key={trainer.name} value={trainer.name}>
                {trainer.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Class Name
          <input
            type="text"
            value={selectedClassName}
            onChange={(event) => setSelectedClassName(event.target.value)}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </label>
        <label>
          Time Slot
          <select
            value={selectedTimeSlot}
            onChange={(event) => setSelectedTimeSlot(event.target.value)}
          >
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </form>
      <p className="selection-summary">
        Selected Trainer: {selectedTrainer} | Class: {selectedClassName} |
        {' '}Time: {selectedTimeSlot}
      </p>
      <div className="trainer-list">
        {!loading &&
          !error &&
          filteredTrainers.map((trainer) => (
          <TrainerCard key={trainer.name} {...trainer} />
          ))}
      </div>
    </section>
  )
}

export default ClassesPage
