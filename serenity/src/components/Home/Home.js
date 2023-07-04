<<<<<<< HEAD
import React from 'react'
import Rooms from '../Rooms/Rooms'
import Menu from '../dining/Menu'
import Meetings from '../Meetings/Meetings'
import Gym from '../Gym & wellness/Gym'
import Contact from '../Contact/Contact'
import Footeroverlay from '../footer/Footeroverlay'
=======
import React, { Component } from "react";
import Countdown from "jquery-countdown";
>>>>>>> 7b12e2ec6dceb4b3f6fa7af96e16fda2aa7aa330

class HotelBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finalDate: "2023-07-04 00:00:00",
            strftime: "%D days %H:%M:%S",
            rooms: [
                {
                    id: 1,
                    name: "Standard Room",
                    price: 100
                },
                {
                    id: 2,
                    name: "Deluxe Room",
                    price: 150
                },
                {
                    id: 3,
                    name: "Suite",
                    price: 200
                }
            ],
            selectedRoom: null
        };
    }

    componentDidMount() {
        const countdown = new Countdown(this.refs.countdown, this.state.finalDate);
        countdown.on("update", (event) => {
            this.setState({
                strftime: event.strftime
            });
        });
    }

    handleRoomSelect = (roomId) => {
        this.setState({
            selectedRoom: roomId
        });
    }

    render() {
        return (
            <div>
                <h1>Hotel Booking</h1>
                <div ref="countdown"></div>
                <p>Countdown: {this.state.strftime}</p>
                <select onChange={this.handleRoomSelect}>
                    {this.state.rooms.map((room) => (
                        <option key={room.id} value={room.id}>
                            {room.name} ({room.price})
                        </option>
                    ))}
                </select>
            </div>
<<<<<<< HEAD
        </div>
        {/* <Rooms /> 
        <Menu />
        <Meetings />
        <Gym />
        <Contact />
        <Footeroverlay /> */}



         
    </div>
  )
=======
        );
    }
>>>>>>> 7b12e2ec6dceb4b3f6fa7af96e16fda2aa7aa330
}

export default HotelBooking;