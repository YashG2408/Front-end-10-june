import React, { useEffect, useState } from 'react'

function Effect() {

        const [effect,seteffect] = useState("Hello")
    

    // useEffect(()=>{
    //     console.log("without data");
    //     return(()=>{
    //         console.log("With Return Data");
    //     })
    // });

    //   useEffect(()=>{
    //     console.log("without data");
    //     return(()=>{
    //         console.log("With Return Data");
    //     })
    // },[]);
     useEffect(()=>{
        console.log("without data");
        return(()=>{
            console.log("With Return Data");
        })
    },[effect]);
  return (
    <div>

        <h1>{effect}</h1>
        <button onClick={()=>seteffect("YAsh")}>Change</button>
        
    </div>
  )
}

export default Effect