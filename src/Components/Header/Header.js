import  React  from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  let location = useLocation()

  return (
    <header className='header'>
      <div className='teams-button-container'>
        <Link to="/teams"> 
          {location.pathname !== '/teams' && <button className='view-teams-btn' type='button'>Teams</button>}
        </Link>
      </div>
      <div className='page-title-container'>
        <Link to="/">
          <h1 className='title'>Hooper Hobby</h1>
        </Link>
      </div>
      <div className='cards-button-container'>
      <Link to="/my-cards"> 
        {location.pathname !== '/my-cards' && <button className='my-cards-btn'>My Cards</button>}
      </Link>
      </div>
    </header>
  )
}

export default Header;
