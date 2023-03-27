import React from 'react'
import './footer.css'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='address location'>
                    <FaHome  size={20} style={{color:'#fff', marginRight : '1rem'}}/>
                    <div className='location-text'>
                    <p>Orien City Building,</p>
                    <p>Colombo,</p>
                    <p>Sri Lanka.</p>
                    </div>
                </div>

                <div className='address phone'>
                    <FaPhone  size={20} style={{color:'#fff', marginRight : '1rem'}}/>
                    <div className='text'>
                        <h4>011-3-272-272</h4>
                    </div>
                </div>

                <div className='address mail'>
                    <FaMailBulk  size={20} style={{color:'#fff', marginRight : '1rem'}}/>
                    <div className='text'>
                        <h4>info@gmail.com</h4>
                    </div>
                </div> 
            </div>

            <div className='right'>
                <div className='text'>
                    <h3>About the Developer</h3>
                    <p>A freelance developer works with clients, businesses, or 
                        organizations on a contract or project basis to make apps or 
                        websites, test them, and put them online</p>
                </div>
                <div className='social'>
                    <Link><a><FaFacebook /></a></Link>
                    <Link><a><FaGithub  /></a></Link>
                    <Link><a><FaLinkedin  /></a></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer