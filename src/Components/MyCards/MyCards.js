import './MyCards.css'
import Header from '../Header/Header'
import PlayerCard from '../PlayerCard/PlayerCard'

const MyCards = ({ myCards, deleteCard }) => {
  return (
    <div className='user-cards'>
      <Header />
      <h1>my cards</h1>
      {myCards.length === 0 && <h3 className='no-cards'>No Cards to display, go save some basketball cards!</h3>}
      <PlayerCard roster={myCards} deleteCard={deleteCard}/>
    </div>
  )
}

export default MyCards;
