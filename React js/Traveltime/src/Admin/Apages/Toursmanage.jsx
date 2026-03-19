import React, { useEffect, useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios';

function Toursmanage() {

    const [tours, settours] = useState([])

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/tours")
        console.log(res.data);
        settours(res.data);
    }

    // view mate

    const [single, setsingle] = useState({
        id: "",
        img: "",
        title: "",
        desc: "",
        price: ""
    })

    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/tours/${id}`)
        console.log(res.data);
        setsingle(res.data);
    }

    // delete mate 

    const deletedata = async (id)=>{
        const res = await axios.delete(`http://localhost:3000/tours/${id}`)
        console.log(res.data);  
        fetchdata()
    }


    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center mt-5'>This is CRUD Manage Data</h1>
                <table class="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">ID</th>
                            <th scope="col">IMG</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">DESC</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tours && tours.map((data, index) => {
                                console.log(data);
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.title}</td>
                                        <td>{data.desc.slice(0, 55)}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=> deletedata(data.id)}>Delete</button>
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
                                <div className="tour-item">
                                    <div className="tour-image">
                                        <img src={single.img} alt="Norwegian Fjords" className="img-fluid" />
                                        <div className="tour-availability">5 dates available</div>
                                    </div>
                                    <div className="tour-details">
                                        <h4>{single.title}</h4>
                                        <p>{single.desc}</p>
                                        <div className="tour-highlights">
                                            <span><i className="bi bi-clock" /> 8 Days</span>
                                            <span><i className="bi bi-people" /> Small Group</span>
                                            <span><i className="bi bi-star-fill" /> 4.8</span>
                                        </div>
                                        <div className="tour-pricing">
                                            <span className="price">${single.price}</span>
                                            <span className="per">per person</span>
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
            </div>
        </div>
    )
}

export default Toursmanage