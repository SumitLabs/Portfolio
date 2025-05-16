import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import Service from "./sections/Service"
import Project from "./sections/Project"
import About from "./sections/About"
import Contact from "./sections/Contact"
import WebsiteLoader from "./components/WebsiteLoader"
import Skills from "./sections/Skills"

export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for all resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Adjust this time based on your needs

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <WebsiteLoader />
  }

  return (
    <div className="container">
      <Nav/> 
      <div className="content">
        <Hero/>
        <Skills/>
        <Service/>
        <Project/>
        {/* <About/> */}
        <Contact/>
      </div>
      
    </div>
  )
}