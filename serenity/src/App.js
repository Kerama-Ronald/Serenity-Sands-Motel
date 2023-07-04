<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Signup from './components/Signup/Signup';
import Rooms from './components/Rooms/Rooms';
import Dining from './components/Footer/Dining';
import Gym from './components/Gym/Gym';
import Meetings from './components/Meetings/Meetings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
     <Navbar/>
   
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/rooms" element={<Rooms/>}></Route>
       <Route path="/dining" element={<Dining/>}></Route>
       <Route path="/meetings" element={<Meetings/>}></Route>
       <Route path="/gym" element={<Gym/>}></Route>
       <Route path="/contacts" element={<Contact/>}></Route>
       <Route path="/Signup" element={<Signup/>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}
=======
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
>>>>>>> 269adcc (first commit)

// export default App;
