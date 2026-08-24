function TrainerCard({ name, specialization, available }) {
  const status = available ? 'Available' : 'Fully Booked'
  const statusClass = available ? 'available' : 'fully-booked'

  return (
    <article className="trainer-card">
      <h3>Trainer: {name}</h3>
      <p>Specialization: {specialization}</p>
      <p>
        Status:{' '}
        <span className={`trainer-status ${statusClass}`}>{status}</span>
      </p>
    </article>
  )
}

export default TrainerCard
