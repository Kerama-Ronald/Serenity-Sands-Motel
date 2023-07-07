import './App.css';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home/home";
// import Navbar from "./components/navbar/navbar";
import Home from './components/home/home';
// import Footer from "/home/alvin/Development/code/phase4/Serenity-Sands-Motel/client/src/components/footer/Footer.js";
// import UserForm from "../userForm/userform";
// import Gym from "/home/alvin/Development/code/phase4/Serenity-Sands-Motel/client/src/components/gym/Gym.js";
// import Contact from "./components/contact/contact";
// import About from "./components/about/about";
// import Room from "./components/room/room";
// import Contact from "/home/alvin/Development/code/phase4/Serenity-Sands-Motel/client/src/components/contact/Contact.js";
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">

    <Navbar/>
    <Home/>
    {/* <Router> */}
   
    {/* <Routes>
    <Route path="/" element= {<Home />}/>
    <Route path="/about" element= {<About />}/>
    <Route path="/rooms" element= {<Room />}/>
    <Route path="/contact" element= {<Contact />}/>
   </Routes>
   </Router>
      */}
     
    
    
    
    
     
     
   
    
    // </div>
  );
}

export default App;
