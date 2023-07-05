import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Serenity Sands Motel
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/Home" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/dining" className="nav__link">
            <span className="nav__name">Dining</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/gym & wellness" className="nav__link">
            <span className="nav__name">GYM & Wellness</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/meetings" className="nav__link">
            <span className="nav__name">Conference Rooms</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            <span className="nav__name">Contact Us</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/book-now" className="nav__link">
            <span className="nav__name">Book Now</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="nav__link">
            <span className="nav__name">Sign Up</span>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
