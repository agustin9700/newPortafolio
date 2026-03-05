import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
        <main >
        <Hero />
        <About />
         <Skills />
        <Projects />
        <Contact />
        <Footer />
       
      </main> 
    </>
  )
}

export default App
