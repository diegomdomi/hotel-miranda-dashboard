import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider.js'
import Dashboard from '../Components/Dashboard.jsx';

const PrivateRoutes = () => {

    let auth = useAuth()
    return(
        auth.auth.isLogged ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes