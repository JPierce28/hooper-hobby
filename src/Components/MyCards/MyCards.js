import './MyCards.css'
import Header from '../Header/Header'
import PlayerCard from '../PlayerCard/PlayerCard'

const MyCards = ({ myCards, deleteCard }) => {
  return (
    <section className='user-cards'>
      <Header />
      <div className='main-cards-display'>
        <header className='page-header'>
          <h1 className='my-header'>My Cards</h1>
          {myCards.length === 0 && <h3 className='no-cards'>No cards to display, go save some basketball cards!</h3>}
        </header>
       <PlayerCard roster={myCards} deleteCard={deleteCard}/>
      </div>
    </section>
  )
}

export default MyCards;
