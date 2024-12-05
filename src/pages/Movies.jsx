import React, { useEffect, useState } from "react";
import axios from "axios";

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
            <a href="index.html" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
            <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
             <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
             </a>                  
            {/* end header logo */}
             {/* header nav */}
 <ul className="header__nav">
   {/* dropdown */}
   <li className="header__nav-item">
     <a className="header__nav-link" href="#" role="button"  aria-expanded="false">Home <i className="" /></a>
   </li>
   {/* end dropdown */}
   {/* dropdown */}
   <li className="header__nav-item">
     <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies <i className="" /></a>
   </li>
   {/* end dropdown */}
   <li className="header__nav-item">
     <a href="pricing.html" className="header__nav-link">Seances</a>
   </li>
   {/* dropdown */}
    {/* end dropdown */}
   <li className="header__nav-item">
      <a href="pricing.html" className="header__nav-link">Salles</a>
     </li>
    {/* dropdown */}
   <li className="header__nav-item">
     <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <i className="ti ti-chevron-down" /></a>
     <ul className="dropdown-menu header__dropdown-menu">
       <li><a href="about.html">About Us</a></li>
       <li><a href="profile.html">Profile</a></li>
       <li><a href="actor.html">Actor</a></li>
       <li><a href="contacts.html">Contacts</a></li>
       <li><a href="faq.html">Help center</a></li>
       <li><a href="privacy.html">Privacy policy</a></li>
       <li><a href="../admin/index.html" target="_blank">Admin pages</a></li>
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
                >
                  <option value={0}>All genres</option>
                  <option value={1}>Action/Adventure</option>
                  <option value={2}>Animals</option>
                  <option value={3}>Animation</option>
                  <option value={4}>Biography</option>
                  <option value={5}>Comedy</option>
                  <option value={6}>Cooking</option>
                  <option value={7}>Dance</option>
                  <option value={8}>Documentary</option>
                  <option value={9}>Drama</option>
                  <option value={10}>Education</option>
                  <option value={11}>Entertainment</option>
                  <option value={12}>Family</option>
                  <option value={13}>Fantasy</option>
                  <option value={14}>History</option>
                  <option value={15}>Horror</option>
                  <option value={16}>Independent</option>
                  <option value={17}>International</option>
                  <option value={18}>Kids</option>
                  <option value={19}>Medical</option>
                  <option value={20}>Military/War</option>
                  <option value={21}>Music</option>
                  <option value={22}>Mystery/Crime</option>
                  <option value={23}>Nature</option>
                  <option value={24}>Paranormal</option>
                  <option value={25}>Politics</option>
                  <option value={26}>Racing</option>
                  <option value={27}>Romance</option>
                  <option value={28}>Sci-Fi/Horror</option>
                  <option value={29}>Science</option>
                  <option value={30}>Science Fiction</option>
                  <option value={31}>Science/Nature</option>
                  <option value={32}>Spanish</option>
                  <option value={33}>Travel</option>
                  <option value={34}>Western</option>
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
                style={{ width: '195px', height: '285px', objectFit: 'cover' }} // Inline styling for consistent image size
              />
              <a href="details.html" className="item__play">
                <i className="ti ti-player-play-filled" />
              </a>
              <span className="item__rate item__rate--green">{film.duree}</span>
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
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover2.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">7.1</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover3.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--red">6.3</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Whitney</a>
                </h3>
                <span className="item__category">
                  <a href="#">Romance</a>
                  <a href="#">Drama</a>
                  <a href="#">Music</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover4.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--yellow">6.9</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Blindspotting</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                  <a href="#">Drama</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover5.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">8.4</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">I Dream in Another Language</a>
                </h3>
                <span className="item__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover6.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">7.1</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover7.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">7.1</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover8.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--red">5.5</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">I Dream in Another Language</a>
                </h3>
                <span className="item__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover9.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--yellow">6.7</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Blindspotting</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                  <a href="#">Drama</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover10.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--red">5.6</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Whitney</a>
                </h3>
                <span className="item__category">
                  <a href="#">Romance</a>
                  <a href="#">Drama</a>
                  <a href="#">Music</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover11.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">9.2</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover12.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">8.4</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">I Dream in Another Language</a>
                </h3>
                <span className="item__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover13.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">8.0</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">I Dream in Another Language</a>
                </h3>
                <span className="item__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover14.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">7.2</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover15.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--yellow">5.9</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Whitney</a>
                </h3>
                <span className="item__category">
                  <a href="#">Romance</a>
                  <a href="#">Drama</a>
                  <a href="#">Music</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover16.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">8.3</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Blindspotting</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                  <a href="#">Drama</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover17.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">8.0</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">I Dream in Another Language</a>
                </h3>
                <span className="item__category">
                  <a href="#">Action</a>
                  <a href="#">Triler</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
          {/* item */}
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="item">
              <div className="item__cover">
                <img src="img/covers/cover18.jpg" alt="" />
                <a href="details.html" className="item__play">
                  <i className="ti ti-player-play-filled" />
                </a>
                <span className="item__rate item__rate--green">7.1</span>
                <button className="item__favorite" type="button">
                  <i className="ti ti-bookmark" />
                </button>
              </div>
              <div className="item__content">
                <h3 className="item__title">
                  <a href="details.html">Benched</a>
                </h3>
                <span className="item__category">
                  <a href="#">Comedy</a>
                </span>
              </div>
            </div>
          </div>
          {/* end item */}
        </div>
        <div className="row">
          {/* more */}
          <div className="col-12">
            <button className="section__more" type="button">
              Load more
            </button>
          </div>
          {/* end more */}
        </div>
      </div>
    </div>
    {/* end catalog */}
  </div>
  {/* end fixed filter wrap */}
  {/* section */}
  <section className="section section--border">
    <div className="container">
      <div className="row">
        {/* section title */}
        <div className="col-12">
          <div className="section__title-wrap">
            <h2 className="section__title">Expected premiere</h2>
            <a
              href="catalog.html"
              className="section__view section__view--carousel"
            >
              View All
            </a>
          </div>
        </div>
        {/* end section title */}
        {/* carousel */}
        <div className="col-12">
          <div className="section__carousel splide splide--content">
            <div className="splide__arrows">
              <button
                className="splide__arrow splide__arrow--prev"
                type="button"
              >
                <i className="ti ti-chevron-left" />
              </button>
              <button
                className="splide__arrow splide__arrow--next"
                type="button"
              >
                <i className="ti ti-chevron-right" />
              </button>
            </div>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">8.4</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">I Dream in Another Language</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover2.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">7.1</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Benched</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover3.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--red">6.3</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Whitney</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover4.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--yellow">6.9</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Blindspotting</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover5.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">8.4</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">I Dream in Another Language</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover6.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">7.1</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Benched</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover7.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">7.1</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Benched</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover8.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--red">5.5</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">I Dream in Another Language</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover9.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--yellow">6.7</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Blindspotting</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover10.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--red">5.6</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Whitney</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                        <a href="#">Music</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover11.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">9.2</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Benched</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--carousel">
                    <div className="item__cover">
                      <img src="img/covers/cover12.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">8.4</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">I Dream in Another Language</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                    </div>
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
  {/* end section */}
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
              © CINAZONE, 2024—2025 <br /> Created by Mohamed - Hamza
              
            </span>
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
          <option value={2}>Animals</option>
          <option value={3}>Animation</option>
          <option value={4}>Biography</option>
          <option value={5}>Comedy</option>
          <option value={6}>Cooking</option>
          <option value={7}>Dance</option>
          <option value={8}>Documentary</option>
          <option value={9}>Drama</option>
          <option value={10}>Education</option>
          <option value={11}>Entertainment</option>
          <option value={12}>Family</option>
          <option value={13}>Fantasy</option>
          <option value={14}>History</option>
          <option value={15}>Horror</option>
          <option value={16}>Independent</option>
          <option value={17}>International</option>
          <option value={18}>Kids</option>
          <option value={19}>Medical</option>
          <option value={20}>Military/War</option>
          <option value={21}>Music</option>
          <option value={22}>Mystery/Crime</option>
          <option value={23}>Nature</option>
          <option value={24}>Paranormal</option>
          <option value={25}>Politics</option>
          <option value={26}>Racing</option>
          <option value={27}>Romance</option>
          <option value={28}>Sci-Fi/Horror</option>
          <option value={29}>Science</option>
          <option value={30}>Science Fiction</option>
          <option value={31}>Science/Nature</option>
          <option value={32}>Spanish</option>
          <option value={33}>Travel</option>
          <option value={34}>Western</option>
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