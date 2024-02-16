import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="team-link-item">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
