import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import axios from 'axios'

function Tours() {

    const [tours, settours] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/tours")
        console.log(res.data);
        settours(res.data)
    }
    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <div className="page-title dark-background" style={{ backgroundImage: 'url(assets/img/travel/showcase-11.webp)' }}>
                    <div className="container position-relative">
                        <h1>Tours</h1>
                        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Tours</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Travel Tours Section */}
                <section id="travel-tours" className="travel-tours section">
                    <div className="container">
                        {/* Hero Introduction */}
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center mb-5">
                                <h2 className="hero-title">Discover Your Next Adventure</h2>
                                <p className="hero-description">Curated travel experiences that transform journeys into unforgettable stories. Filter by your preferences and find the perfect escape.</p>
                            </div>
                        </div>
                        {/* Search & Filters */}
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-10">
                                <div className="search-container">
                                    <div className="search-bar">
                                        <input type="text" className="form-control" placeholder="Where would you like to go?" />
                                        <button className="search-btn">
                                            <i className="bi bi-search" />
                                        </button>
                                    </div>
                                    <div className="filter-pills">
                                        <button className="filter-pill active" data-filter="all">All Tours</button>
                                        <button className="filter-pill" data-filter="adventure">Adventure</button>
                                        <button className="filter-pill" data-filter="luxury">Luxury</button>
                                        <button className="filter-pill" data-filter="cultural">Cultural</button>
                                        <button className="filter-pill" data-filter="family">Family</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Featured Hero Tour */}
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="featured-hero-tour">
                                    <div className="featured-image">
                                        <img src="assets/img/travel/showcase-8.webp" alt="Featured Destination" className="img-fluid" />
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-badge">Editor's Choice</div>
                                        <h3>Mystical Bhutan Journey</h3>
                                        <p>Discover the last Shangri-La with pristine monasteries, dramatic mountain vistas, and ancient traditions preserved in time.</p>
                                        <div className="featured-meta">
                                            <span className="duration">12 Days</span>
                                            <span className="group-size">Max 8 People</span>
                                            <span className="rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                4.9
                                            </span>
                                        </div>
                                        <div className="featured-price">
                                            <span className="from">From</span>
                                            <span className="amount">$2,499</span>
                                        </div>
                                        <div className="featured-actions">
                                            <a href="#" className="btn btn-primary">Explore This Journey</a>
                                            <a href="#" className="btn btn-text">View Itinerary</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Quick Categories */}
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="section-subtitle">Explore by Interest</h3>
                                <div className="categories-grid">
                                    <div className="category-item">
                                        <div className="category-visual">
                                            <img src="assets/img/travel/misc-3.webp" alt="Mountain Adventures" className="img-fluid" />
                                        </div>
                                        <h5>Mountain Adventures</h5>
                                        <span className="tour-count">24 tours</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="category-visual">
                                            <img src="assets/img/travel/misc-7.webp" alt="Cultural Heritage" className="img-fluid" />
                                        </div>
                                        <h5>Cultural Heritage</h5>
                                        <span className="tour-count">18 tours</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="category-visual">
                                            <img src="assets/img/travel/misc-11.webp" alt="Coastal Escapes" className="img-fluid" />
                                        </div>
                                        <h5>Coastal Escapes</h5>
                                        <span className="tour-count">32 tours</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="category-visual">
                                            <img src="assets/img/travel/misc-15.webp" alt="Wildlife Safari" className="img-fluid" />
                                        </div>
                                        <h5>Wildlife Safari</h5>
                                        <span className="tour-count">16 tours</span>
                                    </div>
                                    <div className="category-item">
                                        <div className="category-visual">
                                            <img src="assets/img/travel/misc-2.webp" alt="Urban Explorer" className="img-fluid" />
                                        </div>
                                        <h5>Urban Explorer</h5>
                                        <span className="tour-count">28 tours</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tours Grid */}
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="tours-header">
                                    <h3 className="section-subtitle">All Journeys</h3>
                                    <div className="view-toggle">
                                        <button className="toggle-btn active" data-view="grid">
                                            <i className="bi bi-grid-3x3-gap" />
                                        </button>
                                        <button className="toggle-btn" data-view="list">
                                            <i className="bi bi-list" />
                                        </button>
                                    </div>
                                </div>
                                <div className="tours-grid">
                                    {
                                        tours && tours.map((data, index) => {
                                            return (
                                                <div className="tour-item">
                                                    <div className="tour-image">
                                                        <img src={data.img} alt="Norwegian Fjords" className="img-fluid" />
                                                        <div className="tour-availability">5 dates available</div>
                                                    </div>
                                                    <div className="tour-details">
                                                        <h4>{data.title}</h4>
                                                        <p>{data.desc}</p>
                                                        <div className="tour-highlights">
                                                            <span><i className="bi bi-clock" /> 8 Days</span>
                                                            <span><i className="bi bi-people" /> Small Group</span>
                                                            <span><i className="bi bi-star-fill" /> 4.8</span>
                                                        </div>
                                                        <div className="tour-pricing">
                                                            <span className="price">${data.price}</span>
                                                            <span className="per">per person</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="tour-item">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-4.webp" alt="Moroccan Odyssey" className="img-fluid" />
                                            <div className="tour-availability">Limited spots</div>
                                        </div>
                                        <div className="tour-details">
                                            <h4>Moroccan Odyssey</h4>
                                            <p>Journey through ancient medinas, vast deserts, and vibrant markets in this sensory-rich adventure.</p>
                                            <div className="tour-highlights">
                                                <span><i className="bi bi-clock" /> 10 Days</span>
                                                <span><i className="bi bi-people" /> Private Option</span>
                                                <span><i className="bi bi-star-fill" /> 4.7</span>
                                            </div>
                                            <div className="tour-pricing">
                                                <span className="price">$1,299</span>
                                                <span className="per">per person</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-item">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-21.webp" alt="Patagonia Wilderness" className="img-fluid" />
                                            <div className="tour-availability">Next: Mar 15</div>
                                        </div>
                                        <div className="tour-details">
                                            <h4>Patagonia Wilderness</h4>
                                            <p>Trek through pristine landscapes where glaciers meet granite peaks in Earth's most remote wilderness.</p>
                                            <div className="tour-highlights">
                                                <span><i className="bi bi-clock" /> 14 Days</span>
                                                <span><i className="bi bi-people" /> Adventure Level</span>
                                                <span><i className="bi bi-star-fill" /> 4.9</span>
                                            </div>
                                            <div className="tour-pricing">
                                                <span className="price">$2,799</span>
                                                <span className="per">per person</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-item">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-9.webp" alt="Japanese Gardens" className="img-fluid" />
                                            <div className="tour-availability">Cherry blossom season</div>
                                        </div>
                                        <div className="tour-details">
                                            <h4>Japanese Gardens &amp; Temples</h4>
                                            <p>Experience the harmony of ancient traditions and modern elegance in Japan's most sacred spaces.</p>
                                            <div className="tour-highlights">
                                                <span><i className="bi bi-clock" /> 11 Days</span>
                                                <span><i className="bi bi-people" /> Cultural Focus</span>
                                                <span><i className="bi bi-star-fill" /> 4.8</span>
                                            </div>
                                            <div className="tour-pricing">
                                                <span className="price">$2,199</span>
                                                <span className="per">per person</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-item">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-16.webp" alt="Scottish Highlands" className="img-fluid" />
                                            <div className="tour-availability">Year-round</div>
                                        </div>
                                        <div className="tour-details">
                                            <h4>Scottish Highlands &amp; Castles</h4>
                                            <p>Discover mist-shrouded lochs, ancient castles, and Highland culture in Scotland's most dramatic region.</p>
                                            <div className="tour-highlights">
                                                <span><i className="bi bi-clock" /> 7 Days</span>
                                                <span><i className="bi bi-people" /> History &amp; Nature</span>
                                                <span><i className="bi bi-star-fill" /> 4.6</span>
                                            </div>
                                            <div className="tour-pricing">
                                                <span className="price">$1,599</span>
                                                <span className="per">per person</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-item">
                                        <div className="tour-image">
                                            <img src="assets/img/travel/tour-28.webp" alt="Costa Rica Wildlife" className="img-fluid" />
                                            <div className="tour-availability">Eco-certified</div>
                                        </div>
                                        <div className="tour-details">
                                            <h4>Costa Rica Wildlife Immersion</h4>
                                            <p>Encounter diverse ecosystems from cloud forests to tropical beaches in this biodiversity hotspot.</p>
                                            <div className="tour-highlights">
                                                <span><i className="bi bi-clock" /> 9 Days</span>
                                                <span><i className="bi bi-people" /> Eco-Tourism</span>
                                                <span><i className="bi bi-star-fill" /> 4.7</span>
                                            </div>
                                            <div className="tour-pricing">
                                                <span className="price">$1,499</span>
                                                <span className="per">per person</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* Exclusive Offers */}
                        <div className="row mb-5">
                            <div className="col-12">
                                <h3 className="section-subtitle">Limited-Time Offers</h3>
                                <div className="offers-container">
                                    <div className="offer-card">
                                        <div className="offer-image">
                                            <img src="assets/img/travel/showcase-12.webp" alt="Early Bird Special" className="img-fluid" />
                                        </div>
                                        <div className="offer-content">
                                            <div className="offer-tag">Early Bird</div>
                                            <h4>Save 25% on Summer Departures</h4>
                                            <p>Book your 2024 European adventure before March 31st and enjoy significant savings on our most popular routes.</p>
                                            <div className="offer-validity">Valid until March 31, 2024</div>
                                            <a href="#" className="btn btn-accent">Claim Offer</a>
                                        </div>
                                    </div>
                                    <div className="offer-card">
                                        <div className="offer-image">
                                            <img src="assets/img/travel/showcase-6.webp" alt="Last Minute Deal" className="img-fluid" />
                                        </div>
                                        <div className="offer-content">
                                            <div className="offer-tag">Last Minute</div>
                                            <h4>African Safari - 30% Off</h4>
                                            <p>Join our next departure to Tanzania and Kenya with luxury accommodations and expert guides.</p>
                                            <div className="offer-validity">Departure: February 20th</div>
                                            <a href="#" className="btn btn-accent">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Expert Consultation CTA */}
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="consultation-cta">
                                    <h3>Can't Find What You're Looking For?</h3>
                                    <p>Our travel designers craft bespoke journeys tailored to your unique preferences, schedule, and dreams.</p>
                                    <div className="cta-actions">
                                        <a href="#" className="btn btn-primary">Speak with an Expert</a>
                                        <a href="#" className="btn btn-text">Browse Custom Tours</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Travel Tours Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Tours