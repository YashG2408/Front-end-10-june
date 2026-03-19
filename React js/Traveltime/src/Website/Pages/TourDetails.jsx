import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function TourDetails() {
  return (
    <div>
        <Header />
      <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Tour Details</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Tour Details</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Travel Tour Details Section */}
  <section id="travel-tour-details" className="travel-tour-details section">
    <div className="container">
      {/* Hero Banner */}
      <div className="tour-hero">
        <div className="hero-image-wrapper">
          <img src="assets/img/travel/showcase-7.webp" alt="Mediterranean Coast Adventure" className="hero-image" />
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="tour-type">Cultural Explorer</span>
              <h1>Mediterranean Coast Discovery</h1>
              <p className="hero-subtitle">Immerse yourself in ancient history and coastal splendor across Italy's most captivating destinations</p>
              <div className="hero-stats">
                <span className="stat-item">
                  <i className="bi bi-clock" />
                  10 Days
                </span>
                <span className="stat-item">
                  <i className="bi bi-geo-alt" />
                  Rome • Florence • Amalfi
                </span>
                <span className="stat-item">
                  <i className="bi bi-people" />
                  Max 16 Guests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tour Essence */}
      <div className="tour-essence">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="essence-content">
              <h2>The Essence of Italy</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
              <div className="highlights-compact">
                <div className="highlight-item">
                  <i className="bi bi-palette" />
                  <span>Renaissance Art Tours</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-cup-hot" />
                  <span>Culinary Experiences</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-building" />
                  <span>Boutique Accommodations</span>
                </div>
                <div className="highlight-item">
                  <i className="bi bi-car-front" />
                  <span>Private Transport</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="price-header">
                <span className="price-label">From</span>
                <span className="price-amount">€3,450</span>
              </div>
              <p className="price-description">per person, twin accommodation</p>
              <a href="#booking" className="btn-reserve">Reserve Your Journey</a>
              <div className="booking-notes">
                <span><i className="bi bi-shield-check" />Free cancellation up to 48h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Journey Timeline */}
      <div className="journey-timeline">
        <h2>Your Journey Unfolds</h2>
        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="day-number">01</span>
            </div>
            <div className="timeline-content">
              <div className="day-header">
                <h3>Roman Grandeur</h3>
                <span className="location">Rome</span>
              </div>
              <p>Arrival at Rome Fiumicino Airport with private transfer to your centrally located boutique hotel. Evening aperitivo walking tour through Trastevere, discovering hidden local gems and authentic Roman cuisine at a family-owned trattoria.</p>
              <div className="day-features">
                <span className="feature-tag">Hotel Del Greco</span>
                <span className="feature-tag">Welcome Dinner</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="day-number">02</span>
            </div>
            <div className="timeline-content">
              <div className="day-header">
                <h3>Ancient Wonders</h3>
                <span className="location">Rome</span>
              </div>
              <p>Private guided exploration of the Colosseum and Roman Forum with skip-the-line access. Afternoon visit to Vatican Museums and Sistine Chapel. Evening cooking class with a local chef in charming neighborhood setting.</p>
              <div className="day-features">
                <span className="feature-tag">Skip-the-line Tours</span>
                <span className="feature-tag">Cooking Experience</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="day-number">03</span>
            </div>
            <div className="timeline-content">
              <div className="day-header">
                <h3>Renaissance Beauty</h3>
                <span className="location">Florence</span>
              </div>
              <p>High-speed train journey to Florence. Private tour of Uffizi Gallery with art historian guide. Afternoon exploring Oltrarno district artisan workshops. Evening at leisure in your elegant historic palazzo hotel.</p>
              <div className="day-features">
                <span className="feature-tag">Palazzo Magnani Feroni</span>
                <span className="feature-tag">Art Expert Guide</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="day-number">04</span>
            </div>
            <div className="timeline-content">
              <div className="day-header">
                <h3>Tuscan Countryside</h3>
                <span className="location">Chianti</span>
              </div>
              <p>Day trip to Chianti region with private driver. Wine tasting at boutique vineyard followed by lunch at family estate. Visit San Gimignano's medieval towers and enjoy gelato making workshop.</p>
              <div className="day-features">
                <span className="feature-tag">Wine Tasting</span>
                <span className="feature-tag">Gelato Making</span>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="day-number">05</span>
            </div>
            <div className="timeline-content">
              <div className="day-header">
                <h3>Coastal Paradise</h3>
                <span className="location">Amalfi Coast</span>
              </div>
              <p>Private transfer to Amalfi Coast via scenic route. Check-in to cliffside hotel with panoramic sea views. Sunset boat excursion along the dramatic coastline with prosecco and local appetizers.</p>
              <div className="day-features">
                <span className="feature-tag">Casa Angelina</span>
                <span className="feature-tag">Sunset Cruise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inclusions Overview */}
      <div className="inclusions-overview">
        <div className="row">
          <div className="col-lg-6">
            <div className="included-section">
              <h3>Your Journey Includes</h3>
              <div className="inclusion-list">
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>9 nights boutique hotel accommodation</span>
                </div>
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Daily breakfast and 4 specialty dinners</span>
                </div>
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Private transfers and high-speed rail</span>
                </div>
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Expert local guides and art historians</span>
                </div>
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Skip-the-line museum entries</span>
                </div>
                <div className="inclusion-item">
                  <i className="bi bi-check-circle-fill" />
                  <span>Curated cultural experiences</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="not-included-section">
              <h3>Additional Considerations</h3>
              <div className="exclusion-list">
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>International flights to/from Italy</span>
                </div>
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>Travel insurance (recommended)</span>
                </div>
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>Lunches and personal dining choices</span>
                </div>
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>Personal shopping and souvenirs</span>
                </div>
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>Optional activities and upgrades</span>
                </div>
                <div className="exclusion-item">
                  <i className="bi bi-x-circle" />
                  <span>Gratuities for guides and drivers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking Section */}
      <div className="booking-section" id="booking">
        <div className="row">
          <div className="col-lg-8">
            <div className="departure-dates">
              <h3>2024 Departure Dates</h3>
              <div className="dates-grid">
                <div className="date-option">
                  <div className="date-info">
                    <span className="month">April</span>
                    <span className="dates">15 - 24</span>
                  </div>
                  <div className="date-details">
                    <span className="price">€3,450</span>
                    <span className="availability available">Available</span>
                  </div>
                </div>
                <div className="date-option">
                  <div className="date-info">
                    <span className="month">May</span>
                    <span className="dates">20 - 29</span>
                  </div>
                  <div className="date-details">
                    <span className="price">€3,650</span>
                    <span className="availability limited">4 spots left</span>
                  </div>
                </div>
                <div className="date-option">
                  <div className="date-info">
                    <span className="month">June</span>
                    <span className="dates">10 - 19</span>
                  </div>
                  <div className="date-details">
                    <span className="price">€3,850</span>
                    <span className="availability available">Available</span>
                  </div>
                </div>
                <div className="date-option">
                  <div className="date-info">
                    <span className="month">September</span>
                    <span className="dates">5 - 14</span>
                  </div>
                  <div className="date-details">
                    <span className="price">€3,750</span>
                    <span className="availability available">Available</span>
                  </div>
                </div>
                <div className="date-option">
                  <div className="date-info">
                    <span className="month">October</span>
                    <span className="dates">15 - 24</span>
                  </div>
                  <div className="date-details">
                    <span className="price">€3,550</span>
                    <span className="availability limited">2 spots left</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="booking-form-card">
              <h3>Secure Your Place</h3>
              <form action="forms/tour-booking.php" method="post" className="php-email-form">
                <div className="form-group">
                  <label htmlFor="preferred-date">Preferred Departure</label>
                  <select name="departure_date" id="preferred-date" className="form-control" required>
                    <option value>Select departure date</option>
                    <option value="April 15-24">April 15-24, 2024</option>
                    <option value="May 20-29">May 20-29, 2024</option>
                    <option value="June 10-19">June 10-19, 2024</option>
                    <option value="September 5-14">September 5-14, 2024</option>
                    <option value="October 15-24">October 15-24, 2024</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="guest-count">Number of Travelers</label>
                  <select name="travelers" id="guest-count" className="form-control" required>
                    <option value>Select travelers</option>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4 People</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input type="text" name="name" id="contact-name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input type="email" name="email" id="contact-email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input type="tel" name="phone" id="contact-phone" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="special-notes">Special Requests</label>
                  <textarea name="message" id="special-notes" rows={3} className="form-control" placeholder="Dietary requirements, celebrations, accessibility needs..." defaultValue={""} />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your booking request has been submitted successfully!</div>
                <button type="submit" className="btn-submit">Submit Booking Request</button>
              </form>
              <div className="booking-assurance">
                <div className="assurance-item">
                  <i className="bi bi-shield-check" />
                  <span>Secure booking process</span>
                </div>
                <div className="assurance-item">
                  <i className="bi bi-telephone" />
                  <span>Expert travel consultants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Visual Gallery */}
      <div className="visual-gallery">
        <h2>Moments to Remember</h2>
        <div className="gallery-grid">
          <div className="gallery-piece large">
            <a href="assets/img/travel/destination-4.webp" className="glightbox">
              <img src="assets/img/travel/destination-4.webp" alt="Italian Countryside" className="img-fluid" loading="lazy" />
            </a>
          </div>
          <div className="gallery-piece">
            <a href="assets/img/travel/destination-5.webp" className="glightbox">
              <img src="assets/img/travel/destination-5.webp" alt="Historic Architecture" className="img-fluid" loading="lazy" />
            </a>
          </div>
          <div className="gallery-piece">
            <a href="assets/img/travel/destination-6.webp" className="glightbox">
              <img src="assets/img/travel/destination-6.webp" alt="Coastal Views" className="img-fluid" loading="lazy" />
            </a>
          </div>
          <div className="gallery-piece">
            <a href="assets/img/travel/tour-8.webp" className="glightbox">
              <img src="assets/img/travel/tour-8.webp" alt="Cultural Experience" className="img-fluid" loading="lazy" />
            </a>
          </div>
          <div className="gallery-piece">
            <a href="assets/img/travel/tour-9.webp" className="glightbox">
              <img src="assets/img/travel/tour-9.webp" alt="Local Cuisine" className="img-fluid" loading="lazy" />
            </a>
          </div>
          <div className="gallery-piece medium">
            <a href="assets/img/travel/tour-10.webp" className="glightbox">
              <img src="assets/img/travel/tour-10.webp" alt="Scenic Landscapes" className="img-fluid" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
      {/* Final Call to Action */}
      <div className="final-call">
        <div className="call-content">
          <h2>Your Italian Odyssey Awaits</h2>
          <p>Embark on a journey that transcends ordinary travel. Let us craft memories that will last a lifetime.</p>
          <div className="call-actions">
            <a href="#booking" className="btn-primary-cta">Begin Your Journey</a>
            <a href="tel:+1-855-742-8639" className="btn-contact">
              <i className="bi bi-telephone" />
              Call +1 (855) 742-8639
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Travel Tour Details Section */}
</main>

        <Footer />
    </div>
  )
}

export default TourDetails