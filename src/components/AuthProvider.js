import { createContext, useReducer, useEffect, useState} from "react";

const AuthContext = createContext();

let reducer = (authorized, newAuthorized) => {
    if (newAuthorized === null) {
      localStorage.removeItem("authorized");
      return initialState;
    }
    return { ...authorized, ...newAuthorized };
  };
  
  const initialState = null;
  
  const localState = JSON.parse(localStorage.getItem("authorized"));

export const AuthProvider = ({ children }) => {
    const [authorized, setAuth] = useReducer(reducer, localState || initialState);

    useEffect(() => {
        localStorage.setItem("authorized", JSON.stringify(authorized));
      }, [authorized]);

    return (
        <AuthContext.Provider value={{ authorized, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
