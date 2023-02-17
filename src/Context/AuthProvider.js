import { createContext, useContext ,useState , useEffect } from "react";

const AuthContext = createContext({});

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState(false);
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userLogin')) || {email:'', password:'',isLogged:false});

    const loginAuth = ({email,password}) => {
        if(email === 'usuario1@1.com' && password === '111'){
            localStorage.setItem("userLogin", JSON.stringify({email: "usuario1@1.com", password: "111", isLogged: true}));
            setAuth({email, password, isLogged: true});
        }else{
            alert('user or password incorrect');
        }
    }

    const logoutAuth = () => {
        localStorage.removeItem("userLogin");
        setAuth({...auth, isLogged: false});
    }
    useEffect(()=>{
        localStorage.setItem('userLogin', JSON.stringify(auth));
    }, [auth]);

    const utils = {
        auth,
        loginAuth,
        logoutAuth
    }

    return (
        <AuthContext.Provider value={ utils }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;