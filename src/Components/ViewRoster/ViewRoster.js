import React, { useEffect, useState } from 'react'
import './ViewRoster.css'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import PlayerCard from '../PlayerCard/PlayerCard'

const ViewRoster = ({ teamLogo }) => {
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
      setRoster(goodData)
      setLoading(false)
    } else {
      return 'hello'
      }
    })
  }, [])

  return (
    <div className='roster-container'>
      <Header />
      {isLoading === true && <h1>Loading Information...</h1>}
      {isLoading === false && <PlayerCard roster={currentRoster}/>}
    </div>
  )
}

export default ViewRoster;