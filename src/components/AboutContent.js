import React from 'react'
import { Link } from 'react-router-dom'
import './aboutContent.css'
import img1 from '../assets/img2.jpg'
import img2 from '../assets/img3.jpg'

const AboutContent = () => {
    return (
        <div className='about-container'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a React front-end developer. I create responsive secure websites for my clients.
                </p>
                <Link to='/contact' className='btn'>CONTACT</Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='right-top'>
                        <img className='img' src={img1} alt='img1'></img>
                    </div>
                    <div className='right-bottom'>
                        <img className='img' src={img2} alt='img2'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent