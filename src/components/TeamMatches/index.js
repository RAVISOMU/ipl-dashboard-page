import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchesDetails()
  }

  getUpdatedData = obj => ({
    competingTeam: obj.competing_team,
    competingTeamLogo: obj.competing_team_logo,
    date: obj.date,
    firstInnings: obj.first_innings,
    id: obj.id,
    manOfTheMatch: obj.man_of_the_match,
    matchStatus: obj.match_status,
    result: obj.result,
    secondInnings: obj.second_innings,
    umpires: obj.umpires,
    venue: obj.venue,
  })

  getTeamMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: this.getUpdatedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getUpdatedData(eachMatch),
      ),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchesDetails: updatedData, isLoading: false})
  }

  renderMatchesDetails = () => {
    const {teamMatchesDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} =
      teamMatchesDetails

    console.log(latestMatchDetails)

    return (
      <div className="matches-responsive-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  bgCardClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb-card'
      case 'KKR':
        return 'kkr-card'
      case 'KXP':
        return 'kxip-card'
      case 'CSK':
        return 'csk-card'
      case 'RR':
        return 'rr-card'
      case 'MI':
        return 'mi-card'
      case 'SH':
        return 'srh-card'
      case 'DC':
        return 'dc-card'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const bgCardClass = this.bgCardClassName()
    return (
      <div className={`matches-container ${bgCardClass}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
