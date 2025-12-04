import React, { useState } from 'react'

function FuncObj() {

    const [data,setdata] = useState({
        name : " Yash Gondaliya",
        count : 0,
        img : true
    })
    console.log(data);
    

  return (
    <div>
        <h1>Hello Name :{data.name}</h1>
        <button className='btn btn-primary'onClick={()=>setdata({...data, name : "Nirav Gujariya"})}>Change Name</button>
        <button className='btn btn-info'onClick={()=>setdata({...data ,name : "Riddhi Rathore"})}>Change Name 2</button>
        <button className='btn btn-secondary' onClick={()=>setdata({...data, name : "Surendra Parmar"})}>Change Name 3</button>

        <h1>Hello Count : {data.count}</h1>
        <button className='btn btn-danger' onClick={()=>setdata({...data, count : data.count + 1})}>Increment</button>
        <button className='btn btn-dark' onClick={()=>setdata({...data, count : data.count - 1})}>Decrement</button>
        <button className='btn btn-dark' onClick={()=>setdata({...data, count : 0 })}>Zero</button>
    </div>
  )
}

export default FuncObj;