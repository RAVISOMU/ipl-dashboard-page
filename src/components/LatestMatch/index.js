import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    result,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-matches-container">
      <h1 className="latest-matches-heading">Latest Matches</h1>
      <div className="latest-matches-card">
        <div className="latest-matches-logo-container">
          <div className="latest-matches-info">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr />
        <div className="latest-matches-innings-container">
          <p className="description">First Innings</p>
          <p className="innings">{firstInnings}</p>
          <p className="description">Second Innings</p>
          <p className="innings">{secondInnings}</p>
          <p className="description">Man Of The Match</p>
          <p className="man-of-the-match">{manOfTheMatch}</p>
          <p className="description">Umpires</p>
          <p className="umpires">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
