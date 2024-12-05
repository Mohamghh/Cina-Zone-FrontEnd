import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddSeance = () => {
  // State for the form
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [filmId, setFilmId] = useState('');
  const [salleId, setSalleId] = useState('');
  const [date, setDate] = useState('');

  // State for managing films and salles
  const [films, setFilms] = useState([]);
  const [salles, setSalles] = useState([]);

  // State for success and error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch films and salles from the API
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://localhost:8090/films');
        setFilms(response.data);
      } catch (error) {
        console.error('Error fetching films:', error);
        setErrorMessage('Failed to fetch films.');
      }
    };

    const fetchSalles = async () => {
      try {
        const response = await axios.get('http://localhost:8090/salles');
        setSalles(response.data);
      } catch (error) {
        console.error('Error fetching salles:', error);
        setErrorMessage('Failed to fetch salles.');
      }
    };

    fetchFilms();
    fetchSalles();
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the seance object to send
    const seance = {
      heureDebut,
      heureFin,
      film: { id: filmId },
      salle: { id: salleId },
      date,
    };

    try {
      const response = await axios.post('http://localhost:8090/AddSeance', seance);
      console.log('Seance successfully added:', response.data);

      // Show success message
      setSuccessMessage('Séance ajoutée avec succès !');
      setErrorMessage('');

      // Reset form fields
      setHeureDebut('');
      setHeureFin('');
      setFilmId('');
      setSalleId('');
      setDate('');

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error adding seance:', error);
      setErrorMessage('Failed to add séance. Please try again.');
      setSuccessMessage('');
    }
  }
  return (
   <>
   
       {/* header */}
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header__content">
            {/* header logo */}
            <a href="index.html" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
            <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
            <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
            </a>                  
            
            
            
            {/* end header logo */}
            {/* header nav */}
            <ul className="header__nav">
              {/* dropdown */}
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home <i className="ti ti-chevron-down" />
                </a>
                <ul className="dropdown-menu header__dropdown-menu">
                  <li>
                    <a href="index.html">Home style 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home style 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home style 3</a>
                  </li>
                </ul>
              </li>
              {/* end dropdown */}
              {/* dropdown */}
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalog <i className="ti ti-chevron-down" />
                </a>
                <ul className="dropdown-menu header__dropdown-menu">
                  <li>
                    <a href="catalog.html">Catalog style 1</a>
                  </li>
                  <li>
                    <a href="catalog2.html">Catalog style 2</a>
                  </li>
                  <li>
                    <a href="details.html">Details Movie</a>
                  </li>
                  <li>
                    <a href="details2.html">Details TV Series</a>
                  </li>
                </ul>
              </li>
              {/* end dropdown */}
              <li className="header__nav-item">
                <a href="pricing.html" className="header__nav-link">
                  Pricing plan
                </a>
              </li>
              {/* dropdown */}
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages <i className="ti ti-chevron-down" />
                </a>
                <ul className="dropdown-menu header__dropdown-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="actor.html">Actor</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="faq.html">Help center</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="../admin/index.html" target="_blank">
                      Admin pages
                    </a>
                  </li>
                </ul>
              </li>
              {/* end dropdown */}
              {/* dropdown */}
              <li className="header__nav-item">
                <a
                  className="header__nav-link header__nav-link--more"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots" />
                </a>
                <ul className="dropdown-menu header__dropdown-menu">
                  <li>
                    <a href="signin.html">Sign in</a>
                  </li>
                  <li>
                    <a href="signup.html">Sign up</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot password</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              {/* end dropdown */}
            </ul>
            {/* end header nav */}
            {/* header auth */}
            <div className="header__auth">
              <form action="#" className="header__search">
                <input
                  className="header__search-input"
                  type="text"
                  placeholder="Search..."
                />
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
                <a
                  className="header__nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN <i className="ti ti-chevron-down" />
                </a>
                <ul className="dropdown-menu header__dropdown-menu">
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                  <li>
                    <a href="#">French</a>
                  </li>
                </ul>
              </div>
              {/* end dropdown */}
              <a href="signin.html" className="header__sign-in">
                <i className="ti ti-login" />
                <span>sign in</span>
              </a>
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
            {/* section title */}
            <h1 className="section__title section__title--head">Seances</h1>
            {/* end section title */}
            {/* breadcrumbs */}
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__item--active">
               New Session
              </li>
            </ul>
            {/* end breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}
  {/* contacts */}
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8">
          <div className="row">
            {/* section title */}
            <div className="col-12">
              <h2 className="section__title">Add New Seance</h2>
            </div>
            {/* end section title */}
            <div className="col-12">
            <form onSubmit={handleSubmit} className="sign__form sign__form--full">
      <div className="row">
        {/* Film */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="filmId">
              Film
            </label>
            <select
              id="filmId"
              name="filmId"
              className="sign__input"
              value={filmId}
              onChange={(e) => setFilmId(e.target.value)}
              required
            >
              <option value="">Sélectionner un film</option>
              {films.map((film) => (
                <option key={film.id} value={film.id}>
                  {film.titre}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Salle */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="salleId">
              Salle
            </label>
            <select
              id="salleId"
              name="salleId"
              className="sign__input"
              value={salleId}
              onChange={(e) => setSalleId(e.target.value)}
              required
              style={{
                color: '#fff', // Ensure the text color is black
                
              }}
            >
              <option value="">Sélectionner une salle</option>
              {salles.map((salle) => (
                <option key={salle.id} value={salle.id}>
                  {salle.numeroSalle}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Date */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              className="sign__input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Heure Début */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="heureDebut">
              Heure Début
            </label>
            <input
              id="heureDebut"
              type="time"
              name="heureDebut"
              className="sign__input"
              value={heureDebut}
              onChange={(e) => setHeureDebut(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Heure Fin */}
        <div className="col-12">
          <div className="sign__group">
            <label className="sign__label" htmlFor="heureFin">
              Heure Fin
            </label>
            <input
              id="heureFin"
              type="time"
              name="heureFin"
              className="sign__input"
              value={heureFin}
              onChange={(e) => setHeureFin(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="sign__btn sign__btn--small">
            Ajouter la Séance
          </button>
        </div>
      </div>
      {/* Success/Error Messages */}
      {successMessage && <p className="success-message"
       style={{
  color: 'orange',
}}
      >{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>


            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="row">
            {/* contacts */}
            <div className="col-12">
              <h2 className="section__title section__title--mt">
                Get In Touch
              </h2>
              <p className="section__text">
                We are always happy to help and provide more information about
                our services. You can contact us through email, phone, or by
                filling out the form on our website. Thank you for considering
                us!
              </p>
              <div className="contacts__social">
              <a href="#">
  <i className="ti ti-brand-facebook" />
</a>
<a href="#">
  <i className="ti ti-brand-x" />
</a>
<a
  href="https://www.instagram.com/mohameedghh/"
  target="_blank"
>
  <i className="ti ti-brand-instagram" />
</a>
<a href="#">
  <i className="ti ti-brand-discord" />
</a>
<a href="#">
  <i className="ti ti-brand-telegram" />
</a>
<a href="#">
  <i className="ti ti-brand-tiktok" />
</a>
              </div>
            </div>
            {/* end contacts */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end contacts */}
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
  <span className="footer__copyright">
  © CINAZONE, 2024—2025 <br /> Create by   
    Mohamed - Hamza
  
</span>
            <button className="footer__back" type="button">
              <i className="ti ti-arrow-narrow-up" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>

   
   </>
    
  );
};

export default AddSeance;