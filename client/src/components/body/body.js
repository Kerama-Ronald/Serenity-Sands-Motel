import React, { useEffect, useState } from 'react';
import './body.css';
import { Link } from "react-router-dom";


function Body(){
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/rooms")
      .then((r) => r.json())
      .then(setRooms);
  }, []);
  function handleDelete(id) {
    fetch(`/rooms/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setRooms((rooms) =>
          rooms.filter((room) => room.id !== id)
        );
      }
    });
  }

  return(


    <section className="container">
    {rooms.map((room) => (
      <div key={room.id} className="card">
        <h2>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </h2>
        <p>Address: {room.address}</p>
        <button onClick={() => handleDelete(room.id)}>Delete</button>
      </div>
    ))}
  </section>
);

}
export default Body;

// function Body() {
//   const [rooms, setRooms] = useState([]);  useEffect(() => {
//     fetchRooms ();
//     }, []);  
//     const fetchRooms = async () => {
//       try {
//       const response = await fetch('/rooms');
//       const data = await response.json();
//       setRooms(data);
//       } catch (error) {
//       console.log('Error fetching rooms:', error);
//       }
//   };  
  
//   return ( 
//       <div className="services-container">
      
//       <br></br>
//       <br></br>
//       <br></br>
//       {rooms.map((room) => (
//           <div className="service-card" key={room.id}>
//           <h3>{room.number}</h3>
//           <p>{room.description}</p>
//           <button>BOOK ROOM </button>
//           </div>
//       ))}
//       </div>
//   );
// }export default Body;