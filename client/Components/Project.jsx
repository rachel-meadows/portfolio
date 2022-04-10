import React from 'react'

function Project(props) {
  return (
    <>
      <div className='project__project'>
        <div style={{backgroundImage: `url('/images/projects/${props.data.image}')`}} className='project__project__image'></div>
        <div className='project__project__text'>
          <h2 className='project__project__title'>{props.data.title}</h2>
          <div className='project__project__subtitle'>{props.data.description}</div>
          <div className='project__project__tags'>
            {props.data.technologies.map((technology, iterator) => {
              return <div className='project__project__tag' key={iterator}>{technology}</div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
