import React from 'react'
import Header from './Component/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import NewData from './Component/NewData'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>HEllo This is Crud redux</h1> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newdata' element={<NewData />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App