import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function About() {
  return (
    <div>
        <Header />
    <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>About</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">About</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="content">
            <h2 className="mb-4">Crafting Unforgettable Journeys Since 2015</h2>
            <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p className="mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="row g-4 mb-5">
              <div className="col-6">
                <div className="stat-item text-center">
                  <div className="stat-number">350+</div>
                  <div className="stat-label">Tours Completed</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item text-center">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Countries</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item text-center">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item text-center">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfied Guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-stack">
            <div className="image-main">
              <img src="assets/img/travel/showcase-3.webp" alt="Travel Experience" className="img-fluid" />
            </div>
            <div className="image-overlay">
              <img src="assets/img/travel/misc-12.webp" alt="Happy Travelers" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-5">
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-award" />
            </div>
            <h5>Expert Local Guides</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-headset" />
            </div>
            <h5>24/7 Customer Support</h5>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-shield-check" />
            </div>
            <h5>Best Price Guarantee</h5>
            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-geo-alt" />
            </div>
            <h5>Local Expertise</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-calendar-check" />
            </div>
            <h5>Flexible Booking</h5>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-item text-center">
            <div className="feature-icon">
              <i className="bi bi-leaf" />
            </div>
            <h5>Sustainable Travel</h5>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit</p>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /About Section */}
</main>

        <Footer />
    </div>
  )
}

export default About