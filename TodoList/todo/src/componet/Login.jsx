import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/loginSlice";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/dashboard");
      }
    });
  };

  return (
 
    <div>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form action="" onSubmit={handleSubmit}>

      <MDBInput wrapperClass='mb-4' label='username ' id='form1' type='text' name="username"  
      placeholder="Enter username" value={formData.username} onChange={handleChange} required />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'  name="password" 
     placeholder="Enter password" value={formData.password} onChange={handleChange} required  />

      

         <button type="submit" disabled={loading} className="bg-info ps-3 pe-3 text-center   ms-auto">
           {loading ? "Logging in..." : "Login"}
        </button>       
        {error && <p style={{ color: "red" }}>{error}</p>}

     

       
        </form>

    </MDBContainer>
    </div>
  );
}