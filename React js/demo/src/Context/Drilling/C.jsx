import React from 'react'
import D from './D'

function C({name,setname}) {
  return (
    <div>
        <h1>This Is C Component</h1>
        <h1>C : {name}</h1>
        <button onClick={()=>setname("Riddhi")}>Change Name</button>

        <D name={name} setname={setname}/>
    </div>
  )
}

export default C