import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'

function Destinations() {
    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" style={{ backgroundImage: 'url(assets/img/travel/showcase-11.webp)' }}>
                    <div className="container position-relative">
                        <h1>Destinations</h1>
                        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Destinations</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Destinations Section */}
                <section id="travel-destinations" className="travel-destinations section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2>Discover Amazing Travel Destinations</h2>
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">
                            <div className="filter-tabs">
                                <ul className="destination-filters isotope-filters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-asia">Asia</li>
                                    <li data-filter=".filter-europe">Europe</li>
                                    <li data-filter=".filter-africa">Africa</li>
                                    <li data-filter=".filter-america">Americas</li>
                                </ul>
                            </div>
                            <div className="row gy-4 isotope-container destination-grid">
                                <div className="col-lg-12 destination-item isotope-item filter-europe">
                                    <div className="destination-large">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-2.webp" alt="Paris, France" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag featured">Featured</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3>Paris, France</h3>
                                                    <p className="destination-excerpt">City of lights and romance with iconic landmarks and world-class museums</p>
                                                    <div className="destination-info">
                                                        <div className="info-item">
                                                            <i className="bi bi-geo-alt" />
                                                            <span>15 Tours</span>
                                                        </div>
                                                        <div className="price-tag">From $1,299</div>
                                                    </div>
                                                    <a href="destination-details.html" className="explore-btn">
                                                        <span>Explore Now</span>
                                                        <i className="bi bi-arrow-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-3 col-md-6 destination-item isotope-item filter-asia">
                                    <div className="destination-small">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-4.webp" alt="Bali, Indonesia" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag popular">Popular</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h4>Bali, Indonesia</h4>
                                                    <div className="destination-info">
                                                        <span className="tours-count">8 Tours</span>
                                                        <span className="price">$899</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-3 col-md-6 destination-item isotope-item filter-america">
                                    <div className="destination-small">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-6.webp" alt="Costa Rica" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag adventure">Adventure</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h4>Costa Rica</h4>
                                                    <div className="destination-info">
                                                        <span className="tours-count">6 Tours</span>
                                                        <span className="price">$1,199</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-3 col-md-6 destination-item isotope-item filter-africa">
                                    <div className="destination-small">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-8.webp" alt="Cairo, Egypt" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag culture">Culture</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h4>Cairo, Egypt</h4>
                                                    <div className="destination-info">
                                                        <span className="tours-count">7 Tours</span>
                                                        <span className="price">$1,499</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-3 col-md-6 destination-item isotope-item filter-asia">
                                    <div className="destination-small">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-9.webp" alt="Singapore" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag luxury">Luxury</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h4>Singapore</h4>
                                                    <div className="destination-info">
                                                        <span className="tours-count">12 Tours</span>
                                                        <span className="price">$1,799</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-4 col-md-6 destination-item isotope-item filter-europe">
                                    <div className="destination-medium">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-10.webp" alt="Santorini, Greece" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag romantic">Romantic</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3>Santorini, Greece</h3>
                                                    <p className="destination-excerpt">Stunning sunsets and white-washed buildings overlooking the Aegean Sea</p>
                                                    <div className="destination-info">
                                                        <div className="info-item">
                                                            <i className="bi bi-heart" />
                                                            <span>10 Tours</span>
                                                        </div>
                                                        <div className="price-tag">From $1,599</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-4 col-md-6 destination-item isotope-item filter-america">
                                    <div className="destination-medium">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-12.webp" alt="Rio de Janeiro, Brazil" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag vibrant">Vibrant</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3>Rio de Janeiro</h3>
                                                    <p className="destination-excerpt">Spectacular beaches, vibrant carnival culture, and iconic Christ statue</p>
                                                    <div className="destination-info">
                                                        <div className="info-item">
                                                            <i className="bi bi-sun" />
                                                            <span>9 Tours</span>
                                                        </div>
                                                        <div className="price-tag">From $1,799</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                                <div className="col-lg-4 col-md-6 destination-item isotope-item filter-africa">
                                    <div className="destination-medium">
                                        <div className="destination-overlay">
                                            <img src="assets/img/travel/destination-14.webp" alt="Cape Town, South Africa" className="img-fluid" loading="lazy" />
                                            <div className="overlay-content">
                                                <div className="badge-wrapper">
                                                    <span className="destination-tag scenic">Scenic</span>
                                                </div>
                                                <div className="content-wrapper">
                                                    <h3>Cape Town</h3>
                                                    <p className="destination-excerpt">Dramatic mountains, pristine beaches, and world-renowned wine regions</p>
                                                    <div className="destination-info">
                                                        <div className="info-item">
                                                            <i className="bi bi-camera" />
                                                            <span>11 Tours</span>
                                                        </div>
                                                        <div className="price-tag">From $1,699</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End Destination Item */}
                            </div>{/* End Destination Items Container */}
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6 text-center">
                                <div className="explore-more">
                                    <h4>Ready to Start Your Journey?</h4>
                                    <p className="mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                                    <a href="#" className="btn-explore">
                                        <span>View All Destinations</span>
                                        <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Destinations Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Destinations