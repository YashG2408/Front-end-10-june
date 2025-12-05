import React, { useState } from 'react'
import B from './B'

function A() {
    const [name,setname] = useState("Yash Gondaliya")

  return (
    <div>
        <h1>This Is A Component</h1>
        <h1>A : {name}</h1>

        <B name={name} setname={setname}/>

    </div>
  )
}

export default A