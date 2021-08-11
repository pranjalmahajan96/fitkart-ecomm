import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({path, ...props}) => {
    const { login } = useAuth();

    return (
        login 
    ? (<Route {...props} path={path} />) 
    : ( <Navigate state={{from: path}} replace to="/login" />)
    );
}