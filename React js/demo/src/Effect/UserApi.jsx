import React, { useEffect, useState } from 'react'

function UserApi() {

    const [user, setuser] = useState([]);

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
                setuser(res);
            })
    }
    return (
        <div>
            <h1>This is User API</h1>
            <table className="table bg-info">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">STREET</th>
                        <th scope="col">CITY</th>
                        <th scope="col">COMPANY</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data, index) => {
                            console.log(data);
                            return (
                                <tr>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.address.street}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.company.name}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UserApi