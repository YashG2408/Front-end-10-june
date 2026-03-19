import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Contact() {
  return (
    <div>
        <Header />
    <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Contact</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Contact</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-info-panel">
          <div className="contact-info-header">
            <h3>Contact Information</h3>
            <p>Dignissimos deleniti accusamus rerum voluptate. Dignissimos rerum sit maiores reiciendis voluptate inventore ut.</p>
          </div>
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="icon-container">
                <i className="bi bi-pin-map-fill" />
              </div>
              <div className="card-content">
                <h4>Our Location</h4>
                <p>4952 Hilltop Dr, Anytown, CA 90210</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-container">
                <i className="bi bi-envelope-open" />
              </div>
              <div className="card-content">
                <h4>Email Us</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-container">
                <i className="bi bi-telephone-fill" />
              </div>
              <div className="card-content">
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-container">
                <i className="bi bi-clock-history" />
              </div>
              <div className="card-content">
                <h4>Working Hours</h4>
                <p>Monday-Saturday: 9AM - 7PM</p>
              </div>
            </div>
          </div>
          <div className="social-links-panel">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook" /></a>
              <a href="#"><i className="bi bi-twitter-x" /></a>
              <a href="#"><i className="bi bi-instagram" /></a>
              <a href="#"><i className="bi bi-linkedin" /></a>
              <a href="#"><i className="bi bi-youtube" /></a>
            </div>
          </div>
        </div>
        <div className="contact-form-panel">
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="form-container">
            <h3>Send Us a Message</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit faucibus imperdiet nec eget felis.</p>
            <form action="forms/contact.php" method="post" className="php-email-form">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="nameInput" name="name" placeholder="Full Name" required />
                <label htmlFor="nameInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="emailInput" name="email" placeholder="Email Address" required />
                <label htmlFor="emailInput">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="subjectInput" name="subject" placeholder="Subject" required />
                <label htmlFor="subjectInput">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" id="messageInput" name="message" rows={5} placeholder="Your Message" style={{height: 150}} required defaultValue={""} />
                <label htmlFor="messageInput">Your Message</label>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn-submit">Send Message <i className="bi bi-send-fill ms-2" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Contact Section */}
</main>

        <Footer />
    </div>
  )
}

export default Contact