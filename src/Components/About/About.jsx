import React from 'react'
import './About.css'
import about_img from '../../assets/about.png';
import play_icon from'../../assets/play-icon.png';

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className='about-right'>
          <h3>About University</h3>
          <h2>Nuturing tommoro's leaders today!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius facilis eum itaque reiciendis quod doloremque cupiditate omnis. Repellat quia iure dolor soluta sapiente consequatur eveniet nemo? Voluptatum quaerat possimus, dolore qui officia in consequuntur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus repellat assumenda, totam facere molestias rem animi eveniet aspernatur adipisci amet cumque numquam praesentium, molestiae quis reprehenderit aut soluta ullam possimus id quibusdam neque dolore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptas ut a fugit perferendis. Error culpa distinctio quo aut nihil, aliquam dolorem libero vel fugiat ut nulla excepturi magni nam neque corporis animi. Qui, provident.</p>
        </div>
    </div>
  )
}

export default About