import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home-section'>
      <header>
        <h1 className='home-header'>Hooper Hobby</h1>
      </header>
      <section className='main-display'>
        <section className='left-side' to="/teams">
          <Link to="/teams" className='teams-link' tabIndex={0}>
            <h1 className='browse-text'>Browse Teams</h1>
          </Link>
        </section>
        <section className='right-side' to="/my-cards">
          <Link to="/my-cards" className='saved-link' tabIndex={0}>
            <h1 className='saved-text'>Saved Cards</h1>
          </Link>
        </section>
      </section>
    </div>
  )
}

export default Home;
