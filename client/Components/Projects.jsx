import React from 'react'
import Navigation from './Navigation'

const Projects = () => {
  return (
    <>
      <Navigation />
        
      <div className="wrapper">
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

          <div className="project">
            <div className="project__title">Malaphor generator</div>
            <div className="project__subtitle">A mixed metaphor generator to create unusual new idioms.</div>
            <div className="project__tags">
              <div className="project__tag">Python</div>
              <div className="project__tag">Flask</div>
              <div className="project__tag">Web scraping</div>
              <div className="project__tag">HTML</div>
              <div className="project__tag">CSS</div>
            </div>
          </div>


          <div className="project">
            <div className="project__title">Etch-a-sketch</div>
            <div className="project__subtitle">This retro Etch-a-Sketch lets users choose their brush colour and the size of the grid.</div>
            <div className="project__tags">
              <div className="project__tag">JavaScript</div>
              <div className="project__tag">HTML</div>
              <div className="project__tag">CSS</div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Projects
