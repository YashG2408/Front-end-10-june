import React, { useContext } from 'react'
import { Data } from './ChildA';

function ChildC() {
    const {name,setname} = useContext(Data)
  return (
    <div>
        <h1 className='bg-dark'>Hello This Is Child C Component</h1>
        <h1>Child C :{name}</h1>
        <button onClick={()=>setname("Parth")}>Chnage Name</button>
    </div>
  )
}

export default ChildC;