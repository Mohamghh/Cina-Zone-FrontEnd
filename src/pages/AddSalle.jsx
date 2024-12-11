import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';

const AddSalle = () => {
  const [numeroSalle, setNumeroSalle] = useState("");
  const [capacitePlaces, setCapacitePlaces] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data object for the POST request
    const salleData = {
      numeroSalle: parseInt(numeroSalle),
      capacitePlaces: parseInt(capacitePlaces),
    };

    try {
      const response = await axios.post("http://localhost:8090/AddSalle", salleData);
      setSuccessMessage("Salle ajoutée avec succès !");
      setErrorMessage(""); // Clear any previous error message
      setNumeroSalle("");
      setCapacitePlaces("");
    } catch (error) {
      setErrorMessage("Erreur lors de l'ajout de la salle. Veuillez réessayer.");
      setSuccessMessage(""); // Clear any previous success message
      console.error(error);
    }
};
 
  return (
    <>
      
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
            <Navigation />
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
            <h1 className="section__title section__title--head">Salles</h1>
            {/* end section title */}
            {/* breadcrumbs */}
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__item--active">
               Salle
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
              <h2 className="section__title">Add New Salle</h2>
            </div>
            {/* end section title */}
            <div className="col-12">
            <form onSubmit={handleSubmit} className="sign__form sign__form--full">

            <div className="row">
        {/* Numéro de Salle */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="numeroSalle">
              Numéro de Salle
            </label>
            <input
              id="numeroSalle"
              type="number"
              name="numeroSalle"
              className="sign__input"
              placeholder="Numéro de la salle"
              value={numeroSalle}
              onChange={(e) => setNumeroSalle(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Capacité des Places */}
        <div className="col-12 col-xl-6">
          <div className="sign__group">
            <label className="sign__label" htmlFor="capacitePlaces">
              Capacité des Places
            </label>
            <input
              id="capacitePlaces"
              type="number"
              name="capacitePlaces"
              className="sign__input"
              placeholder="Capacité des places"
              value={capacitePlaces}
              onChange={(e) => setCapacitePlaces(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="sign__btn sign__btn--small">
            Ajouter la Salle
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
              © HOTFLIX, 2019—2024 <br /> Create by{" "}
              <a
                href="https://themeforest.net/user/dmitryvolkov/portfolio"
                target="_blank"
              >
                Dmitry Volkov
              </a>
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

export default AddSalle;
