import React, { useState, useEffect } from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";
import Navigation from "../components/Navigation";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
  );
  
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8090";
  
  const Statistiques = () => {
    const [genreData, setGenreData] = useState(null);
    const [sallesData, setSallesData] = useState(null);
    const [seancesData, setSeancesData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const filmsRes = await axios.get(`${API_URL}/films`);
          const genreCounts = filmsRes.data.reduce((acc, film) => {
            acc[film.genre] = (acc[film.genre] || 0) + 1;
            return acc;
          }, {});
  
          setGenreData({
            labels: Object.keys(genreCounts),
            datasets: [{
              label: "Films par genre",
              data: Object.values(genreCounts),
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            }]
          });
  
          const sallesRes = await axios.get(`${API_URL}/salles`);
          const sortedSalles = sallesRes.data.sort((a, b) => a.numeroSalle - b.numeroSalle);
  
          setSallesData({
            labels: sortedSalles.map(s => `Salle ${s.numeroSalle + 1}`),
            datasets: [{
              label: 'Capacité',
              data: sortedSalles.map(s => s.capacitePlaces),
              backgroundColor: '#4BC0C0',
              borderColor: '#2a9d8f',
              borderWidth: 1
            }]
          });
  
          const seancesRes = await axios.get(`${API_URL}/seances`);
          const seancesByFilm = seancesRes.data.reduce((acc, seance) => {
            const title = seance.film.titre;
            acc[title] = (acc[title] || 0) + 1;
            return acc;
          }, {});
  
          setSeancesData({
            labels: Object.keys(seancesByFilm),
            datasets: [{
              label: 'Nombre de séances',
              data: Object.values(seancesByFilm),
              borderColor: '#FF4500',
              tension: 0.4
            }]
          });
        } catch (error) {
          setError("Erreur lors du chargement des données. Veuillez réessayer plus tard.");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (

    

        
      <div style={{ backgroundColor: "#1a191f", padding: "40px 20px", minHeight: "100vh" }}>
        
        <h1 style={{ textAlign: "center", color: "orange", marginBottom: "40px", fontSize: "2rem" }}>
          Statistiques CINA ZONE
        </h1>
        {isLoading && <p style={{ textAlign: 'center', color: 'white' }}>Chargement des données...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
        {!isLoading && !error && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
  
            <div style={{ backgroundColor: "#2a2842", borderRadius: "15px", padding: "20px" }}>
              <h3 style={{ color: "white", textAlign: "center" }}>Répartition des Genres</h3>
              <div style={{ height: "300px" }}>
                {genreData && <Doughnut data={genreData} options={{ plugins: { legend: { position: 'right', labels: { color: 'white' } } } }} />}
              </div>
            </div>
  
            <div style={{ backgroundColor: "#2a2842", borderRadius: "15px", padding: "20px" }}>
              <h3 style={{ color: "white", textAlign: "center" }}>Capacité des Salles</h3>
              <div style={{ height: "300px" }}>
                {sallesData && <Bar data={sallesData} options={{
                  scales: {
                    y: {
                      ticks: { color: 'white', callback: (value) => Number.isInteger(value) ? value : '' }
                    },
                    x: { ticks: { color: 'white' } }
                  },
                  plugins: { legend: { labels: { color: 'white' } } }
                }} />}
              </div>
            </div>
  
            <div style={{ backgroundColor: "#2a2842", borderRadius: "15px", padding: "20px" }}>
              <h3 style={{ color: "white", textAlign: "center" }}>Séances par Film</h3>
              <div style={{ height: "300px" }}>
                {seancesData && <Line data={seancesData} options={{
                  scales: {
                    y: {
                      ticks: { color: 'white', callback: (value) => Number.isInteger(value) ? value : '' }
                    },
                    x: { ticks: { color: 'white' } }
                  },
                  plugins: { legend: { labels: { color: 'white' } } }
                }} />}
              </div>
            </div>
  
          </div>
        )}
      </div>
      
    );
  };
  
  export default Statistiques;