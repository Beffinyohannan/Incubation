import { createContext,useState } from "react";

export const UserContext= createContext('')

function UserDetail({chlidren}) {

    const [userdetails,serUserdetails]=useState(null)

    return(

        <UserContext.Provider value={{userdetails,serUserdetails}}>
            {chlidren}
        </UserContext.Provider>
    )
}

export default UserDetail