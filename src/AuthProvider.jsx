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
      .init({ onLoad: "check-sso" }) // Vérifie si l'utilisateur est connecté sans forcer la connexion
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
          console.log("User is not authenticated.");
        }
      })
      .catch((err) => console.error("Keycloak init error:", err));
  }, []);

  const login = () => {
    if (keycloak) {
      keycloak.login(); // Redirige vers la page de connexion Keycloak
    }
  };

  const register = () => {
    if (keycloak) {
      keycloak.register(); // Redirige vers la page d'inscription Keycloak
      // Après l'inscription, on redirige vers la page de login Keycloak
      keycloak.onAuthSuccess = () => {
        window.location.href = `http://localhost:8080/realms/cinazone/protocol/openid-connect/auth?client_id=client-frontend&response_type=code&scope=openid&redirect_uri=http://localhost:3000/callback
`; // Redirection vers la page de connexion
      };
    }
  };

  const logout = () => {
    if (keycloak) {
      keycloak.logout({
        redirectUri: "http://localhost:3000", // URL après déconnexion
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,            // Statut d'authentification
        keycloak: keycloakInstance, // Instance Keycloak
        roles,                    // Rôles de l'utilisateur
        login,                    // Méthode pour se connecter
        register,                 // Méthode pour s'inscrire
        logout,                   // Méthode pour déconnecter
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
