import React,{ useState} from "react";
// import Images from '.Images'

function FunState(){

    const [name, setname] = useState("Shubham Jadav")
    const [count, setcount] = useState(0)
    const [isImage, setisImage] = useState(true)



    
    return(
        <div>
            <h1>Hello name : {name}</h1>
            <button onClick={()=> setname("Yash Gondaliya")}>Change Name</button>
            <button onClick={()=> setname("Riddhi rathore")}>Change Name 2</button>

            <h1>Hello Count : {count} </h1>

            <button onClick={()=> setcount(count + 1)}>increment</button>
            <button onClick={()=> setcount(count - 1)}>Decrement</button>
            <button onClick={()=> setcount(0)}>Zero</button>



        </div>
    )
}
export default FunState;

