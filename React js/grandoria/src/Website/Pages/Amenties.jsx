import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Amenties() {

    const  [amenties,setamenties] = useState([])

    const fetchdata = async()=>{
        const res = await axios.get("http://localhost:3000/amenties")
        console.log(res.data);
        setamenties(res.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Amenities</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Amenities</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Amenities Section */}
                <section id="amenities" className="amenities section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {
                                amenties && amenties.map((data,index)=>{
                                    console.log(data);
                                    return(
                                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="amenity-card">
                                    <div className="amenity-image">
                                        <img src={data.image} alt="Rooftop Pool" className="img-fluid" />
                                    </div>
                                    <div className="amenity-content">
                                        <h3>{data.name}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <ul className="amenity-features">
                                            <li><i className="bi bi-clock" />{data.time}</li>
                                            <li><i className="bi bi-droplet" />{data.type}</li>
                                            <li><i className="bi bi-cup-hot" />{data.services}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                    )
                                    
                                })
                            }
                        </div>
                        <div className="row mt-5">
                            <div className="col-12" data-aos="fade-up" data-aos-delay={600}>
                                <div className="amenities-grid">
                                    <h3 className="text-center mb-4">Additional Hotel Services</h3>
                                    <div className="row g-4">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-wifi" />
                                                </div>
                                                <h4>Free Wi-Fi</h4>
                                                <p>High-speed internet throughout the property</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-car-front" />
                                                </div>
                                                <h4>Valet Parking</h4>
                                                <p>Complimentary valet service for all guests</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-airplane" />
                                                </div>
                                                <h4>Airport Shuttle</h4>
                                                <p>Scheduled transfers to major airports</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-headset" />
                                                </div>
                                                <h4>Concierge</h4>
                                                <p>24/7 assistance for reservations and tours</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-bell" />
                                                </div>
                                                <h4>Room Service</h4>
                                                <p>Gourmet dining delivered to your room</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-shield-check" />
                                                </div>
                                                <h4>Safe Deposit</h4>
                                                <p>Secure storage for your valuables</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-translate" />
                                                </div>
                                                <h4>Multilingual Staff</h4>
                                                <p>Service in English, Spanish, French, and more</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-heart-pulse" />
                                                </div>
                                                <h4>Pet Friendly</h4>
                                                <p>Welcome amenities for your furry friends</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Amenities Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Amenties