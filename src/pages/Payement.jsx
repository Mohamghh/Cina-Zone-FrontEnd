import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Payement = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();  // Utiliser le hook location pour obtenir l'état passé depuis Seances.jsx
  const { reservationDetails, amount } = location.state || {};  // Obtenir les détails de la réservation et le montant

  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [showReceiptOption, setShowReceiptOption] = useState(false);

  const [paymentAmount, setPaymentAmount] = useState(amount);

  useEffect(() => {
    if (amount) {
      setPaymentAmount(amount); // Mettre à jour l'état avec le montant passé
    }
  }, [amount]);

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
        { params: { amount: paymentAmount } }
      );

      const clientSecret = response.data;

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (error) {
        setMessage(`Erreur : ${error.message}`);
      } else if (paymentIntent) {
        setMessage("Paiement réussi !");
        setShowReceiptOption(true); // Afficher l'option de reçu après un paiement réussi
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
        amount: paymentAmount,
        appName: "CINA ZONE",
      },
    });
  };

  const cardElementStyle = {
    style: {
      base: {
        color: "white",
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
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="sign__input"
                    placeholder="Montant (MAD)"
                    required
                  />
                </div>

                {/* Champ 1 : Numéro de carte + Expiration */}
                <div className="sign__group">
                  <div className="sign__input" style={{ padding: '10px', backgroundColor: '#222028', borderRadius: '4px' }}>
                    <CardNumberElement options={cardElementStyle} />
                  </div>
                </div>

                <div className="sign__group">
                  <div className="sign__input" style={{ padding: '10px', backgroundColor: '#222028', borderRadius: '4px' }}>
                    <CardExpiryElement options={cardElementStyle} />
                  </div>
                </div>

                {/* Champ 2 : CVC + Code Postal */}
                <div className="sign__group">
                  <div className="sign__input" style={{ padding: '10px', backgroundColor: '#222028', borderRadius: '4px' }}>
                    <CardCvcElement options={cardElementStyle} />
                  </div>
                </div>
                <div className="sign__group">
                  <input
                    type="text"
                    placeholder="Code Postal"
                    style={{
                      padding: "10px",
                      backgroundColor: "#222028",
                      borderRadius: "4px",
                      color: "white",
                      fontSize: "16px",
                      border: "none",
                      width: "100%",
                    }}
                  />
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
