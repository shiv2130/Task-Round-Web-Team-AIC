import React from 'react'
import '../Hero/Hero.css'
import arrow from '../../assets/arrrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
            <h1>A place to share one’s Passion for AI</h1>
            <p>AI Club is the fastest growing club in VIT Bhopal imparting knowledge about AI and pioneering AI based advanced education to students.</p>
            <button className='btn'>Learn More<img src={arrow} alt = ""/></button>
      </div>
    </div>
  )
}

export default Hero