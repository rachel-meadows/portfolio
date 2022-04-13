import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation( { computedClass }) {

  let activeStyle = {
    fontWeight: "600",
    letterSpacing: "0",
  };

  return (
    <>
      <div className={`nav ${computedClass ? computedClass : 'nav--sticky'}`}>
      <ul className="nav__menu">
        <li><NavLink className='nav__item' to={'/'} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                Home
            </NavLink>
        </li>

        <li><NavLink className='nav__item' to={'/projects'} style={({ isActive }) =>
            isActive ? activeStyle : undefined}>
              Projects
          </NavLink>
        </li>

        <li><NavLink className='nav__item' to={'/cv'} style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
                CV
            </NavLink>
        </li>

        <li><NavLink className='nav__item' to={'/contact'} style={({ isActive }) =>
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
