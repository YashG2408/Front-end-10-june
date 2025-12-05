import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./style.css"

function RecipesAxios() {

    const [user,setuser] = useState ([])

    useEffect(() => {
        data()
    }, [])

    const data = async () => {
        const res = await axios.get("https://dummyjson.com/recipes")
        console.log(res.data);
        setuser(res.data.recipes)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data,ind)=>{
                            console.log(data);
                                return(
                                    <div className="col-md-4">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={data.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.tags}</p>
                                <h5 className="card-title">{data.mealType}</h5>
                                <button className='btn btn-danger'>Order Now</button>
                                <button className='btn btn-dark mx-3'>Book Now</button>

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

export default RecipesAxios