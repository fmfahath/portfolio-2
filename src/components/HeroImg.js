import React from 'react'
import './heroImg.css'
import heroImg from '../assets/hero-img-1.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img src={heroImg} alt='hero-img'></img>
            </div>
            <div className='hero-content'>
                <p>HI,I'M A FREEELANCER</p>
                <h1>React Developer</h1>
                <div className='hero-content-btn'>
                    <Link className='btn' to='/project'>Projects</Link>
                    <Link className='btn btn-light' to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg