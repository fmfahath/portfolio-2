import React from 'react'
import './projectCard.css'
import ProjectImg1 from '../assets/project-1.jpg'
import ProjectImg2 from '../assets/project-2.jpg'
import ProjectImg3 from '../assets/project-3.jpg'
import { NavLink } from 'react-router-dom'

const ProjectCard = () => {
  return (
    <div className='project-card-container'>
        <div className='project-card'>
            <div className='project-card-img'>
                <img src={ProjectImg1}></img>
            </div>
            <div className='project-card-details'>
                <h3>Project heading</h3>
                <p>some text some textsome</p>
            </div>
            <div className='project-card-btn'>
                <NavLink to='url.com' className='btn'>View</NavLink>
                <NavLink to='url.com' className='btn'>Source</NavLink>
            </div>
        </div>
        {/* <div className='project-card'>
            <div className='project-card-img'>
                <img src={ProjectImg2}></img>
            </div>
            <div className='project-card-details'>
                <h3>Project heading</h3>
                <p>some text some textsome</p>
            </div>
            <div className='project-card-btn'>
                <NavLink to='url.com' className='btn'>View</NavLink>
                <NavLink to='url.com' className='btn'>Source</NavLink>
            </div>
        </div>
        <div className='project-card'>
            <div className='project-card-img'>
                <img src={ProjectImg3}></img>
            </div>
            <div className='project-card-details'>
                <h3>Project heading</h3>
                <p>some text some textsome</p>
            </div>
            <div className='project-card-btn'>
                <NavLink to='url.com' className='btn'>View</NavLink>
                <NavLink to='url.com' className='btn'>Source</NavLink>
            </div>
        </div> */}
    </div>
  )
}

export default ProjectCard