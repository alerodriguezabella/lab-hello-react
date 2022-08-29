import React, { Component } from "react";
import "./Footer.css";
import CardList from '../Card/CardList';



class Footer extends Component {
    render() {
        return (
            <div className="cards">
                <CardList />
            </div>
        )
    }
}

export default Footer;