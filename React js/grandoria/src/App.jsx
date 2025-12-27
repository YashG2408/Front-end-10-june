import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Website/Pages/About'
import Rooms from './Website/Pages/Rooms'
import Amenties from './Website/Pages/Amenties'
import Location from './Website/Pages/Location'
import Contact from './Website/Pages/Contact'
import NotFound from './Website/Pages/NotFound'
import RoomsDet from './Website/Pages/RoomsDet'
import Restaurent from './Website/Pages/Restaurent'
import Offers from './Website/Pages/Offers'
import Event from './Website/Pages/Event'
import Gallery from './Website/Pages/Gallery'
import Booking from './Website/Pages/Booking'
import Terms from './Website/Pages/Terms'
import Privacy from './Website/Pages/Privacy'
import Starter from './Website/Pages/Starter'
import Dashboard from './Admin/Apages/Dashboard'
import RoomManage from './Admin/Apages/RoomManage'
import AboutManage from './Admin/Apages/AboutManage'
import AmentiesManage from './Admin/Apages/AmentiesManage'
import RoomAdd from './Admin/Apages/RoomAdd'
import AmentiesAdd from './Admin/Apages/AmentiesAdd'
import Alogin from './Admin/Apages/Alogin'
import Ulogin from './Website/Pages/user/Ulogin'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from './Website/Pages/user/Register'

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
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/amenties' element={<Amenties />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/roomdet' element={<RoomsDet />} />
        <Route path='/res' element={<Restaurent />} />
        <Route path='/off' element={<Offers />} />
        <Route path='/event' element={<Event />} />
        <Route path='/gal' element={<Gallery />} />
        <Route path='/Book' element={<Booking />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/start' element={<Starter />} />

        {/* admin */}

        <Route path='/dash' element={<Dashboard />} />
        <Route path='/roommanage' element={<RoomManage />} />
        <Route path='/aboutmanage' element={<AboutManage />} />
        <Route path='/amentiesmanage' element={<AmentiesManage />} />
        <Route path='/amentiesadd' element={<AmentiesAdd />} />
        <Route path='/roomadd' element={<RoomAdd />} />
        <Route path='/alogin' element={<Alogin />} />

        {/* user */}
        <Route path='ulogin' element={<Ulogin />} />
        <Route path='register' element={<Register />} />






      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App