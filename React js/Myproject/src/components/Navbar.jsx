import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        
        <div className=" nav fixed  top-0 bg-white shadow-lg w-full flex px-40 items-center justify-between h-20 ">
      <div className="profile">
        <img src="https://themewagon.github.io/venus-nextjs/images/logo/logo.svg" className='navimg' alt="" />
      </div>
      <div className="links flex gap-5">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div className="btns flex gap-5">
        <button className='btn cursor-pointer' ><i class="fa-solid fa-sun"></i></button>
        <button className='btn cursor-pointer px-5 py-2 border border-1 rounded '>Sign In</button>
        <button  className='btn cursor-pointer px-5 py-2 border  rounded bg-sky-400 border-0  '>Sign Up</button>
      </div>
    </div>



    </div>
  )
}

export default Navbar