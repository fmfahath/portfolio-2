import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardData from './ProjectCardData'

const Projects = () => {
  return (
    <div className='project-card-container'>
        {ProjectCardData.map((val, ind)=> {
            return(
                <ProjectCard 
                    key={ind}
                    imgSrc={val.imgSrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                />
            )
        })}
    </div>
  )
}

export default Projects