import React from 'react'
import Navigation from './Navigation'
import Project from './Project'

function Projects(props) {
  const projectArray = props.data
  return (
    <>
      <Navigation />
        
      <div className="projects__wrapper">
        <h1>Portfolio</h1>

        <div className="tags">
          <div id="tags-all" className="tags__tag tags__tag--active">Show all</div>
          <div id="tags-html" className="tags__tag">HTML</div>
          <div id="tags-css" className="tags__tag">CSS</div>
          <div id="tags-javascript" className="tags__tag">JavaScript</div>
          <div id="tags-sql" className="tags__tag">SQL</div>
          <div id="tags-python" className="tags__tag">Python</div>
          <div id="tags-rest-api" className="tags__tag">REST API</div>
          <div id="tags-react" className="tags__tag">React</div>
          <div id="tags-redux" className="tags__tag">Redux</div>
          <div id="tags-expressjs" className="tags__tag">Express.js</div>
          <div id="tags-nodejs" className="tags__tag">Node.js</div>
          <div id="tags-flask" className="tags__tag">Flask</div>
        </div>

        <div className="projects">
          { projectArray.map( project => {
            return <Project key={project.name} data={project} />
          }) }
        </div>
        
      </div>
    </>
  )
}

export default Projects
