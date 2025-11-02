// import React, { useEffect, useState } from 'react'

// function UserDummy() {

//     const [user, setuser] = useState([])

//     useEffect(()=> {
//         fetchdata()
//     },[])

//     const fetchdata = () => {
//         fetch("https://dummyjson.com/users", {
//             method: "GET"
//         })
//             .then((data) => {
//                 return data.json()
//             })
//             .then((data)=>{
//                 console.log(data.users)
//                 setuser(data.users)
//             })

//     }

//     return (
//         <div>
//              <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">#id</th>
//                         <th scope="col">name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">city</th>
//                         <th scope="col">company</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         user && user.map((data, index) => {
//                             // console.log(data)
//                             console.log(index)
//                             return (
//                                 <tr key={index}>
//                                     <th scope="row">{data.id}</th>
//                                     <td>{data.name}</td>
//                                     <td>{data.email}</td>
//                                     <td>{data.address.city}</td>
//                                     <td>{data.company.name}</td>
//                                 </tr>
//                             )
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default UserDummy;

import React, { useEffect, useState } from 'react'

function Fetchrecipes() {

    const [recipes, setrecipes] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://dummyjson.com/recipes", {
            method: "GET"
        })
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                console.log(data.recipes)
                setrecipes(data.recipes)
            })
    }

    return (
        <div><table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CUISINE</th>
                    <th scope="col">NAME</th>
                    <th scope="col">MEAL_TYPE</th>
                    <th scope="col">DIFFICULTY</th>
                    <th scope="col">RATING</th>
                </tr>
            </thead>
            <tbody>
               {
                recipes && recipes.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.cuisine}</td>
                            <td>{data.name}</td>
                            <td>{data.mealType[0]}</td>
                            <td>{data.difficulty}</td>
                            <td>{data.rating}</td>
                        </tr>
                    )
                })
               }
            </tbody>
        </table>
        </div>
    )
}

export default Fetchrecipes;
