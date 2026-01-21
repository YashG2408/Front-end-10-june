import React from 'react'

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
        <li><a href="index.html" className="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="destinations.html">Destinations</a></li>
        <li><a href="tours.html">Tours</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li className="dropdown"><a href="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
          <ul>
            <li><a href="destination-details.html">Destination Details</a></li>
            <li><a href="tour-details.html">Tour Details</a></li>
            <li><a href="booking.html">Booking</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="faq.html">Frequently Asked Questions</a></li>
            <li><a href="blog-details.html">Blog Details</a></li>
            <li><a href="terms.html">Terms</a></li>
            <li><a href="privacy.html">Privacy</a></li>
            <li><a href="404.html">404</a></li>
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
        <li><a href="contact.html">Contact</a></li>
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