//  import HeaderBar from './HeaderBar';
// import FiltersBar from './FiltersBar';
// import Gallery from './Gallery';
// import EmptyGallery from './EmptyGallery';
//import './styles/style.css';
// import React, { Component } from "react";
// import Countdown from "jquery-countdown";

import React from "react";
import './home.css';
import Navbar from "../navbar/navbar";
import Hero from "../hero/Hero";
import About from "../about/about";
  

function Home(){
     return (
        <div className="homeContents">
            <Navbar/>
            <Hero/>
            <About/>

        </div>
     )
}



export default Home;