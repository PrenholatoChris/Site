import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './ProjectPage/Projects'
import Home from './HomePage/Home'
import About from './AboutPage/About'
import './index.css'
import Ending from './EndingPage/Ending'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <>
    <Home />
    <About />
    <Projects />
    <Ending />
    </>
  // </React.StrictMode>
)
