import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
