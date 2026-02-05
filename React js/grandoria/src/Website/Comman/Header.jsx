import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {
  const redirect= useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("uid")){
      redirect("/Ulogin")
    }
  })
  const logout =()=>{
    localStorage.removeItem("uid")
    localStorage.removeItem("uname")
    redirect("/Ulogin")
  }
  return (
    <div>
        <header id="header" className="header sticky-top">
  <div className="topbar d-flex align-items-center dark-background">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </div>{/* End Top Bar */}
  <div className="branding d-flex align-items-cente">
    <div className="container position-relative d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        {/* Uncomment the line below if you also wish to use an image logo */}
        {/* <img src="assets/img/logo.webp" alt=""> */}
        <h1 className="sitename">Grandoria</h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><NavLink to="/" className="">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/rooms">Rooms</NavLink></li>
          <li><NavLink to="/amenties">Amenities</NavLink></li>
          <li><NavLink to="/location">Location</NavLink></li>
          <li className="dropdown"><a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
            <ul>
              <li><NavLink to="/roomdet">Room Details</NavLink></li>
              <li><NavLink to="/res">Restaurant</NavLink></li>
              <li><NavLink to="/off">Offers</NavLink></li>
              <li><NavLink to="/event">Events</NavLink></li>
              <li><NavLink to="/gal">Gallery</NavLink></li>
              <li><NavLink to="/Book">Booking</NavLink></li>
              <li><NavLink to="/terms">Terms Page</NavLink></li>
              <li><NavLink to="/privacy">Privacy Page</NavLink></li>
              <li><NavLink to="/notfound">404 Page</NavLink></li>
              <li><NavLink to="/start">Starter Page</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
         
            {(()=>{
               if(localStorage.getItem("uid")){
              return (
                <Link to="/edit" className='text-white'>{localStorage.getItem("uname")}</Link>
              )
            }
            })()}
            {(()=>{
               if(localStorage.getItem("uid")){
              return (
                <li className='btn text-white 'onClick={logout}>logout</li>
              )
            }
            })()}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
    </div>
  </div>
</header>

    </div>
  )
}

export default Header