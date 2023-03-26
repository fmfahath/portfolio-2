import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
        {/* logo */}
        <Link to='/'>Portfolio</Link>

        {/* Navbar */}
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Projects</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar