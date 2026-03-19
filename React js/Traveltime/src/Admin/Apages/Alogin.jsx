import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';

function Alogin() {

  const redirect = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("Aid")) {
      redirect("/dash")
    }
  }, [])

  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const getChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  const subniteddata = async (e) => {
    e.preventDefault()

    try {

      const { email, password } = form

      if (email == "" || password == "") {
        console.log("pls require data..")
         toast.error('Please enter email and password');
        return;
      }

      const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
      console.log(res.data)

      if (res.data.length === 0) {
        console.log("Email does not match..!")
        toast.error('Email does not match..!')
        return false;
      }

      const admin = res.data[0]
      console.log(admin)

      if (admin.password != password) {
        console.log("Password does not match..!")
        toast.error('Password does not match..!')
        return false
      }

      localStorage.setItem("Aid", admin.id)
      localStorage.setItem("Aname", admin.name)
      console.log("succefully login..")
      toast.success('Successfully login.')
      redirect("/dash")

    } catch (error) {
      console.log("Api data not Found,..", error)
    }
  }

  return (
    <div>
     <MDBContainer
  fluid
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  }}
>
  {/* Dark overlay */}
  <div style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    top: 0,
    left: 0
  }}></div>

  <MDBRow className="w-100 justify-content-center" style={{ zIndex: 2 }}>
    <MDBCol md="6" lg="4">

      <form onSubmit={subniteddata}>
        <MDBCard
          className="login-card"
          style={{
            borderRadius: "20px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
            color: "#fff",
            transition: "0.4s"
          }}
        >
          <MDBCardBody className="p-5 d-flex flex-column">

            <h2 className="fw-bold text-center mb-3 title-anim">
              Admin Login
            </h2>

            <p className="text-center mb-4 subtitle-anim">
              Welcome back! Please login to your account
            </p>

            <div className="input-anim">
              <MDBInput
                value={form.email}
                onChange={getChange}
                name="email"
                wrapperClass="mb-4"
                label='Email address'
                type="email"
                size="lg"
                contrast
              />
            </div>

            <div className="input-anim">
              <MDBInput
                value={form.password}
                onChange={getChange}
                name="password"
                wrapperClass="mb-3"
                label='Password'
                type="password"
                size="lg"
                contrast
              />
            </div>

            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              className="mb-4"
              label="Remember me"
            />

            <MDBBtn size="lg" type="submit" className="login-btn">
              Login
            </MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </form>

    </MDBCol>
  </MDBRow>

  {/* CSS */}
  <style>
    {`
    .login-card:hover {
      transform: translateY(-10px) scale(1.02);
    }

    .login-btn {
      background: linear-gradient(45deg, #ff6a00, #ee0979);
      border: none;
      border-radius: 10px;
      transition: 0.3s;
    }

    .login-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    }

    .title-anim {
      animation: fadeDown 0.8s ease;
    }

    .subtitle-anim {
      animation: fadeUp 1s ease;
      color: #ddd;
    }

    .input-anim {
      animation: fadeUp 1.2s ease;
    }

    @keyframes fadeDown {
      from {opacity:0; transform:translateY(-20px);}
      to {opacity:1; transform:translateY(0);}
    }

    @keyframes fadeUp {
      from {opacity:0; transform:translateY(20px);}
      to {opacity:1; transform:translateY(0);}
    }
    `}
  </style>
</MDBContainer>
    </div>
  )
}

export default Alogin