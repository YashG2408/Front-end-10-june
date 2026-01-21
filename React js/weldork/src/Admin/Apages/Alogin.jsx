import React, { useEffect, useState } from 'react'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Alogin() {

    const redirect = useNavigate ()

    useEffect(()=>{
        if(localStorage.getItem("Adminid")){
            redirect("/dash")
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
        console.log(form);
    }

    const submitdata = async(e)=>{
        e.preventDefault()
        try {
            const {email,password} = form
            if(email == "" || password == ""){
                console.log("Pls Fullfield Data..");
                toast.error('Pls Fullfield Data..')
                return false;
            }
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data);
            
            if(res.data.length === 0){
                console.log("Email Does Not Match..");
                toast.error('Email Does Not Match..');

                return false;
            }

            const admin = res.data [0]
            console.log(admin);

            if(admin.password != password){
                console.log("Password Does Not Match..");
                toast.error('Password Does Not Match..');

                return false;
            }

            localStorage.setItem("Adminid",admin.id)
            localStorage.setItem("Adminname",admin.name)
            redirect("/dash")
            console.log("Successfully Login..");
            toast.success('Successfully Login..')
            

            
            
        } catch (error) {
            console.log("Api Data Is not Show.."); 
        }
    }

    return (
        <div>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-25">
                <div className="row">
                    <div className="col-12">
                        <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    </div>
                    <div className="col-12">
                        <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' id='form2' type='password' />

                    </div>
                </div>

                <MDBBtn className="mb-4" onClick={submitdata}>Sign in</MDBBtn>


            </MDBContainer>


        </div>
    )
}

export default Alogin;