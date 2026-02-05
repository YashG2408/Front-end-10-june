import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductAxios() {

    const [user, setuser] = useState([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data);
        setuser(res.data.products)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data,index)=>{
                            console.log(data);
                            return(
                                <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-primary mx-3'>Show More</button>
                                <button className='btn btn-dark'>Buy Now</button>

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

export default ProductAxios