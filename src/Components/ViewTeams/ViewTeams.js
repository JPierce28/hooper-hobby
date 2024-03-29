import {useEffect, useState} from 'react'
import './ViewTeams.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const ViewTeams = ({ currentLogo }) => {
  const [allTeams, setTeams] = useState([{}])
  const [filteredTeams, setFilter] = useState([{}])
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setMessage] = useState("")
  
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
        if(data.response.length !== 0){
          const nbaTeams = data.response.filter(team => {
            return team.nbaFranchise === true && team.name !== "Home Team Stephen A"
          })
          setTeams(nbaTeams.sort())
          setFilter(nbaTeams.sort())
          setLoading(false)
        } else {
          throw new Error("Looks like something went wrong try reloading")
        }
      })
      .catch(error => {
        if(error.message.includes("Looks like something went wrong try reloading")){
          setMessage("Looks like we couldn't load any data please try reloading the page")
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

  const teamCard = filteredTeams.map((team, index) => {
    
    return (
    <Link key={index} to={`/roster/${team.id}`}>
      <div className='team-card' key={index} id={team.logo} onClick={event => currentLogo(event.target.id)}>
        <img className='team-image' id={team.logo} src={team.logo} alt={"Image of " + team.name}></img>
      </div>  
    </Link>
    )
  })

  return (
    <div className='teams-page'>
      <Header />
      {isLoading === true && <h1 className='loading-message'>Loading Teams...</h1>}
      {errorMessage && <h3 className='loading-message'>{errorMessage}</h3>}
      <form className='form'>
        <h2 className='filter-header'>Filter By Division</h2>
        <select className='division-filter' onChange={event => filterTeams(event)}>
          <option value='All Teams'>
            All Teams
          </option>
          <option value="West">
            West
          </option>
          <option value="East">
            East
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