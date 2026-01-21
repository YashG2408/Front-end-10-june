import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readdata } from '../Slice/productSlice';

function Home() {

    const { products, loading } = useSelector((data) => data.products)

    console.log(products);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(readdata())
    },[])


    return (

        <div>
            <h1 className='text-center mt-5'>Hello This Users Data</h1>
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">IMG</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((data,index)=>{
                                console.log(data);
                                return(
                                    <tr className='text-center'>
                            <th scope="row">{data.id}</th>
                            <td>
                                <img src={data.img} style={{width : "100px"}} alt="" />
                            </td>
                            <td>{data.name}</td>
                            <td>${data.price}</td>
                            <td>{data.type}</td>
                            <td>
                                <button className='btn btn-primary'>View</button>
                                <button className='btn btn-success mx-2'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home