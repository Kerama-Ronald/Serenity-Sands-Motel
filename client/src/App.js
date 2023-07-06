import './App.css';

// import { Route, Routes } from "react-router-dom";
// import Home from "./components/home/home";
// import Navbar from "./components/navbar/navbar";
import Home from './components/home/home';

// import Gym from "./components/gym/gym";
// import Contact from "./components/contact/contact";
// import About from "./components/about/about";

function App() {
  return (
    <div className="App">
     {/* <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/gym" element= {<Gym/>}/>
      <Route path="/contact" element= {<Contact/>}/>
     </Routes> */}
     {/* <Navbar/> */}
     <Home/>
    
     
     
   
    
    </div>
  );
}

export default App;
