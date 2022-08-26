import ImageBG from '../assets/ProjectsBG.png'
import './Projects.css'

import ProjectComponent from '../Components/ProjectComponent'
import { useEffect,useState} from 'react'


function Projects() {

  const [projects, setProjects] = useState([])

  useEffect( () => {
    var copy = []
    fetch("https://api.github.com/users/prenholatochris/repos")
    .then(response => response.json())
    .then((data) => { 
      data = Array.from(data)
      data.forEach((githubProject) => {
        if(githubProject.description !== null){
          if(githubProject.description.includes("<PORTFOLIO>")){
            if(!(projects.includes(githubProject))){
              githubProject.description = githubProject.description.replace("<PORTFOLIO>","")
              copy.push(githubProject)              
            }
          }
        }
      })
      return copy
    })
    .then((copy) => {
      setProjects(copy)
    })
    
  },[])

  return (
    
    <div className="Projects bg-image">
      <h1>My Projects</h1>
      <div className='container'>
        {
          projects.map((project) => {
            
            return (
            <ProjectComponent 
            key={project.id}
            title={project.name} 
            content={project.description} 
            link={project.html_url}
            /> )
          })
        }        
        
      </div>
    </div>
  )
}

export default Projects
