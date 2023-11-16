import React, { useEffect, useState } from "react"
import { BrowserRouter } from 'react-router-dom';

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Skills from "components/Skills/Skills"
import Project from "components/Project"
import Contact from "components/Contact/Contact"
import Footer from "components/Footer/Footer"

// Animation
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <Home />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
