import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Fakeapi() {

    const [prod,setprod] = useState ([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async() =>{
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data);
        setprod(res.data)
        
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    prod && prod.map((data,index)=>{
                        console.log(data);
                        
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default Fakeapi