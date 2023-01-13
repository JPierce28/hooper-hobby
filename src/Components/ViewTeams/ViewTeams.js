import {useEffect, useState} from 'react'
import './ViewTeams.css'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
// import fetchApi from '../../fetchApi'

const url = "https://api-nba-v1.p.rapidapi.com/teams"

const ViewTeams = () => {
  const [allTeams, setTeams] = useState([{}])

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
        const nbaTeams = data.response.filter(team => {
          return team.nbaFranchise === true && team.name !== "Home Team Stephen A"
        })
        setTeams(nbaTeams.sort())
      })
  }, [])

  const teamCard = allTeams.map(team => {
    return (
      <Link to="/roster">
      <div className='team-card'>
        <img className='team-image' src={team.logo} alt={"Image of " + team.name}></img>
        <p>{team.name}</p>
      </div>
      </Link>
    )
  })

  return (
    <div>
      <Header />
      <div className='team-container'>
        {teamCard}
      </div>
    </div>
  )
}

export default ViewTeams;
