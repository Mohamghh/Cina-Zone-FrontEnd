import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QQxyrAwRzCvsPAUKkNggCYLRVJ6jjCk3giZDutzokRpt4qssx81ZuvF2KPa6RuGVAKzqT5xzddhPgAymNqdk7dF00fMDMp89m");

function App() {
  return (
    <div>
      <Header />
      <Elements stripe={stripePromise}>
        {/* Ensure all nested routes have access to Elements context */}
        <Outlet />
      </Elements>
      <Footer />
    </div>
  );
}

export default App;
