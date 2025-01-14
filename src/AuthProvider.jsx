import React, { createContext, useState, useEffect } from "react";
import Keycloak from "keycloak-js";

// Configuration de Keycloak
const keycloak = new Keycloak({
  url: "http://localhost:8080", // URL du serveur Keycloak
  realm: "cinazone",           // Nom du Realm
  clientId: "client-frontend", // ID du client
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    keycloak
      .init({ onLoad: "login-required" }) // Force l'utilisateur à se connecter
      .then((auth) => {
        setAuthenticated(auth);
        setKeycloakInstance(keycloak);

        if (auth) {
          console.log("Keycloak authenticated");
          localStorage.setItem("token", keycloak.token);
          localStorage.setItem("refreshToken", keycloak.refreshToken);

          // Récupère les rôles de l'utilisateur
          const userRoles = keycloak.realmAccess?.roles || [];
          setRoles(userRoles);
        } else {
          console.log("Keycloak authentication failed.");
        }
      })
      .catch((err) => console.error("Keycloak init error:", err));
  }, []);

  const logout = () => {
    if (keycloak) {
      keycloak.logout({
        redirectUri: "http://localhost:3000", // URL après déconnexion
      });
    }
  };

  if (!authenticated) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Authenticating...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,            // Statut d'authentification
        keycloak: keycloakInstance, // Instance Keycloak
        roles,                    // Rôles de l'utilisateur
        logout,                   // Méthode pour déconnecter
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
