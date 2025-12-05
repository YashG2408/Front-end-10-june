import React, { useContext } from 'react'
import { Data } from './ChildA';

function ChildB() {

    const {name,setname} = useContext(Data)
  return (
    <div>
        <h1>Hello This Is Child B Component</h1>
        <h1>Child B :{name}</h1>
        <button onClick={()=>setname({...name,name:"pc"})}>Chnage Name</button>
        
    </div>
  )
}

export default ChildB;