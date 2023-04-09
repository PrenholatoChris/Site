import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './HomePage/Home'
import NavBar from './NavBar/navBar'
import Introduction from './IntroductionPage/Introduction'
import About from './AboutPage/About'
import Projects from './ProjectPage/Projects'
import Contact from './ContactPage/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <>
    <Home />
    <NavBar/>
    <Introduction/>
    <About />
    <Projects />
    <Contact />
    </>
  // </React.StrictMode>
)
