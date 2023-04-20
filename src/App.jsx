import { useState } from 'react'
import {Link, ScrollLink} from 'react-scroll'
import './App.css'
import Inicio from './paginas/Inicio'
import Habilidades from './paginas/Habilidades'
import Proyectos from './paginas/Proyectos'
import Contacto from './paginas/Contacto'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Home from './pages/Home'
import logo from './img/logoNbG2.png'
import Footer from './components/Footer'


function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  const [english, setEnglish] = useState(true)

  return (
    <div className={darkTheme ? "dark-mode" : "light-mode"}>
      <Link className='lightLogo' to='home'  smooth={true} duration={1000}><img className='logo' src={logo} alt="logo" /></Link>

      <div className='bodyContainer'>
      {english ? <Home /> : <Inicio />}
      {english ? <Skills lang={english} /> : <Habilidades lang={english} />}
      {english ? <Projects lang={english}/> : <Proyectos lang={english}/>}
      {english ? <Contact dark={darkTheme} /> : <Contacto dark={darkTheme} />}
      <Footer lang={english}/>
      </div>

      <div className='toolbar'>
        <button className='toolbarElements' onClick={() => setDarkTheme(!darkTheme)}> {darkTheme ? <i id={darkTheme ? "dark" : "light"} class="fa-regular fa-sun"></i> : <i id={darkTheme ? "dark" : "light"} class="fa-solid fa-moon" ></i>}</button>
        <button className='toolbarElements' onClick={() => setEnglish(!english)}><i id={darkTheme ? "dark" : "light"} class="fa-solid fa-language"></i></button>
        <Link className='toolbarElements' to='home'  smooth={true} duration={1000}><i id={darkTheme ? "dark" : "light"} class="fa-solid fa-house"></i></Link>
        <Link className='toolbarElements' to='skills' smooth={true} duration={1000}><i id={darkTheme ? "dark" : "light"} class="fa-solid fa-list-check"></i></Link>
        <Link className='toolbarElements' to='projects' smooth={true} duration={1000}><i id={darkTheme ? "dark" : "light"} class="fa-solid fa-diagram-project"></i></Link>
        <Link className='toolbarElements' to='contact' smooth={true} duration={1000}><i id={darkTheme ? "dark" : "light"} class="fa-solid fa-address-card"></i></Link>
      </div>

    </div>
  )
}

export default App
