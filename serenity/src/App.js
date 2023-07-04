import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Navbar from "./components/navbar/navbar";
import Footer from './components/Footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/contact';
import Signup from './components/signup/signup';
import Rooms from './components/rooms/rooms';
import Dining from './components/Footer/Dining';
import Gym from './components/Gym/Gym';
import Meetings from './components/meetings/meetings';
>>>>>>> 5123be9 (debugging error messages)

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
     </Routes>
     </BrowserRouter>
     {/* <Footeroverlay/> */}
     <Newsletter/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
