
import React, { Fragment, useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

export default function Navigation() {
  const { roles } = useContext(AuthContext); 
  return (
    
    
<ul className="header__nav">
<li className="header__nav-item">
        <Link className="header__nav-link" to="/">
          Home <i className="" />
        </Link>
      </li>

      <li className="header__nav-item">
        <Link className="header__nav-link" to="/Movies">
          Movies <i className="" />
        </Link>
      </li>


   {/* Section "Salles" visible uniquement pour admin et superviseur */}
   {roles.some((role) => ["admin", "superviseur"].includes(role)) && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to="/Salles">
              Salles
            </Link>
          </li>
        )}

<li className="header__nav-item">
        <Link className="header__nav-link" to="/Seances">
          Seances <i className="" />
        </Link>
      </li>
 

   {/* Link to the Pricing plan page 
  <li className="header__nav-item">
    <a href="pricing.html" className="header__nav-link">
      Pricing plan
    </a>
  </li> */}
 
  <li className="header__nav-item">
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

  
 
</ul>

    
  )
}
