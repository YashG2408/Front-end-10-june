import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Ulogin() {

    const redirect = useNavigate()
    
    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }

    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        
    }

    const submitdata = async (e) => {
        e.preventDefault()  
        try {
            const { email, password } = form
            if (email == "" || password == "") {
                console.log("data full fileld");
                toast.error('data full fileld')
                return ;
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            if (res.data.length === 0) {
                console.log("email not found");
                toast.error('Email Does Not Match..!')
                return false; 
            }
            const data = res.data[0]
            if(data.password !=password){
                console.log("password Not Found");
                toast.error('Password Does Not Match..!')
                return false;
            }

             localStorage.setItem("Uid",data.id)
             localStorage.setItem("Uname",data.name)
             toast.success('Login Successfully..!')
             redirect("/")
        } catch (error) {
            console.log("Api Not Found", error);
            toast.error('Api Data Not Found..!')
        }
    }
    return (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
                <div className="row">
                    <div className="col-12">
                        <MDBInput value={form.name} onChange={getchange} name='email' wrapperClass='mb-4' label='Email address' id='email' type='email' autoComplete="email"/>
                    </div>
                    <div className="col-12">
                        <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' id='password'autoComplete="current-password" type='password' />
                    </div>
                </div>

                <MDBBtn className="mb-4" onClick={submitdata}>Sign in</MDBBtn>
            </MDBContainer>
        </div>
    )
}

export default Ulogin;