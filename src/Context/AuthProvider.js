import { createContext, useContext ,useReducer,useState  } from "react";
import { ACTIONS_USER } from './actions/index';
import { myReducer } from "./reducers";
const AuthContext = createContext({});

export const useAuth = () =>{
    return useContext(AuthContext)
}
export const AuthProvider = ({ children }) => {

    const initialState = {
        email : '',
        isLogged:false
    }


    const[auth, authDispatch ] = useReducer(myReducer,JSON.parse(localStorage.getItem('userLogin')) || initialState)

    return (
        <AuthContext.Provider value={{auth, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;