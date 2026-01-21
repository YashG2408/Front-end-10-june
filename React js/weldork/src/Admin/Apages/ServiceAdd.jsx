import React, { useState } from 'react'
import Aheader from '../Acomman/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServiceAdd() { 

  const redirect = useNavigate()

  const [form, setform] = useState({
    id: "",
    name: "",
    desc: "",
    img: ""
  })

  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
  }

  const submitdata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/services", form)
      console.log(res.data);
      setform({
        id: "",
        name: "",
        desc: "",
        img: ""
      })
      redirect("/smanage")


    } catch (error) {
      console.log("Api data is not show..", error);

    }
  }
  return (
    <div>
      <Aheader />
      <form action="" onSubmit={submitdata}>
        <div className="col-lg-6 mb-n5 wow fadeIn mx-auto" data-wow-delay="0.7s">
          <div className="bg-white p-5">
            <h2 className="text-uppercase mb-4">Contact Us</h2>
            <div className="row g-3">
              <div className="col-sm-12">
                <div className="form-floating">
                  <input value={form.name} onChange={getchange} type="text" className="form-control border-0 bg-light" name="name" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-floating">
                  <input value={form.desc} onChange={getchange} type="text" className="form-control border-0 bg-light" name="desc" id="subject" placeholder="Description" />
                  <label htmlFor="subject">Description</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input value={form.img} onChange={getchange} type="url" className="form-control border-0 bg-light" name="img" id="img" placeholder="Enter img" />
                  <label htmlFor="message">Enter Your img</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ServiceAdd