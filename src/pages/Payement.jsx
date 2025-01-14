import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Payement = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();  // Use the location hook to get the state passed from Seances.jsx
  const { reservationDetails } = location.state || {};  // Get reservation details from state

  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [showReceiptOption, setShowReceiptOption] = useState(false);

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
        setShowReceiptOption(true); // Show the receipt option after payment is successful
      }
    } catch (err) {
      setMessage(`Erreur lors du traitement : ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReceipt = () => {
    navigate("/receipt", {
      state: {
        reservationDetails,
        amount,
        appName: "CINA ZONE",
      },
    });
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
              <form onSubmit={handlePayment} className="sign__form">
                <Link to="/" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
                  <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
                  <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
                </Link>

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

                <div className="sign__group">
                  <div className="sign__input">
                    <CardElement options={cardElementOptions} />
                  </div>
                </div>

                <div className="sign__group sign__group--checkbox">
                  <input id="remember" name="remember" type="checkbox" defaultChecked />
                  <label htmlFor="remember">
                    I agree to the <a href="privacy.html">Privacy Policy</a>
                  </label>
                </div>

                <button
                  className="sign__btn"
                  type="submit"
                  disabled={!stripe || isProcessing}
                >
                  {isProcessing ? "Traitement..." : "Payer"}
                </button>

                {message && (
                  <span className="sign__text">{message}</span>
                )}

                {showReceiptOption && (
                  <div>
                    <p className="sign__text">Would you like to get a receipt?</p>
                    <button onClick={handleReceipt} className="sign__btn">Get receipt</button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payement;
