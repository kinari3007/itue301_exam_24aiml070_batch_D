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
  return (
    <section className="page-section">
      <h2>Gym Classes</h2>
      <p>Explore FitZone classes and meet our trainers.</p>
      <div className="trainer-list">
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.name} {...trainer} />
        ))}
      </div>
    </section>
  )
}

export default ClassesPage
