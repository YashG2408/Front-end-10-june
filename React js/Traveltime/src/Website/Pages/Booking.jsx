import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Booking() {
  return (
    <div>
        <Header />
    <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" style={{backgroundImage: 'url(assets/img/travel/showcase-11.webp)'}}>
    <div className="container position-relative">
      <h1>Booking</h1>
      <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Booking</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Travel Booking Section */}
  <section id="travel-booking" className="travel-booking section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="booking-form">
            <form action="forms/booking.php" className="php-email-form">
              {/* Step 1: Select Tour & Dates */}
              <div className="booking-step" id="step-1">
                <div className="step-header">
                  <h3>Step 1: Select Tour &amp; Travel Dates</h3>
                  <p>Choose your preferred tour package and travel dates</p>
                </div>
                <div className="step-content">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="tour-package">Tour Package</label>
                        <select name="tour_package" id="tour-package" className="form-select" required>
                          <option value>Choose a tour package</option>
                          <option value="european-discovery">European Discovery - 10 Days</option>
                          <option value="asian-adventure">Asian Adventure - 14 Days</option>
                          <option value="african-safari">African Safari - 12 Days</option>
                          <option value="south-american">South American Explorer - 16 Days</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="departure-date">Departure Date</label>
                        <input type="date" name="departure_date" id="departure-date" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="return-date">Return Date</label>
                        <input type="date" name="return_date" id="return-date" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="adults">Number of Adults</label>
                        <select name="adults" id="adults" className="form-select" required>
                          <option value={1}>1 Adult</option>
                          <option value={2}>2 Adults</option>
                          <option value={3}>3 Adults</option>
                          <option value={4}>4 Adults</option>
                          <option value={5}>5+ Adults</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="children">Number of Children</label>
                        <select name="children" id="children" className="form-select">
                          <option value={0}>No Children</option>
                          <option value={1}>1 Child</option>
                          <option value={2}>2 Children</option>
                          <option value={3}>3 Children</option>
                          <option value={4}>4+ Children</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 2: Traveler Information */}
              <div className="booking-step" id="step-2">
                <div className="step-header">
                  <h3>Step 2: Traveler Information</h3>
                  <p>Please provide details for the primary traveler</p>
                </div>
                <div className="step-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first_name" id="first-name" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" name="last_name" id="last-name" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" name="phone" id="phone" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="nationality">Nationality</label>
                        <select name="nationality" id="nationality" className="form-select" required>
                          <option value>Select nationality</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                          <option value="AU">Australia</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="passport">Passport Number</label>
                        <input type="text" name="passport" id="passport" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="special-requests">Special Requests or Dietary Requirements</label>
                        <textarea name="special_requests" id="special-requests" rows={4} className="form-control" placeholder="Please let us know about any special requirements..." defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 3: Additional Options */}
              <div className="booking-step" id="step-3">
                <div className="step-header">
                  <h3>Step 3: Additional Options</h3>
                  <p>Enhance your travel experience with these optional services</p>
                </div>
                <div className="step-content">
                  <div className="add-ons-grid">
                    <div className="add-on-item">
                      <div className="add-on-header">
                        <input type="checkbox" name="travel_insurance" id="travel-insurance" defaultValue="yes" />
                        <label htmlFor="travel-insurance">
                          <i className="bi bi-shield-check" />
                          <strong>Travel Insurance</strong>
                          <span className="price">+$89</span>
                        </label>
                      </div>
                      <p>Comprehensive coverage for your entire trip including medical emergencies and trip cancellation.</p>
                    </div>
                    <div className="add-on-item">
                      <div className="add-on-header">
                        <input type="checkbox" name="airport_transfer" id="airport-transfer" defaultValue="yes" />
                        <label htmlFor="airport-transfer">
                          <i className="bi bi-car-front" />
                          <strong>Airport Transfer</strong>
                          <span className="price">+$45</span>
                        </label>
                      </div>
                      <p>Private airport pickup and drop-off service for a hassle-free start and end to your journey.</p>
                    </div>
                    <div className="add-on-item">
                      <div className="add-on-header">
                        <input type="checkbox" name="hotel_upgrade" id="hotel-upgrade" defaultValue="yes" />
                        <label htmlFor="hotel-upgrade">
                          <i className="bi bi-building" />
                          <strong>Hotel Upgrade</strong>
                          <span className="price">+$150</span>
                        </label>
                      </div>
                      <p>Upgrade to premium hotels with better amenities and locations throughout your trip.</p>
                    </div>
                    <div className="add-on-item">
                      <div className="add-on-header">
                        <input type="checkbox" name="private_guide" id="private-guide" defaultValue="yes" />
                        <label htmlFor="private-guide">
                          <i className="bi bi-person-badge" />
                          <strong>Private Guide</strong>
                          <span className="price">+$200</span>
                        </label>
                      </div>
                      <p>Personal tour guide for select destinations to provide exclusive insights and personalized experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 4: Payment Information */}
              <div className="booking-step" id="step-4">
                <div className="step-header">
                  <h3>Step 4: Payment Information</h3>
                  <p>Secure payment processing with 256-bit SSL encryption</p>
                </div>
                <div className="step-content">
                  <div className="payment-methods">
                    <div className="payment-method active">
                      <input type="radio" name="payment_method" id="credit-card" defaultValue="credit_card" defaultChecked />
                      <label htmlFor="credit-card">
                        <i className="bi bi-credit-card" />
                        Credit/Debit Card
                      </label>
                    </div>
                    <div className="payment-method">
                      <input type="radio" name="payment_method" id="paypal" defaultValue="paypal" />
                      <label htmlFor="paypal">
                        <i className="bi bi-paypal" />
                        PayPal
                      </label>
                    </div>
                    <div className="payment-method">
                      <input type="radio" name="payment_method" id="bank-transfer" defaultValue="bank_transfer" />
                      <label htmlFor="bank-transfer">
                        <i className="bi bi-bank" />
                        Bank Transfer
                      </label>
                    </div>
                  </div>
                  <div className="credit-card-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="card-number">Card Number</label>
                          <input type="text" name="card_number" id="card-number" className="form-control" placeholder="1234 5678 9012 3456" maxLength={19} />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="form-group">
                          <label htmlFor="card-name">Cardholder Name</label>
                          <input type="text" name="card_name" id="card-name" className="form-control" placeholder="John Doe" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="card-expiry">Expiry Date</label>
                          <input type="text" name="card_expiry" id="card-expiry" className="form-control" placeholder="MM/YY" maxLength={5} />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="card-cvv">CVV</label>
                          <input type="text" name="card_cvv" id="card-cvv" className="form-control" placeholder={123} maxLength={4} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="secure-badge">
                    <i className="bi bi-shield-lock" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>
              </div>
              {/* Step 5: Review & Confirmation */}
              <div className="booking-step" id="step-5">
                <div className="step-header">
                  <h3>Step 5: Review &amp; Confirmation</h3>
                  <p>Please review your booking details before confirming</p>
                </div>
                <div className="step-content">
                  <div className="terms-conditions">
                    <div className="form-check">
                      <input type="checkbox" name="terms_agreement" id="terms-agreement" className="form-check-input" required />
                      <label htmlFor="terms-agreement" className="form-check-label">
                        I agree to the <a href="#" target="_blank">Terms and Conditions</a> and <a href="#" target="_blank">Privacy Policy</a>
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" name="newsletter" id="newsletter" className="form-check-input" />
                      <label htmlFor="newsletter" className="form-check-label">
                        Subscribe to our newsletter for exclusive travel deals and updates
                      </label>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="bi bi-check-circle" />
                      Complete Booking
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="booking-summary">
            <div className="summary-header">
              <h4>Booking Summary</h4>
            </div>
            <div className="summary-content">
              <div className="selected-tour">
                <img src="assets/img/travel/destination-8.webp" alt="Tour" className="img-fluid" />
                <div className="tour-info">
                  <h5>European Discovery</h5>
                  <p>10 Days • 8 Cities</p>
                  <div className="tour-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <span>4.8 (324 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="booking-details">
                <div className="detail-row">
                  <span>Departure Date:</span>
                  <span>March 15, 2024</span>
                </div>
                <div className="detail-row">
                  <span>Return Date:</span>
                  <span>March 25, 2024</span>
                </div>
                <div className="detail-row">
                  <span>Travelers:</span>
                  <span>2 Adults</span>
                </div>
              </div>
              <div className="price-breakdown">
                <h6>Price Breakdown</h6>
                <div className="price-row">
                  <span>Tour Package (2 adults)</span>
                  <span>$2,980</span>
                </div>
                <div className="price-row">
                  <span>Travel Insurance</span>
                  <span>$89</span>
                </div>
                <div className="price-row">
                  <span>Airport Transfer</span>
                  <span>$45</span>
                </div>
                <div className="price-row">
                  <span>Taxes &amp; Fees</span>
                  <span>$156</span>
                </div>
                <div className="price-total">
                  <span>Total Amount</span>
                  <span>$3,270</span>
                </div>
              </div>
              <div className="payment-security">
                <div className="security-badges">
                  <i className="bi bi-shield-check" />
                  <span>SSL Secured</span>
                </div>
                <div className="accepted-cards">
                  <i className="bi bi-credit-card" />
                  <span>All major cards accepted</span>
                </div>
              </div>
            </div>
            <div className="help-section">
              <h6>Need Help?</h6>
              <p>Our travel experts are here to assist you</p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="bi bi-telephone" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope" />
                  <span>support@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Travel Booking Section */}
</main>

        <Footer />
    </div>
  )
}

export default Booking