import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddFilm from "./pages/AddFilm";
import Movies from "./pages/Movies";
import Homepage from "./pages/Homepage";
import AddSalle from "./pages/AddSalle";
import AddSeance from "./pages/AddSeance";
import Salles from "./pages/Salles";
import Seances from "./pages/Seances";
import Payement from "./pages/Payement";
import Receipt from "./pages/receipt";
import { AuthProvider, AuthContext } from "./AuthProvider";




const ProtectedRoute = ({ roles, children }) => {
  const { roles: userRoles } = React.useContext(AuthContext);

  // Vérification des rôles
  const hasAccess = roles.some((role) => userRoles.includes(role));

  if (!hasAccess) {
    return null; // Empêche le rendu de la route si l'utilisateur n'a pas les droits
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/Movies",
        element: (
          //<ProtectedRoute roles={["admin", "client", "client_fidele", "superviseur", "directeur_général"]}>
            <Movies />
         // </ProtectedRoute>
        ),
      },
      
      {
        path: "/Salles",
        element: (
          <ProtectedRoute roles={["admin", "superviseur","directeur_général","responsable_salle"]}>
            <Salles />
          </ProtectedRoute>
        ),
      },
      {
        path: "/AddFilm",
        element: (
          <ProtectedRoute roles={["admin"]}>
            <AddFilm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/AddSeance",
        element: (
          <ProtectedRoute roles={["admin"]}>
            <AddSeance />
          </ProtectedRoute>
        ),
      },
      {
        path: "/AddSalle",
        element: (
          <ProtectedRoute roles={["admin","responsable_salle"]}>
            <AddSalle />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Seances",
        element: (
         // <ProtectedRoute roles={["admin", "superviseur", "client","directeur_général"]}>
            <Seances />
         // </ProtectedRoute>
        ),
      },
      {
        path: "/Payement",
        element: (
          <ProtectedRoute roles={["admin", "client", "client_fidele","directeur_général"]}>
            <Payement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Receipt",
        element: (
          <ProtectedRoute roles={["admin", "client", "client_fidele","directeur_général"]}>
            <Receipt />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

reportWebVitals();
