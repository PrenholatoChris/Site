import ImageBG from '../assets/ProjectsBG.png'
import './Projects.css'

import ProjectComponent from '../Components/ProjectComponent'
import { useEffect,useState} from 'react'


function Projects() {

  const [projects,setProjects] = useState([])

  
  useEffect( ()=>{
    fetch("https://api.github.com/users/prenholatochris/repos")
    .then(response => response.json())
    .then((data) => { 
      data = Array.from(data)
      data.forEach((project)=>{
        if(project.description !== null){
          if(project.description.includes("<PORFOLIO>")){
            console.log(project)
            console.log("achei")
          }
        }
      })
    })
      
  },[])

  return (
    <>
      <div className="Projects bg-image">
        <h1>My Projects</h1>
        <div className='container'>
          <ProjectComponent title='aadasdasds ' content="aloalo" link="teste"/>
          <ProjectComponent title='aa' content="aloalo" link="teste"/>
          <ProjectComponent title={projects} content="aloalo" link="teste"/>
          <ProjectComponent title='aa' content="aloalo" link="teste"/>
          <ProjectComponent title='aa' content="aloalo" link="teste"/>
          <ProjectComponent title='aa' content="aloalo" link="teste"/>
          
        </div>
      </div>
    </>
  )
}

export default Projects
