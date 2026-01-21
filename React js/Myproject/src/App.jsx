import React from 'react'
// import { useGSAP } from '@gsap/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Website/Pages/Home';
// import Footer from './Website/Comman/Footer';
// import Header from './Website/Comman/Header';
import About from './Website/Pages/About';
import Featur from './Website/Pages/Featur';
import Project from './Website/Pages/Project';
import Services from './Website/Pages/Services';
import Team from './Website/Pages/Team';
import Testimonial from './Website/Pages/Testimonial';
import News from './Website/Pages/News';






function App() {
  return (

    <BrowserRouter>
    <div>

    <Routes>
      {/* <Route path='/' element={<Navbar />} /> */}
      {/* <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<Homepage2 />} />
      <Route path='/services' element={<HmServices />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/blog' element={<Blog />} /> */}

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/feat' element={<Featur />} />
      <Route path='/news' element={<News />} />
      <Route path='/pro' element={<Project />} />
      <Route path='/ser' element={<Services />} />
      <Route path='/team' element={<Team />} />
      <Route path='/test' element={<Testimonial />} />



    </Routes>
      {/* < Header />
        <Home />
        <About />
        <Featur />
        <Project />
        <Services />
        <Team />
        <Testimonial />
        <News />  
      <Footer /> */}
       


    </div>
    </BrowserRouter>
  )
}

export default App;