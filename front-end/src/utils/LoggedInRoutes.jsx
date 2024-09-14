import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const LoggedInRoutes = () => {
  const { user, loading } = useContext(UserContext); // Access loading state

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while fetching user data
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default LoggedInRoutes;
