import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectNavigation from './ProjectNavigation'
import ProjectWithVideo from './ProjectWithVideo'
import ProjectNoVideo from './ProjectNoVideo'


function Project({ data }) {
  const projectName = useParams().project
  const [project] = data.filter(project => project.name == projectName)

  return (
    <>
      <ProjectNavigation />
      <div className="singleProject__wrapper">

        <h1>{project?.title}</h1>

        <em><h2 className='singleProject__subtitle'>{project?.subtitle}</h2></em>

        <div className='singleProject__buttons'>
          <a href={project?.siteLink} target='_blank' rel='noreferrer'><button>Visit site</button></a>
          <a href={project?.githubLink} target='_blank' rel='noreferrer'><button>View code</button></a>
        </div>
      </div>

      <div className='singleProject__technologies'>
        {project?.technologies.map((technology, iterator) => {
        return <div className='singleProject__tag' key={iterator}>{technology}</div>
        })}
      </div>

      <div className="singleProject__wrapper">
        {/* Conditionally render layouts designed to include / exclude video */}
        {project.video ? <ProjectWithVideo project={project}/> : <ProjectNoVideo project={project}/>}
      </div>


    </>
  )
}

export default Project