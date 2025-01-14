import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { Link } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState([]); // State to store films

  useEffect(() => {
    // Fetch films from backend
    const fetchFilms = async () => {
      try {
        const response = await axios.get("http://localhost:8090/films");
        setFilms(response.data); // Store films in state
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);
  return (
    
    <>
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
             {/* header nav */}
             <Navigation />
             
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
            <h1 className="section__title section__title--head">Films</h1>
            {/* end section title */}
            {/* breadcrumbs */}
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__item--active">
                Films
              </li>
            </ul>
            {/* end breadcrumbs */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end page title */}
  {/* fixed filter wrap */}
  <div>
    {/* filter (fixed position) */}
    <div className="filter filter--fixed">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter__content">
              {/* menu btn */}
              <button className="filter__menu" type="button">
                <i className="ti ti-filter" />
                Filter
              </button>
              {/* end menu btn */}
              {/* filter desk */}
              <div className="filter__items">
                <select
                  className="filter__select"
                  name="genre"
                  id="filter__genre"
                ><option value={0}>All genres</option>
                <option value={1}>Action/Adventure</option>
                <option value={2}>Horror</option>
                <option value={3}>Science Fiction</option>
                <option value={4}>Biography</option>
                <option value={5}>Comedy</option>
                <option value={6}>Thriller</option>
                <option value={7}>Dance</option>
                <option value={8}>Documentary</option>
                <option value={9}>Drama</option>
                </select>
              </div>
              {/* end filter desk */}
              {/* filter btn */}
              {/* end filter btn */}
              {/* amount */}
              <span className="filter__amount">Showing 18 of 1713</span>
              {/* end amount */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end filter (fixed position) */}
    {/* catalog */}
    <div className="section section--catalog">
      <div className="container">
      <div className="row">

      {films.map((film) => (
        <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={film.id}>
          <div className="item">
            <div className="item__cover">
              <img
                src={`data:${film.imageType};base64,${film.image}`} // Render the image
                alt={film.titre}
                style={{ width: '166px', height: '246px', objectFit: 'cover' }} // Inline styling for consistent image size
              />
              <Link to="/Seances" className="item__play">
                <i className="ti ti-ticket" />
              </Link>
              <span className="item__rate item__rate--green">{film.prix}</span>
              <button className="item__favorite" type="button">
                <i className="ti ti-bookmark" />
              </button>
            </div>
            <div className="item__content">
              <h3 className="item__title">
                <a href="details.html">{film.titre}</a>
              </h3>
              <span className="item__category">
                <a href="#">{film.genre}</a>
              </span>
            </div>
          </div>
        </div>

      ))}
          {/* end item */}
        </div>
        <div className="row">
          {/* more 
          <div className="col-12">
            <button className="section__more" type="button">
              Load more
            </button>
          </div>*/}
          
        </div>
      </div>
    </div>
    {/* end catalog */}
  </div>
  {/* end fixed filter wrap */}
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
  {/* mobile filter */}
  <div className="mfilter">
    <div className="mfilter__head">
      <h6 className="mfilter__title">Filter</h6>
      <button className="mfilter__close" type="button">
        <i className="ti ti-x" />
      </button>
    </div>
    <div className="mfilter__select-wrap">
      <div className="sign__group">
        <select className="filter__select" name="mgenre" id="mfilter__genre">
          <option value={0}>All genres</option>
          <option value={1}>Action/Adventure</option>
          <option value={2}>Horror</option>
          <option value={3}>Science Fiction</option>
          <option value={4}>Biography</option>
          <option value={5}>Comedy</option>
          <option value={6}>Thriller</option>
          <option value={7}>Dance</option>
          <option value={8}>Documentary</option>
          <option value={9}>Drama</option>
        </select>
      </div>
    </div>
    <button className="mfilter__apply" type="button">
      Apply
    </button>
  </div>
</>

    </>
        
    
  );
};


export default Movies;