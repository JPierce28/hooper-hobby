import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './PlayerCard.css'

const PlayerCard = ({ roster, saveCard, deleteCard, deleteRosterPlayer }) => {
  const [saveMessage, setMessage] = useState("")
  let location = useLocation()
  const { id } = useParams()

  const saveNewCard = (playerId) => {
    let findPlayer = roster.find(player => {
      return player.id === playerId
    })
    saveCard(findPlayer)
    deleteRosterPlayer(findPlayer)
    setMessage("Saved Card, go to My Cards to view")
    setTimeout(() => setMessage(""), 3000)
  }

  const deletePlayer = (playerId) => {
    let findPlayer = roster.find(player => {
      return player.id === playerId
    })
    deleteCard(findPlayer)
  }

  let currentRoster = roster.map(player => {
    return (
      <div id={player.id} className='player-card'>
        <img className='team-logo' src={player.logo} alt="Image of team logo"></img>
        <li>{player.firstname} {player.lastname}</li>
        <li>Number: {player.leagues.standard.jersey}</li>
        <li>Position: {player.leagues.standard.pos}</li>
        <li>Height: {player.height.feets}'{player.height.inches}"</li>
        <li>Weight: {player.weight.pounds}</li>
        {location.pathname === `/roster/${id}` && <button className='save-btn' onClick={() => saveNewCard(player.id)}>Save Player Card</button>}
        {location.pathname === "/my-cards" && <button className='save-btn' onClick={() => deletePlayer(player.id)}>Delete Player Card</button>}
      </div>
    )
  })
  return (
    <div className='display-container'>
      <h3 className='save-card-message'>{saveMessage}</h3>
      <div className='card-container'>
        {currentRoster}
      </div>
    </div>
  )
}

export default PlayerCard;