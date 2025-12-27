import React,{ useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AmentiesAdd() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        desc: "",
        time: "",
        type: "",
        services: "",
        image: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString,
            [e.target.name]: e.target.value
        })
    }
    const addamenties = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/amenties",form)
            console.log(res.data);
            setform({
                id: "",
                name: "",
                desc: "",
                time: "",
                type: "",
                services: "",
                image: ""
            })
            redirect("/amentiesmanage")

        } catch (error) {
            console.log("Api data is not show");
        }
    }

    return (
        <div>
            <Aheader />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                {/* Contact Info */}

                {/* Contact Form */}
                <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-10">
                        <div className="contact-form-wrapper">
                            <h2 className="text-center mt-4">Send a Message</h2>
                            <form onSubmit={addamenties} method="post" className="php-email-form mt-4">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={form.name} onChange={getchange} className="form-control" name="name" placeholder="Your Name" required />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.desc} onChange={getchange} className="form-control" name="desc" placeholder=" Enter Your Description" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.time} onChange={getchange} className="form-control" name="time" placeholder="Enter Your Time" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.type} onChange={getchange} className="form-control" name="type" placeholder="Enter Your Type" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.services} onChange={getchange} className="form-control" name="services" placeholder="Enter Your Services" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="url" value={form.image} onChange={getchange} className="form-control" name="image" placeholder="Enter Your Image" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">ADD Amenties</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmentiesAdd