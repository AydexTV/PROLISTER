import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const LoggedOutRoutes = () => {
  const { user } = useContext(UserContext);
  return user ? <Navigate to="/" /> : <Outlet /> ;
};

export default LoggedOutRoutes;
