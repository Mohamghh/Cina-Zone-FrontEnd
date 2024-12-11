import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';




const Salles = () => {
  const [salles, setSalles] = useState([]);

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
                    <li className="breadcrumbs__item"><a href="index.html">Home</a></li>
                    <li className="breadcrumbs__item breadcrumbs__item--active">Salles</li>
                  </ul>
                  {/* end breadcrumbs */}
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
