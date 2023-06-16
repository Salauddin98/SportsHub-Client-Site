import { Navigate, useLocation } from "react-router-dom";
import SetRole from "../hooks/SetRole";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const PrivateAdmin = ({ children }) => {
  const loc = useLocation();
  const { loading, user } = useContext(AuthContext);
  const { data, isLoading } = SetRole();
  if (loading || isLoading) {
    return <div></div>;
  }
  if (user && data?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/" state={loc.pathname}></Navigate>;
  }
};

export default PrivateAdmin;
