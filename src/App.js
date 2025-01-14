import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const stripePromise = loadStripe("pk_test_51QQxyrAwRzCvsPAUKkNggCYLRVJ6jjCk3giZDutzokRpt4qssx81ZuvF2KPa6RuGVAKzqT5xzddhPgAymNqdk7dF00fMDMp89m");

function App() {
  const { authenticated } = useContext(AuthContext); // Utilisation du contexte d'authentification

  if (!authenticated) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Authenticating...</div>;
  }

  return (
    <div>
      <Header />
      <Elements stripe={stripePromise}>
        <Outlet />
      </Elements>
      <Footer />
    </div>
  );
}

export default App;