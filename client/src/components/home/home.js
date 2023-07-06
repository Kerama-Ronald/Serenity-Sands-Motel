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
import Footer from "../footer/Footer";
import Gym from "../gym/Gym";
import Body from "../body/body";
import UserForm from "../userForm/userform";
// import { Route, Switch } from "react-router";



function Home(){
     return (
        <div className="homeContents">
            <Navbar/>
            <Hero/>
            <About/>
            <Body />
            <Gym/>
            <UserForm/>
            <Footer/>
            

        </div>
     )
}



export default Home;