import React, { useState } from 'react'

function FunState() {
    const [name,setname] = useState({
        name : "Yash Gondaliya",
        age : 21,
        address : "Ahemedabad"
    }
)
        
  return (
    <div>
        <h1>Name : {name.name}</h1>
        <button className='btn btn-success' onClick={()=>setname({...name,name:'surendra'})}>change name</button>
        <h1>age : {name.age}</h1>
        <button className='btn btn-primary' onClick={()=>setname({...name,age:23})}>Change age</button>
        <h1>address : {name.address}</h1>
        <button className='btn btn-warning' onClick={()=>setname({...name,address:'gandhianagr'})}>Change Address</button>
    </div>
  )
}

export default FunState