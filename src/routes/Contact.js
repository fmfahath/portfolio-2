import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroTemplate from '../components/HeroTemplate'
import Form from '../components/Form'



const Contact = () => {

  const heading = 'CONTACT';
  const text = "Feel Free to Contact Me!";

  return (
    <div>
      <Navbar/>
      <HeroTemplate heading={heading} text={text}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact