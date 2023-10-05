import React from "react";
import Header from './Header/Header'
import EmailForm from "./EmailForm/EmailForm";
import "./ContactMe.css";

export default function ContactMe() {
    return (
        <div className="contact-me-container" id="contact-me">
            <Header />
            <EmailForm />
        </div>
    )
}