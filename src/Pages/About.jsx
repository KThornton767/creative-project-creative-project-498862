import React from 'react';
import './CSS/About.css';

import logo from '../Components/Assests/logo.png'

const About = () => {
  return (
    <div className='biobox'>
      <img src={logo} alt="" className="profilepic" />
      <div className="textbox">
      <p className="about-seller">
        Hi! My name is Kaitlyn, and I've been skating since I was young. This is a store where you can get what you need when it comes to skating equipment!
      </p>
      </div>

    </div>
  )
}

export default About;