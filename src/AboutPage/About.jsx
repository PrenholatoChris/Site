import './About.css';

import img1 from "../assets/6.png"
import myImg from "../assets/me.jpg"

import curriculo from "../assets/curriculo.pdf"
function About() {

    return(
        <div id='About' className="About">
            <div className="container">

                <h1>About Me</h1>
                <div className='topo'>
                    <img src={myImg} alt="A photo of Christian Prenholato" />
                    <div>
                        <h2>Resume</h2>
                        <p>Me chamo Christian, 21 anos, sou um tanto curioso no mundo da tecnologia. Atualmente estou graduando em Ciência da computação na 
                            Universidade Federal do Espírito Santo (UFES), e no tempo livre estudo Desenvolvimento web. Me interesso bastante pela área da Segurança da 
                            informação, principalmente em WebHacking.</p>
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
                        <p>Portuguese</p>
                        <strong>Fluent</strong>
                        <p>English</p>
                        <strong>Intermediate</strong>
                    </div>
                    <div className="interests">
                        <h2>Interests</h2>
                        <ul>
                            <li></li>
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