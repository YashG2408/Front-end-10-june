import React, { useState } from 'react'
import Image from './Image'

function FunState() {

    const [car,setcar] = useState("Harrier")
    const [count,setcount] = useState(0)
    const [img,setimg] = useState(true)

  return (
    <div>
        <h1>Car Name : {car}</h1>
        <button className='btn btn-danger' onClick={()=>setcar("Sierra")}>Change Name</button>

        <h1>Count : {count}</h1>
        <button className='btn btn-info' onClick={()=>setcount(count + 1)}>Increment</button>
        <button className='btn btn-info' onClick={()=>setcount(count - 1)}>Decrement</button>
        <button className='btn btn-info' onClick={()=>setcount(0)}>Zero</button>

        <br></br>

        <button onClick={()=>setimg(false)}>Hide</button>
        <button onClick={()=>setimg(true)}>Show</button>
        <button onClick={()=>setimg(!img)}>Toggle</button>
        {
            (img)?<Image/>: false
        }

        
    </div>
  )
}

export default FunState;