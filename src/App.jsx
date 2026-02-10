import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Achievements, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Education, Certifications, Resume } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <StarsCanvas />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Certifications />
        <Achievements />
        <div className='relative z-0'>
          <Resume />
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
