import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './ProjectPage/Projects'
import Home from './HomePage/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Projects />
  </React.StrictMode>
)
