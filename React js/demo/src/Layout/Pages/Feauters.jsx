import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { Link } from 'react-router-dom'

function Feauters() {
  return (
    <div>
        <Header />
        <h1 className='bg-info p-5'>Hello Thus is Features page</h1>
        <Footer />
    </div>
  )
}

export default Feauters;