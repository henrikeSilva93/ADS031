
import React, { createContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
 export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const[loged, setLoged] = useState(false)
    return (
        <AuthContext.Provider value={{loged,setLoged}}>
            {children}
        </AuthContext.Provider>
    )
}