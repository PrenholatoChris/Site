import './Home.css'
import Information from '../InformationPage/Information'

function Home() {

  return (
    <div id='Home' className="Home bg-image">
        <h1>STILL<br/>LEARNING</h1>

        <div className='navigation'>
          <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About Me</a></li>
            <li><a href='#Projects'>Projects</a></li>
            {/* <li><a href='#Skills'>Skills</a></li> */}
            <li><a href='#Contact'>Contact</a></li>
          </ul>
        </div>

      <div className='intro'>
        <Information/>
      </div>
    </div>
  )
}

export default Home
