import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function DestinationDetails() {
  return (
    <div>
        <Header />
    <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Destination Details</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Destination Details</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Travel Destination Details Section */}
  <section id="travel-destination-details" className="travel-destination-details section">
    <div className="container">
      {/* Hero Section */}
      <div className="destination-hero">
        <div className="hero-content">
          <h1 className="destination-name">Bali, Indonesia</h1>
          <p className="destination-tagline">Island of the Gods</p>
        </div>
        <div className="hero-image">
          <img src="assets/img/travel/showcase-3.webp" alt="Bali destination" className="img-fluid" />
        </div>
      </div>
      {/* Overview Section */}
      <div className="destination-overview">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="overview-content">
              <h2>Discover Paradise</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="overview-image">
              <img src="assets/img/travel/destination-5.webp" alt="Bali culture" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* Highlights Section */}
      <div className="destination-highlights">
        <div className="section-header">
          <h2>Must-See Attractions</h2>
          <p>Explore the most captivating places and experiences</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-8.webp" alt="Temple complex" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Sacred Temples</h4>
                <p>Discover ancient Hindu temples with intricate stone carvings and spiritual significance.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-12.webp" alt="Rice terraces" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Rice Terraces</h4>
                <p>Walk through emerald green terraced landscapes that showcase traditional farming methods.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-15.webp" alt="Pristine beaches" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Pristine Beaches</h4>
                <p>Relax on white sand beaches with crystal clear waters perfect for swimming and surfing.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-3.webp" alt="Traditional markets" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Traditional Markets</h4>
                <p>Immerse yourself in local culture at vibrant markets filled with crafts and delicacies.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-7.webp" alt="Volcano hiking" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Volcano Adventures</h4>
                <p>Challenge yourself with sunrise hikes to active volcanoes offering breathtaking views.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="highlight-item">
              <div className="highlight-image">
                <img src="assets/img/travel/destination-11.webp" alt="Cultural performances" className="img-fluid" />
              </div>
              <div className="highlight-content">
                <h4>Cultural Shows</h4>
                <p>Experience traditional Balinese dance performances and artistic expressions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Available Tours Section */}
      <div className="available-tours">
        <div className="section-header">
          <h2>Available Tours</h2>
          <p>Choose from our carefully crafted experiences</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-image">
                <img src="assets/img/travel/tour-8.webp" alt="Cultural Heritage Tour" className="img-fluid" />
                <div className="tour-duration">
                  <span>5 Days</span>
                </div>
              </div>
              <div className="tour-content">
                <h4>Cultural Heritage Tour</h4>
                <p>Explore ancient temples, traditional villages, and local artisan workshops in this immersive cultural journey.</p>
                <div className="tour-meta">
                  <span className="tour-price">$589</span>
                  <span className="tour-rating">
                    <i className="bi bi-star-fill" />
                    <span>4.8</span>
                  </span>
                </div>
                <a href="#" className="btn-tour">View Details <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-image">
                <img src="assets/img/travel/tour-12.webp" alt="Adventure Package" className="img-fluid" />
                <div className="tour-duration">
                  <span>7 Days</span>
                </div>
              </div>
              <div className="tour-content">
                <h4>Adventure Package</h4>
                <p>Volcano hiking, white water rafting, and jungle trekking combined with beautiful beach relaxation.</p>
                <div className="tour-meta">
                  <span className="tour-price">$759</span>
                  <span className="tour-rating">
                    <i className="bi bi-star-fill" />
                    <span>4.9</span>
                  </span>
                </div>
                <a href="#" className="btn-tour">View Details <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tour-card">
              <div className="tour-image">
                <img src="assets/img/travel/tour-15.webp" alt="Wellness Retreat" className="img-fluid" />
                <div className="tour-duration">
                  <span>4 Days</span>
                </div>
              </div>
              <div className="tour-content">
                <h4>Wellness Retreat</h4>
                <p>Rejuvenate your mind and body with yoga sessions, spa treatments, and healthy organic cuisine.</p>
                <div className="tour-meta">
                  <span className="tour-price">$445</span>
                  <span className="tour-rating">
                    <i className="bi bi-star-fill" />
                    <span>4.7</span>
                  </span>
                </div>
                <a href="#" className="btn-tour">View Details <i className="bi bi-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Practical Information Section */}
      <div className="practical-info">
        <div className="section-header">
          <h2>Travel Information</h2>
          <p>Essential details for planning your trip</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-calendar3" />
                </div>
                <div className="info-content">
                  <h5>Best Time to Visit</h5>
                  <p>April to October (dry season) offers the best weather with minimal rainfall and plenty of sunshine.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-thermometer-sun" />
                </div>
                <div className="info-content">
                  <h5>Climate</h5>
                  <p>Tropical climate with temperatures ranging from 26°C to 30°C year-round.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-cash-coin" />
                </div>
                <div className="info-content">
                  <h5>Currency</h5>
                  <p>Indonesian Rupiah (IDR). Credit cards accepted in most tourist areas.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-translate" />
                </div>
                <div className="info-content">
                  <h5>Language</h5>
                  <p>Bahasa Indonesia is the official language. English widely spoken in tourist areas.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-passport" />
                </div>
                <div className="info-content">
                  <h5>Visa Requirements</h5>
                  <p>30-day visa on arrival available for most nationalities. Passport must be valid for 6 months.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="bi bi-shield-check" />
                </div>
                <div className="info-content">
                  <h5>Safety Tips</h5>
                  <p>Generally safe for tourists. Respect local customs and dress modestly when visiting temples.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="destination-gallery">
        <div className="section-header">
          <h2>Photo Gallery</h2>
          <p>Glimpses of natural beauty and cultural richness</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <a href="assets/img/travel/showcase-5.webp" className="glightbox">
              <img src="assets/img/travel/showcase-5.webp" alt="Gallery image" className="img-fluid" />
            </a>
          </div>
          <div className="gallery-item">
            <a href="assets/img/travel/destination-9.webp" className="glightbox">
              <img src="assets/img/travel/destination-9.webp" alt="Gallery image" className="img-fluid" />
            </a>
          </div>
          <div className="gallery-item">
            <a href="assets/img/travel/destination-13.webp" className="glightbox">
              <img src="assets/img/travel/destination-13.webp" alt="Gallery image" className="img-fluid" />
            </a>
          </div>
          <div className="gallery-item">
            <a href="assets/img/travel/destination-16.webp" className="glightbox">
              <img src="assets/img/travel/destination-16.webp" alt="Gallery image" className="img-fluid" />
            </a>
          </div>
          <div className="gallery-item">
            <a href="assets/img/travel/destination-18.webp" className="glightbox">
              <img src="assets/img/travel/destination-18.webp" alt="Gallery image" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
      {/* Call to Action Section */}
      <div className="destination-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Let our travel experts help you create the perfect Bali experience tailored to your preferences and budget.</p>
          <div className="cta-actions">
            <a href="tours.html" className="btn-primary">Explore Tours</a>
            <a href="contact.html" className="btn-outline">Contact Expert</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Travel Destination Details Section */}
</main>

        <Footer />
    </div>
  )
}

export default DestinationDetails