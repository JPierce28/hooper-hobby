import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import PlayerCard from '../PlayerCard/PlayerCard'

const ViewRoster = ({ teamLogo, saveCard, savedCards }) => {
  const [currentRoster , setRoster] = useState([{}])
  const [isLoading, setLoading] = useState(true)
  const [errorMessage, setMessage] = useState("")
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
      if(data.response.length !== 0){
      let cleanData = data.response.filter(player => {
        player.logo = teamLogo
        return player.height.feets !== null
      })
      determineSaved(cleanData)
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

  const determineSaved = (roster) => {
    let displayRoster = roster
    if(savedCards.length === 0){
      setRoster(roster)
    } else {
      savedCards.forEach( currentCard => {
        displayRoster = displayRoster.filter( rosterCard => rosterCard.id !== currentCard.id)
      })   
    setRoster(displayRoster)
    }
  }

  const deleteRosterPlayer = (playerId) => {
    let newRoster = currentRoster.filter(player => {
      return player.id !== playerId.id
    })
    setRoster(newRoster)
  }

  return (
    <section className='roster-page'>
      {errorMessage && <h3>{errorMessage}</h3>}
      <Header />
      {isLoading === false && <PlayerCard roster={currentRoster} saveCard={saveCard} deleteRosterPlayer={deleteRosterPlayer}/>}
      {isLoading === true && <h1>Loading Roster...</h1>}  
    </section>
  )
}

export default ViewRoster;