export const LOGEDIN_STORE = "LOGEDIN_STORE";
export const LOGOUT = "logout";

export const myReducer = (state,action)=>{
     switch (action.type) {
         case LOGEDIN_STORE:
             return{ 
                 ...state,
                 email: action.payload.email,
                 password: action.payload.password,  
                 isLogged:true
             }
             case LOGOUT:
             return { ...state, ...action.payload }
             default:
             return {...state};
     }
 }