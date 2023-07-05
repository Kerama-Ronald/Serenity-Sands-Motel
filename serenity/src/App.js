import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import FooterOverlay from './components/footer/Footeroverlay';
import Contact from './components/contact/contact';
import Signup from './components/signup/signup';
import Rooms from './components/rooms/Rooms';
import MenuItem from './components/dining/Menu';
import Header from "./components/Gym & wellness/Gym"
import Meetings from './components/meetings/meetings';
import Newsletter from './components/footer/Newsletter';
import HomePage from './components/home/home';

function App() {
  function getHotels() {
    const today = new Date().setHours(0, 0, 0, 0);
    const hotelsData = [
      {
        slug: 'la-bamba-de-areco',
        name: 'La Bamba de Areco',
        photo: 'src/components/home/images/hotel-sainte-jeanne.jpg',
        description: 'La Bamba de Areco is located in San Antonio de Areco, in the heart of the Pampas. It is one of the oldest estates in Argentina, recently restored to offer its guests all the comfort and colonial splendor.',
        availabilityFrom: today.valueOf(),
        availabilityTo: today.valueOf() + 864000000,
        rooms: 11,
        city: 'Buenos Aires',
        country: 'Argentina',
        price: 4,
      },
      {
        slug: 'sainte-jeanne',
        name: 'Sainte Jeanne Boutique & Spa',
        photo: 'src/components/home/images/argentina-buenos-aires-province-san-antonio-de-areco-group-of-gauchos-E2D343.jpg',
        description: 'Sainte Jeanne Boutique & Spa is located in the heart of Los Troncos, a residential and elegant neighborhood in Mar del Plata. Luxury, comfort, and attention to detail give personality to this warm proposal.',
        availabilityFrom: today.valueOf() + 864000000,
        availabilityTo: today.valueOf() + 1296000000,
        rooms: 23,
        city: 'Mar del Plata',
        country: 'Argentina',
        price: 2,
      }
    ];

    return hotelsData;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage hotels={getHotels()} />}></Route>
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
