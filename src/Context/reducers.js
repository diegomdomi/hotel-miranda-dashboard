import { ACTIONS_USER } from './actions/index';

export const myReducer = (state,action)=>{
     switch (action.type) {
        case ACTIONS_USER.LOGIN:
            if(action.payload.email === 'usuario1@1.com' && action.payload.name === 'usuario1' && action.payload.password === '111'){
                localStorage.setItem("userLogin", JSON.stringify({email: "usuario1@1.com", name:'usuario1' ,isLogged: true, token:action.payload.token}));
            }else{
                alert('something went wrong')
               return { ...state, isLogged: false}
            }
            return{ 
                 ...state,
                 email: action.payload.email,
                 name: action.payload.name,  
                 isLogged:true,
                 token: action.payload.token
             }
        case ACTIONS_USER.LOGOUT:
            localStorage.removeItem('userLogin');
            return {  
                    isLogged:false 
                };
        case ACTIONS_USER.UPDATE:
            return {    ...state,
                // name: action.payload.name,  
                [action.payload.name]: action.payload.value,
                }     
             default:
             return {...state};
     }
 }