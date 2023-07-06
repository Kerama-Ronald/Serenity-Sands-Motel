import React from 'react'
import "./about.css"
function About(){
  return(
      <div className="about">
          <h1>About Us</h1>
          <p>Our Luxurious and Spacious Rooms</p>
           
           <div className="first-about"></div>
           <div className="about-description">
              <h2>OUR FACILITIES</h2>
              <p>SOMETHING HERE</p>
           </div>
           <div className="image">
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Hotel-suite-living-room.jpg" alt="Room1"/>
              <img src= "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" alt="room2"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuC1PckPDLzzeoiNB0mr5Bd4jdBSkI05bdRM0lmHlJh98-UURW2tdfPlXnJmMzJoMQrw&usqp=CAU" alt ="room3"/>
           </div>

      </div>

  )
}
export default About
