import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
     <header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container position-relative d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
      {/* Uncomment the line below if you also wish to use an image logo */}
      {/* <img src="assets/img/logo.webp" alt=""> */}
      <h1 className="sitename">TravelTime</h1>
    </a>
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/dest">Destinations</NavLink></li>
        <li><NavLink to="/tours">Tours</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li className="dropdown"><a href="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
          <ul>
            <li><NavLink to="/destd">Destination Details</NavLink></li>
            <li><NavLink to="/toursd">Tour Details</NavLink></li>
            <li><NavLink to="/booking">Booking</NavLink></li>
            <li><NavLink to="/test">Testimonials</NavLink></li>
            <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
            <li><NavLink to="/blogd">Blog Details</NavLink></li>
            <li><NavLink to="/terms">Terms</NavLink></li>
            <li><NavLink to="/privacy">Privacy</NavLink></li>
            <li><NavLink to="*">404</NavLink></li>
          </ul>
        </li>
        {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li> */}
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list" />
    </nav>
    <a className="btn-getstarted" href="index.html#about">Get Started</a>
  </div>
</header>

    </div>
  )
}

export default Header