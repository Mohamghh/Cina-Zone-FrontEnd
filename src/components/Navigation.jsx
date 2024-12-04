import React from 'react'

export default function Navigation() {
  return (
    
    
<ul className="header__nav">
 
  <li className="header__nav-item">
    <a
      className="header__nav-link"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"> Home <i className="ti ti-chevron-down" />
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
 
  <li className="header__nav-item">
    <a href="pricing.html" className="header__nav-link">
      Pricing plan
    </a>
  </li>
 
  <li className="header__nav-item">
    <a className="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
      aria-expanded="false"> Pages <i className="ti ti-chevron-down" />
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
 
</ul>

    
  )
}
