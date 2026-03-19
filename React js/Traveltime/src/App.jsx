import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Destinations from './Website/Pages/Destinations'
import Tours from './Website/Pages/Tours'
import Gallery from './Website/Pages/Gallery'
import Blog from './Website/Pages/Blog'
import Contact from './Website/Pages/Contact'
import DestinationDetails from './Website/Pages/DestinationDetails'
import TourDetails from './Website/Pages/TourDetails'
import Booking from './Website/Pages/Booking'
import Testimonials from './Website/Pages/Testimonials'
import Faq from './Website/Pages/Faq'
import BlogDetails from './Website/Pages/BlogDetails'
import Terms from './Website/Pages/Terms'
import Privacy from './Website/Pages/Privacy'
import NotFound from './Website/Pages/NotFound'
import Dashboard from './Admin/Apages/Dashboard'
import Toursadd from './Admin/Apages/Toursadd'
import Toursmanage from './Admin/Apages/Toursmanage'
import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alogin from './Admin/Apages/Alogin'

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="p-0 m-0"
        bodyClassName="p-2"
        containerClassName="toast-container-overlay"
        transition={Bounce}
      />
     
    <div>
      <Routes>
      {/* <Home /> */}
      <Route path='/'element={<Home />} />
      <Route path='/about'element={<About />} />
      <Route path='/dest'element={<Destinations />} />
      <Route path='/tours'element={<Tours />} />
      <Route path='/gallery'element={<Gallery />} />
      <Route path='/blog'element={<Blog />} />
      <Route path='/contact'element={<Contact />} />
      <Route path='/destd'element={<DestinationDetails />} />
      <Route path='/toursd'element={<TourDetails />} />
      <Route path='/booking'element={<Booking />} />
      <Route path='/test'element={<Testimonials />} />
      <Route path='/faq'element={<Faq />} />
      <Route path='/blogd'element={<BlogDetails />} />
      <Route path='/terms'element={<Terms />} />
      <Route path='/privacy'element={<Privacy />} />
      <Route path='*'element={<NotFound />} />


       <Route path='/dash' element={<Dashboard />} />
        <Route path='/tadd' element={<Toursadd />} />
        <Route path='/tmanage' element={<Toursmanage />} />
        <Route path='/alogin' element={<Alogin />} />















      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App