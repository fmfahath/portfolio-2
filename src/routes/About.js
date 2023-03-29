import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroTemplate from '../components/HeroTemplate'
import Navbar from '../components/Navbar'


const About = () => {

  const heading = 'ABOUT';
  const text = "I'm A Friendly Front-End-Developer";

  return (
    <div>
      <Navbar/>
      <HeroTemplate heading={heading} text={text}/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About