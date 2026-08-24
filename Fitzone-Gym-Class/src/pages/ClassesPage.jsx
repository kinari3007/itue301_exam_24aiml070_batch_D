import { useState } from 'react'
import TrainerCard from '../components/TrainerCard'

const trainers = [
  {
    name: 'Rahul Sharma',
    specialization: 'Strength Training',
    available: true,
  },
  {
    name: 'Priya Mehta',
    specialization: 'Yoga and Mobility',
    available: false,
  },
]

function ClassesPage() {
  const [selectedTrainer, setSelectedTrainer] = useState(trainers[0].name)
  const [selectedClassName, setSelectedClassName] = useState('Strength Basics')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Morning')

  return (
    <section className="page-section">
      <h2>Gym Classes</h2>
      <p>Explore FitZone classes and meet our trainers.</p>
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
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.name} {...trainer} />
        ))}
      </div>
    </section>
  )
}

export default ClassesPage
