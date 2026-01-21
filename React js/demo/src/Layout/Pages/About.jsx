import React from 'react'
// import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

import { Link, Outlet } from 'react-router-dom'
import Header from '../Comman/Header'

function About() {
  return (
    <div>
        
        <Header />
        <h1 className='bg-secondary p-5 text-white'>Hello Thus IS About PAges</h1>
        <Link className='btn btn-danger mx-3 m-3' to="/About/About1">About 1</Link>
        <Link className='btn btn-success m-3' to="/About/About2">About 2</Link>
        <Outlet />
        <Footer />
    </div>
  )
}

export default About