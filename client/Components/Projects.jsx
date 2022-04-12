import React, { useState } from 'react'
import Navigation from './Navigation'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

function Projects(props) {
  const projectArray = props.data
  const [visibleProjects, setvisibleProjects] = useState(projectArray)

  function filterProjects(event) {
    const tech = event.target.textContent
    // event.target.className.remove('tags__tag--active')
    event.target.className.add('tags__tag--active')
    if (tech === 'Show all') {
      return setvisibleProjects(projectArray);
    }
    const projectsWithTech = projectArray.filter((project) => project.technologies.includes(tech))
    return setvisibleProjects(projectsWithTech);
  }

  return (
    <>
      <Navigation />
        
      <div className="projects__wrapper">
        <h1>Portfolio</h1>

        <div className="tags">
          <div id="tags-all" className="tags__tag tags__tag--active" onClick={filterProjects}>Show all</div>
          <div id="tags-html" className="tags__tag" onClick={filterProjects}>HTML</div>
          <div id="tags-css" className="tags__tag" onClick={filterProjects}>CSS</div>
          <div id="tags-javascript" className="tags__tag" onClick={filterProjects}>JavaScript</div>
          <div id="tags-sql" className="tags__tag" onClick={filterProjects}>SQL</div>
          <div id="tags-python" className="tags__tag" onClick={filterProjects}>Python</div>
          <div id="tags-rest-api" className="tags__tag" onClick={filterProjects}>REST API</div>
          <div id="tags-react" className="tags__tag" onClick={filterProjects}>React</div>
          <div id="tags-redux" className="tags__tag" onClick={filterProjects}>Redux</div>
          <div id="tags-expressjs" className="tags__tag" onClick={filterProjects}>Express.js</div>
          <div id="tags-nodejs" className="tags__tag" onClick={filterProjects}>Node.js</div>
          <div id="tags-flask" className="tags__tag" onClick={filterProjects}>Flask</div>
        </div>

          <div className="projects__grid">
            { visibleProjects.map( project => {
              return (
                <Link key={project.name} to={`/projects/${project.name}`}>
                  <ProjectCard key={project.name} data={project} />
                </Link>
              )}
            )}
          </div>
        
      </div>
    </>
  )
}

export default Projects
