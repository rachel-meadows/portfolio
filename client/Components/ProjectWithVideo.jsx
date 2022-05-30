import React from 'react'
import Slideshow from './Slideshow'

function ProjectWithVideo({ project }) {
  return (
    <>
      <div className="singleProject__withVideoWrapper">
        <div className="singleProject__withVideoWrapper--flex">
          {/* Description */}
          <div className="singleProject__description">
            {project.description}
          </div>

          {/* Gallery */}
          <div className="singleProject__gallery">
            <Slideshow data={project} />
          </div>
        </div>

        {/* Video */}
        <video controls className="singleProject__video">
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default ProjectWithVideo
