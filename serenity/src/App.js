import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import FooterOverlay from './components/footer/Footeroverlay';
import Hotelbooking from './components/home/home';
import Contact from './components/contact/contact';
import Signup from './components/signup/signup';
import Rooms from './components/rooms/Rooms';
import MenuItem from './components/dining/Menu';
import Header from "./components/Gym & wellness/Gym"
import Meetings from './components/meetings/meetings';
import Newsletter from './components/footer/Newsletter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Hotelbooking />}></Route>
          {/* <Route path="/menu" element={<Menu />}></Route> */}
          <Route path="/gym" element={<Header />}></Route>
          <Route path="/conference-rooms" element={<Meetings />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          <Route path="/dining" element={<MenuItem />}></Route>

        </Routes>
      </BrowserRouter>
      <FooterOverlay />
      <Newsletter />
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
