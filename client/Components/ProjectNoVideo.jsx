import React from "react";

function ProjectNoVideo({ project }) {
  return (
    <>
     <div className='singleProject__noVideoWrapper'>
        {/* Description */}
        <div className='singleProject__description'>{project.description}</div>

        {/* TODO: Gallery */}
        <div className='singleProject__gallery'>
          { project.gallery ? project.gallery.map(image => {
            return <div className='singleProject__image' key={image} 
            style={{backgroundImage: `url('/images/projects/${image}')`}}></div>
            }) : <>Looks like there are no images for this project!</>
          }
        </div>
     </div>
    </>
  )
}

export default ProjectNoVideo