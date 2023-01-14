import React from 'react'
import './PlayerCard.css'

const PlayerCard = ({key, logo, firstName, lastName, number, position, heightFeet, heightInches, weight}) => {

  return (
    <div className='player-card'>
      <img className='team-logo' src={logo} alt="image of team logo"></img>
      <li>Name: {firstName} {lastName}</li>
      <li>Number: {number}</li>
      <li>Position: {position}</li>
      <li>Height: {heightFeet}'{heightInches}"</li>
      <li>Weight: {weight}lbs</li>
      <button className='save-btn'>Save Player Card</button>
    </div>
  )
}

export default PlayerCard;