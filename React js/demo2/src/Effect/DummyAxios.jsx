import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DummyAxios() {

    const [form, setform] = useState([])

    useEffect(() => {
        dummydata()
    }, [])

    const dummydata = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data);
        setform(res.data.carts)
    }
    return (
        <div>
            <div className="container">
                <div className="row mx-auto">
                    {
                        form && form.map((data, index) => {
                            console.log(data);
                            return (
                                <div className="col-md-4"  key={index}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data.products[0].thumbnail} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.products[0].title}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
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

export default DummyAxios