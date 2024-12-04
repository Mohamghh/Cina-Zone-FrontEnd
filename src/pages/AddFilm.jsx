import React, { useState } from "react";
import axios from "axios";

const AddFilm = () => {
  // Define state variables for form fields
  const [titre, setTitre] = useState("");
  const [duree, setDuree] = useState("");
  const [genre, setGenre] = useState("");
  const [prix, setPrix] = useState(""); // Price state
  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert duration and price to numbers
    const dureeLong = parseInt(duree, 10);
    const prixDecimal = parseFloat(prix);

    // Validation checks for duration and price
    if (isNaN(dureeLong) || dureeLong <= 0) {
      alert("La durée doit être un nombre entier positif.");
      return;
    }

    if (isNaN(prixDecimal) || prixDecimal <= 0) {
      alert("Le prix doit être un nombre positif.");
      return;
    }

    // Prepare form data to be sent to the backend
    const formData = new FormData();
    formData.append(
      "film",
      JSON.stringify({
        titre,
        duree: dureeLong,
        genre,
        prix: prixDecimal,
      })
    );
    formData.append("file", imageFile);

    try {
      // Send data to the backend using axios
      const response = await axios.post("http://localhost:8090/addfilm", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Set success message if film was added successfully
      setSuccessMessage("Film ajouté avec succès !");
      setErrorMessage(""); // Reset error message
      console.log("Film ajouté avec succès", response.data);
    } catch (error) {
      // Handle errors and show error message
      setErrorMessage("Erreur lors de l'ajout du film.");
      setSuccessMessage(""); // Reset success message
      console.error("Erreur lors de l'ajout du film", error.response);
    }
  };
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
            <a href="index.html" className="header__logo">
              <img src="img/logo.svg" alt="" />
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
            <h1 className="section__title section__title--head">Contacts</h1>
            {/* end section title */}
            {/* breadcrumbs */}
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumbs__item breadcrumbs__item--active">
               New Film
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
              <h2 className="section__title">Add New Film</h2>
            </div>
            {/* end section title */}
            <div className="col-12">
            <form onSubmit={handleSubmit} className="sign__form sign__form--full">
                  <div className="row">
                    {/* Titre */}
                    <div className="col-12 col-xl-6">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="titre">
                          Titre
                        </label>
                        <input
                          id="titre"
                          type="text"
                          name="titre"
                          className="sign__input"
                          placeholder="Titre du film"
                          value={titre}
                          onChange={(e) => setTitre(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Durée */}
                    <div className="col-12 col-xl-6">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="duree">
                          Durée (en minutes)
                        </label>
                        <input
                          id="duree"
                          type="number"
                          name="duree"
                          className="sign__input"
                          placeholder="Durée"
                          value={duree}
                          onChange={(e) => setDuree(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Genre */}
                    <div className="col-12">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="genre">
                          Genre
                        </label>
                        <select
                          id="genre"
                          name="genre"
                          className="sign__input"
                          value={genre}
                          onChange={(e) => setGenre(e.target.value)}
                          required
                        >
                          <option value="">Sélectionner un genre</option>
                          <option value="HORROR">Horror</option>
                          <option value="ACTION">Action</option>
                          <option value="DRAMA">Drama</option>
                          <option value="COMEDY">Comedy</option>
                          <option value="THRILLER">Thriller</option>
                          <option value="FANTASY">Fantasy</option>
                          <option value="SCIENCE_FICTION">Science Fiction</option>
                          <option value="ROMANCE">Romance</option>
                        </select>
                      </div>
                    </div>

                    {/* Prix */}
                    <div className="col-12">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="prix">
                          Prix
                        </label>
                        <input
                          id="prix"
                          type="number"
                          name="prix"
                          className="sign__input"
                          placeholder="Prix"
                          value={prix}
                          onChange={(e) => setPrix(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Image File */}
                    <div className="col-12">
                      <div className="sign__group">
                        <label className="sign__label" htmlFor="file">
                          Image
                        </label>
                        <input
                          id="file"
                          type="file"
                          name="file"
                          accept="image/*"
                          className="sign__input"
                          onChange={(e) => setImageFile(e.target.files[0])}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                      <button type="submit" className="sign__btn sign__btn--small">
                        Ajouter le Film
                      </button>
                    </div>
                  </div>

                  {/* Success/Error Messages */}
                  {successMessage && <p className="success-message">{successMessage}</p>}
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
              <ul className="contacts__list">
                <li>
                  <a href="tel:+18002345678">+1 800 234 56 78</a>
                </li>
                <li>
                  <a href="mailto:support@hotflix.com">
                    support@hotflix.template
                  </a>
                </li>
              </ul>
              <div className="contacts__social">
                <a href="#">
                  <i className="ti ti-brand-facebook" />
                </a>
                <a href="#">
                  <i className="ti ti-brand-x" />
                </a>
                <a
                  href="https://www.instagram.com/volkov_des1gn/"
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
</>

    </>
  );
};

export default AddFilm;
