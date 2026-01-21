import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'
import Home from './Pages/Home'

import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

// import Login from './Pages/Login'
// import Register from './Pages/Register'


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Home /> */}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/view' element={<View />} />
          {/* <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} /> */}
          {/* <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} /> */}

          <Route path='/' element={<Login />} />

          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />

          {/* admin side */}


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App