import './About.css';

import img1 from "../assets/6.png"
import img2 from "../assets/7.png"
import img3 from "../assets/8.png"

import curriculo from "../assets/curriculo.pdf"
function About() {

    return(
        <div id='About' className="About">

            <iframe src={curriculo} frameborder="0" width="100%" height="100%"></iframe>

            <div className='bg-waves'>
                {/* <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" /> */}
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