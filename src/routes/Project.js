import React from 'react'
import Footer from '../components/Footer'
import HeroTemplate from '../components/HeroTemplate'
import Navbar from '../components/Navbar'

const Project = () => {

  const heading = 'Projects';
  const text = 'Some of my most recent works';
  return (
    <div>
      <Navbar/>
      <HeroTemplate heading={heading} text={text}/>
      <Footer/>
    </div>
  )
}

export default Project