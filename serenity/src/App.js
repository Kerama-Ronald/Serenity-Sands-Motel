import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Signup from './components/Signup/Signup';
import Rooms from './components/Rooms/Rooms';
import Menu from './components/dining/Menu';
import Gym from './components/Gym & wellness/Gym';
import Meetings from './components/Meetings/Meetings';
import Footeroverlay from './components/footer/Footeroverlay';
import Newsletter from './components/footer/Newsletter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Navbar/>
   
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/rooms" element={<Rooms/>}></Route>
       <Route path="/menu" element={<Menu/>}></Route>
       <Route path="/meetings" element={<Meetings/>}></Route>
       <Route path="/gym" element={<Gym/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/Signup" element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
     <Footeroverlay/>
     <Newsletter/>
    </div>
  );
}

export default App;
