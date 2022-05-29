import App from './Components/App'

import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
