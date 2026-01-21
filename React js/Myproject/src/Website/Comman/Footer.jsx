import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
        <NavLink href="index.html" className="d-inline-block mb-3">
          <h1 className="text-white">iSTUDIO</h1>
        </NavLink>
        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
          amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
          clita duo justo et tempor</p>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
        <h5 className="text-white mb-4">Get In Touch</h5>
        <p><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
        <p><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
        <p><i className="fa fa-envelope me-3" />info@example.com</p>
        <div className="d-flex pt-2">
          <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i className="fab fa-twitter" /></a>
          <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i className="fab fa-youtube" /></a>
          <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i className="fab fa-instagram" /></a>
          <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
        <h5 className="text-white mb-4">Popular Link</h5>
        <a className="btn btn-link" href="#!">About Us</a>
        <a className="btn btn-link" href="#!">Contact Us</a>
        <a className="btn btn-link" href="#!">Privacy Policy</a>
        <a className="btn btn-link" href="#!">Terms &amp; Condition</a>
        <a className="btn btn-link" href="#!">Career</a>
      </div>
      <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
        <h5 className="text-white mb-4">Our Services</h5>
        <a className="btn btn-link" href="#!">Interior Design</a>
        <a className="btn btn-link" href="#!">Project Planning</a>
        <a className="btn btn-link" href="#!">Renovation</a>
        <a className="btn btn-link" href="#!">Implement</a>
        <a className="btn btn-link" href="#!">Landscape Design</a>
      </div>
    </div>
  </div>
  <div className="container wow fadeIn" data-wow-delay="0.1s">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className="border-bottom" href="#!">Your Site Name</a>, All Right Reserved.
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>. Distributed by
          <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <div className="footer-menu">
            <a href="#!">Home</a>
            <a href="#!">Cookies</a>
            <a href="#!">Help</a>
            <a href="#!">FAQs</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Footer