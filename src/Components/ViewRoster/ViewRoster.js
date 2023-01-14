import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import PlayerCard from '../PlayerCard/PlayerCard'

const ViewRoster = ({ teamLogo }) => {
  const [currentRoster , setRoster] = useState([{}])
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`https://api-nba-v1.p.rapidapi.com/players?team=${id}&season=2022`, {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '9f4427e2c7mshfdc54bf392d3f70p104469jsnb7e0ca455b92',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      let goodData = data.response.filter(player => {
        return player.height.feets !== null
      })
      setRoster(goodData)
    })
  },[])

  let playerCards = currentRoster.map(player => {
      return (
        <PlayerCard 
          key={player.id}
          logo={teamLogo}
          firstName={player.firstname}
          lastName={player.lastname}
          number={player.leagues.standard.jersey}
          position={player.leagues.standard.pos}
          heightFeet={player.height.feets}
          heightInches={player.height.inches}
          weight={player.weight.pounds}
        />
      )
    })

  return (
    <div className='card-container'>
      <Header />
      {playerCards}
    </div>
  )
}

export default ViewRoster;