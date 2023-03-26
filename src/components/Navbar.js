import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>Portfolio</Link>
    </div>
  )
}

export default Navbar