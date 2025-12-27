import React, { useEffect, useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'

function AmentiesManage() {

    const [amenties, setamenties] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/amenties")
        console.log(res.data);
        setamenties(res.data)
    }

    useEffect(() => {
        fetchdata();
    }, [])

    // view

    const [data, setdata] = useState({
        id: "",
        name: "",
        desc: "",
        time: "",
        type: "",
        services: "",
        image: ""
    })

    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/amenties/${id}`)
        console.log(res.data)
        setdata(res.data)
    }

    // delete 

    const deletecard = async (id) => {
        const res = await axios.delete(`http://localhost:3000/amenties/${id}`)
        console.log(res.data);
        fetchdata()
    }

    // edit

    // upate process modal

    const [edit, setedit] = useState(null)

    const [edited, setedited] = useState({
        id: "",
        name: "",
        desc: "",
        time: "",
        type: "",
        services: "",
        image: ""
    })

    // data get and open modal

    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)
    }

    const getchange = (e) => {

        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/amenties/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                desc: "",
                time: "",
                type: "",
                services: "",
                image: ""
            })
            setedit(null)
            fetchdata()
        } catch (error) {
            console.log("Api data is not show..");

        }

    }





    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center p-5'>Amenties Manage</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Type</th>
                            <th scope="col">Services</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            amenties && amenties.map((data, index) => {
                                console.log(data);
                                return (
                                    <tr key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.image} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.time}</td>
                                        <td>{data.type}</td>
                                        <td>{data.services}</td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={()=>getdata(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deletecard(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="amenity-card">
                                        <div className="amenity-image">
                                            <img src={data.image} alt="Rooftop Pool" className="img-fluid" />
                                        </div>
                                        <div className="amenity-content">
                                            <h3>{data.name}</h3>
                                            <p>{data.desc}</p>
                                            <ul className="amenity-features">
                                                <li><i className="bi bi-clock" />{data.time}</li>
                                                <li><i className="bi bi-droplet" />{data.type}</li>
                                                <li><i className="bi bi-cup-hot" />{data.services}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    edit && (
                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-10">
                                <div className="contact-form-wrapper">
                                    <h2 className="text-center mt-4">Send a Message</h2>
                                    <form method="post" className="php-email-form mt-4">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" value={edited.name} onChange={getchange} className="form-control" name="name" placeholder="Your Name" required />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="text" value={edited.desc} onChange={getchange} className="form-control" name="desc" placeholder="Description" required />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="text" value={edited.time} onChange={getchange} className="form-control" name="time" placeholder="Description" required />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="text" value={edited.type} onChange={getchange} className="form-control" name="type" placeholder="Price" required />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="text" value={edited.services} onChange={getchange} className="form-control" name="services" placeholder="Price" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="url" value={edited.image} onChange={getchange} className="form-control" name="image" placeholder="Enter Your Image" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="loading">Loading</div>
                                                <div className="error-message" />
                                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <div className="row">
                                                    <div className=" btn btn-primary col-6" onClick={submitData}>Update Room</div>
                                                    <div className="btn btn-danger col-6" onClick={()=> setedit(null)}>Cancle room</div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AmentiesManage