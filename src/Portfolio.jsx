import Nav from "./components/Nav"
import Hero from "./sections/Hero"
import Service from "./sections/Service"
import Project from "./sections/Project"
import About from "./sections/About"
import Contact from "./sections/Contact"
export const Portfolio = () => {
  return (
  <div className="container">
     <Nav/> 
     <div className="content">
     <Hero/>
     <Service/>
     <Project/>
     <About/>
     <Contact/>
     </div>
  </div>
  )
}
