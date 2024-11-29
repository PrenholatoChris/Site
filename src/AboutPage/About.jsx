import './About.css';

import imgGym from "../assets/dumbbell.svg";
import imgController from "../assets/controller.svg";
import imgAirplane from "../assets/airplane.svg";
import myImg from "../assets/me.jpg";

import curriculo from "../assets/curriculo.pdf";

function About() {
    return (
        <div id='About' className="About">
            <div className="container">
                <h1>ABOUT ME</h1>
                <div className='topo'>
                    <img src={myImg} alt="A photo of Christian Prenholato" className="profile-img" />
                    <div className="profile-info">
                        <h2>Resume</h2>
                        <p>
                        Formando em Ciência da Computação pela Universidade Federal do Espírito Santo, sou apaixonado por Inteligência Artificial e técnicas avançadas de aprendizado de máquina, temas centrais no meu TCC. Tenho experiência prática em Python para automação e desenvolvimento de soluções de IA em projetos acadêmicos, além de atuar profissionalmente com Java e PL/SQL em aplicações web de alto desempenho e segurança, incluindo relatórios automatizados com JasperSoft Report. Já participei de projetos em PHP e JavaScript, expandindo minhas habilidades em desenvolvimento web. Estou sempre em busca de aprimorar minhas competências e contribuir para iniciativas inovadoras que impactem positivamente o setor de tecnologia.
                        </p>
                    </div>
                </div>
                <div className='baixo'>
                    <div className="education">
                        <h2>Education</h2>
                        <div>
                            <h3>2019</h3>
                            <p>High School Completion<br />Escola São Geraldo, Espirito Santo</p>
                        </div>
                        <div>
                            <h3>2019-2020</h3>
                            <p>Technical Course in Electrotechnics - Incomplete<br />Instituto Federal do Espírito Santo</p>
                        </div>
                        <div>
                            <h3>2020-2024</h3>
                            <p>Degree in Computer Science<br />Universidade Federal do Espírito Santo (UFES)</p>
                        </div>
                    </div>
                    <div className="languages">
                        <h2>Languages</h2>
                        <h3>Portuguese</h3>
                        <p>Fluent</p>
                        <h3>English</h3>
                        <p>Intermediate</p>
                        <h3>Spanish</h3>
                        <p>Basic</p>
                        </div>
                    <div className="interests">
                        <h2>Interests</h2>
                        <ul>
                            <li><img src={imgGym} alt="Gym" /></li>
                            <li><img src={imgController} alt="Gaming" /></li>
                            <li><img src={imgAirplane} alt="Travel" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
