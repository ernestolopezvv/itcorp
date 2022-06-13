import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
   
    const { auth } = useAuth();
    const location = useLocation();
    const autorizedRole = auth?.roles;
    console.log(auth);

  

    return (
        allowedRoles.includes(autorizedRole)
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/no-autorizado" state={{ from: location }} replace />
                : <Navigate to="/inicio-sesion" state={{ from: location }} replace />
    );
}

export default RequireAuth;