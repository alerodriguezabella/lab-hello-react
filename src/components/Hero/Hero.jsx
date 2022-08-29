import React, { Component } from "react";
import "./Hero.css";
import Button from '../Button/Button';



class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and becoe a super Ninja developer.</p>
                <Button />
            </div>
        )
    }
}

export default Hero;