import React from "react";

function ProjectWithVideo({ project }) {
  return (
    <>
     <div className="singleProject__withVideoWrapper">
        {/* Description */}
        <div>{project.description}</div>

        {/* Video */}
        <div></div>
        
     </div>
      
      {/* Gallery */}
      <div></div>
    </>
  )
}

export default ProjectWithVideo