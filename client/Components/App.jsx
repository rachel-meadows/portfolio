import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Footer from './Footer'
import CV from './CV'
import Contact from './Contact'

import projectsData from '../../data/projects.js' 

const App = () => {
  return (
    <>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects data={projectsData}/>} />
        <Route path='/cv' element={<CV/>} />
        {/* <Route path='/projects/:project' element={<Country data={countryData}/>}></Route> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
