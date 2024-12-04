import React, { Fragment } from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'

export default function Homepage() {
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
           <Header />       
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
                  <span>Nickname</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end header__dropdown-menu header__dropdown-menu--user">
                  <li>
                    <a href="profile.html">
                      <i className="ti ti-ghost" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="profile.html">
                      <i className="ti ti-stereo-glasses" />
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a href="profile.html">
                      <i className="ti ti-bookmark" />
                      Favorites
                    </a>
                  </li>
                  <li>
                    <a href="profile.html">
                      <i className="ti ti-settings" />
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti ti-logout" />
                      Logout
                    </a>
                  </li>
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
  {/* home */}
  <section className="home">
    <div className="container">
      <div className="row">
        {/* home title */}
        <div className="col-12">
          <h1 className="home__title">
            <b>NEW ITEMS</b> OF THIS SEASON
          </h1>
        </div>
        {/* end home title */}
        {/* home carousel */}
        <div className="col-12">
          <div className="home__carousel splide splide--home">
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
                  <div className="item item--hero">
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
                        <a href="details.html">The Edge of Tomorrow</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Action</a>
                        <a href="#">Triler</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--hero">
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
                  <div className="item item--hero">
                    <div className="item__cover">
                      <img src="img/covers/cover8.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">7.9</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Green Hell</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Romance</a>
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--hero">
                    <div className="item__cover">
                      <img src="img/covers/cover9.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--yellow">6.8</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">Survival Spliton</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Comedy</a>
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--hero">
                    <div className="item__cover">
                      <img src="img/covers/cover13.jpg" alt="" />
                      <a href="details.html" className="item__play">
                        <i className="ti ti-player-play-filled" />
                      </a>
                      <span className="item__rate item__rate--green">9.1</span>
                      <button className="item__favorite" type="button">
                        <i className="ti ti-bookmark" />
                      </button>
                    </div>
                    <div className="item__content">
                      <h3 className="item__title">
                        <a href="details.html">The Chebod</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="item item--hero">
                    <div className="item__cover">
                      <img src="img/covers/cover5.jpg" alt="" />
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
                        <a href="details.html">Shadow</a>
                      </h3>
                      <span className="item__category">
                        <a href="#">Drama</a>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end home carousel */}
      </div>
    </div>
  </section>
  {/* end home */}
  {/* content */}
  <section className="content">
    <div className="content__head">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* content title */}
            <h2 className="content__title">Recently updated</h2>
            {/* end content title */}
            {/* content tabs nav */}
            <ul
              className="nav nav-tabs content__tabs"
              id="content__tabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  id="1-tab"
                  className="active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  New items
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                  type="button"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Movies
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="3-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                  type="button"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  TV Shows
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="4-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                  type="button"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Anime
                </button>
              </li>
            </ul>
            {/* end content tabs nav */}
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      {/* content tabs */}
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="tab-1"
          role="tabpanel"
          aria-labelledby="1-tab"
          tabIndex={0}
        >
          <div className="row">
            {/* item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="item">
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
            </div>
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
        </div>
        <div
          className="tab-pane fade"
          id="tab-2"
          role="tabpanel"
          aria-labelledby="2-tab"
          tabIndex={0}
        >
          <div className="row">
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
            </div>
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
        </div>
        <div
          className="tab-pane fade"
          id="tab-3"
          role="tabpanel"
          aria-labelledby="3-tab"
          tabIndex={0}
        >
          <div className="row">
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
            {/* item */}
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
              <div className="item">
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
            </div>
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
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tab-4"
          role="tabpanel"
          aria-labelledby="4-tab"
          tabIndex={0}
        >
          <div className="row">
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
        </div>
      </div>
      {/* end content tabs */}
      <div className="row">
        {/* more */}
        <div className="col-12">
          <a className="section__more" href="catalog.html">
            View all
          </a>
        </div>
        {/* end more */}
      </div>
    </div>
  </section>
  {/* end content */}
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
  {/* section */}
  <section className="section section--border">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="section__title">Select your plan</h2>
        </div>
      </div>
      <div className="row">
        {/* plan */}
        <div className="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
          <div className="plan">
            <h3 className="plan__title">Basic</h3>
            <span className="plan__price">Free</span>
            <ul className="plan__list">
              <li className="plan__item">
                <i className="ti ti-circle-check" /> 7 days
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> 720p Resolution
              </li>
              <li className="plan__item plan__item--none">
                <i className="ti ti-circle-minus" /> Limited Availability
              </li>
              <li className="plan__item plan__item--none">
                <i className="ti ti-circle-minus" /> Desktop Only
              </li>
              <li className="plan__item plan__item--none">
                <i className="ti ti-circle-minus" /> Limited Support
              </li>
            </ul>
            <a href="signin.html" className="plan__btn">
              Register
            </a>
          </div>
        </div>
        {/* end plan */}
        {/* plan */}
        <div className="col-12 col-md-12 col-lg-4 order-md-1 order-lg-2">
          <div className="plan plan--orange">
            <h3 className="plan__title">Premium</h3>
            <span className="plan__price">
              $34.99 <sub>/ month</sub>
            </span>
            <ul className="plan__list">
              <li className="plan__item">
                <i className="ti ti-circle-check" /> 1 Month
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> Full HD
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> Limited Availability
              </li>
              <li className="plan__item plan__item--none">
                <i className="ti ti-circle-minus" /> TV &amp; Desktop
              </li>
              <li className="plan__item plan__item--none">
                <i className="ti ti-circle-minus" /> 24/7 Support
              </li>
            </ul>
            <button
              className="plan__btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#plan-modal"
            >
              Choose Plan
            </button>
          </div>
        </div>
        {/* end plan */}
        {/* plan */}
        <div className="col-12 col-md-6 col-lg-4 order-md-3">
          <div className="plan plan--red">
            <h3 className="plan__title">Cinematic</h3>
            <span className="plan__price">
              $49.99 <sub>/ month</sub>
            </span>
            <ul className="plan__list">
              <li className="plan__item">
                <i className="ti ti-circle-check" /> 2 Months
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> Ultra HD
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> Limited Availability
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> Any Device
              </li>
              <li className="plan__item">
                <i className="ti ti-circle-check" /> 24/7 Support
              </li>
            </ul>
            <button
              className="plan__btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#plan-modal"
            >
              Choose Plan
            </button>
          </div>
        </div>
        {/* end plan */}
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
            <a href="index.html" className="footer__logo">
              <img src="img/logo.svg" alt="" />
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
            <nav className="footer__nav">
              <a href="about.html">About Us</a>
              <a href="contacts.html">Contacts</a>
              <a href="privacy.html">Privacy policy</a>
            </nav>
            <button className="footer__back" type="button">
              <i className="ti ti-arrow-narrow-up" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
  {/* plan modal */}
  <div
    className="modal fade"
    id="plan-modal"
    tabIndex={-1}
    aria-labelledby="plan-modal"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal__content">
          <button
            className="modal__close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
          <form action="#" className="modal__form">
            <h4 className="modal__title">Select plan</h4>
            <div className="sign__group">
              <label htmlFor="fullname" className="sign__label">
                Name
              </label>
              <input
                id="fullname"
                type="text"
                name="name"
                className="sign__input"
                placeholder="Full name"
              />
            </div>
            <div className="sign__group">
              <label htmlFor="email" className="sign__label">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="sign__input"
                placeholder="example@domain.com"
              />
            </div>
            <div className="sign__group">
              <label className="sign__label" htmlFor="value">
                Choose plan:
              </label>
              <select className="sign__select" name="value" id="value">
                <option value={35}>Premium - $34.99</option>
                <option value={50}>Cinematic - $49.99</option>
              </select>
              <span className="sign__text">
                You can spend money from your account on the renewal of the
                connected packages, or to order cars on our website.
              </span>
            </div>
            <div className="sign__group">
              <label className="sign__label">Payment method:</label>
              <ul className="sign__radio">
                <li>
                  <input
                    id="type1"
                    type="radio"
                    name="type"
                    defaultChecked=""
                  />
                  <label htmlFor="type1">Visa</label>
                </li>
                <li>
                  <input id="type2" type="radio" name="type" />
                  <label htmlFor="type2">Mastercard</label>
                </li>
                <li>
                  <input id="type3" type="radio" name="type" />
                  <label htmlFor="type3">Paypal</label>
                </li>
              </ul>
            </div>
            <button type="button" className="sign__btn sign__btn--modal">
              <span>Proceed</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* end plan modal */}
</>

    </>
   
   
  )
}
