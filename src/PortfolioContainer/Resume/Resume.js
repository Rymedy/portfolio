import React from "react";
import Header from './Header/Header'
import Career from "./Career/Career";
import "./Resume.css";

export default function Resume() {
    return (
        <div className="resume-container" id="resume">
            <Header />
            <Career />
        </div>
    )
}
