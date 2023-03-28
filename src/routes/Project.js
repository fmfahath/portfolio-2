import React from 'react'
import Footer from '../components/Footer'
import HeroTemplate from '../components/HeroTemplate'
import Navbar from '../components/Navbar'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroTemplate heading={'Projects'} text={'Some of my most recent works'}/>
      <Footer/>
    </div>
  )
}

export default Project