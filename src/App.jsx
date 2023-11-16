import React from "react"

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Skills from "components/Skills/Skills"
import Project from "components/Project"
import Contact from "components/Contact/Contact"
import Footer from "components/Footer/Footer"

function App() {
  return (
      <div className="app-container">
        <Nav />
        <Home />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
  )
}

export default App
