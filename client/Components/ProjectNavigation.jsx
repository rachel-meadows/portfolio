import React from 'react'
import { NavLink } from 'react-router-dom'

function ProjectNavigation() {
  return (
    <>
      <div className="nav">
        <ul className="nav__menu">
          <li>
            <NavLink to={'/projects'}>&#8592; To portfolio</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ProjectNavigation
