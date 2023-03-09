import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Bookings from './Components/Bookings';
import Rooms from './Components/Rooms';
import Room from './Components/Room';
import Users from './Components/Users';
import Contact from './Components/Contact';
import LoginUser from './Components/LoginUser'
import Dashboard from './Components/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider, useAuth } from './Context/AuthProvider';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import MainNavContainer from './Components/MainNavContainer';
import MainDisplayContainer from './Components/MainDisplayContainer';
import styled from 'styled-components';
import BookingsDetails from './Components/BookingsDetails';

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter basename='/hotel-miranda-dashboard'>
        <div className="App" >
            <MainNavContainer  />
          <Routes>
            <Route element={<PrivateRoutes /> } >
              <Route exact path="/" element={<Dashboard/>}/>
              <Route path="/user" element={<Users/>} />
              <Route path="/bookings" element={<Bookings/>} />
              <Route path="/bookings/:id" element={<BookingsDetails/>} />
              <Route path="/rooms" element={<Rooms/>} />
              <Route path="/room/:id" element={<Room/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/contact" element={<Contact/>} />
            </Route>
            <Route  path ="/login" element={<LoginUser/>}/>
          </Routes> 

        </div>
      </BrowserRouter> 
      </AuthProvider>
    </>
  );
}

export default App;
