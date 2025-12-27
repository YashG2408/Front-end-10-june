import React, { useEffect, useState } from 'react'
import Aheader from '../Acomman/Aheader';
import axios, { Axios } from 'axios';

function RoomManage() {

    const [rooms, setrooms] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/rooms")
        // console.log(res.data);
        setrooms(res.data);
    }
    useEffect(() => {
        fetchdata()
    }, [])

    //Single Api Get

    const [Single, setSingle] = useState({
        id: "",
        name: "",
        desc: "",
        ges: "",
        price: "",
        img: ""
    })

    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/rooms/${id}`)
        console.log(res.data);
        setSingle(res.data)
    }
    // deletecard

    const deletecard = async (id) => {
        const res = await axios.delete(`http://localhost:3000/rooms/${id}`)
        console.log(res.data);
        fetchdata()
    }

    // update process modal 

    const [edit, setedit] = useState(null)

    // Data Show
    const [edited, setedited] = useState({
        id: "",
        name: "",
        desc: "",
        ges: "",
        price: "",
        img: ""
    })

    // data get and open modal

    const getdata = (data) => {
        console.log(data);
        setedit(data);
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
            const res = await axios.put(`http://localhost:3000/rooms/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                desc: "",
                ges: "",
                price: "",
                img: ""
            })
            setedit(null)
            fetchdata()

        } catch (error) {
            console.log("Api data is not Show", error);

        }
    }
    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center mt-5'>Room Manage</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Guest</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms && rooms.map((data, index) => {
                                console.log(data);
                                return (

                                    <tr key={index} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.desc}</td>
                                        <td>{data.ges}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success' onClick={() => getdata(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deletecard(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12">
                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={Single.img} alt="Deluxe Ocean Suite" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean">{Single.type}</span>

                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header">
                                                <h3 className='mt-3'>{Single.name}</h3>
                                                <div className="room-rating">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <p className="room-description">{Single.desc}</p>
                                            <div className="room-amenities">
                                                <span><i className="bi bi-people" /> Up to {Single.ges} guests</span>
                                                <span><i className="bi bi-wifi" /> Free WiFi</span>
                                                <span><i className="bi bi-tv" /> Smart TV</span>
                                            </div>
                                            <div className="room-footer">
                                                <div className="room-price">
                                                    <span className="price-from">From</span>
                                                    <span className="price-amount">{Single.price}</span>
                                                    <span className="price-period">/ night</span>
                                                </div>
                                                <a href="room-details.html" className="btn-room-details">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
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
                                                    <select value={edited.ges} onChange={getchange} className="form-select" id="" name="ges" required>
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
                                                    <input type="text" value={edited.price} onChange={getchange} className="form-control" name="price" placeholder="Price" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="url" value={edited.img} onChange={getchange} className="form-control" name="img" placeholder="Enter Your Image" required />
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

export default RoomManage;