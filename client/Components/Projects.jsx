import React, { useState } from 'react'
import Navigation from './Navigation'
import ProjectCard from './ProjectCard'
import ScrollToTop from './ScrollToTop'
import { Link } from 'react-router-dom'

function Projects(props) {
  const projectArray = props.data.filter((obj) => obj.active === true)

  const [visibleProjects, setvisibleProjects] = useState(projectArray)

  function filterProjects(event) {
    const tech = event.target.textContent

    event.target.parentNode.childNodes.forEach((tag) =>
      tag.classList.remove('tags__tag--active')
    )
    event.target.classList.add('tags__tag--active')

    if (tech === 'Show all') {
      return setvisibleProjects(projectArray)
    }
    const projectsWithTech = projectArray.filter((project) =>
      project.technologies.includes(tech)
    )
    return setvisibleProjects(projectsWithTech)
  }

  return (
    <>
      <ScrollToTop />
      <Navigation />

      <div className="projects__wrapper">
        <h1>Portfolio</h1>

        <div className="tags">
          <div
            id="tags-all"
            className="tags__tag tags__tag--active"
            onClick={filterProjects}
          >
            Show all
          </div>
          <div
            id="tags-javascript"
            className="tags__tag"
            onClick={filterProjects}
          >
            JavaScript
          </div>
          <div id="tags-sql" className="tags__tag" onClick={filterProjects}>
            SQL
          </div>
          <div id="tags-python" className="tags__tag" onClick={filterProjects}>
            Python
          </div>
          <div
            id="tags-rest-api"
            className="tags__tag"
            onClick={filterProjects}
          >
            REST API
          </div>
          <div id="tags-react" className="tags__tag" onClick={filterProjects}>
            React
          </div>
          <div id="tags-redux" className="tags__tag" onClick={filterProjects}>
            Redux
          </div>
          <div id="tags-express" className="tags__tag" onClick={filterProjects}>
            Express
          </div>
          <div id="tags-node" className="tags__tag" onClick={filterProjects}>
            Node
          </div>
          <div id="tags-flask" className="tags__tag" onClick={filterProjects}>
            Flask
          </div>
          <div
            id="tags-html-css"
            className="tags__tag"
            onClick={filterProjects}
          >
            HTML / CSS
          </div>
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project) => {
            return (
              <Link key={project.name} to={`/projects/${project.name}`}>
                <ProjectCard key={project.name} data={project} />
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Projects
