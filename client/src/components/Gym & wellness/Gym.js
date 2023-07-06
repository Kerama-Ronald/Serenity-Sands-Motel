import React, { useEffect } from 'react';
import './gym.css';

const Header = () => {
  useEffect(() => {
    const toggleMenu = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.toggle('show-menu');
    };

    const closeMenu = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    };

    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
    };

    const attachEventListeners = () => {
      const navToggle = document.getElementById('nav-toggle');
      const navClose = document.getElementById('nav-close');
      const navLink = document.querySelectorAll('.nav-link');

      navToggle.addEventListener('click', toggleMenu);
      navClose.addEventListener('click', closeMenu);
      navLink.forEach((link) => {
        link.addEventListener('click', closeMenu);
      });
      window.addEventListener('scroll', scrollUp);
    };

    const removeEventListeners = () => {
      const navToggle = document.getElementById('nav-toggle');
      const navClose = document.getElementById('nav-close');
      const navLink = document.querySelectorAll('.nav-link');

      navToggle.removeEventListener('click', toggleMenu);
      navClose.removeEventListener('click', closeMenu);
      navLink.forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
      window.removeEventListener('scroll', scrollUp);
    };

    attachEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          Gym<span>Website</span>
        </a>
        <div id="nav-menu" className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#programs" className="nav-link">Programs</a>
            </li>
            <li className="nav-item">
              <a href="#membership" className="nav-link">Membership</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          <div id="nav-close" className="nav-close">
            &times;
          </div>
        </div>
        <div id="nav-toggle" className="nav-toggle">
          &#9776;
        </div>
      </nav>
      <div id="scroll-up" className="scroll-up">
        <i className="bx bx-up-arrow-alt"></i>
      </div>
    </header>
  );
};

export default Header;
