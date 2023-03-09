import { createContext, useContext ,useReducer  } from "react";
import { myReducer } from "./reducers";
const AuthContext = createContext({});

interface IProvider {
    children: JSX.Element | JSX.Element[]
}
export const useAuth = () =>{
    return useContext(AuthContext)
}

const userStorage = localStorage.getItem('userLogin')
const initialState = userStorage ? JSON.parse(userStorage) :  {
    name:'',
    email : '',
    isLogged:false
}
export const AuthProvider = ({ children }: IProvider) => {
  
    const[auth, authDispatch ] = useReducer(myReducer, initialState)

    return (
        <AuthContext.Provider value={{auth, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;