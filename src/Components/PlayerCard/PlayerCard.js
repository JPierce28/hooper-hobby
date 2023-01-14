import React from 'react'
import { useLocation } from 'react-router-dom'
import './PlayerCard.css'

const PlayerCard = ({ roster, currentLogo }) => {
  let location = useLocation()

  let currentRoster = roster.map(player => {
    return (
      <div className='card-container'>
        <img src={currentLogo} alt="Image of team logo"></img>
        <li>{player.firstname} {player.lastname}</li>
        <li>Number: {player.leagues.standard.jersey}</li>
        <li>Position: {player.leagues.standard.pos}</li>
        <li>Height: {player.height.feets}'{player.height.inches}"</li>
        <li>weight={player.weight.pounds}</li>
      </div>
    )
  })
  return (
    <div className='player-card'>
      {currentRoster}
      {location.pathname === "/roster/:id" && <button className='save-btn'>Save Player Card</button>}
    </div>
  )
}

export default PlayerCard;