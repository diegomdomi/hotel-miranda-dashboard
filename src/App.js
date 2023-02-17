import './App.css';
import { BrowserRouter ,Routes, Route,Navigate } from 'react-router-dom';
import Bookings from './Components/Bookings';
import Rooms from './Components/Rooms';
import Room from './Components/Room';
import Users from './Components/Users';
import Contact from './Components/Contact';
import LoginUser from './Components/LoginUser'
import Dashboard from './Components/Dashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './Context/AuthProvider';

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<PrivateRoutes/>} >
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/user" element={<Users/>} />
              <Route path="/bookings" element={<Bookings/>} />
              <Route path="/rooms" element={<Rooms/>} />
              <Route path="/room/:id" element={<Room/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/contact" element={<Contact/>} />
            </Route>
            <Route exact path ="/" element={<LoginUser/>}/>
          </Routes> 
        </div>
      </BrowserRouter> 
      </AuthProvider>
    </>
  );
}

export default App;
