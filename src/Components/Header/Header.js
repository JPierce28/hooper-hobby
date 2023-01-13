import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='teams-button-container'>
        <Link to="/teams"> 
          <button className='view-teams-btn'>Teams</button>
        </Link>
      </div>
      <div className='about-button-container'>
      <Link to="/about"> 
          <button className='about-btn'>About</button>
      </Link>
      </div>
      <div className='page-title-container'>
        <Link to="/">
          <h1 className='title'>Hooper Hobby</h1>
        </Link>
      </div>
      <div className='cards-button-container'>
      <Link to="/my-cards"> 
          <button className='my-cards-btn'>My Cards</button>
      </Link>
      </div>
      <div className='roster-button-container'>
      </div>
    </header>
  )
}

export default Header;
