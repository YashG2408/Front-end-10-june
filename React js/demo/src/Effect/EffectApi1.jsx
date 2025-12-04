import React, { useEffect, useState } from 'react'

function EffectApi1() {

    const [api, setapi] = useState([])

    useEffect(() => {
        data();
    }, []);

    function data() {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                setapi(res);
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
                        <th scope="col">COMPANY</th>
                        <th scope="col">ADDRESS</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        api && api.map((data, index) => {
                            console.log(data);

                            return (
                                <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.company.name}</td>
                                    <td>{data.address.city}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default EffectApi1