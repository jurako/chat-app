import './Participant.css'

function Participant({avatarUrl, name}) {
  return (
    <div className="participant">
      <img src={`/images/avatars/${avatarUrl}`} alt={name} />
      <h2 className="participant__name">{name}</h2>
      <div className="participant__status"></div>
    </div>
  )
}

export default Participant;