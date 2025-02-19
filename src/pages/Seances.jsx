import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { AuthContext } from "../AuthProvider"


const Seances = () => {
  const [seances, setSeances] = useState([]);
  const [selectedSeance, setSelectedSeance] = useState(null);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const [alertMessage, setAlertMessage] = useState(null);
  const { keycloak, login, register, authenticated } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    const isClient = keycloak?.hasRealmRole("client");
    const isRespoSalle = keycloak?.hasRealmRole("responsable_salle");
    const isSuperviseur = keycloak?.hasRealmRole("superviseur");
    const username = authenticated ? keycloak.tokenParsed?.preferred_username || "Utilisateur" : null; // Récupère le nom d'utilisateur ou un fallback

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeances = async () => {
      try {
        const response = await axios.get('http://localhost:8090/seances');
        setSeances(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des séances:', error);
      }
    };

    fetchSeances();
  }, []);

  const handleReserve = (seance) => {
    setSelectedSeance(seance);
    setShowReservationForm(true);
  };

  const handleSubmitReservation = async (e) => {
    e.preventDefault();
    

    if (!reservationDate) {
      setAlertMessage({ type: 'error', text: 'Veuillez sélectionner une date.' });
      return;
    }

    const reservationData = {
      date_reservation: reservationDate,
      seance: { id: selectedSeance.id },
    };

    try {
      // Create the reservation by posting data to the server
      const response = await axios.post('http://localhost:8090/addreservation', reservationData);

      // Pass reservation details along with the amount to the Payment page
      const reservationDetails = response.data;
      const amount = selectedSeance.film.prix; // assuming price is part of the seance object

      setAlertMessage({ type: 'success', text: 'Réservation confirmée avec succès !' });

      // Navigate to the payment page with reservation details and price
      navigate('/payement', {
        state: { 
          reservationDetails, 
          amount,
          appName: 'CINA Zone' // App name
        }
      });

      setShowReservationForm(false);
      setReservationDate('');
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      setAlertMessage({ type: 'error', text: 'Échec de la réservation.' });
    }
  };

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
                  <Navigation />
                  
                  {/* end header nav */}
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
         <h1 className="section__title section__title--head">Seances</h1>
         {/* breadcrumbs */}
         <ul className="breadcrumbs">
           <li className="breadcrumbs__item">
             <Link to="/">Home</Link> 
           </li>
           <span className="breadcrumbs__separator"></span>
           <li className="breadcrumbs__item breadcrumbs__item--active">Seances</li>
         </ul>
         {/* end breadcrumbs */}
       </div>
                     {/* Add Film Button */}
                     <div style={{ marginTop: "10px" }}>
                       <Link
                         to="/AddSeance"
                         style={{
                           textDecoration: "none",
                         }}
                       >
                         <>
      {authenticated && !isClient && !isRespoSalle && !isSuperviseur && (
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
          Ajouter Seance
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
        <section className="section section--details">
  {/* details background */}
  <div className="section__details-bg" data-bg="img/bg/actor__bg.jpg"></div>
  {/* end details background */}
  {/* details content */}
  <div className="container">
    <div className="row">
      {/* Title (Film Name) */}
      {/* end Title */}
      {seances.map((seance) => (
          <div key={seance.id} className="col-12 col-lg-9 col-xl-6">
            <div className="item item--details">
              <div className="row">
                {/* Film Title Above Image */}
        <div className="col-12">
          <h2 className="section__title section__title--film" style={{ marginBottom: '15px'  }}>
            {seance.film.titre}
          </h2>
        </div>
        {/* Film Image */}
                {/* Film Image */}
                <div className="col-12 col-sm-5 col-md-5">
                  <div className="item__cover">
                  <img
                    src={seance.film.image ? `data:${seance.film.imageType};base64,${seance.film.image}` : '/path/to/placeholder.png'}
                    alt={seance.film.titre}
                    className="img-fluid"
                    style={{ width: '270px', height: '320px', objectFit: 'cover' }}
                  />
                  </div>
                </div>
                {/* Film Details */}
                <div className="col-12 col-md-7">
                  <div className="item__content">
                    <ul className="item__meta">
                    <li>
                     <span>Début:</span> <span style={{ color: 'orange', fontWeight: 'bold' }}>{seance.heureDebut}  </span>
                     </li>
                     <li>
                     <span>Fin:</span> <span style={{ color: 'orange', fontWeight: 'bold' }}>{seance.heureFin} </span>
                     </li>
                      <li>
                      <span>Salle:</span> <span style={{ color: 'orange', fontWeight: 'bold' }} > {seance.salle.numeroSalle} </span>
                      </li>
                   
                    
                      <li>
                        <span>Prix:</span> <span style={{ color: 'orange', fontWeight: 'bold' }}> {seance.film.prix} MAD </span>
                      </li>
                    </ul>

                    <button
                      className="btn btn-primary"
                      onClick={() => handleReserve(seance)}
                      style={{
                        backgroundColor: 'orange',
                        borderColor: 'orange',
                        color: 'white',
                      }}
                      
                      
                    > 
                      Get Ticket 
                    </button>
                    
                    
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* end content */}
    </div>
  </div>
  {showReservationForm && selectedSeance && (
  <>
    {/* Bootstrap Modal */}
    <div
      className="modal fade show"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.7)" }} // Darker background behind the modal
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content" style={{ backgroundColor: "grey" }}> {/* Solid white background for the modal content */}
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">Réserver une Séance</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowReservationForm(false)}
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p>
              <strong style={{ color: 'orange', fontWeight: 'bold' }} >Film:</strong> {selectedSeance.film.titre}
            </p>
            <p>
              <strong style={{ color: 'orange', fontWeight: 'bold' }}>Salle:</strong> {selectedSeance.salle.numeroSalle}
            </p>
            <p>
              <strong style={{ color: 'orange', fontWeight: 'bold' }}>Horaires:</strong> {selectedSeance.heureDebut} -{" "}
              {selectedSeance.heureFin}
            </p>
            <p>
              <strong style={{ color: 'orange', fontWeight: 'bold' }}>Prix:</strong> {selectedSeance.film.prix} MAD
            </p>

            <form onSubmit={handleSubmitReservation} className="space-y-3">
              <div className="mb-3">
                <label className="form-label" style={{ color: 'orange', fontWeight: 'bold' }}>Date de réservation</label>
                <input
                  type="date"
                  className="form-control"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  required
                  
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: '#ff8c00', borderColor: '#ff8c00', color: 'white' }}
                
              >
                Confirmer la Réservation
              </button>
            </form>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowReservationForm(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)}

      
  {/* end details content */}
</section>
        {/* content */}
        <section className="content">
          <div className="content__head content__head--mt">
            <div className="container">
              <div className="row">
                <div className="col-12">
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* content tabs */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabIndex={0}>
                    <div className="row">
                    </div>
                    <div className="row">
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabIndex={0}>
                    {/* project gallery */}
                    <div className="gallery gallery--full" itemScope>
                      <div className="row">
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-1.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-1.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 1</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-2.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-2.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 2</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-3.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-3.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 3</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-4.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-4.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 4</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-5.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-5.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 5</figcaption>
                        </figure>
                        {/* end gallery item */}
                        {/* gallery item */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                          <a href="img/gallery/project-6.jpg" itemProp="contentUrl" data-size="1920x1280">
                            <img src="img/gallery/project-6.jpg" itemProp="thumbnail" alt="Image description" />
                          </a>
                          <figcaption itemProp="caption description">Some image caption 6</figcaption>
                        </figure>
                        {/* end gallery item */}
                      </div>
                    </div>
                    {/* end project gallery */}
                  </div>
                </div>
                {/* end content tabs */}
              </div>
            </div>
          </div>
        </section>
        {/* end content */}
        {/* footer */}
        <footer className="footer"
         style={{
          
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          padding: '10px 0',
          zIndex: 1000,
        }}
      >
        
        
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer__content">
                     {/* header logo */}
                   <Link to="/" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
                   <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
                   <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
                    </Link>                  
                    {/* end header logo */}
                  <span className="footer__copyright">© CINAZONE, 2024—2025 <br /> Created by Mohamed - Hamza
                    <button className="footer__back" type="button">
                      <i className="ti ti-arrow-narrow-up" />
                    </button>
                  </span></div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* Root element of PhotoSwipe. Must have class pswp. */}
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          {/* Background of PhotoSwipe. 
	It's a separate element, as animating opacity is faster than rgba(). */}
          <div className="pswp__bg" />
          {/* Slides wrapper with overflow:hidden. */}
          <div className="pswp__scroll-wrap">
            {/* Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. */}
            {/* don't modify these 3 pswp__item elements, data is added later on. */}
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                {/*  Controls are self-explanatory. Order can be changed. */}
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                {/* Preloader */}
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        {/* JS */}
      </div>
    
    </>
  );
};

export default Seances;
