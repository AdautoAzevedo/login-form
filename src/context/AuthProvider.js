import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState('');

    const setToken = (token)=>{
        setAuth(token);
    };

    return(
        <AuthContext.Provider value={{auth, setToken}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
};