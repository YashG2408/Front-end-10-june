import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()
    const getdata=()=>{
        redirect("/")
    }   
  return (
    <div>
        <h1 className='bg-danger p-5'>Hello This IS 404 Not found Page</h1>
        <Link to="/" className='btn btn-primary'>Back to Home</Link>
        <button onClick={getdata} className='btn btn-success'>Back to Home</button>
    </div>
  )
}

export default NotFound;