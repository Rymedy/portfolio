import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-parent">
        <div className="navbar-title">
          <h1>R.WEBB</h1>
        </div>
        <div className="navbar-anchors">
          <ul>
          <li>
          <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li>
            <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
            <li id="github-btn">
              <a href="https://github.com/Rymedy" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
