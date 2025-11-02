import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import ProfileBar from './components/ProfileBar'

function App() {
  return (
    <div className="App">
      <ProfileBar />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
