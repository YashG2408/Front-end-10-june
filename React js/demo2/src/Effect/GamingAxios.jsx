import axios from 'axios'
import React, { useEffect } from 'react'

function GamingAxios() {

    useEffect(()=>{
        data()
    },[])

    const data = async()=>{
        const res = await axios.get("https://www.freetogame.com/gaming")
        console.log(res.data);
        
    }
  return (
    <div>
        
    </div>
  )
}

export default GamingAxios