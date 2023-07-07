import React, { useEffect, useState } from 'react';
import './room.css';
// import { Link } from "react-router-dom";



function Room(){
  
    const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('/rooms')
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
        {/* <h2>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </h2> */}
        <p>Address: {room.address}</p>
        <button onClick={() => handleDelete(room.id)}>Delete</button>
      </div>
    ))}
  </section>
);

}
export default Room;
