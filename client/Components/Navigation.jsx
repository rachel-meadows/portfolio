import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <div className="nav">
      <div className="nav__menu">
        <ul>
          <li><NavLink to={'/'} activeClassName="navigation--active">Home</NavLink></li>
          <li><NavLink to={'/projects'} activeClassName="navigation--active">Projects</NavLink></li>
          <li><NavLink to={'/cv'} activeClassName="navigation--active">CV</NavLink></li>
          <li><NavLink to={'/contact'} activeClassName="navigation--active">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navigation
