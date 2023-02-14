import './App.css';
import { HashRouter,BrowserRouter ,Routes, Route } from 'react-router-dom';
import Bookings from './Components/Bookings';
import Rooms from './Components/Rooms';
import Users from './Components/Users';
import Contact from './Components/Contact';
import LoginUser from './Components/LoginUser'


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path ="/" element={<LoginUser/>}/>
            <Route path="/user" element={<Users/>} />
            <Route path="/bookings" element={<Bookings/>} />
            <Route path="/rooms:/id" element={<Rooms/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
        </div>
      </BrowserRouter> 
    </>
  );
}

export default App;
