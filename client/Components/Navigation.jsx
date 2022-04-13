import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation( { computedClass }) {

  let activeStyle = {
    fontWeight: "600",
  };

  return (
    <>
      <div className={`nav ${computedClass ? computedClass : 'nav--sticky'}`}>
      <ul className="nav__menu">
        <li><NavLink to={'/'} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Home
            </NavLink>
        </li>

        <li><NavLink to={'/projects'} style={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Projects
          </NavLink>
        </li>

        <li><NavLink to={'/cv'} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                CV
            </NavLink>
        </li>

        <li><NavLink to={'/contact'} style={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Contact
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navigation
