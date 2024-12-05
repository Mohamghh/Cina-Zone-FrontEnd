import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seances = () => {
  const [seances, setSeances] = useState([]);

  // Fetch Seance data
  useEffect(() => {
    axios.get('http://localhost:8080/seances') // Adjust your backend URL
      .then(response => setSeances(response.data))
      .catch(error => console.error('Error fetching seances:', error));
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
                      <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies <i className="ti ti-chevron-down" /></a>
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
                      <a className="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="ti ti-dots" />
                      </a><ul className="dropdown-menu header__dropdown-menu"><a className="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </a><li><a className="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" /><a href="signin.html">Sign in</a></li>
                        <li><a href="signup.html">Sign up</a></li>
                        <li><a href="forgot.html">Forgot password</a></li>
                        <li><a href="404.html">404 Page</a></li>
                      </ul>
                    </li>
                    {/* end dropdown */}
                  </ul>
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
        <section className="section section--details">
  {/* details background */}
  <div className="section__details-bg" data-bg="img/bg/actor__bg.jpg"></div>
  {/* end details background */}
  {/* details content */}
  <div className="container">
    <div className="row">
      {/* Title (Film Name) */}
      <div className="col-12">
        <h1 className="section__title section__title--head">
           Séances
        </h1>
      </div>
      {/* end Title */}
      
      {seances.map((seance) => (
        <div key={seance.id} className="col-12 col-lg-9 col-xl-6">
          <div className="item item--details">
            <div className="row">
              {/* Film Image */}
              <div className="col-12 col-sm-5 col-md-5">
                <div className="item__cover">
                  <img src={seance.film.image} alt={seance.film.titre} />
                </div>
              </div>
              {/* Film Details */}
              <div className="col-12 col-md-7">
                <div className="item__content">
                  <ul className="item__meta">
                    <li><span>Film:</span> {seance.film.titre}</li>
                    <li><span>Heure Début:</span> {seance.heureDebut}</li>
                    <li><span>Heure Fin:</span> {seance.heureFin}</li>
                    <li><span>Prix:</span> {seance.prix} MAD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* end content */}
    </div>
  </div>
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
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer__content">
                     {/* header logo */}
 <a href="index.html" className="header__logo" style={{ textDecoration: 'none', fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
 <span style={{ color: 'orange', fontWeight: 'bold' }}>CINA</span>
  <span style={{ color: 'white', fontWeight: 'bold' }}> ZONE </span>
  </a>                  
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
