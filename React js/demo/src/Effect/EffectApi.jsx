import React, { useEffect, useState } from 'react'

function EffectApi() {

    const [api, setapi] = useState([])

    useEffect(() => {
        data();
    }, [])

    function data() {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setapi(data)
            })
    }
    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CITY</th>
                        <th scope="col">COMPANY NAME</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        api && api.map((dets, index) => {
                            console.log(dets);
                            
                            return(
                                <tr key={index}>
                                    <th scope="row">{dets.id}</th>
                                    <td>{dets.name}</td>
                                    <td>{dets.email}</td>
                                    <td>{dets.company.name}</td>
                                    <td>{dets.address.city}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default EffectApi