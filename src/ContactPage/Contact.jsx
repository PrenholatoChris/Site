import './Contact.css';

import instagramIcon from '../assets/instagram.png'
import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import emailIcon from '../assets/email.svg'

function Contact() {

    return(
        <div id='Contact'className="Contact bg-image">
            <h1>CONTACT</h1>
            <div className='container'>
                <div className="icons">
                    <a href="https://github.com/PrenholatoChris">
                        <img src={githubIcon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/prenholatochris/">
                        <img src={linkedinIcon} alt="" /></a>
                    
                    <a href="https://www.instagram.com/prenholatochris/">
                        <img src={instagramIcon} alt="" /></a>
                </div>
                <h2>@PrenholatoChris</h2>
            

                <div className="icons">
                    <a href="mailto:christianprenholato10@gmail.com">
                        <img src={emailIcon} alt="" />
                    </a>
                </div>
                <h2>christianprenholato10@gmail.com</h2>
            </div>


        </div>
    )
    
}

export default Contact;