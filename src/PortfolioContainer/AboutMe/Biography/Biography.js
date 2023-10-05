import React from "react";
import { Link } from "react-scroll";
import "./Biography.css";

export default function Biography() {
  return (
    <div className="biography-container">
      <div className="biography-parent">
        <div className="shadow-container">
          <div className="imgportrait"></div>
          <div className="biography-info">
            <p>
              Currently an experienced web developer studying for a Bachelor of
              Computing Science (Honours) at the University of Technology,
              Sydney with a strong passion for front end development.{" "}
            </p>
            <div className="summary-list">
              <h1>Here are a few key points:</h1>
              <ul>
                <li>Currently pursuing a degree at UTS</li>
                <li>Experienced ReactJS Developer</li>
                <li>Proficient in HTML/CSS/JavaScript</li>
                <li>Strong problem-solving skills</li>
                <li>Passionate about UX/UI design</li>
                <li>Experience in responsive web design</li>
              </ul>
            </div>
            <div className="biography-options">
              <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <button className="btn primary-btn">Hire Me</button>
              </Link>

              <a href="richardcv.pdf" download="Richard Webb Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
