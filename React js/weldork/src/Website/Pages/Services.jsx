import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import axios from 'axios'

function Services() {

    const [get, setget] = useState([])

    useEffect(() => {
        fetchdata()
    })

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        console.log(res.data);
        setget(res.data)
    }


    return (
        <div>
            <Header />
            <div className="container-fluid service pt-6 pb-6">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <h1 className="display-6 text-uppercase mb-5">Reliable &amp; High-Quality Welding Services</h1>
                    </div>
                    <div className="row g-4">
                        {
                            get && get.map((data, index) => {
                                console.log(data);
                                return (
                                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item">
                                            <div className="service-inner pb-5">
                                                <img className="img-fluid w-100" src={data.img} alt />
                                                <div className="service-text px-5 pt-4">
                                                    <h5 className="text-uppercase">{data.name}</h5>
                                                    <p>{data.desc}
                                                    </p>
                                                </div>
                                                <a className="btn btn-light px-3" href>Read More<i className="bi bi-chevron-double-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Services