import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Home() {
    return (
        <div>
            <Header />
            <main className="main">
                {/* Travel Hero Section */}
                <section id="travel-hero" className="travel-hero section dark-background">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h1>Discover the World with Us</h1>
                                    <p className="lead">Explore breathtaking destinations and create unforgettable memories with our expertly crafted tours.</p>
                                    <div className="d-flex flex-wrap gap-3 mt-4">
                                        <a href="destinations.html" className="btn btn-primary">Start Exploring</a>
                                        <a href="tours.html" className="btn btn-outline-light">View Tours</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-5 mt-lg-0">
                                <div className="booking-form">
                                    <form action method="post">
                                        <div className="row gy-3">
                                            <div className="col-md-12">
                                                <label htmlFor="destination">Destination</label>
                                                <input type="text" name="destination" id="destination" className="form-control" placeholder="Where do you want to go?" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="check-in">Check In</label>
                                                <input type="date" name="checkin" id="check-in" className="form-control" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="check-out">Check Out</label>
                                                <input type="date" name="checkout" id="check-out" className="form-control" required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="adults">Adults</label>
                                                <input type="number" name="adults" id="adults" className="form-control" min={1} max={20} defaultValue={2} required />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="children">Children</label>
                                                <input type="number" name="children" id="children" className="form-control" min={0} max={20} defaultValue={0} />
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn btn-accent w-100 mt-3">Search Tours</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Hero Section */}
                {/* Why Us Section */}
                <section id="why-us" className="why-us section">
                    <div className="container">
                        {/* Main Content Grid */}
                        <div className="content-grid">
                            <div className="row g-4 align-items-stretch">
                                {/* About Section */}
                                <div className="col-lg-6">
                                    <div className="about-block">
                                        <div className="about-header">
                                            <span className="section-badge">About Us</span>
                                            <h3>Creating Unforgettable Travel Experiences</h3>
                                        </div>
                                        <div className="about-content">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                                            <div className="feature-list">
                                                <div className="feature-item">
                                                    <i className="bi bi-check-circle-fill" />
                                                    <span>Expert local guides in every destination</span>
                                                </div>
                                                <div className="feature-item">
                                                    <i className="bi bi-check-circle-fill" />
                                                    <span>Customized itineraries for every traveler</span>
                                                </div>
                                                <div className="feature-item">
                                                    <i className="bi bi-check-circle-fill" />
                                                    <span>24/7 customer support throughout your journey</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Image Showcase */}
                                <div className="col-lg-6">
                                    <div className="image-showcase">
                                        <div className="main-image">
                                            <img src="assets/img/travel/showcase-12.webp" alt="Travel Adventure" className="img-fluid rounded-3" />
                                            <div className="overlay-badge">
                                                <div className="badge-content">
                                                    <i className="bi bi-award-fill" />
                                                    <div className="badge-text">
                                                        <strong>Award Winner</strong>
                                                        <span>Best Travel Agency 2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="floating-card">
                                            <img src="assets/img/travel/misc-8.webp" alt="Happy Travelers" className="img-fluid rounded-2" />
                                            <div className="card-content">
                                                <div className="rating">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <span>4.9/5</span>
                                                </div>
                                                <p>"Amazing experience!"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* End Main Content Grid */}
                        {/* Why Choose Us Section */}
                        <div className="why-choose-wrapper">
                            <div className="section-header text-center">
                                <span className="section-badge">Why Choose Us</span>
                                <h3>What Makes Us Different</h3>
                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit</p>
                            </div>
                            <div className="features-container">
                                <div className="row g-4">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box">
                                            <div className="feature-icon-wrapper">
                                                <div className="feature-icon">
                                                    <i className="bi bi-compass" />
                                                </div>
                                            </div>
                                            <h4>Expert Navigation</h4>
                                            <p>Quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box">
                                            <div className="feature-icon-wrapper">
                                                <div className="feature-icon">
                                                    <i className="bi bi-heart-fill" />
                                                </div>
                                            </div>
                                            <h4>Personalized Care</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box">
                                            <div className="feature-icon-wrapper">
                                                <div className="feature-icon">
                                                    <i className="bi bi-lightning-charge-fill" />
                                                </div>
                                            </div>
                                            <h4>Instant Booking</h4>
                                            <p>Ut enim ad minim veniam quis nostrud exercitation ullamco</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="feature-box">
                                            <div className="feature-icon-wrapper">
                                                <div className="feature-icon">
                                                    <i className="bi bi-globe-americas" />
                                                </div>
                                            </div>
                                            <h4>Worldwide Coverage</h4>
                                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* End Why Choose Us Section */}
                    </div>
                </section>{/* /Why Us Section */}
                {/* Featured Destinations Section */}
                <section id="featured-destinations" className="featured-destinations section">
                    {/* Section Title */}
                    <div className="container section-title">
                        <h2>Featured Destinations</h2>
                        <div><span>Check Our</span> <span className="description-title">Featured Destinations</span></div>
                    </div>{/* End Section Title */}
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-1.webp" alt="Destination" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="badge">Popular</div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Santorini, Greece</h4>
                                        <p>Experience breathtaking sunsets and pristine white-washed villages overlooking the azure Aegean Sea.</p>
                                        <div className="features">
                                            <span className="feature-tag">Romantic</span>
                                            <span className="feature-tag">Luxury</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">12 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-5.webp" alt="Destination" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="badge featured">Editor's Pick</div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Bali, Indonesia</h4>
                                        <p>Discover tropical paradise with ancient temples, lush rice terraces, and world-class beaches.</p>
                                        <div className="features">
                                            <span className="feature-tag">Adventure</span>
                                            <span className="feature-tag">Culture</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">18 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-8.webp" alt="Destination" className="img-fluid" />
                                        <div className="overlay">
                                            <div className="badge new">New</div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Machu Picchu, Peru</h4>
                                        <p>Trek through ancient Incan ruins and witness one of the world's most spectacular archaeological sites.</p>
                                        <div className="features">
                                            <span className="feature-tag">Adventure</span>
                                            <span className="feature-tag">History</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">8 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-12.webp" alt="Destination" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <h4>Kyoto, Japan</h4>
                                        <p>Immerse yourself in traditional Japanese culture with beautiful temples, gardens, and historic districts.</p>
                                        <div className="features">
                                            <span className="feature-tag">Culture</span>
                                            <span className="feature-tag">Peaceful</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">15 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-3.webp" alt="Destination" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <h4>Swiss Alps, Switzerland</h4>
                                        <p>Adventure awaits in pristine mountain landscapes with world-class skiing and hiking opportunities.</p>
                                        <div className="features">
                                            <span className="feature-tag">Adventure</span>
                                            <span className="feature-tag">Nature</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">22 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                            <div className="col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="image-wrapper">
                                        <img src="assets/img/travel/destination-16.webp" alt="Destination" className="img-fluid" />
                                    </div>
                                    <div className="content">
                                        <h4>Maldives</h4>
                                        <p>Escape to paradise with crystal-clear waters, overwater bungalows, and unparalleled luxury.</p>
                                        <div className="features">
                                            <span className="feature-tag">Luxury</span>
                                            <span className="feature-tag">Honeymoon</span>
                                        </div>
                                        <div className="card-footer">
                                            <div className="tours-count">6 Tours Available</div>
                                            <a href="#" className="explore-btn">
                                                Explore <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Destination Card */}
                        </div>
                        <div className="destinations-cta">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h3>Can't Decide Where to Go?</h3>
                                    <p>Our travel experts are here to help you find the perfect destination based on your preferences, budget, and travel style.</p>
                                    <div className="cta-buttons">
                                        <a href="destinations.html" className="btn btn-primary">View All Destinations</a>
                                        <a href="contact.html" className="btn btn-outline">Talk to Expert</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Featured Destinations Section */}
                {/* Featured Tours Section */}
                <section id="featured-tours" className="featured-tours section">
                    {/* Section Title */}
                    <div className="container section-title">
                        <h2>Featured Tours</h2>
                        <div><span>Check Our</span> <span className="description-title">Featured Tours</span></div>
                    </div>{/* End Section Title */}
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-12.webp" alt="Mountain Adventure" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge">Best Seller</span>
                                                <span className="price-tag">$3,290</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Alpine Mountain Adventure</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 7 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Switzerland</span>
                                                </div>
                                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-half" />
                                                        <small>4.7</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-15.webp" alt="Island Hopping" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge hot">Hot Deal</span>
                                                <span className="price-tag">$1,850</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Tropical Island Hopping</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 6 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Philippines</span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor magna vel risus tincidunt consequat.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <small>4.9</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-18.webp" alt="Cultural Heritage" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge cultural">Cultural</span>
                                                <span className="price-tag">$2,640</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Ancient Cultural Heritage</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 9 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Cambodia</span>
                                                </div>
                                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star" />
                                                        <small>4.5</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-22.webp" alt="Safari Experience" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge limited">Limited</span>
                                                <span className="price-tag">$4,120</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Wildlife Safari Experience</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 12 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Kenya</span>
                                                </div>
                                                <p>Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <small>4.8</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-25.webp" alt="Northern Lights" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge new">New Tour</span>
                                                <span className="price-tag">$3,750</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Northern Lights Quest</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 8 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Norway</span>
                                                </div>
                                                <p>Fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-half" />
                                                        <small>4.6</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-28.webp" alt="Desert Journey" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge adventure">Adventure</span>
                                                <span className="price-tag">$2,180</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Golden Desert Journey</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 6 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Morocco</span>
                                                </div>
                                                <p>Mauris blandit aliquet elit eget tincidunt nibh pulvinar a proin gravida hendrerit lectus a molestie.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star" />
                                                        <small>4.4</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-20.webp" alt="City Explorer" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge popular">Popular</span>
                                                <span className="price-tag">$1,560</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>European City Explorer</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 10 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Europe</span>
                                                </div>
                                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas vestibulum.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-half" />
                                                        <small>4.7</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="destination-card">
                                    <div className="destination-overlay">
                                        <img src="assets/img/travel/tour-17.webp" alt="Coastal Paradise" className="img-fluid" loading="lazy" />
                                        <div className="card-overlay">
                                            <div className="badge-container">
                                                <span className="featured-badge luxury">Luxury</span>
                                                <span className="price-tag">$5,890</span>
                                            </div>
                                            <div className="card-details">
                                                <h5>Coastal Paradise Retreat</h5>
                                                <div className="meta-info">
                                                    <span><i className="bi bi-calendar3" /> 11 Days</span>
                                                    <span><i className="bi bi-geo-alt" /> Maldives</span>
                                                </div>
                                                <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem donec rutrum congue leo eget malesuada.</p>
                                                <div className="action-row">
                                                    <a href="booking.html" className="explore-btn">Explore Tour</a>
                                                    <div className="rating-stars">
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <i className="bi bi-star-fill" />
                                                        <small>5.0</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Tour Item */}
                        </div>
                        <div className="text-center mt-5">
                            <a href="tours.html" className="discover-more-btn">Discover More Adventures</a>
                        </div>
                    </div>
                </section>{/* /Featured Tours Section */}
                {/* Testimonials Home Section */}
                <section id="testimonials-home" className="testimonials-home section">
                    {/* Section Title */}
                    <div className="container section-title">
                        <h2>Testimonials</h2>
                        <div><span>What Our Customers</span> <span className="description-title">Are Saying</span></div>
                    </div>{/* End Section Title */}
                    <div className="container">
                        <div className="swiper init-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="row gy-4 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="testimonial-content">
                                                    <p>
                                                        <i className="bi bi-quote quote-icon-left" />
                                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                                        <i className="bi bi-quote quote-icon-right" />
                                                    </p>
                                                    <h3>Saul Goodman</h3>
                                                    <h4>Ceo &amp; Founder</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                <img src="assets/img/person/person-m-9.webp" className="img-fluid testimonial-img" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="row gy-4 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="testimonial-content">
                                                    <p>
                                                        <i className="bi bi-quote quote-icon-left" />
                                                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                                        <i className="bi bi-quote quote-icon-right" />
                                                    </p>
                                                    <h3>Sara Wilsson</h3>
                                                    <h4>Designer</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                <img src="assets/img/person/person-f-5.webp" className="img-fluid testimonial-img" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="row gy-4 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="testimonial-content">
                                                    <p>
                                                        <i className="bi bi-quote quote-icon-left" />
                                                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                                        <i className="bi bi-quote quote-icon-right" />
                                                    </p>
                                                    <h3>Jena Karlis</h3>
                                                    <h4>Store Owner</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                <img src="assets/img/person/person-f-12.webp" className="img-fluid testimonial-img" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <div className="row gy-4 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="testimonial-content">
                                                    <p>
                                                        <i className="bi bi-quote quote-icon-left" />
                                                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                                        <i className="bi bi-quote quote-icon-right" />
                                                    </p>
                                                    <h3>John Larson</h3>
                                                    <h4>Entrepreneur</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 text-center">
                                                <img src="assets/img/person/person-m-12.webp" className="img-fluid testimonial-img" alt />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* /Testimonials Home Section */}
                {/* Call To Action Section */}
                <section id="call-to-action" className="call-to-action section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2>Ready to Start Your Next Adventure?</h2>
                                <p>Discover breathtaking destinations, create unforgettable memories, and explore the world with our expertly crafted travel packages. From exotic beaches to mountain peaks, your perfect journey awaits.</p>
                                <div className="cta-buttons">
                                    <a href="destinations.html" className="btn-primary">Explore Destinations</a>
                                    <a href="tours.html" className="btn-secondary">Plan Your Trip</a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item text-center">
                                    <div className="icon">
                                        <i className="bi bi-globe" />
                                    </div>
                                    <h4>50+ Destinations</h4>
                                    <p>Explore amazing destinations across all continents</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item text-center">
                                    <div className="icon">
                                        <i className="bi bi-shield-check" />
                                    </div>
                                    <h4>Safe &amp; Secure</h4>
                                    <p>Travel with confidence with our safety guarantee</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item text-center">
                                    <div className="icon">
                                        <i className="bi bi-headset" />
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p>Round-the-clock assistance whenever you need it</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item text-center">
                                    <div className="icon">
                                        <i className="bi bi-percent" />
                                    </div>
                                    <h4>Best Prices</h4>
                                    <p>Competitive rates with exclusive deals and offers</p>
                                </div>
                            </div>
                        </div>
                        <div className="stats-section">
                            <div className="row text-center">
                                <div className="col-lg-3 col-md-6">
                                    <div className="stat-item">
                                        <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={15000} data-purecounter-duration={2} />
                                        <span className="stat-label">Happy Travelers</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="stat-item">
                                        <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={127} data-purecounter-duration={2} />
                                        <span className="stat-label">Countries Covered</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="stat-item">
                                        <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={98} data-purecounter-duration={2} />
                                        <span className="stat-label">Satisfaction Rate</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="stat-item">
                                        <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={12} data-purecounter-duration={2} />
                                        <span className="stat-label">Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Call To Action Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Home