import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg border border-bottom">
            <a href="index.html" className="navbar-brand">
              <h1>iSTUDIO</h1>
            </a>
            <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink  className="nav-item nav-link">Services</NavLink>
                <NavLink  className="nav-item nav-link">Projects</NavLink>
                <div className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                  <div className="dropdown-menu bg-light mt-2">
                    <NavLink className="dropdown-item">Features</NavLink>
                    <NavLink className="dropdown-item">Our Team</NavLink>
                    <NavLink className="dropdown-item">Testimonial</NavLink>
                    <NavLink className="dropdown-item">404 Page</NavLink>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div>


    </div>
  )
}

export default Header