import React from "react"
import { BrowserRouter } from 'react-router-dom';

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Skills from "components/Skills/Skills"
import Project from "components/Project"
import Contact from "components/Contact/Contact"
import Footer from "components/Footer/Footer"

function App() {
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
