import React from 'react'
import './Hero.css'
import black_arrow from "../../assets/dark-arrow.png" // or whatever the file format is

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-test">
        <h1>We Ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cumque dicta vel sequi placeat quis dolores tenetur. Illo illum consectetur quisquam consequuntur officiis odio. Quae, quisquam quo iste architecto facere ex quasi facilis. Eligendi, alias.</p>
        <button className='btn'>Explore more <img src={black_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero