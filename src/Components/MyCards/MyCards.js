import './MyCards.css'
import Header from '../Header/Header'
import PlayerCard from '../PlayerCard/PlayerCard'

const MyCards = ({ myCards }) => {

  return (
    <div className='user-cards'>
      <Header />
      <h1>my cards</h1>
      <PlayerCard roster={myCards}/>
    </div>
  )
}

export default MyCards;