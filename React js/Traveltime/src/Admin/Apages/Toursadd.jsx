import React, { useState } from 'react'
import Aheader from '../Acomman/Aheader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Toursadd() {

  const navigate = useNavigate()

  const [form, setform] = useState({
    id: "",
    name: "",
    title: "",
    desc: "",
    price: ""
  })

  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]:e.target.value
    })
    console.log(form);
  }


  const addroom = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/tours",form)
      console.log(res.data);
      setform({
        id: "",
        name: "",
        title: "",
        desc: "",
        price: ""
      })
      navigate("/tmanage")
      
    } catch (error) {
      console.log("Api Data is Not Show..");
    }
  }

  return (
    <div>
      <Aheader />
      {/* <div className="container mt-5">
        <h1 className='text-center p-5'>This is ToursAdd Data</h1>
      </div> */}
 <div className="container mt-5">
  <div className="card p-4 shadow" style={{marginTop : "150px"}}>
    <h3 className="text-center mb-4">Add Tours Data</h3>
    <form method='post' onSubmit={addroom} className="php-email-form">
      {/* Title */}
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" name='title' value={form.title} onChange={getchange} className="form-control" placeholder="Enter title" />
      </div>
      {/* Image URL */}
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="url" value={form.img} onChange={getchange} className="form-control" placeholder="Enter image URL" />
      </div>
      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input type="text" name='desc' value={form.desc} onChange={getchange} className="form-control" placeholder="Enter price" />
      </div>
      {/* Price */}
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="tel" name='price' value={form.price} onChange={getchange} className="form-control" placeholder="Enter price" />
      </div>
      {/* Button */}
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Toursadd