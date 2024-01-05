import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience , Hero, Navbar, StarsCanvas, Works} from './components'
import { useState, useEffect } from 'react';

const MainContent = () => {

  return ( 
    <div className={`relative z-0 bg-primary transition-opacity duration-1000 `}>
      <div className= "background-motion bg-hero-pattern bg-blur-md bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      
        <About />
        <Experience />
      
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

const GreetingMessage = ({ onContinue }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleContinue = () => {
    setFadeOut(true);
    setTimeout(onContinue, 500); // Corresponds to the duration of the fade-out effect
  };

  const fadeOutClass = fadeOut ? 'opacity-0' : 'opacity-100';

  return (
    <div className={`h-full w-full background-motion bg-cover bg-hero-pattern flex flex-col justify-center items-center transition-opacity duration-1000 ${fadeOutClass}`}>
      <div className='rounded-full w-auto h-auto bg-white backdrop-blur-sm bg-opacity-10 p-10 mb-10 flex flex-col justify-center items-center'>
        <h1 className=" text-primary font-bold text-xl mb-10 text-center max-w">
          When I consider your heavens,<br/>
          the work of your fingers,<br/>
          which you have set in place,<br/>
          what is mankind that you are mindful of them,<br/>
          human beings that you care for them?<br/>
          Lord, our Lord,
          how majestic is your name in all the earth!<br/>
          -Psalms 8
        </h1>
        <button onClick={handleContinue} className="ml-5 px-6 py-3 bg-primary text-white mb-10 rounded-md hover:bg-secondary transition duration-300 ease-in-out focus:outline-none">
        View Portfolio
        </button>
        <h1 className="text-primary font-bold text-xl mb-10 text-center max-w ">
          For God so loved the world <br/> that he gave his one and only Son,<br/> 
          that whoever believes in him<br/>  shall not perish but have eternal life.<br/>
          -John 3:16
        </h1>
      </div>
      
    </div>
  )
}

const App = () => {

  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 5000); // Hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <BrowserRouter>
      <div>
        {showGreeting ? <GreetingMessage onContinue={() => setShowGreeting(false)} /> : <MainContent />}
      </div>
    </BrowserRouter>
  )
}

export default App
