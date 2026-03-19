import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Aheader() {

     const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid");
        localStorage.removeItem("Aname");
        console.log("logout Successfully");
        toast.success('logout Succesfully')
        redirect("/alogin");
    }
    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container position-relative d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.webp" alt=""> */}
                        <h1 className="sitename" style={{color: "black"}}>TravelTime</h1>
                    </a>
                    <nav id="navmenu" className="navmenu" >
                        <ul >
                            <li><NavLink to="/" className="active">Home</NavLink></li>
                            <li><NavLink to="/about" style={{color : "black"}}>About</NavLink></li>
                            <li><NavLink to="/dest" style={{color : "black"}}>Destinations</NavLink></li>
                            {/* <li><NavLink to="/tours" style={{color : "black"}}>Tours</NavLink></li> */}
                            <li className="dropdown"><a href="#" style={{color : "black"}}><span>Tours</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                <ul>
                                    <li><NavLink to="/tadd">Tours Add</NavLink></li>
                                    <li><NavLink to="/tmanage">Tours Manage</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to="/gallery" style={{color : "black"}}>Gallery</NavLink></li>
                            <li><NavLink to="/blog" style={{color : "black"}}>Blog</NavLink></li>
                            <li className="dropdown"><a href="#" style={{color : "black"}}><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                                <ul>
                                    <li><NavLink to="/destd">Destination Details</NavLink></li>
                                    <li><NavLink to="/toursd">Tour Details</NavLink></li>
                                    <li><NavLink to="/booking">Booking</NavLink></li>
                                    <li><NavLink to="/test">Testimonials</NavLink></li>
                                    <li><NavLink to="/faq">Frequently Asked Questions</NavLink></li>
                                    <li><NavLink to="/blogd">Blog Details</NavLink></li>
                                    <li><NavLink to="/terms">Terms</NavLink></li>
                                    <li><NavLink to="/privacy">Privacy</NavLink></li>
                                    <li><NavLink to="*">404</NavLink></li>
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
                            <li><NavLink to="/contact" style={{color : "black"}}>Contact</NavLink></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    <a className="btn-getstarted" href="index.html#about">Get Started</a>

                      {(()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <li><Link>hello {localStorage.getItem("Aname")}</Link></li>
                                            )
                                        }
                                    })()}  

                                    {(()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <li><Link onClick={logout}>logout</Link></li>
                                            )
                                        }
                                        else{
                                            return(
                                                 <li><Link to="/alogin">Alogin</Link></li>
                                            )
                                        }
                                    })()}  
                </div>
            </header>
        </div>
    )
}

export default Aheader;