 import HeaderBar from './HeaderBar';
import FiltersBar from './FiltersBar';
import Gallery from './Gallery';
import EmptyGallery from './EmptyGallery';
//import './styles/style.css';
import React, { Component } from "react";
// import Countdown from "jquery-countdown";

import './home.css';

class Hotelbooking extends Component {
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

    // componentDidMount() {
    //     const countdown = new Countdown(this.refs.countdown, this.state.finalDate);
    //     countdown.on("update", (event) => {
    //         this.setState({
    //             strftime: event.strftime
    //         });
    //     });
    // }

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
        );
    }
}

export default Hotelbooking;