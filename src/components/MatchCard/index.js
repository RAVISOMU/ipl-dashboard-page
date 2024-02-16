import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {result, matchStatus, competingTeam, competingTeamLogo} = eachMatch
  const statusClass = matchStatus === 'Won' ? 'won-match' : 'lost-match'

  return (
    <li className="recent-matches-list-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
