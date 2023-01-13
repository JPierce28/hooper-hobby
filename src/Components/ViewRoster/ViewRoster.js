import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'

const ViewRoster = ({ teamLogo }) => {
  const [currentRoster , setRoster] = useState([{}])
  // const [savedCard, setSave] = useState(false)
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
          <img className='team-logo' src={teamLogo}></img>
          <li>Name: {player.firstname} {player.lastname}</li>
          <li>Number: {player.leagues.standard.jersey}</li>
          <li>Position: {player.leagues.standard.pos}</li>
          <li>Height: {player.height.feets}'{player.height.inches}"</li>
          <li>Weight: {player.weight.pounds}lbs</li>
          <button className='save-btn'>Save Player Card</button>
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