import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.css"

function ProductsAxios() {

    const [user,setuser] = useState([])

    useEffect(() => {
        productdata()
    }, [])

    const productdata = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products);
        setuser(res.data.products)

    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    {
                        user && user.map((yash)=>{
                            console.log(yash);
                            return(
                                <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={yash.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{yash.title.slice(0,20)}</h5>
                                <p className="card-text">{yash.description.slice(0,50)}</p>
                                <button className='btn btn-dark'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                            ) 
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductsAxios