import './App.css';
import { BrowserRouter ,Routes, Route,Navigate } from 'react-router-dom';
import Bookings from './Components/Bookings';
import Rooms from './Components/Rooms';
import Room from './Components/Room';
import Users from './Components/Users';
import Contact from './Components/Contact';
import LoginUser from './Components/LoginUser'
import Context from './Context/index';
import {useReducer} from 'react';
import { myReducer,LOGEDIN_STORE } from './Context/reducers';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';



function App() {
  const [users, dispatch] = useReducer(myReducer, [
    {
        email:"",
        password:"",
        isLogged:false        
    }
]);
let addUsers = (users) => {
    dispatch({type: LOGEDIN_STORE, payload: users});
  }
  return (
    <>
    <Context.Provider  value={{users:users,addUsers:addUsers}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path ="/" element={<LoginUser/>}/>
            <Route exact path ="/dashboard" element=
            {
              users.isLogged ? 
              <Dashboard/>
              :
              <Navigate to="/"/>
            }>
            </Route>
            <Route path="/user" element={<Users/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/rooms" element={<Rooms/>} />
            <Route path="/room/:id" element={<Room/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
        </div>
      </BrowserRouter> 
      </Context.Provider>
    </>
  );
}

export default App;
