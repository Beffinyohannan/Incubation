import { createContext,useState } from "react";

export const userContext= createContext('')

function UserDetail({chlidren}) {

    const [userdetails,serUserdetails]=useState('hello')

    return(

        <userContext.Provider value={{userdetails,serUserdetails}}>
            {chlidren}
        </userContext.Provider>
    )
}

export default UserDetail