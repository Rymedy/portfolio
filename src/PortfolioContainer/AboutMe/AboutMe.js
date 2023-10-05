import React from "react";
import Header from './Header/Header'
import Biography from "./Biography/Biography";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="about-me-container" id="about-me">
            <Header />
            <Biography />
        </div>
    )
}