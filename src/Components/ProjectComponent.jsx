import './ProjectComponent.css'



function ProjectComponent(props){
    return(
        <a href={props.link} className='ProjectComponent'>
          <div className="project-header">
            <h2>{props.title}</h2>
            <div className="project-header-buttons">
              <span className='red'></span>
              <span className='yellow'></span>
              <span className='green'></span>
            </div>
          </div>
          <div className="project-content">
            <p>{props.content}</p>
          </div>
        </a>
    )
}
export default ProjectComponent