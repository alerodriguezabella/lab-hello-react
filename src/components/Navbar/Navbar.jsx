import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../images/ironhack-logo-xs.png"
import menu from "../../images/menu-top-xs.png"


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo} alt="logo"/>
                <img src={menu} alt="menu"/>
            </div>
        )
    }
}

export default Navbar;