import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createdata } from '../Slice/productSlice'
import { redirect, useNavigate } from 'react-router-dom'

function NewData() {

    const redirect = useNavigate()

    const dispatch = useDispatch()

    const [form, setform] = useState({
        id: "",
        name: "",
        price: "",
        type: "",
        img: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const submitdata = (e) => {
        e.preventDefault()
        dispatch(createdata(form))
        setform({
            id: "",
            name: "",
            price: "",
            type: "",
            img: ""
        })
        redirect("/")


    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={submitdata}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" name='name' value={form.name} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                <input type="tel" name='price' value={form.price} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                                <input type="text" name='type' value={form.type} onChange={getchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                                <input type="url" name='img' value={form.img} onChange={getchange} className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewData