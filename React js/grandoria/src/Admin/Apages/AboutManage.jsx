import React, { useEffect, useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'

function AboutManage() {

    const [about, setabout] = useState([])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/about")
        console.log(res.data);
        setabout(res.data)
    }
    useEffect(() => {
        fetchdata()
    },[])
    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center p-5'>About Manage</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            about && about.map((data, index) => {
                                console.log(data);
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.image} style={{width:"100px"}} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AboutManage