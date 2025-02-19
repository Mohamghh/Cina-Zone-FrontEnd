import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ roles, children }) => {
  const { roles: userRoles } = useContext(AuthContext);

  // Vérifiez si userRoles est défini et s'il contient les rôles nécessaires
  const hasAccess = userRoles?.some((role) => roles.includes(role));

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
