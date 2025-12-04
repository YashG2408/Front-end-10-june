import React, { useState } from 'react'

function Demoform() {

    const [Form,setForm] = useState({
        name:'',
        surname :'',
        mobile:'',
        email:''
    })


    const demo=(event)=>{
        setForm({
            ...Form,
            [event.target.name] : event.target.value
        })
        console.log(Form);
        

    }


  return (
    <div>


        <input type="text" name='name' value={Form.name} onChange={demo} placeholder='Enter name' /><br />
        <input type="text" name='surname' value={Form.surname} onChange={demo}placeholder='Enter surname '/><br />
        <input type="tel"  name='mobile' value={Form.mobile}onChange={demo} placeholder='Enter mobile'/><br />
        <input type="text" name='email' value={Form.email} onChange={demo} placeholder='Enter email'/><br />
        <input type="submit" name="" id="" />
    </div>
  )
}

export default Demoform