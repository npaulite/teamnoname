import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { authorized } = useAuth()
    const location = useLocation()

    return(
        allowedRoles.includes(authorized?.role)
        ? <Outlet />
        : authorized?.email
        ? <Navigate to={"/" + authorized?.role} state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;