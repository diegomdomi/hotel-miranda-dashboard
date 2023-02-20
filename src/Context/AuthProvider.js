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

console.log(auth);

    // const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userLogin')) || {email:'', isLogged:false});

    // const loginAuth = ({email,password}) => {
    //     if(email === 'usuario1@1.com' && password === '111'){
    //         localStorage.setItem("userLogin", JSON.stringify({email: "usuario1@1.com", isLogged: true}));
    //         setAuth({email, password, isLogged: true});
    //     }else{
    //         alert('user or password incorrect');
    //     }
    // }

    // const logoutAuth = () => {
    //     localStorage.removeItem("userLogin");
    //     setAuth({...auth, isLogged: false});
    // }
 

    // const utils = {
    //     auth,
    //     authDispatch,
    //     // loginAuth,
    //     // logoutAuth
    // }

    return (
        <AuthContext.Provider value={{auth, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;