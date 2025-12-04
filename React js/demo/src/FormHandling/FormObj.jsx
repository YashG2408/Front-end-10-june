import React, { useState } from 'react'

function FormObj() {

    const [form,setform] = useState({
        name : "",
        age : ""
    })

    function data(e){
        setform({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form);
        
    }

  return (
    <div>
        <form action="">
            <input type="text" value={form.name} name="name"onChange={data} placeholder='enter your name' />
            <input type="text" value={form.age} name ="age" onChange={data} placeholder='enter your age' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default FormObj