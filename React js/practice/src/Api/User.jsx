import React, { useEffect, useState } from 'react'

function User() {

    const [user,setuser] = useState([]);
    useEffect(()=>{
        data();
    },[]);

    function data(){
        fetch("https://dummyjson.com/users",{
            method: "GET"
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            console.log(res);
            setuser()
        })
    }

  return (
    <div>
        
    </div>
  )
}

export default User