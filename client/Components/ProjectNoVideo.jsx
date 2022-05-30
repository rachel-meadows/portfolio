import React from 'react'
import Slideshow from './Slideshow'

function ProjectNoVideo({ project }) {
  return (
    <>
      <div className="singleProject__noVideoWrapper">
        {/* Description */}
        <div className="singleProject__description">{project.description}</div>

        {/* Gallery */}
        <div className="singleProject__gallery">
          <Slideshow data={project} />
        </div>
      </div>
    </>
  )
}

export default ProjectNoVideo
