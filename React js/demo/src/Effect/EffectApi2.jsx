import React, { useEffect, useState } from 'react'

function EffectApi2() {

    const [api, setapi] = useState([])

    useEffect(() => {
        data();
    }, [])

    function data() {
        fetch("https://dummyjson.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res.users);
                setapi(res.users);
            })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">LASTNAME</th>
                        <th scope="col">AGE</th>
                        <th scope="col">GENDER</th>
                        <th scope="col">CITY</th>
                        <th scope="col">COUNTRY</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        api && api.map((dets, index) => {
                            console.log(dets);
                                return(
                                <tr key={index}>
                                    <th scope="row">{dets.id}</th>
                                    <td>{dets.firstName}</td>
                                    <td>{dets.lastName}</td>
                                    <td>{dets.age}</td>
                                    <td>{dets.gender}</td>
                                    <td>{dets.address.city}</td>
                                    <td>{dets.address.country}</td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default EffectApi2;