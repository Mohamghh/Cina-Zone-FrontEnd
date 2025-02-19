import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservationDetails, amount } = location.state || {};

  // Format the date as YYYY-MM-DD
  const formattedDate = new Date(reservationDetails?.date_reservation).toLocaleDateString("en-CA");

  const downloadPDF = () => {
    const doc = new jsPDF();

    // En-tête avec dégradé de couleur
    doc.setFillColor(245, 201, 0); // Jaune
    doc.rect(0, 0, 210, 30, "F"); // Rectangle jaune
    doc.setFillColor(0, 0, 0); // Noir
    doc.rect(0, 30, 210, 10, "F"); // Rectangle noir
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255); // Texte blanc
    doc.text("CINAZONE", 105, 20, { align: "center" });

    // Message de remerciement
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Texte noir
    doc.text("Merci pour votre confiance !", 20, 50);
    doc.setFontSize(12);
    doc.text(
      "Nous vous remercions d'avoir choisi CINAZONE pour votre réservation. Votre soutien nous permet de continuer à vous offrir les meilleures expériences cinématographiques.",
      20,
      60,
      { maxWidth: 170 }
    );

    // Détails sous forme de tableau
    const details = [
      ["Film", reservationDetails?.seance.film.titre || "N/A"],
      ["Salle", reservationDetails?.seance.salle.numeroSalle || "N/A"],
      ["Date de réservation", formattedDate || "N/A"],
      [
        "Horaires",
        `${reservationDetails?.seance.heureDebut || "N/A"} - ${
          reservationDetails?.seance.heureFin || "N/A"
        }`,
      ],
      ["Montant", `${amount} MAD` || "N/A"],
    ];

    doc.autoTable({
      startY: 85, // Démarrer après le message de remerciement
      head: [["Détail", "Information"]],
      body: details,
      theme: "striped", // Thème du tableau
      headStyles: { fillColor: [245, 201, 0] }, // Couleur jaune pour l'en-tête du tableau
      alternateRowStyles: { fillColor: [245, 245, 245] }, // Couleur grise pour les lignes alternées
      styles: { textColor: [0, 0, 0] }, // Texte noir
    });

    // Ajouter le texte du footer après le tableau
    doc.setFontSize(10);
    doc.text("© CINAZONE, 2024—2025 | Créé par   Hamza - Mohamed ", 105, doc.lastAutoTable.finalY + 10, { align: "center" });

    // Sauvegarder le PDF
    doc.save("receipt.pdf");
  };

  return (
    <div className="receipt-container">
      <style>
        {`
          .receipt-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #ffffff;  /* Fond blanc pour la page */
          }

          .receipt-card {
            width: 300px;  /* Taille fixe pour la carte */
            padding: 20px;
            background-color: #ffffff;  /* Fond blanc pour la carte */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: left;
            color: #333;
          }

          .receipt-card h1 {
            font-size: 1.5em;  
            text-align: center;
            color: black;
            font-weight: bold;
            text-transform: uppercase;
            background: linear-gradient(to right, #f5c900, #f5b300);
            -webkit-background-clip: text;
            background-clip: text;
          }

          .receipt-info {
            margin: 1em 0;
            padding-bottom: 1em;
            border-bottom: 1px solid #ddd;
          }

          .receipt-info h2 {
            font-size: 1.1em;
            font-weight: bold;
            margin-bottom: 5px;
            color: black;
          }

          .receipt-info span {
            font-size: 1em;
            color: #555;
          }

          .actions {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5em;
          }

          .actions button {
            padding: 0.6em 1.5em;
            background-color: #f5c900; /* Jaune */
            color: black;
            border: none;
            border-radius: 5px;
            font-size: 0.9em;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .actions button:hover {
            background-color: #f5b300;
          }

          .actions button:active {
            background-color: #f39c12;
          }

          .actions .back-button {
            background-color: #333; /* Noir */
            color: white;
          }

          .actions .back-button:hover {
            background-color: #444;
          }
        `}
      </style>
      <div className="receipt-card">
        <h1>CINAZONE</h1>
        <div className="receipt-info">
          <h2>Film</h2>
          <span>{reservationDetails?.seance.film.titre || "N/A"}</span>
        </div>

        <div className="receipt-info">
          <h2>Salle</h2>
          <span>{reservationDetails?.seance.salle.numeroSalle || "N/A"}</span>
        </div>
        <div className="receipt-info">
          <h2>Horaires</h2>
          <span>
            {`${reservationDetails?.seance.heureDebut || "N/A"} - ${reservationDetails?.seance.heureFin || "N/A"}`}
          </span>
        </div>
        <div className="receipt-info">
          <h2>Montant</h2>
          <span>{amount ? `${amount} MAD` : "N/A"}</span>
        </div>
        <div className="actions">
          <button className="back-button" onClick={() => navigate(-1)}>Retour</button>
          <button onClick={downloadPDF}>Télécharger le Reçu</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;