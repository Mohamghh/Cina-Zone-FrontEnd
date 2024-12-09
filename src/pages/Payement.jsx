import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";


const Payement = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage("Stripe n'est pas encore prêt.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await axios.post(
        "http://localhost:8090/payment/create-payment-intent",
        null,
        { params: { amount } }
      );

      const clientSecret = response.data;

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setMessage(`Erreur : ${error.message}`);
      } else if (paymentIntent) {
        setMessage("Paiement réussi !");
      }
    } catch (err) {
      setMessage(`Erreur lors du traitement : ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div className="sign section--bg" data-bg="img/bg/section__bg.jpg">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sign__content">
          {/* Payment Form */}
          <form onSubmit={handlePayment} className="sign__form">
            {/* Logo */}
            <a href="index.html" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
       <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
       <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
 </a>                  
            
            
            

            {/* Amount Field */}
            <div className="sign__group">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="sign__input"
                placeholder="Montant (MAD)"
                required
              />
            </div>

            {/* Card Details */}
             <div className="sign__group">
             {/* Wrapper styled like sign__input */}
             <div className="sign__input">
              <CardElement
              options={{
                  style: {
                  base: {
                   fontSize: "16px",
                    color: "#fff",
                    fontFamily: '"Arial", sans-serif',
                     "::placeholder": {
                      color: "#888",
               },
              },
              invalid: {
            color: "#e63946",
          },
        },
      }}
    />
  </div>
  </div>


            {/* Privacy Checkbox */}
            <div className="sign__group sign__group--checkbox">
              <input id="remember" name="remember" type="checkbox" defaultChecked />
              <label htmlFor="remember">
                I agree to the <a href="privacy.html">Privacy Policy</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="sign__btn"
              type="submit"
              disabled={!stripe || isProcessing}
            >
              {isProcessing ? "Traitement..." : "Payer"}
            </button>

            {/* Success/Error Message */}
            {message && (
              <span className="sign__text">{message}</span>
            )}
          </form>
          {/* End Payment Form */}
        </div>
      </div>
    </div>
  </div>
</div>
  
  );
};

export default Payement;
