import { ACTIONS_USER } from './actions/index';

interface IState {
    email?: string | null;
    password?: string | null;
    name?:string;
    isLogged?: boolean | null;
}

type UserAction =
    |{ type: 'ACTION_USER.LOGIN', payload:any}
    |{ type: 'ACTION_USER.LOGOUT', payload:any}
    |{ type: 'ACTIONS_USER.UPDATE', payload:any};


export const myReducer = (state:IState,action:UserAction) =>{
     switch (action.type) {
        case ACTIONS_USER.LOGIN:
            if(action.payload.email === 'usuario1@1.com' && action.payload.name === 'usuario1' && action.payload.password === '111'){
                localStorage.setItem("userLogin", JSON.stringify({email: "usuario1@1.com", name:'usuario1' ,isLogged: true}));
            }else{
                alert('something went wrong')
                return { ...state, isLogged: false}
            }
                return{ 
                    ...state,
                    email: action.payload.email,
                    name: action.payload.name,  
                    isLogged:true
                }
        case ACTIONS_USER.LOGOUT:
            localStorage.removeItem('userLogin');
                return {  
                    isLogged:false 
                };
        case ACTIONS_USER.UPDATE:
                return {    ...state,
                name: action.payload.value,  
                }     
            default:
                return {...state};
     }
 }