import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import PlayerCard from '../PlayerCard/PlayerCard'

const ViewRoster = ({ teamLogo, saveCard }) => {
  const [currentRoster , setRoster] = useState([{}])
  const [isLoading, setLoading] = useState(true)
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
      if(data.errors.length === 0){
      let goodData = data.response.filter(player => {
        return player.height.feets !== null
      })
      console.log(goodData)
      setRoster(goodData)
      setLoading(false)
    } else {
      return 'hello'
      }
    })
  }, [])

  return (
    <section className='roster-page'>
      <Header />
      {isLoading === true && <h1>Loading Information...</h1>}
      {isLoading === false && <PlayerCard roster={currentRoster} currentLogo={teamLogo} saveCard={saveCard}/>}
    </section>
  )
}

export default ViewRoster;