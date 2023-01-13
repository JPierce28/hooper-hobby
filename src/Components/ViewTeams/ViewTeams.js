import {useState} from 'react'
import './ViewTeams.css'
import Header from '../Header/Header'

const ViewTeams = () => {
  // const [allTeams, setTeams] = useState([{}])
  const allTeams = [{
      id: 1, name: "Atlanta Hawks", logo: "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"},
    {
      id: 2, name: "Boston Celtics", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"
    }
  ]

  const teamCard = allTeams.map(team => {
    return (
      <div className='team-card'>
        <img className='team-image' src={team.logo} alt={"Image of " + team.name}></img>
        <p>{team.name}</p>
      </div>
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
