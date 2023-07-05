import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Home from './components/home/home';
import Contact from './components/Contact/Contact';
import Signup from './components/signup/signup';
import Rooms from './components/rooms/rooms';
import Menu from './components/dining/Menu';
import Gym from './components/Gym & wellness/Gym';
import Meetings from './components/meetings/meetings';
import Footeroverlay from './components/footer/Footeroverlay';
import Newsletter from './components/footer/Newsletter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Navbar/>
   
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/menu" element={<Menu/>}></Route>
       <Route path="/gym" element={<Gym/>}></Route>
       <Route path="/conference-rooms" element={<Meetings/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/Signup" element={<Signup/>}></Route>
       <Route path="/rooms" element={<Rooms/>}></Route>
     
     </Routes>
     </BrowserRouter>
     <Footeroverlay/>  
     <Newsletter/>
    </div>
  );
}

export default App;
