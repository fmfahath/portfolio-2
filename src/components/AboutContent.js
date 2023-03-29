import React from 'react'
import { Link } from 'react-router-dom'
import './aboutContent.css'

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

        </div>
</div>
  )
}

export default AboutContent