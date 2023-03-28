import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import HeroTemplate from '../components/HeroTemplate'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Footer/>
    </div>
  )
}

export default Home