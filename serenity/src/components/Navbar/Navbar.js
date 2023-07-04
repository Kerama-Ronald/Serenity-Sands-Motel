import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    console.log("Navbar Page")
  return (
    <div className="nav">
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/Rooms" className="nav-link">Rooms</Link></li>
            <li><Link to="/menu" className="nav-link">Menu</Link></li>
            <li><Link to="/Meetings" className="nav-link">Meetings</Link></li>
            <li><Link to="/Gym" className="nav-link">Gym</Link></li>
            <li><Link to="/Contact" className="nav-link">Contact</Link></li>
            <li><Link to="/SignUp" className="nav-link">SignUp</Link></li>
            
        </ul>
    </div>
  );
}

export default Navbar;
