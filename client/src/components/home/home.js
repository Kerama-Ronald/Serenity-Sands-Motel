//  import HeaderBar from './HeaderBar';
// import FiltersBar from './FiltersBar';
// import Gallery from './Gallery';
// import EmptyGallery from './EmptyGallery';
//import './styles/style.css';
// import React, { Component } from "react";
// import Countdown from "jquery-countdown";

import React from "react";
import './home.css';
// import Navbar from "../navbar/navbar";
import Hero from "../hero/Hero";
import About from "../about/about";

import Room from "../room/room";
import Gym from "../gym/Gym";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
// import { Route, Switch } from "react-router";



function Home(){
     return (
        <div className="homeContents">
           
            <Hero/>
            <About/>
            <Room />
            <Gym/>
            <Contact/>
            <Footer/>
            

        </div>
     )
}



export default Home;