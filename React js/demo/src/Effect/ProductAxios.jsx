import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductAxios() {

    const [user, setuser] = useState([]);

    useEffect(() => {
        fetchcart()
    }, [])

    const fetchcart = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts);
        setuser(res.data.carts)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data,idx)=>{
                            console.log(data);
                            return(
                                data && data.products.map((dets,idx)=>{
                                    return(
                                        <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={dets.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{dets.title}</h5>
                                <p className="card-text"> &#8377;{dets.price}</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>

                    </div>
                                    )
                                })
                            )
                           
                            
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductAxios