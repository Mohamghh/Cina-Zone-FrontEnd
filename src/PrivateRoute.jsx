import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ roles, children }) => {
  const { authenticated, roles: userRoles } = useContext(AuthContext);

  // Si l'utilisateur n'est pas authentifié, permettre l'accès public à la route
  if (!authenticated) {
    return children; // Rendre le contenu accessible publiquement
  }

  // Si l'utilisateur est authentifié, vérifier les rôles pour accéder au contenu
  const hasAccess = roles.some((role) => userRoles.includes(role));

  if (!hasAccess) {
    // Si l'utilisateur authentifié n'a pas les rôles requis, rediriger vers une page d'accueil ou un message d'erreur
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est authentifié et a les rôles nécessaires, afficher le contenu protégé
  return children;
};

export default ProtectedRoute;
