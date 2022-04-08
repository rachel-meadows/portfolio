import React from 'react'

function Project(props) {
  return (
    <>
      <div className="project">
        <div className="project__title">{props.data.title}</div>
        <div className="project__subtitle">{props.data.description}</div>
        <div className="project__tags">
          {props.data.technologies.map((technology) => {
            <div className="project__tag">{technology}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default Project