import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks , Hero, Navbar, StarsCanvas, Tech, Works} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className= "bg-hero-pattern bg-gradient-to-r bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
