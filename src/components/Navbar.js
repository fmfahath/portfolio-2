import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import {FaBars} from "react-icons/fa"

const Navbar = () => {
    return (
        <div className='header'>
            {/* logo */}
            <div className='nav-logo'>
                <Link to='/'>Portfolio</Link>
            </div>

            {/* Navbar */}
            <ul className='nav-menu'>
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

            {/* menu icon */}
            <div className='menu-icon'>
                <FaBars size={20}/>
            </div>
        </div>
    )
}

export default Navbar