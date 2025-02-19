import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { AuthContext } from "../AuthProvider"





const Salles = () => {
  const [salles, setSalles] = useState([]);
  const { keycloak, login, register, authenticated } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    const isClient = keycloak?.hasRealmRole("client");
    const isSuperviseur = keycloak?.hasRealmRole("superviseur");
  
    const username = authenticated ? keycloak.tokenParsed?.preferred_username || "Utilisateur" : null; // Récupère le nom d'utilisateur ou un fallback

  // Fetch salles from the backend
  const fetchSalles = async () => {
    try {
      const response = await axios.get('http://localhost:8090/salles'); // URL to get salles
      setSalles(response.data); // Update state with fetched salles
    } catch (error) {
      console.error('Error fetching salles', error);
    }
  };

  // Re-fetch salles every time the component mounts
  useEffect(() => {
    fetchSalles();
  }, []);
  return (

    <>
    
      <div>
        {/* header */}
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                     {/* header logo */}
 <Link to="/" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
 <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
  <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
  </Link>                  
 {/* end header logo */}
                  {/* header nav */}
                  {/* end header nav */}
                  <Navigation />
                  
                  {/* header auth */}
                  <div className="header__auth">
                    <form action="#" className="header__search">
                      <input className="header__search-input" type="text" placeholder="Search..." />
                      <button className="header__search-button" type="button">
                        <i className="ti ti-search" />
                      </button>
                      <button className="header__search-close" type="button">
                        <i className="ti ti-x" />
                      </button>
                    </form>
                    <button className="header__search-btn" type="button">
                      <i className="ti ti-search" />
                    </button>
                    {/* dropdown */}
                    <div className="header__lang">
                      <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">EN <i className="ti ti-chevron-down" /></a>
                      <ul className="dropdown-menu header__dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">French</a></li>
                      </ul>
                    </div>
                    {/* end dropdown */}
                     {/* dropdown */}
              <div className="header__profile">
                <a
                  className="header__sign-in header__sign-in--user"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-user" />
                  <span>
        {authenticated ? `${username}` : "S'inscrire"}
      </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end header__dropdown-menu header__dropdown-menu--user">

                {!authenticated && (  
                <li>
                <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      login();
                    }}
  >
                    <i className="ti ti-login" />
                       Login
                       </a>
                      </li>
                      )}

                      {!authenticated && (
                      <li>
                      <a
                         href="#"
                         onClick={(e) => {
                         e.preventDefault();
                           register();
                          }}
  >
                           <i className="ti ti-user" />
                               Register
                                </a>
                          </li>
                          )}
                 
                  <li>
                    <a href="profile.html">
                      <i className="ti ti-settings" />
                      Settings
                    </a>
                  </li>
                  {authenticated && (
                  <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent page reload
                            logout(); // Call the logout function
                          }}
                        >
                          <i className="ti ti-logout" />
                          Logout
                        </a>
                      </li>
                       )}
                </ul>
              </div>
              {/* end dropdown */}
            </div>
                  {/* end header auth */}
                  {/* header menu btn */}
                  <button className="header__btn" type="button">
                    <span />
                    <span />
                    <span />
                  </button>
                  {/* end header menu btn */}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header */}
         {/* page title */}
          <section className="section section--first">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__wrap">
                    <div>
          <style>
            {`
              .section__title {
                margin-bottom: 10px; /* Espace entre le titre et les breadcrumbs */
                text-align: left; /* Aligne le titre à gauche */
                font-size: 24px; /* Taille du titre */
                font-weight: bold;
              }
        
              .breadcrumbs {
                margin: 0;
                padding: 0;
                list-style: none;
                text-align: left; /* Aligne les breadcrumbs à gauche */
                font-size: 14px; /* Taille du texte des breadcrumbs */
                color: #555; /* Couleur par défaut des breadcrumbs */
              }
        
              .breadcrumbs__item {
                display: inline; /* Affiche les éléments en ligne */
              }
        
              .breadcrumbs__item a {
                text-decoration: none; /* Enlève le soulignement des liens */
                color: orange; /* Couleur pour "Home" */
                font-weight: bold; /* Met "Home" en gras */
              }
        
              .breadcrumbs__item a:hover {
                text-decoration: underline; /* Soulignement au survol */
              }
        
              .breadcrumbs__item--active {
                color: #555; /* Couleur de l'élément actif */
                font-weight: bold; /* Met l'élément actif en gras */
              }
        
              .breadcrumbs__separator {
                margin: 0 5px; /* Espace autour du séparateur */
                color: #555; /* Couleur du séparateur */
              }
            `}
          </style>
        
          {/* section title */}
          <h1 className="section__title section__title--head">Salles</h1>
          {/* breadcrumbs */}
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <Link to="/">Home</Link> 
            </li>
            <span className="breadcrumbs__separator"></span>
            <li className="breadcrumbs__item breadcrumbs__item--active">Salles</li>
          </ul>
          {/* end breadcrumbs */}
        </div>
                      {/* Add Film Button */}
                      <div style={{ marginTop: "10px" }}>
                        <Link
                          to="/AddSalle"
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <>
      {authenticated && !isClient && !isSuperviseur && (
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Ajouter Salle
        </button>
      )}
    </>
                        </Link>
                      </div>
                      {/* end Add Film Button */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          {/* end page title */}
        {/* about */}
        <section className="section">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title"><b>CINAZONE</b> – Best Place for Movies Booking Cinema</h2>
                <p className="section__text">Welcome to <b>CINAZONE</b> cinema site, the ultimate destination for all film enthusiasts. Immerse yourself in a world of captivating stories, stunning visuals, and unforgettable performances. Explore our extensive library of movies, spanning across genres, eras, and cultures.</p>
                <p className="section__text">Indulge in the joy of cinema with our curated collections, featuring handpicked movies grouped by themes, directors, or actors. Dive into the world of cinematic magic and let yourself be transported to new realms of imagination and emotion.</p>
              </div>
              {/* end section title */}
            </div>
          </div>
        </section>
        {/* end about */}
        {/* how it works */}
        <section className="section section--border">
          <div className="container">
            <div className="row">
              {/* section title */}
              <div className="col-12">
                <h2 className="section__title">Salles Disponibles</h2>
              </div>
              {/* end section title */}
              {/* how box */}
              <div className="row">
               {salles.map((salle, index) => (
               <div key={index} className="col-12 col-lg-4">
              <div className="how">
                
                
              <span className="how__number">Salle {salle.numeroSalle}</span>
              
             <p className="how__text">Capacité: {salle.capacitePlaces} places</p>
             </div>
             </div>
             ))}
             </div>
              {/* ebd how box */}
            </div>
          </div>
        </section>
        {/* end how it works */}
        {/* roadmap */}
        <section className="section section--border">
          <div className="container">
            <div className="row">
              {/* carousel */}
              <div className="col-12">
                <div className="section__roadmap splide splide--roadmap">
                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev" type="button">
                      <i className="ti ti-chevron-left" />
                    </button>
                    <button className="splide__arrow splide__arrow--next" type="button">
                      <i className="ti ti-chevron-right" />
                    </button>
                  </div>
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <div className="roadmap roadmap--active">
                          <h3 className="roadmap__title">2023 Q4</h3>
                          <ul className="roadmap__list">
                            <li>Conduct market research on movies and TV series, study the needs and preferences of the target audience.</li>
                            <li>Determine the main goals and objectives of the site: providing content, functionality and design.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="splide__slide">
                        <div className="roadmap roadmap--active">
                          <h3 className="roadmap__title">2024 Q1</h3>
                          <ul className="roadmap__list">
                            <li>Create an information architecture for the site, defining the main sections and content categories.</li>
                            <li>Development of an attractive and intuitive site design, providing easy navigation and high user interactivity.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="splide__slide">
                        <div className="roadmap">
                          <h3 className="roadmap__title">2024 Q2</h3>
                          <ul className="roadmap__list">
                            <li>Creating a database for movies and TV series including information on title, genre, actors, ratings and reviews.</li>
                            <li>Development of a powerful search engine which will allow users to easily find films and TV series.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="splide__slide">
                        <div className="roadmap">
                          <h3 className="roadmap__title">2024 Q3</h3>
                          <ul className="roadmap__list">
                            <li>Developing a user registration and authorization system to create personal accounts.</li>
                            <li>Implementation of the ability to save films or series in the "Favorites" list, leave reviews and ratings.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="splide__slide">
                        <div className="roadmap">
                          <h3 className="roadmap__title">2024 Q4</h3>
                          <ul className="roadmap__list">
                            <li>Protection of user data, applying appropriate security protocols.</li>
                            <li>Testing the site on different devices and browsers, fixing bugs and improving performance.</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end carousel */}
            </div>
          </div>
        </section>
        {/* end roadmap */}
        {/* partners */}
        <section className="section section--pt">
          <div className="container">
            <div className="row">
            </div>
            <div className="row">
            </div>
          </div>
        </section>
        {/* end partners */}
        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer__content">
                <a href="index.html" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
<span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
 <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
 </a>                  
                  <span className="footer__copyright">© CINAZONE, 2024—2025 <br /> Create by Mohamed - Hamza</span>
                  <button className="footer__back" type="button">
                    <i className="ti ti-arrow-narrow-up" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
      </div>



    
    </>
  );
};

export default Salles;
