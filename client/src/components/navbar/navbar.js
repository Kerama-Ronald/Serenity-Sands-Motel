import React from "react";
import { FaHome, FaDumbbell,FaAddressBook,FaComment, FaRegUser} from 'react-icons/fa';
// import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar(){

  return(
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Serenity Sands Hotel</h1>
     
      <ul className="nav-menu" >
        <li><a href="/" className="nav-links"><FaHome/>Home</a></li>
        <li><a href="/"className="nav-links"><FaComment/>About us</a></li>
        <li><a href="/"className="nav-links"><FaDumbbell/>Room</a></li>
        <li><a href="/"className="nav-links"><FaAddressBook/>Contact Us</a></li>
        <li><a href="/"className="nav-links-mobile"><FaRegUser/>Sign Up</a></li>
        <button>Sign Up</button>
          </ul>
    </nav>
  )
}


export default Navbar;
