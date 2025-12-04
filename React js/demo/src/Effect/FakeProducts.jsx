import React, { useEffect, useState } from 'react'
import "./style.css"

function FakeProducts() {

    const [product, setproduct] = useState([])
    useEffect(() => {
        data()
    }, [])

    function data() {
        fetch("https://fakestoreapi.com/products", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                setproduct(res)
            })
    }

    return (
        <div>
             <div className="container">
                            <div className="row gap-5">
                                 {
                product && product.map((dets, idx) => {
                    console.log(dets);

                    return (

                       
                        <div className="card mx-auto" style={{ width: '18rem', height: '550px' }}>
                                    <div className="profile">
                                        <img src={dets.image} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{dets.title.slice(0,20)}</h5>
                                        <p className="card-text">{dets.description.slice(0,50)}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default FakeProducts;