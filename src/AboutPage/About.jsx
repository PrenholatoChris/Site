import './About.css';

import imgGym from "../assets/dumbbell.svg"
import imgController from "../assets/controller.svg"
import imgAirplane from "../assets/airplane.svg"
import myImg from "../assets/me.jpg"

import curriculo from "../assets/curriculo.pdf"
function About() {

    return(
        <div id='About' className="About">
            <div className="container">

                <h1>ABOUT ME</h1>
                <div className='topo'>
                    <img src={myImg} alt="A photo of Christian Prenholato" />
                    <div>
                        <h2>Resume</h2>
                        <p>My name is Christian Prenholato, I'm a curious about technology. I am currently graduating in Computer Science at the Federal University of Espírito Santo (UFES), and in my spare time study Web Development. I am very interested in the area of Automation and Information Security, especially in WebHacking.</p>
                    </div>
                </div>
                <div className='baixo'>
                    <div className="education">
                        <h2>Education</h2>
                        <div>
                            <h3>2019</h3>
                            <p>High School Completion<br></br>Escola São Geraldo, Espirito Santo</p>
                        </div>
                        <div>
                            <h3>2019-2020</h3>
                            <p>Technical Course in Electrotechnics - Incomplete<br></br>Instituto Federal do Espírito Santo</p>
                        </div>
                        <div>
                            <h3>2020-2024</h3>
                            <p>Degree in Computer Science<br></br>Universidade Federal do Espírito Santo (UFES)</p>
                        </div>
                    </div>
                    <div className="languages">
                        <h2>Languages</h2>
                        <h3>Portuguese</h3>
                        <p>Fluent</p>
                        <h3>English</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className="interests">
                        <h2>Interests</h2>
                        <ul>
                            <li><img src={imgGym} alt="" /></li>
                            <li><img src={imgController} alt="" /></li>
                            <li><img src={imgAirplane} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
    )
    
}


// style={"--i:1;"}>
// style={"--i:1;"}>
// style={"--i:1;"}>
// style={"--i:1;"}>
// style={"--i:1;"}>
// style={"--i:1;"}>

export default About