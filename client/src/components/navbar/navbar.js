import React from "react";
import { FaHome, FaDumbbell,FaAddressBook,FaComment, FaRegUser} from 'react-icons/fa';
// import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar(){
  // state = { clicked: false };
  // handleClick = () =>{
  //   this.setState ({ clicked: !TouchList.state.clicked})
  
  return(
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Serenity Sands Hotel</h1>
      {/* <div className="menu-icons" onClick ={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
        
      </div> */}
      <ul className="nav-menu" >
        <li><a href="/" className="nav-links"><FaHome/>Home</a></li>
        <li><a href="/"className="nav-links"><FaComment/>About us</a></li>
        <li><a href="/"className="nav-links"><FaDumbbell/>Gym</a></li>
        <li><a href="/"className="nav-links"><FaAddressBook/>Contact Us</a></li>
        <li><a href="/"className="nav-links-mobile"><FaRegUser/>Sign Up</a></li>
        <button>Sign Up</button>
          </ul>
    </nav>
  )
}


export default Navbar;
// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");

//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };

//   return (
//     <nav className="nav">
//       <Link to="/" className="nav__brand">
//         Serenity Sands Motel
//       </Link>
//       <ul className={active}>
//         <li className="nav__item">
//           <Link to="/Home" className="nav__link">
//             Home
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/dining" className="nav__link">
//             <span className="nav__name">Dining</span>
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/gym & wellness" className="nav__link">
//             <span className="nav__name">GYM & Wellness</span>
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/meetings" className="nav__link">
//             <span className="nav__name">Conference Rooms</span>
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/contact" className="nav__link">
//             <span className="nav__name">Contact Us</span>
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/book-now" className="nav__link">
//             <span className="nav__name">Book Now</span>
//           </Link>
//         </li>
//         <li className="nav__item">
//           <Link to="/signup" className="nav__link">
//             <span className="nav__name">Sign Up</span>
//           </Link>
//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }