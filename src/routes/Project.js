import React from 'react'
import Footer from '../components/Footer'
import HeroTemplate from '../components/HeroTemplate'
import Navbar from '../components/Navbar'
import PriceCard from '../components/PriceCard'
import Projects from '../components/Projects'


const Project = () => {

  const heading = 'PROJECTS';
  const text = 'Some of my most recent works';
  return (
    <div>
      <Navbar/>
      <HeroTemplate heading={heading} text={text}/>
      <Projects/>
      <PriceCard/>
      <Footer/>
    </div>
  )
}

export default Project