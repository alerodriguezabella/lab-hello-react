// import React, { Component } from "react";
import "./Card.css";

// class Card extends Component {
//     render() {
//         return (
//             <div className="card">
//                 <img src={logo} alt="logo"/>
//             </div>
//         )
//     }
// }

function Card({ logo, title, description }) {
    return (
        <div className="card">
            <img src={logo} alt="logo"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;