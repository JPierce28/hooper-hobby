import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'

const ViewRoster = () => {
  const [currentRoster, setRoster] = useState([{}])
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
  })

  let playerCards = currentRoster.map(player => {
      return (
        <div className='player-card'>
          <p>{player.firstname} {player.lastname}</p>
          <p>Height: {player.height.feets}'{player.height.inches}"</p>
          <p>Weight: {player.weight.pounds}lbs</p>
        </div>
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