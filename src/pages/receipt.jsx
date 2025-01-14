import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservationDetails, amount, appName } = location.state || {};

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Reçu de Paiement", 20, 20);

    doc.setFontSize(14);
    doc.text(`Film: ${reservationDetails?.seance.film.titre}`, 20, 40);
    doc.text(`Salle: ${reservationDetails?.seance.salle.numeroSalle}`, 20, 50);
    doc.text(`Date de réservation: ${reservationDetails?.date_reservation}`, 20, 60);
    doc.text(
      `Horaires: ${reservationDetails?.seance.heureDebut} - ${reservationDetails?.seance.heureFin}`,
      20,
      70
    );

    doc.text(`Montant du Paiement: ${amount} MAD`, 20, 90);
    doc.text(`Application: ${appName}`, 20, 100);

    doc.save("receipt.pdf");
  };

  return (
    <div className="ticket-container">
      <style>
        {`
          .ticket-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }

          .cardWrap {
            width: 30em;
            color: #fff;
            font-family: sans-serif;
            position: relative;
          }

          .card {
            background: linear-gradient(to bottom, #e84c3d 0%, #e84c3d 26%, #ecedef 26%, #ecedef 100%);
            height: 12em;
            position: relative;
            padding: 1em;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .cardLeft {
            width: 70%;
            float: left;
          }

          .cardRight {
            width: 25%;
            float: right;
            border-left: 0.18em dashed #fff;
            border-radius: 0 10px 10px 0;
          }

          .cardRight:before,
          .cardRight:after {
            content: "";
            position: absolute;
            display: block;
            width: 1em;
            height: 1em;
            background: #fff;
            border-radius: 50%;
            left: -0.5em;
          }

          .cardRight:before {
            top: -0.5em;
          }

          .cardRight:after {
            bottom: -0.5em;
          }

          h1 {
            font-size: 1.2em;
            margin: 0 0 0.5em 0;
            font-weight: normal;
          }

          h1 span {
            font-weight: lighter;
          }

          .info {
            margin-bottom: 0.5em;
          }

          .info h2 {
            font-size: 0.9em;
            color: #333;
            margin: 0;
            font-weight: normal;
          }

          .info span {
            font-size: 0.7em;
            color: #888;
          }

          .eye {
            position: relative;
            width: 2.5em;
            height: 1.5em;
            background: #fff;
            margin: 1em auto;
            border-radius: 50%;
          }

          .eye:before {
            content: "";
            width: 1em;
            height: 1em;
            background: #e84c3d;
            position: absolute;
            top: 25%;
            left: 25%;
            border-radius: 50%;
          }

          .barcode {
            height: 2em;
            margin-top: 1em;
            background: repeating-linear-gradient(
              to right,
              #343434,
              #343434 2px,
              #fff 2px,
              #fff 4px
            );
          }

          .actions {
            text-align: center;
            margin-top: 2em;
          }

          .actions button {
            padding: 0.5em 1.5em;
            background: #e84c3d;
            color: #fff;
            border: none;
            border-radius: 5px;
            margin: 0 0.5em;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .actions button:hover {
            background: #c0392b;
          }
        `}
      </style>
      <div className="cardWrap">
        <div className="card cardLeft">
          <h1>CINAZONE <span>Cinema</span></h1>
          <div className="info">
            <h2>{reservationDetails?.seance.film.titre || "N/A"}</h2>
            <span>Movie</span>
          </div>
          <div className="info">
            <h2>{appName || "N/A"}</h2>
            <span>Application</span>
          </div>
          <div className="info">
            <h2>{reservationDetails?.seance.salle.numeroSalle || "N/A"}</h2>
            <span>Seat</span>
          </div>
          <div className="info">
            <h2>{`${reservationDetails?.seance.heureDebut || "N/A"} - ${reservationDetails?.seance.heureFin || "N/A"}`}</h2>
            <span>Time</span>
          </div>
          <div className="info">
            <h2>{amount ? `${amount} MAD` : "N/A"}</h2>
            <span>Price</span>
          </div>
        </div>
        <div className="card cardRight">
          <div className="eye"></div>
          <div className="barcode"></div>
        </div>
        <div className="actions">
          <button onClick={() => navigate(-1)}>Retour</button>
          <button onClick={downloadPDF}>Télécharger le Reçu</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
