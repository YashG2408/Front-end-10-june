import React, { useState } from 'react'

function FormData() {

    const [name,setname] = useState("")
    const [age,setage] = useState("")

        console.log('name :',name);
        console.log('age :', age);
        
        
    return (
        <div>
            <form action="">
                <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your name' /><br />
                <input type="text" value={age} onChange={(e)=>setage(e.target.value)} placeholder='Enter Your age' /><br />
                <input type="submit" />
            </form>

        </div>
    )
}

export default FormData;