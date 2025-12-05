import React, { createContext, useState } from 'react'
import ChildB from './ChildB';
import ChildC from './ChildC';

export const Data = createContext()

function ChildA() {

    const [name, setname] = useState("Yash Gondaliya");
    return (
        <div>
            <h1>This Is Child A Componenet</h1>
            <h1>Child A : {name}</h1>

            <Data.Provider value={{name,setname}}>
                {/* <ChildB /> */}
                <ChildC />
            </Data.Provider>
        </div>


    )
}

export default ChildA;