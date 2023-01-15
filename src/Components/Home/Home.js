import React from 'react'
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
  return (
    <div className='home-section'>
      <header>
        <h1 className='home-header'>Hooper Hobby</h1>
      </header>
      <section className='main-display'>
        <section className='left-side'>
          <div className='teams-link'>
            <h1 className='browse-text'>Browse Teams</h1>
          </div>
        </section>
        <section className='right-side'>
          <div className='saved-link'>
            <h1 className='saved-text'>Saved Cards</h1>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Home;
