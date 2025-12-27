import React, { useState } from 'react'
import Aheader from '../Acomman/Aheader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function RoomAdd() {

    const redirect = useNavigate()

    const [form,setform] = useState({
        id: "",
        name: "",
        desc: "",
        ges: "",
        price : "",
        img: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString,
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const addroom = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/rooms", form)
            console.log(res.data);
            setform({
                id: "",
                name: "",
                desc: "",
                ges: "",
                price: "",
                img:""
            })
            redirect("/roommanage")
        } catch (error) {
            console.log("Api data not Show", error)
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
                            <form onSubmit={addroom} method="post" className="php-email-form mt-4">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" value={form.name} onChange={getchange} className="form-control" name="name" placeholder="Your Name" required />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.desc} onChange={getchange} className="form-control" name="desc" placeholder="Description" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <select className="form-select" value={form.ges} onChange={getchange} id="" name="ges" required>
                                                <option value hidden>Choose guests</option>
                                                <option value={1}>1 guests</option>
                                                <option value={2}>2 guests</option>
                                                <option value={3}>3 guests</option>
                                                <option value={4}>4 guests</option>
                                                <option value={5}>5 guests</option>
                                                <option value={6}>6 guests</option>
                                                <option value={7}>7 guests</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" value={form.price} onChange={getchange} className="form-control" name="price" placeholder="Price" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="url" value={form.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Image" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary">ADD ROOMS</button>
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

export default RoomAdd