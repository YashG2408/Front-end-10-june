import React, { useState } from 'react'

function Form() {

const [form,setform] = useState({
    name : '',
    surname : '',
    mobile:'',
    email : ''
})

const data= (e) =>{
       setform({
        ...form,
        [e.target.name] : e.target.value

    })
    console.log(form);
    
}




  return (
    <div>
        <input type="text" name="name" id="" value={form.name} onChange={data}  placeholder='Enter name' /><br />
        <input type="text" name="surname" id="" value={form.surname} onChange={data}  placeholder='Enter surname '/><br />
        <input type="tel" name="mobile" id="" value={form.mobile}onChange={data}  placeholder='Enter mobile'/><br />
        <input type="text" name="email" id="" value={form.email} onChange={data}  placeholder='Enter email'/><br />
        <input type="submit" name="" id="" />

    </div>
  )
}

export default Form