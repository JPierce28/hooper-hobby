import React from 'react'
import Header from '../Header/Header';
import './About.css'

const About = () => {
  return (
    <section className='main-section'>
      <Header />
      <header className='about-me-header'>
        <h1 className='about-header'>About Me</h1>
      </header>
      <article className='my-player-card'>
        <div className='my-image'>
          <img src="" alt="Image of app developer"></img>
        </div>
        <div className='my-info'>
          <p>Name: Joshua Pierce</p>
          <p>Number: 28</p>
          <p>Position: FE Software Dev</p>
          <p>Height: 6' 3"</p>
          <p>Weight: 185lbs</p>
          <p>GitHub: github.com/JPierce28</p>
        </div>
      </article>
    </section>
  )
}

export default About;
