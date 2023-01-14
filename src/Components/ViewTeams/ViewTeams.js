import {useEffect, useState} from 'react'
import './ViewTeams.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import ViewRoster from '../ViewRoster/ViewRoster'

const ViewTeams = ({ currentLogo }) => {
  const [allTeams, setTeams] = useState([{}])
  const [filteredTeams, setFilter] = useState([{}])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://api-nba-v1.p.rapidapi.com/teams", {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9f4427e2c7mshfdc54bf392d3f70p104469jsnb7e0ca455b92',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      })
      .then(response => response.json())
      .then(data => {
        if(data.errors.length === 0){
          const nbaTeams = data.response.filter(team => {
            return team.nbaFranchise === true && team.name !== "Home Team Stephen A"
          })
          setTeams(nbaTeams.sort())
          setFilter(nbaTeams.sort())
          setLoading(false)
        } else {
          return
        }
      })
             
  }, [])

  const filterTeams = (event) => {
    if(event.target.value === "All Teams"){
      return setFilter(allTeams)
    } else {
    const filterDivision = allTeams.filter(team => {
      return team.leagues.standard.conference === event.target.value
    })
    setFilter(filterDivision)
    }
  }

  const teamCard = filteredTeams.map(team => {
    return (
      <Link to={`/roster/${team.id}`}>
      <div className='team-card'>
        <img className='team-image' id={team.logo} key={team.id} onClick={event => currentLogo(event.target.id)} src={team.logo} alt={"Image of " + team.name}></img>
        <p>{team.name}</p>
      </div>
      </Link>
    )
  })

  return (
    <div>
      <Header />
      {isLoading === true && <h1>Data Loading...</h1>}
      <form className='form'>
        <h2>Filter By Division</h2>
        <select className='division-filter' onChange={event => filterTeams(event)}>
          <option value='All Teams'>
            All Teams
          </option>
          <option value="West">
            Western
          </option>
          <option value="East">
            Eastern
          </option>
        </select>
      </form>
      <div className='team-container'>
        {teamCard}
      </div>
    </div>
  )
}

export default ViewTeams;
