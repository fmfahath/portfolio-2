import React from 'react'
import './projectCard.css'
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
  return (
        <div className='project-card' key={props.ind}>
            <div className='project-card-img'>
                <img src={props.imgSrc}></img>
            </div>
            <div className='project-card-details'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <div className='project-card-btn'>
                <NavLink to={props.view} className='btn'>View</NavLink>
                <NavLink to={props.source} className='btn'>Source</NavLink>
            </div>
        </div>
  )
}

export default ProjectCard