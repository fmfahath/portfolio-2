import React from 'react'
import { Link } from 'react-router-dom'
import './aboutContent.css'
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img1.jpg'

const AboutContent = () => {
  return (
    <div className='about-container'>
        <div className='about-container-left'>
            <h1>Who Am I?</h1>
            <p>I am a React front-end developer. I create responsive secure websites for my clients.
            </p>
            <Link to='/contact' className='btn'>CONTACT</Link>
        </div>
        <div className='about-container-right'>
            <div className='about-container-right-top'>
                <img src={img1} alt='img1'></img>
            </div>
            <div className='about-container-right-bottom'>
                <img src={img2} alt='img2'></img>
            </div>
        </div>
</div>
  )
}

export default AboutContent