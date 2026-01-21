import React from 'react'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Website/Pages/Services'
import NotFound from './Website/Pages/NotFound'
import Contact from './Website/Pages/Contact'
import Appointment from './Website/Pages/Appointment'
import Feauters from './Website/Pages/Feauters'
import OurTeam from './Website/Pages/OurTeam'
import Testimonial from './Website/Pages/Testimonial'
import Dashboard from './Admin/Apages/Dashboard'
import ServiceAdd from './Admin/Apages/ServiceAdd'
import ServiceManage from './Admin/Apages/ServiceManage'
import Alogin from './Admin/Apages/Alogin'
// import 'react-toastify/dist/ReactToastify.css'
// import { Bounce, ToastContainer } from 'react-toastify'
import Ulogin from './Website/Pages/Ulogin'

function App() {
  return (
    <BrowserRouter>
       {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName="p-0 m-0"
        bodyClassName="p-2"
        containerClassName="toast-container-overlay"
        transition={Bounce}
      /> */}
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Appoint' element={<Appointment />} />
        <Route path='/feauters' element={<Feauters />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<OurTeam />} />
        <Route path='/test' element={<Testimonial />} />
        <Route path='*' element={<NotFound />} />

        {/* Admin side */}

        <Route path='/dash' element={<Dashboard />} />
        <Route path='/sadd' element={<ServiceAdd />} />
        <Route path='/smanage' element={<ServiceManage />} />
        <Route path='/alogin' element={<Alogin />} />

        {/* user side */}

        <Route path='/ulogin' element={<Ulogin />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;