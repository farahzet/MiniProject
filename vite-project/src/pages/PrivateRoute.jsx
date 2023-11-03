import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./AuthContext"

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)
    if(!isLoggedIn){
        // arahkan ke halaman login
        return <Navigate to='/Login' />
    }

    // arahkan ke halaman private nya 
    return <Outlet />
}

export default PrivateRoute