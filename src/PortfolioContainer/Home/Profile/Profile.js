import React from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">

            <a href="https://www.linkedin.com/in/richard-webb-b479b81b3">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Rymedy">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://stackoverflow.com/users/14077691/rymedy">
              <i className="fa fa-stack-overflow"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013651848295">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/richard_weeb/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Richard</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                    {" "}
                    <Typical 
                    loop={Infinity}
                    steps={[
                        "Enthusiastic Dev ⚡",
                        2000,
                        "Front End Dev 💻",
                        2000,
                        "ReactJS Developer 🛠️",
                        2000,
                        "Full Stack Dev 🌐",
                        2000,
                        "Back End Dev ⚙️",
                        2000,
                    ]}
                    />
                </h1>
                <span className="profile-role-tagline">
                  Proficienct in developing front-end applications.
                </span>
            </span>
          </div>
          <div className="profile-options">
          <Link
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <button className="btn primary-btn">Hire Me</button>
              </Link>
            <a href='richardcv.pdf' download="Richard Webb Resume.pdf">
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
